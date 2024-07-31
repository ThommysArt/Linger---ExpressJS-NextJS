import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

const UserController = {
    // Define a controller function to get a particular user
    getUser: async (request: Request, response: Response) => {
        try {
            const user = await prisma.user.findUnique({
                where: {
                    userId: request.body.userId
                }
            })
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json(error)
        }
    },

    // Define controller function to get all users from the database
    getAllUsers: async (request: Request, response: Response) => {
        try {
            const users = await prisma.user.findMany()
            return response.status(200).json(users)
        } catch (error) {
            return response.status(500).json(error)
        }
    },

    // Define a controller function to update the username
    updateUsername: async (request: Request, response: Response) => {
        try {
            const user = await prisma.user.update({
                where: {
                    userId: request.body.userId
                },
                data: {
                    fullname: request.body.username
                }
            })
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json(error)
        }
    },

    // Define a controller function to create new users
    createUser: async (request: Request, response: Response) => {
        try {
            const user = await prisma.user.create({
                data: {
                    userId: request.body.userId,
                    fullname: request.body.username,
                }
            })
            return response.status(200).json(user)
        } catch (error) {
            return response.status(500).json(error)
        }
    },

    // Define  controller function to delete a user
    deleteUser: async (request: Request, response: Response) => {
        try {
            await prisma.user.delete({
                where: {
                    userId: request.body.userId,
                }
            })
            return response.status(200).json("User deleted successfully")
        } catch (error) {
            return response.status(500).json(error)
        }
    }
}

export default UserController;