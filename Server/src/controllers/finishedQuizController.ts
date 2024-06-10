import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client instance
const prisma = new PrismaClient();

const FinishedQuizController = {
    // Add a finished quiz
    addFinishedQuiz: async (request: Request, response: Response) => {
        const { userId, quizId, score } = request.body;
        try {
            const finishedQuiz = await prisma.finishedQuiz.create({
                data: { userId, quizId, score },
            });
            return response.status(201).json(finishedQuiz);
        } catch (error) {
            return response.status(500).json({ error: error});
        }
    },

    // Get all finished quizzes for a user
    getFinishedQuizzes: async (request: Request, response: Response) => {
        const { userId } = request.params;
        try {
            const finishedQuizzes = await prisma.finishedQuiz.findMany({
                where: { userId: userId },
            });
            return response.status(200).json(finishedQuizzes);
        } catch (error) {
            return response.status(500).json({ error });
        }
    },

    // Delete a finished quiz by ID
    deleteFinishedQuiz: async (request: Request, response: Response) => {
        const { id } = request.params;
        try {
            await prisma.finishedQuiz.delete({
                where: { id: Number(id) },
            });
            return response.status(200).json({ message: "Deleted FinishedQuiz successfully" });
        } catch (error) {
            return response.status(500).json({ error: error });
        }
    },

    // Update the score of a finished quiz by ID
    updateScore: async (request: Request, response: Response) => {
        const { id } = request.params;
        const { score } = request.body;
        try {
            const finishedQuiz = await prisma.finishedQuiz.update({
                where: { id: Number(id) },
                data: { score },
            });
            return response.status(200).json(finishedQuiz);
        } catch (error) {
            return response.status(500).json({ error: error});
        }
    },
};

export default FinishedQuizController;
