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
import { Dispatch, SetStateAction } from "react"

interface QuestionAccordionProps {
    setTest: Dispatch<SetStateAction<{ questionId: number; optionId: number; }[] | undefined>>,
    test: {questionId: number, optionId: number}[]
    QnA: {question: Question, options: Option[]}[]
}

const QuestionAccordion: React.FC<QuestionAccordionProps> = ({QnA, test, setTest}) => {

    const setAnswer = (questionId: number, optionId: number) => {
        if (test) {
            const newquiz = test
            newquiz.push({questionId, optionId})
            setTest(newquiz)
        }
    }
    return (
        <Accordion type="single" collapsible>
            {QnA.map((qna, index)=> (
                    <AccordionItem key={index} value={qna.question.id!.toString()}>
                        <AccordionTrigger>Question {index+1}</AccordionTrigger>
                        <AccordionContent>
                            <div className="py-4 md:py-8">
                                <Label className="py-4">{qna.question.label}</Label>
                            </div>
                            {qna.question.id !== undefined && (
                                <QuestionOptions options={qna.options} setValue={(e) => setAnswer(qna.question.id!, +e)} />
                            )}
                        </AccordionContent>
                    </AccordionItem>
            ))}
        </Accordion>
    )
}

export default QuestionAccordion