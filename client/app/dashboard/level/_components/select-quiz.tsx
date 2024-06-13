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
    quizes: Quiz[] | null
}

const SelectQuiz: React.FC<SelectQuizProps> = ({lessons, quizes}) => {
    const router = useRouter()

    useEffect(() => {
        console.log('lessons:', lessons)
        console.log('quizes:', quizes)
    }, [lessons, quizes])

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
                                <TableCell>{lesson.id}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
            <Card>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Quizes</TableHead>
                            <TableHead>Title</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Array.isArray(quizes) && quizes.map((quiz, index) => (
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
