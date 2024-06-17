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
          languageId: languageId,
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
        where: { id: parseInt(id) },
      });

      return response.status(200).json(level);
    } catch (error) {
      return response.status(500).json(error);
    }
  },

  getLanguageLevels: async (request: Request, response: Response) => {
    try {
      const { languageId } = request.params;
      const parsedLanguageId = parseInt(languageId, 10);
  
      if (isNaN(parsedLanguageId)) {
        return response.status(400).json({ error: "Invalid language ID" });
      }
  
      const levels = await prisma.level.findMany({
        where: { languageId: parsedLanguageId },
      });
  
      return response.status(200).json(levels);
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: "Internal server error" });
    }
  },  

  deleteLevel: async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      await prisma.level.delete({
        where: { id: parseInt(id) },
      });

      return response.status(200).json('Level deleted successfully');
    } catch (error) {
      return response.status(500).json(error);
    }
  },
};

export default LevelController;