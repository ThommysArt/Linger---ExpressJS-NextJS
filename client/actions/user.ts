"use server"

import { User } from "@/constants/types"

const createUser = async (user: User): Promise<User | null> => {
    try{
        const response = await fetch("https://localhost:8080/api/v1/users", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(user)
        })
        if (!response) {
            return null;
        }
        return response.json()
    } catch (error) {
        return null
    } 
}

const getUser = async (userId: number): Promise<User | null> => {
    try {
        const response = await fetch("https://localhost:8080/api/v1/users", {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({userId})
        })
        if (!response) {
            return null
        }
        return response.json()
    } catch (error) {
        return null
    }
}

const getAllUsers = async (): Promise<User[] | null> => {
    try {
        const response = await fetch("https://localhost:8080/api/v1/users", {
            method: "GET",
            headers: {
                'Content-Type': "application/json"
            }
        })
        if (!response) {
            return null
        }
        return response.json()
    } catch (error) {
        return null
    }
}

const updateUsername = async (userId: number, username: string): Promise<User | null> => {
    try {
        const response = await fetch("https://localhost:8080/api/v1/users", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({userId, username}),
        })
        if (!response) {
            return null
        }
        return response.json()
    } catch (error) {
        return null
    }
}

const deleteUser = async (userId: number): Promise<User | null> => {
    try {
        const response = await fetch("https://localhost:8080/api/v1/users", {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({userId})
        })
        if (!response) {
            return null
        }
        return response.json()
    } catch (error) {
        return null
    }
}

export {createUser, getAllUsers, getUser, updateUsername, deleteUser};