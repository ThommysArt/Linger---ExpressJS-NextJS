"use server"
import { Question } from "@/constants/types";
import { API_URL } from "@/constants/urls"; // Adjust the base URL as necessary

// Function to create a new question
async function createQuestion(label: string, quizId: number): Promise<Question> {
    try {
        const response = await fetch(`${API_URL}/question`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ label, quizId })
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating question:', error);
        throw error;
    }
}

// Function to get a question by id
async function getQuestion(id: number): Promise<Question> {
    try {
        const response = await fetch(`${API_URL}/question/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error getting question:', error);
        throw error;
    }
}

// Function to get questions by quiz id
async function getQuizQuestions(quizId: number): Promise<Question[]> {
    try {
        const response = await fetch(`${API_URL}/quizzes/${quizId}/questions`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Failed to fetch questions:', response.status, errorData);
            throw new Error(`Failed to fetch questions: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error getting questions by quiz id:', error);
        throw error;
    }
}


// Function to delete a question by id
async function deleteQuestion(id: number): Promise<{ message: string }> {
    try {
        const response = await fetch(`${API_URL}/question/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting question:', error);
        throw error;
    }
}

export { createQuestion, getQuestion, getQuizQuestions, deleteQuestion };
