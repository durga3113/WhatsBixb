async function sendRequest(endpoint, statusEl) {
  const spinner = document.getElementById('spinner');
  spinner.classList.remove('hidden');
  statusEl.textContent = `Status: Sending request to ${endpoint}...`;

  try {
    const response = await fetch(endpoint, { method: 'POST' });
    if (!response.ok) throw new Error('Request failed');
    statusEl.textContent = `Status: Request to ${endpoint} successful`;
  } catch (error) {
    statusEl.textContent = `Status: Error - ${error.message}`;
  } finally {
    spinner.classList.add('hidden');
  }
}

function toggleTheme() {
  document.body.classList.toggle('light');
}

function toggleModal(show) {
  const modal = document.getElementById('infoModal');
  modal.classList.toggle('hidden', !show);
}

async function fetchSystemInfo() {
  const systemInfoEl = document.getElementById('systemInfo');
  systemInfoEl.textContent = 'Loading system info...';

  try {
    const response = await fetch('/system-info');
    const data = await response.json();
    systemInfoEl.innerHTML = `
      <p>CPU: ${data.cpu}</p>
      <p>Memory: ${data.memory}</p>
      <p>Uptime: ${data.uptime}</p>
    `;
  } catch {
    systemInfoEl.textContent = 'Error fetching system info';
  }
}

document.getElementById('themeSwitch').addEventListener('change', toggleTheme);
document.getElementById('modalClose').addEventListener('click', () => toggleModal(false));
document.getElementById('infoButton').addEventListener('click', () => {
  toggleModal(true);
  fetchSystemInfo();
});

const statusEl = document.getElementById('status');
document.getElementById('resetButton').addEventListener('click', () => sendRequest('/restart', statusEl));
document.getElementById('resetLogsButton').addEventListener('click', () => sendRequest('/restart-logs', statusEl));
document.getElementById('stopButton').addEventListener('click', () => sendRequest('/shutdown', statusEl));
document.getElementById('bootupButton').addEventListener('click', () => sendRequest('/bootup', statusEl));
document.getElementById('updateButton').addEventListener('click', () => sendRequest('/update', statusEl));
