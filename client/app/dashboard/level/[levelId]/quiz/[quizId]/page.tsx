import { getQuizQuestions } from "@/actions/Question"

import { getQuestionOptions } from "@/actions/Option"
import { Question, Option } from "@/constants/types"
import QuizForm from "../_components/quiz-form"

export default async function Page ({params}: {params: {quizId: number, levelId: number}}) {
    const quiz_questions = await getQuizQuestions(params.quizId)
    const QnA: {question: Question, options: Option[]}[] = []
    quiz_questions.map( async (question, index) => {
        const options = await getQuestionOptions(question.id!)
        QnA.push({question, options: options})
    })

    return (
        <QuizForm QnA={QnA} />
    )
}