import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const OptionController = {
    createOption: async (req: Request, res: Response) => {
        try {
            const { label, questionId, correct = false } = req.body;
            const option = await prisma.option.create({
                data: {
                    label,
                    correct,
                    questionId,
                },
            });
            return res.status(201).json(option);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    updateOption: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const { correct } = req.body;
            const option = await prisma.option.update({
                where: { id: Number(id) },
                data: { correct },
            });
            return res.status(200).json(option);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    getOption: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const option = await prisma.option.findUnique({
                where: { id: Number(id) },
            });
            if (option) {
                return res.status(200).json(option);
            } else {
                return res.status(404).json({ message: 'Option not found' });
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    getQuestionOptions: async (req: Request, res: Response) => {
        try {
            const { questionId } = req.params;
            const options = await prisma.option.findMany({
                where: { questionId: Number(questionId) },
            });
            return res.status(200).json(options);
        } catch (error) {
            return res.status(500).json(error);
        }
    },

    deleteOption: async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            await prisma.option.delete({
                where: { id: Number(id) },
            });
            return res.status(200).json({ message: 'Deleted option successfully' });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
};

export default OptionController;
