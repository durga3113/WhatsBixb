FROM node:18-slim

RUN apt-get update && \
    apt-get install -y git python3 build-essential && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/DX-MODS/bixby-latest.git /Bixby

WORKDIR /Bixby

RUN npm install

RUN npm rebuild

EXPOSE 8000

CMD ["npm", "start"]
