"use server"

import { Option } from "@/constants/types";
import { API_URL } from "@/constants/urls"; // Adjust the base URL as necessary

// Function to create a new option
async function createOption(label: string, correct: boolean = false, questionId: number): Promise<Option> {
    try {
        const response = await fetch(`${API_URL}/option`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ label, correct, questionId })
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating option:', error);
        throw error;
    }
}

// Function to update an existing option
async function updateOption(id: number, correct: boolean): Promise<Option> {
    try {
        const response = await fetch(`${API_URL}/option/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ correct })
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating option:', error);
        throw error;
    }
}

// Function to get an option by id
async function getOption(id: number): Promise<Option> {
    try {
        const response = await fetch(`${API_URL}/option/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error getting option:', error);
        throw error;
    }
}

// Function to get options by question id
async function getQuestionOptions(questionId: number): Promise<Option[]> {
    try {
        const response = await fetch(`${API_URL}/question/${questionId}/options`);
        return await response.json();
    } catch (error) {
        console.error('Error getting options by question id:', error);
        throw error;
    }
}

// Function to delete an option by id
async function deleteOption(id: number): Promise<{ message: string }> {
    try {
        const response = await fetch(`${API_URL}/option/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting option:', error);
        throw error;
    }
}

export { createOption, updateOption, getOption, getQuestionOptions, deleteOption };
