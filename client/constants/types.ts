export type Language = {
    id?: number;
    name: string;
    country: string;
    levels: Level[];
    quizzes: Quiz[];
    UserLanguage: UserLanguage[];
  }
  
  export type Level = {
    id?: number;
    title: string;
    languageId: number;
    language: Language;
    lessons: Lesson[];
    quizzes: Quiz[];
    UserLanguage: UserLanguage[];
  }
  
  export type Lesson = {
    id?: number;
    text: string;
    transcribed: string;
    levelId: number;
    level: Level;
  }
  
  export type User = {
    userId: string;
    fullname: string;
    isAdmin: boolean;
    UserLanguage: UserLanguage[];
    FinishedQuiz: FinishedQuiz[];
  }
  
  export type UserLanguage = {
    id?: number;
    userId: string;
    languageId: number;
    levelId: number;
    user: User;
    language: Language;
    level: Level;
  }
  
  export type Quiz = {
    id?: number;
    title: string;
    levelId: number;
    languageId: number;
    level: Level;
    language: Language;
    questions: Question[];
    FinishedQuiz: FinishedQuiz[];
  }
  
  export type Question = {
    id?: number;
    label: string;
    quizId: number;
    quiz: Quiz;
    options: Option[];
  }
  
  export type Option = {
    id?: number;
    label: string;
    correct: boolean;
    questionId: number;
    question: Question;
  }
  
  export type FinishedQuiz = {
    id?: number;
    userId: string;
    quizId: number;
    score: number;
    user: User;
    quiz: Quiz;
  }
  