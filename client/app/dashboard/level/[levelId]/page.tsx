import { getLevelQuiz, getQuiz } from "@/actions/Quiz"
import { getAllLessonsForLevel } from "@/actions/lesson"
import SelectQuiz from "@/app/dashboard/level/_components/select-quiz"

export default async function Page ({params}: {params: {levelId: number}}) {
    const lessons = await getAllLessonsForLevel(params.levelId)
    const quizes = await getLevelQuiz(params.levelId)
    return (
        <SelectQuiz lessons={lessons} quizes={quizes} />
    )
}