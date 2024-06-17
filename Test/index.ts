import * as fs from 'fs';

interface Lesson {
  text: string;
  transcribed: string;
  levelId: number;
}

interface Quiz {
  title: string,
  levelId: number,
  languageId: number
}

async function sendAPIRequest(apiUrl: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: Quiz): Promise<Response> {
  return fetch(apiUrl, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

const quizData = JSON.parse(fs.readFileSync('quizzes.json', 'utf-8')) as Quiz[];

console.log('Starting requests');
for (const quiz of quizData) {
  sendAPIRequest('https://linger-rest-api.onrender.com/api/v1/quiz', 'POST', quiz)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}