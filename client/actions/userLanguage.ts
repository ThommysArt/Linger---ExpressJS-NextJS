"use server"

import { UserLanguage } from "@/constants/types";
import { API_URL } from "@/constants/urls";

const createUserLanguage = async (userLanguage: UserLanguage): Promise<UserLanguage | null> => {
    try {
        const response = await fetch(`${API_URL}/user-language`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(userLanguage)
        });
        if (!response) {
            return null;
        }
        return response.json();
    } catch (error) {
        return null;
    }
}

const getUserLanguage = async (userId: string): Promise<UserLanguage | null> => {
    try {
        const response = await fetch(`${API_URL}/user-language/${userId}`, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
            }
        });
        if (!response) {
            return null;
        }
        return response.json();
    } catch (error) {
        return null;
    }
}

const updateUserLanguage = async (userLanguageId: number, updatedFields: Partial<UserLanguage>): Promise<UserLanguage | null> => {
    try {
        const response = await fetch(`${API_URL}/user-languages/${userLanguageId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify(updatedFields),
        });
        if (!response) {
            return null;
        }
        return response.json();
    } catch (error) {
        return null;
    }
}

const deleteUserLanguage = async (userLanguageId: number): Promise<UserLanguage | null> => {
    try {
        const response = await fetch(`${API_URL}/user-language/${userLanguageId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json",
            }
        });
        if (!response) {
            return null;
        }
        return response.json();
    } catch (error) {
        return null;
    }
}

export { createUserLanguage, getUserLanguage, updateUserLanguage, deleteUserLanguage };
