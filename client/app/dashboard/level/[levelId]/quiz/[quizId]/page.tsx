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

export default async function Page ({params}: {params: {quizId: number, levelId: number}}) {
    // const quiz = await getQuiz(params.quizId)
    // const quiz_questions = await getQuizQuestions(params.quizId)
    return (
        <Card>
            <CardHeader>
                <CardTitle>Quiz</CardTitle>
                <CardDescription>
                    Answer all the question below...
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Question 1</AccordionTrigger>
                        <AccordionContent>
                            <div className="py-4 md:py-8">
                                <Label className="py-4">What is the answer </Label>
                            </div>
                            <RadioGroup>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option1" id="r3" />
                                    <small className="text-sm text-muted-foreground">Option 1</small>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option2" id="r3" />
                                    <small className="text-sm text-muted-foreground">Option 2</small>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option3" id="r3" />
                                    <small className="text-sm text-muted-foreground">Option 3</small>
                                </div>
                            </RadioGroup>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Question 2</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Question 3</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </CardContent>
            <CardFooter>
                <Button>Submit</Button>
            </CardFooter>
        </Card>

    )
}