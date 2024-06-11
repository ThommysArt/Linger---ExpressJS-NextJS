import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const LevelController = {
  createLevel: async (request: Request, response: Response) => {
    try {
      const { title, languageId } = request.body;

      const level = await prisma.level.create({
        data: {
          title,
          language: { connect: { id: languageId } },
        },
      });

      return response.status(201).json(level);
    } catch (error) {
      return response.status(500).json(error);
    }
  },

  getLevel: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      const level = await prisma.level.findUnique({
        where: { id },
      });

      return response.status(200).json(level);
    } catch (error) {
      return response.status(500).json(error);
    }
  },

  getLanguageLevels: async (request: Request, response: Response) => {
    try {
      const { languageId } = request.params;

      const levels = await prisma.level.findMany({
        where: { languageId },
      });

      return response.status(200).json(levels);
    } catch (error) {
      return response.status(500).json(error);
    }
  },

  deleteLevel: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      await prisma.level.delete({
        where: { id },
      });

      return response.status(200).json('Level deleted successfully');
    } catch (error) {
      return response.status(500).json(error);
    }
  },
};

export default LevelController;