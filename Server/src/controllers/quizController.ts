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
            return response.status(500).json({ error: error });
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
            return response.status(500).json({ error: error });
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
            return response.status(500).json({ error: error });
        }
    },

    // Get the levelId of a quiz by ID
    getLevelQuiz: async (request: Request, response: Response) => {
        try {
          const { levelId } = request.params;
          console.log('Received levelId:', levelId);
          const parsedLevelId = parseInt(levelId, 10);
      
          if (isNaN(parsedLevelId)) {
            console.error('Invalid level ID:', levelId);
            return response.status(400).json({ error: "Invalid level ID" });
          }
      
          const quiz = await prisma.quiz.findMany({
            where: { levelId: parsedLevelId }
          });
      
          return response.status(200).json(quiz);
        } catch (error) {
          console.error('Internal server error:', error);
          return response.status(500).json({ error: error });
        }
      },
      

    // Get the languageId of a quiz by ID
    getLanguageQuiz: async (request: Request, response: Response) => {
        const { languageId } = request.params;
        try {
                 const quiz = await prisma.quiz.findMany({
                    where:{ languageId: parseInt(languageId, 10) }
                    })
            return response.status(200).json(quiz);
        } catch (error) {
            return response.status(500).json({ error: error });
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
            return response.status(500).json({ error: error });
        }
    },
};

export default QuizController;
