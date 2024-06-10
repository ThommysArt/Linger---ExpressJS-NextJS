import { Request, Response } from 'express';

export const createQuestion = (req: Request, res: Response): void => {
  const { label, quizid } = req.body;
  if (!label || !quizid) {
    res.status(400).send('label and quizid are required');
    return;
  }

  const newQuestion = Question.createQuestion(label, quizid);
  res.status(201).json(newQuestion);
};

export const getQuestion = (req: Request, res: Response): void => {
  const { id } = req.params;
  const question = Question.getQuestion(Number(id));
  if (!question) {
    res.status(404).send('Question not found');
    return;
  }

  res.status(200).json(question);
};

export const getQuizQuestions = (req: Request, res: Response): void => {
  const { quizid } = req.params;
  const questions = Question.getQuizQuestions(Number(quizid));
  res.status(200).json(questions);
};

export const deleteQuestion = (req: Request, res: Response): void => {
  const { id } = req.params;
  Question.deleteQuestion(Number(id));
  res.status(204).send();
};
