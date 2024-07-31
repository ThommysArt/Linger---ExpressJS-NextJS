import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

const LessonController = {
  createLesson: async (request: Request, response: Response) => {
    try {
      const { text, transcribed, levelId } = request.body;

      const lesson = await prisma.lesson.create({
        data: {
          text,
          transcribed,
          levelId,
        },
      });

      return response.status(201).json(lesson);
    } catch (error) {
      return response.status(500).json(error);
    }
  },

  updateLesson: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const { text, transcribed } = request.body;

      const lesson = await prisma.lesson.update({
        where: { id: parseInt(id) },
        data: {
          text,
          transcribed,
        },
      });

      return response.status(200).json(lesson);
    } catch (error) {
      return response.status(500).json(error);
    }
  },

  deleteLesson: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      await prisma.lesson.delete({
        where: { id: parseInt(id) },
      });

      return response.status(200).json('Lesson deleted successfully');
    } catch (error) {
      return response.status(500).json(error);
    }
  },

  getLesson: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const lesson = await prisma.lesson.findUnique({
        where: { id: parseInt(id) },
      });

      return response.status(200).json(lesson);
    } catch (error) {
      return response.status(500).json(error);
    }
  },

  getLevelLessons: async (request: Request, response: Response) => {
    try {
      const { levelId } = request.params;

      const lessons = await prisma.lesson.findMany({
        where: { levelId: parseInt(levelId) },
      });

      return response.status(200).json(lessons);
    } catch (error) {
      return response.status(500).json(error);
    }
  },
};

export default LessonController;

