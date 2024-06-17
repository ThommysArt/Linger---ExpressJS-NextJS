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

interface Question {
  id: number,
  label: string,
  quizId: number
}

interface Option {
  id: number,
  label: string,
  correct: false | boolean,
  questionId: number
}

async function sendAPIRequest(apiUrl: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: Option): Promise<Response> {
  return fetch(apiUrl, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}

const optionData = JSON.parse(fs.readFileSync('options.json', 'utf-8')) as Option[];
var reqCount = 0
console.log('Starting requests');
for (const option of optionData) {
  sendAPIRequest('https://linger-rest-api.onrender.com/api/v1/options', 'POST', option)
    .then((response) => console.log(response, reqCount++))
    .catch((error) => console.error(error));
}