"use client"
import { Option } from "@/constants/types"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import React from "react"

interface QuestionOptionsProps {
    options: Option[],
    setValue: ((value: string) => void) | undefined
}

const QuestionOptions: React.FC<QuestionOptionsProps> = ({options, setValue}) => {
    return (
        <RadioGroup onValueChange={setValue}>
            {options.map((option, index)=> (
                <div key={index} className="flex items-center space-x-2">
                    {option.id?(
                        <RadioGroupItem value={option.id.toString()} id="r3" />
                    ):(
                        <></>
                    )}
                    <small className="text-sm text-muted-foreground">{option.label}</small>
                </div>
            ))}
        </RadioGroup>
    )
}

export default QuestionOptions