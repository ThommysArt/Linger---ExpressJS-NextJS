"use client"
import { Card } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Lesson, Quiz } from "@/constants/types"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface SelectQuizProps {
    lessons: Lesson[] | null,
    quizzes: Quiz[] | null
}

const SelectQuiz: React.FC<SelectQuizProps> = ({lessons, quizzes}) => {
    const router = useRouter()
    console.log("quizzes: ", quizzes)

    return (
        <div className="flex flex-col gap-8">
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Lessons</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.isArray(lessons) && lessons.map((lesson, index) => (
                            <TableRow key={index} onClick={()=>router.push(`/dashboard/level/lesson/${lesson.id}`)}>
                                <TableCell>Lesson Number: {lesson.id}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>quizzes</TableHead>
                            <TableHead>Title</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.isArray(quizzes) && quizzes.map((quiz, index) => (
                            <TableRow key={index} onClick={()=>router.push(`/dashboard/level/quiz/${quiz.id}`)}>
                                <TableCell>{quiz.id}</TableCell>
                                <TableCell>{quiz.title}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}

export default SelectQuiz
