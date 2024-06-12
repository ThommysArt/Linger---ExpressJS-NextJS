"use server"
import { Lesson } from "@/constants/types";

const createLesson = async (lesson: Lesson): Promise<Lesson | null> => {
  try {
    const response = await fetch("https://localhost:8080/api/v1/lessons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lesson),
    });

    if (!response.ok) {
      throw new Error("Failed to create lesson");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getLesson = async (lessonId: number): Promise<Lesson | null> => {
  try {
    const response = await fetch(`https://localhost:8080/api/v1/lessons/${lessonId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get lesson");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAllLessonsForLevel = async (levelId: number): Promise<Lesson[] | null> => {
  try {
    const response = await fetch(`https://localhost:8080/api/v1/levels/${levelId}/lessons`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get lessons for level");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateLesson = async (lessonId: number, lesson: Lesson): Promise<Lesson | null> => {
  try {
    const response = await fetch(`https://localhost:8080/api/v1/lessons/${lessonId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lesson),
    });

    if (!response.ok) {
      throw new Error("Failed to update lesson");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteLesson = async (lessonId: number): Promise<string | null> => {
  try {
    const response = await fetch(`https://localhost:8080/api/v1/lessons/${lessonId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete lesson");
    }

    return "Lesson deleted successfully";
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { createLesson, getLesson, getAllLessonsForLevel, updateLesson, deleteLesson };