import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

// Initialize prisma client instance for database connection
const prisma = new PrismaClient();

const QuizController = {
    // Create a new quiz
    createQuiz: async (request: Request, response: Response) => {
        try {
            const quiz = await prisma.quiz.create({
                data: request.body,
            });
            return response.status(201).json(quiz);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    },

    // Update an existing quiz
    updateQuiz: async (request: Request, response: Response) => {
        const { id } = request.params;
        try {
            const quiz = await prisma.quiz.update({
                where: { id: Number(id) },
                data: request.body,
            });
            return response.status(200).json(quiz);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    },

    // Get a quiz by ID
    getQuiz: async (request: Request, response: Response) => {
        const { id } = request.params;
        try {
            const quiz = await prisma.quiz.findUnique({
                where: { id: Number(id) },
            });
            return response.status(200).json(quiz);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    },

    // Get the levelId of a quiz by ID
    getLevel: async (request: Request, response: Response) => {
        const { id } = request.params;
        try {
            const quiz = await prisma.quiz.findUnique({
                where: { id: Number(id) },
                select: { levelId: true },
            });
            return response.status(200).json(quiz);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    },

    // Get the languageId of a quiz by ID
    getLanguageId: async (request: Request, response: Response) => {
        const { id } = request.params;
        try {
            const quiz = await prisma.quiz.findUnique({
                where: { id: Number(id) },
                select: { languageId: true },
            });
            return response.status(200).json(quiz);
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    },

    // Delete a quiz by ID
    deleteQuiz: async (request: Request, response: Response) => {
        const { id } = request.params;
        try {
            await prisma.quiz.delete({
                where: { id: Number(id) },
            });
            return response.status(200).json({ message: "Deleted Quiz successfully" });
        } catch (error) {
            return response.status(500).json({ error: error.message });
        }
    },
};

export default QuizController;
