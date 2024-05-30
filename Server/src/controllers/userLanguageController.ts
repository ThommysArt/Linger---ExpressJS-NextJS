import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

// Initialize prisma client instance for database connection
const prisma = new PrismaClient();

const UserLanguageController = {
    // Define a controller to add a UserLanguage
    addUserLanguage: async (request: Request, response: Response) => {
        try {
            const { userId, languageId, levelId } = request.body;
            const userLanguage = await prisma.userLanguage.create({
                data: {
                    userId,
                    languageId,
                    levelId,
                },
            });
            return response.status(201).json(userLanguage);
        } catch (error) {
            return response.status(500).json(error);
        }
    },

    // Define a controller to update the level of a UserLanguage
    updateLevel: async (request: Request, response: Response) => {
        try {
            const { id, levelId } = request.body;
            const userLanguage = await prisma.userLanguage.update({
                where: {
                    id,
                },
                data: {
                    levelId,
                },
            });
            return response.status(200).json(userLanguage);
        } catch (error) {
            return response.status(500).json(error);
        }
    },

    // Define a controller to delete a UserLanguage
    deleteUserLanguage: async (request: Request, response: Response) => {
        try {
            const { id } = request.body;
            await prisma.userLanguage.delete({
                where: {
                    id,
                },
            });
            return response.status(200).json("Deleted UserLanguage successfully");
        } catch (error) {
            return response.status(500).json(error);
        }
    },

    // Define a controller to get all UserLanguages for a specific user
    getUserLanguages: async (request: Request, response: Response) => {
        try {
            const { userId } = request.params;
            const userLanguages = await prisma.userLanguage.findMany({
                where: {
                    userId,
                },
            });
            return response.status(200).json(userLanguages);
        } catch (error) {
            return response.status(500).json(error);
        }
    },
};

export default UserLanguageController;
