const { Bixby, parseJid, isPublic } = require("../lib/");
const axios = require("axios");

let triviaGames = {};

Bixby(
  {
    pattern: "trivia",
    fromMe: isPublic,
    desc: "Start a trivia game.",
    type: "game",
  },
  async (message, match, m) => {
    const userId = message.sender;

    if (triviaGames[userId]) {
      return message.reply("You already have a trivia game in progress.");
    }

    const triviaQuestion = await fetchTriviaQuestion();

    triviaGames[userId] = {
      currentQuestion: triviaQuestion,
      correctAnswers: 0,
      initiator: userId,
      chatId: message.key.remoteJid,
    };

    return sendTriviaQuestion(message, userId);
  }
);

Bixby(
  {
    on: "text",
    fromMe: isPublic,
    pattern: false,
    dontAddCommandList: true,
  },
  async (message, match, m) => {
    const userId = message.sender;

    if (triviaGames[userId]) {
      const userTriviaGame = triviaGames[userId];
      const userAnswer = message.text ? message.text.trim() : "";

      if (
        userId === userTriviaGame.initiator &&
        message.key.remoteJid === userTriviaGame.chatId
      ) {
        if (isOptionNumber(userAnswer)) {
          const selectedOption = parseInt(userAnswer);
          const correctAnswerIndex =
            userTriviaGame.currentQuestion.options.indexOf(
              userTriviaGame.currentQuestion.correctAnswer
            ) + 1;

          if (selectedOption === correctAnswerIndex) {
            userTriviaGame.correctAnswers++;
            message.reply(
              `Correct answer \n\n Your Points : ${userTriviaGame.correctAnswers}`
            );
            userTriviaGame.currentQuestion = await fetchTriviaQuestion();

            return sendTriviaQuestion(message, userId);
          } else {
            message.reply(
              `Incorrect answer. The correct answer is option ${correctAnswerIndex} ${userTriviaGame.currentQuestion.correctAnswer}.`
            );
            return await endTriviaGame(message, userId);
          }
        }
      }
    }
  }
);

function isOptionNumber(answer) {
  const selectedOption = parseInt(answer);
  return (
    !isNaN(selectedOption) &&
    answer.length === 1 &&
    selectedOption >= 1 &&
    selectedOption <= 4
  );
}

async function fetchTriviaQuestion() {
  try {
    const response = await axios.get("https://the-trivia-api.com/v2/questions");
    const questions = response.data;

    const randomQuestion =
      questions[Math.floor(Math.random() * questions.length)];

    const shuffledOptions = [
      ...randomQuestion.incorrectAnswers,
      randomQuestion.correctAnswer,
    ];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [
        shuffledOptions[j],
        shuffledOptions[i],
      ];
    }

    const formattedQuestion = {
      text: randomQuestion.question.text,
      options: shuffledOptions,
      correctAnswer: randomQuestion.correctAnswer,
    };

    return formattedQuestion;
  } catch (error) {
    console.error("Error fetching trivia question:", error.message);
    throw error;
  }
}

function sendTriviaQuestion(message, userId) {
  const userTriviaGame = triviaGames[userId];
  const currentQuestion = userTriviaGame.currentQuestion;
  const optionsString = currentQuestion.options
    .map((option, index) => `${index + 1}. ${option}`)
    .join("\n");
  message.reply(
    `Question: ${currentQuestion.text}\nOptions:\n${optionsString}`
  );
}

async function endTriviaGame(message, userId) {
  const userTriviaGame = triviaGames[userId];
  await message.reply(
    `Trivia game ended. You answered ${userTriviaGame.correctAnswers} questions correctly.`
  );
  delete triviaGames[userId];
      }
