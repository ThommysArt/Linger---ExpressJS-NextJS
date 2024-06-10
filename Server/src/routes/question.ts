import express from 'express';
import bodyParser from 'body-parser';
import { createQuestion, getQuestion, getQuizQuestions, deleteQuestion } from './controllers'; // Adjust the import path as needed

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/questions', createQuestion);
app.get('/questions/:id', getQuestion);
app.get('/quizzes/:quizid/questions', getQuizQuestions);
app.delete('/questions/:id', deleteQuestion);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
