export type Language = {
    id?: number;
    name: string;
    country: string;
  }
  
  export type Level = {
    id?: number;
    title: string;
    languageId: number;
  }
  
  export type Lesson = {
    id?: number;
    text: string;
    transcribed: string;
    levelId: number;
  }
  
  export type User = {
    userId: string;
    fullname: string;
    isAdmin: boolean;
  }
  
  export type UserLanguage = {
    id?: number;
    userId: string;
    languageId: number;
    levelId: number;
  }
  
  export type Quiz = {
    id?: number;
    title: string;
    levelId: number;
    languageId: number;
  }
  
  export type Question = {
    id?: number;
    label: string;
    quizId: number;
  }
  
  export type Option = {
    id?: number;
    label: string;
    correct: boolean;
    questionId: number;
  }
  
  export type FinishedQuiz = {
    id?: number;
    userId: string;
    quizId: number;
    score: number;
  }
  