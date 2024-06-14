"use client"
import { Slider } from "@/components/ui/slider"

const ReadingProgress = () => {
    return (
        <Slider defaultValue={[33]} max={100} step={1} />
    )
}

export default ReadingProgress