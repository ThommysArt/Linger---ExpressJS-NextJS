// finishedQuizApi.js

const API_URL = 'http://localhost:3000'; // Adjust the base URL as necessary

// Function to add a finished quiz\
const getAllLanguages = async (): Promise<Language[] | null> => {
  try {
      const response = await fetch("http://localhost:8000/api/v1/languages/all/", {
      method: "GET",
      headers: {
          'Content-Type': 'application/json'
      },
      })
      if (!response) {
          return null
      }
      return response.json()
  } catch (error) {
      return null
  }
}
async function addFinishedQuiz() {
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
async function getFinishedQuizzes(userId) {
    try {
        const response = await fetch(`${API_URL}/finishedQuiz/${userId}`);
        return await response.json();
    } catch (error) {
        console.error('Error getting finished quizzes:', error);
    }
}

// Function to delete a finished quiz by id
async function deleteFinishedQuiz(id) {
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
async function updateScore(id, newScore) {
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

// Example usage:
async function runExamples() {
    // Adding a new finished quiz
    const newQuiz = {
        userId: '12345',
        quizId: '67890',
        score: 85,
        date: '2024-06-10'
    };
    const addedQuiz = await addFinishedQuiz(newQuiz);
    console.log('Added Quiz:', addedQuiz);

    // Getting finished quizzes for a user
    const userId = '12345';
    const quizzes = await getFinishedQuizzes(userId);
    console.log(`Finished Quizzes for user ${userId}:`, quizzes);

    // Updating the score of a finished quiz
    const quizIdToUpdate = 'abcdef';
    const newScore = 95;
    const updatedQuiz = await updateScore(quizIdToUpdate, newScore);
    console.log('Updated Quiz:', updatedQuiz);

    // Deleting a finished quiz
    const quizIdToDelete = 'abcdef';
    const deleteResult = await deleteFinishedQuiz(quizIdToDelete);
    console.log('Delete Result:', deleteResult);
}

runExamples();
