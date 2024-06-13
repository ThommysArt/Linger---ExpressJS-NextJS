"use server"
import { Level } from "@/constants/types";
import { API_URL } from "@/constants/urls";

const createLevel = async (level: Level): Promise<Level | null> => {
  try {
    const response = await fetch(`${API_URL}/levels`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(level),
    });

    if (!response.ok) {
      throw new Error("Failed to create level");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getLevel = async (levelId: number): Promise<Level | null> => {
  try {
    const response = await fetch(`${API_URL}/levels/${levelId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get level");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAllLevels = async (): Promise<Level[] | null> => {
  try {
    const response = await fetch(`${API_URL}/levels`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get levels");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const updateLevel = async (levelId: number, level: Level): Promise<Level | null> => {
  try {
    const response = await fetch(`${API_URL}/levels/${levelId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(level),
    });

    if (!response.ok) {
      throw new Error("Failed to update level");
    }

    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const deleteLevel = async (levelId: number): Promise<string | null> => {
  try {
    const response = await fetch(`${API_URL}/levels/${levelId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to delete level");
    }

    return "Level deleted successfully";
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { createLevel, getAllLevels, getLevel, updateLevel, deleteLevel };