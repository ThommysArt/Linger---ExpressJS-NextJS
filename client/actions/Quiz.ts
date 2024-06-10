// Quiz.ts
import { Quiz } from "@/constants/types";
const API_URL = 'http://localhost:3000'; // Adjust the base URL as necessary

// Function to create a new quiz
async function addQuiz(quizData: Quiz): Promise<Quiz> {
    try {
        const response = await fetch(`${API_URL}/quiz`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quizData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error creating quiz:', error);
        throw error;
    }
}

// Function to update an existing quiz
async function updateQuiz(id: string, quizData: Partial<Quiz>): Promise<Quiz> {
    try {
        const response = await fetch(`${API_URL}/quiz/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quizData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating quiz:', error);
        throw error;
    }
}

// Function to get a quiz by id
async function getQuiz(id: string): Promise<Quiz> {
    try {
        const response = await fetch(`${API_URL}/quiz/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error getting quiz:', error);
        throw error;
    }
}

// Function to get quizzes by level
async function getLevelQuiz(id: string): Promise<Quiz[]> {
    try {
        const response = await fetch(`${API_URL}/quiz/${id}/level`);
        return await response.json();
    } catch (error) {
        console.error('Error getting quizzes by level:', error);
        throw error;
    }
}

// Function to get quizzes by language
async function getLanguageQuiz(id: string): Promise<Quiz[]> {
    try {
        const response = await fetch(`${API_URL}/quiz/${id}/language`);
        return await response.json();
    } catch (error) {
        console.error('Error getting quizzes by language:', error);
        throw error;
    }
}

// Function to delete a quiz by id
async function deleteQuiz(id: string): Promise<{ message: string }> {
    try {
        const response = await fetch(`${API_URL}/quiz/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting quiz:', error);
        throw error;
    }
}

