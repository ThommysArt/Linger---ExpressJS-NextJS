"use api"

const addFinishedQuiz = async (FinishedQuiz:FinishedQuiz): Promise<FinishedQuiz> => {
  const response = await fetch(`${API_BASE_URL}/finishedQuiz`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, quizId, score }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const finishedQuiz: FinishedQuiz = await response.json();
  return finishedQuiz;
};

const getFinishedQuizzes = async (userId: number): Promise<FinishedQuiz[]> => {
  const response = await fetch(`${API_BASE_URL}/finishedQuiz/${userId}`);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const finishedQuizzes: FinishedQuiz[] = await response.json();
  return finishedQuizzes;
};

const deleteFinishedQuiz = async (id: number): Promise<void> => {
  const response = await fetch(`${API_BASE_URL}/finishedQuiz/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
};

const updateScore = async (id: number, score: number): Promise<FinishedQuiz> => {
  const response = await fetch(`${API_BASE_URL}/finishedQuiz/${id}/score`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ score }),
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  const updatedQuiz: FinishedQuiz = await response.json();
  return updatedQuiz;
};

export { addFinishedQuiz, getFinishedQuizzes, deleteFinishedQuiz, updateScore };

