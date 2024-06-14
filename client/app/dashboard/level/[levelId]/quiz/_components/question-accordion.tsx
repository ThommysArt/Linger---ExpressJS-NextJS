"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Option, Question } from "@/constants/types"
import { useState } from "react"
import QuestionOptions from "./question-options"

interface QuestionAccordionProps {
    setQnA: React.ReactNode,
    QnA: {question: Question, options: Option[]}[]
}

const QuestionAccordion: React.FC<QuestionAccordionProps> = ({QnA, setQnA}) => {
    const [quiz, setQuiz] = useState<{questionId: number, optionId: number}[]>()

    const setAnswer = (questionId: number, optionId: number) => {
        if (quiz) {
            const newquiz = quiz
            newquiz.push({questionId, optionId})
            setQuiz(newquiz)
        }
    }
    return (
        <Accordion type="single" collapsible>
            {QnA.map((qna, index)=> (
                    <AccordionItem value={index.toString()}>
                        <AccordionTrigger>Question {qna.question.id}</AccordionTrigger>
                        <AccordionContent>
                            <div className="py-4 md:py-8">
                                <Label className="py-4">{qna.question.label}</Label>
                            </div>
                            {qna.question.id !== undefined && (
                                <QuestionOptions options={qna.options} setValue={(e) => setAnswer(qna.question.id, +e)} />
                            )}
                        </AccordionContent>
                    </AccordionItem>
            ))}
        </Accordion>
    )
}

export default QuestionAccordion