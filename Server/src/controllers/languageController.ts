import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

const LanguageController = {
    // Define a controller to get a language from the database
    getLanguage: async (request: Request, response: Response) => {
        try {
            const language = await prisma.language.findUnique({
                where: {
                    id: request.body.id
                }
            });
            return response.status(200).json(language);
        } catch (error) {
            return response.status(500).json(error);
        }
    },

    // Define a controller to get all laanguages from the database
    getAllLanguages: async (request: Request, response: Response) => {
        try {
            const languages = await prisma.language.findMany()
            return response.status(200).json(languages);
        } catch (error) {
            return response.status(500).json(error);
        }
    },

    // Define a controller to create a language in the database
    createLanguage: async (request: Request, response: Response) => {
        try {
            const language = await prisma.language.create({
                data: request.body
            });
            return response.status(201).json(language);
        } catch (error) {
            return response.status(500).json(error);
        }
    },

    // Define a controller to delete a language from the database
    deleteLanguage: async (request: Request, response: Response) => {
        try {
            await prisma.language.delete({
                where: {
                    id: request.body.id
                }
            });
            return response.status(200).json("Deleted Language successfully");
        } catch (error) {
            return response.status(500).json(error);
        }
    },
}

export default LanguageController;