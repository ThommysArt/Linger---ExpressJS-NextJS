import { getQuizQuestions } from "@/actions/Question"
import { getQuiz } from "@/actions/Quiz"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import QuestionAccordion from "../_components/question-accordion"
import { getQuestionOptions } from "@/actions/Option"
import { Question, Option } from "@/constants/types"

export default async function Page ({params}: {params: {quizId: number, levelId: number}}) {
    const quiz = await getQuiz(params.quizId)
    const quiz_questions = await getQuizQuestions(params.quizId)
    const QnA: {question: Question, options: Option[]}[] = []
    quiz_questions.map( async (question, index) => {
        const options = await getQuestionOptions(question.id!)
        QnA.push({question, options: options})
    })

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
                <QuestionAccordion  QnA={QnA} setTest={setTest}/>
            </CardContent>
            <CardFooter>
                <Button>Submit</Button>
            </CardFooter>
        </Card>

    )
}