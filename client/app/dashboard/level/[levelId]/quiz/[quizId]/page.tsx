import { getQuizQuestions } from "@/actions/Question"
import { getQuestionOptions } from "@/actions/Option"
import { Question, Option } from "@/constants/types"
import QuizForm from "../_components/quiz-form"

export default async function Page({ params }: { params: { quizId: number, levelId: number } }) {
  try {
    const quiz_questions: Question[] = await getQuizQuestions(params.quizId);
    console.log('Quiz Questions:', quiz_questions);

    if (!Array.isArray(quiz_questions)) {
      throw new Error('quiz_questions is not an array');
    }

    const QnA: { question: Question, options: Option[] }[] = await Promise.all(
      quiz_questions.map(async (question) => {
        const options = await getQuestionOptions(question.id!);
        return { question, options };
      })
    );

    return (
      <QuizForm QnA={QnA} />
    );
  } catch (error) {
    console.error('Error loading quiz questions:', error);
    return <div>Error loading quiz questions</div>;
  }
}
