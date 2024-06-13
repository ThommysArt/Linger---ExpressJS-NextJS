"use server"

import { User } from "@/constants/types"
import { API_URL } from "@/constants/urls"

const createUser = async (user: User): Promise<User | null> => {
    try{
        const response = await fetch(`${API_URL}/users`, {
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
        const response = await fetch(`${API_URL}/users`, {
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
        const response = await fetch(`${API_URL}/users`, {
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
        const response = await fetch(`${API_URL}/users`, {
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
        const response = await fetch(`${API_URL}/users`, {
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