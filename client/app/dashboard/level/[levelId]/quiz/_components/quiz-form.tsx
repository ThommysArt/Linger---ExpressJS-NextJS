"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import QuestionAccordion from "../_components/question-accordion"
import { getQuestionOptions } from "@/actions/Option"
import { Question, Option } from "@/constants/types"
import { useState } from 'react'


interface QuizFormProps{
    QnA: {question: Question, options: Option[]}[]
}

const QuizForm: React.FC<QuizFormProps> = ({QnA}) => {
    const [test, setTest] = useState<{questionId: number, optionId: number}[]>()
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quiz</CardTitle>
                <CardDescription>
                    Answer all the question below...
                </CardDescription>
            </CardHeader>
            <CardContent>
                <QuestionAccordion  QnA={QnA} setTest={setTest} test={test!}/>
            </CardContent>
            <CardFooter>
                <Button>Submit</Button>
            </CardFooter>
        </Card>

    )
}

export default QuizForm