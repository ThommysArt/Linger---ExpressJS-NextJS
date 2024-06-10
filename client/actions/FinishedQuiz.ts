// finishedQuizApi.js
"use server"
import { FinishedQuiz, Quiz } from "@/constants/types";

const API_URL = 'http://localhost:8000/api/v1'; // Adjust the base URL as necessary

// Function to add a finished quiz\

async function addFinishedQuiz(quizData:FinishedQuiz):Promise<FinishedQuiz|undefined>{
    try {
        const response = await fetch(`${API_URL}/finishedQuiz`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quizData)
        });
        return await response.json();
    } catch (error) {
        console.error('Error adding finished quiz:', error);
    }
}

// Function to get finished quizzes by userId
async function getFinishedQuizzes(userId:number):Promise<FinishedQuiz|undefined> {
    try {
        const response = await fetch(`${API_URL}/finishedQuiz/${userId}`);
        return await response.json();
    } catch (error) {
        console.error('Error getting finished quizzes:', error);
    }
}

// Function to delete a finished quiz by id
async function deleteFinishedQuiz(id:number):Promise<FinishedQuiz|undefined> {
    try {
        const response = await fetch(`${API_URL}/finishedQuiz/${id}`, {
            method: 'DELETE'
        });
        return await response.json();
    } catch (error) {
        console.error('Error deleting finished quiz:', error);
    }
}

// Function to update the score of a finished quiz by id
async function updateScore(id:number, newScore:number):Promise<FinishedQuiz|undefined> {
    try {
        const response = await fetch(`${API_URL}/finishedQuiz/${id}/score`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ score: newScore })
        });
        return await response.json();
    } catch (error) {
        console.error('Error updating quiz score:', error);
    }
}