import { getQuizQuestions } from "@/actions/Question"
import { getQuiz } from "@/actions/Quiz"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default async function Page ({params}: {params: {quizId: number, levelId: number}}) {
    const quiz = await getQuiz(params.quizId)
    const quiz_questions = await getQuizQuestions(params.quizId)
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Question 1</AccordionTrigger>
                <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}