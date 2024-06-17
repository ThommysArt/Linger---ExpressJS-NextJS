import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

// Initialize prisma client instance for database connection
const prisma = new PrismaClient();

const QuestionController = {
    createQuestion: async (req: Request, res: Response) => {
        try {
            const question = await prisma.question.create({
                data: req.body
            });
            return res.status(201).json(question);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    getQuestion: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const question = await prisma.question.findUnique({
                where: { id: Number(id) },
            });
            if (question) {
                return res.status(200).json(question);
            } else {
                return res.status(404).json({ message: 'Question not found' });
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    getQuizQuestions: async (req: Request, res: Response) => {
        try {
            const { quizId } = req.params;
            const questions = await prisma.question.findMany({
                where: { quizId: +quizId },
            });
            return res.status(200).json(questions);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    deleteQuestion: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await prisma.question.delete({
                where: { id: Number(id) },
            });
            return res.status(200).json({ message: 'Deleted question successfully' });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
}

export default QuestionController;
