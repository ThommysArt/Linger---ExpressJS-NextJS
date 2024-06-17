"use server"
import { Quiz } from "@/constants/types";
import { API_URL } from "@/constants/urls";

// Function to create a new quiz
async function addQuiz(quizData: Quiz): Promise<Quiz> {
    try {
        const response = await fetch(`${API_URL}/:quiz`, {
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
async function updateQuiz(id: number, quizData: Partial<Quiz>): Promise<Quiz> {
    try {
        const response = await fetch(`${API_URL}/:quiz/${id}`, {
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
async function getQuiz(id: number): Promise<Quiz> {
    try {
        const response = await fetch(`${API_URL}/quiz/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error getting quiz:', error);
        throw error;
    }
}

// Function to get quizzes by level
async function getLevelQuiz(levelId: number): Promise<Quiz[]> {
    try {
      const response = await fetch(`${API_URL}/quiz/${levelId}/level`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Failed to fetch quizzes:', response.status, errorData);
        throw new Error(`Failed to fetch quizzes: ${response.statusText}`);
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error getting quizzes by level:', error);
      throw error;
    }
}
  

// Function to get quizzes by language
async function getLanguageQuiz(id: number): Promise<Quiz[]> {
    try {
        const response = await fetch(`${API_URL}/quiz/${id}/language`);
        return await response.json();
    } catch (error) {
        console.error('Error getting quizzes by language:', error);
        throw error;
    }
}

// Function to delete a quiz by id
async function deleteQuiz(id: number): Promise<{ message: string }> {
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
export{getLanguageQuiz,addQuiz,updateQuiz,getQuiz,getLevelQuiz,deleteQuiz}