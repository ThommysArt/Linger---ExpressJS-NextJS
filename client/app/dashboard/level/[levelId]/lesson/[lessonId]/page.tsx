import { Card } from "@/components/ui/card";
import ReadingProgress from "../_components/reading-progress";
import { getLesson } from "@/actions/lesson";

export default async function Page ({params}: {params: {levelId: number, lessonId: number}}) {
    const lesson = await getLesson(params.lessonId)
    return (
        <div className="grid grid-rows-10 grid-cols-2 gap-2 md:gap-4 p-2 md:p-4">
            <div className="row-span-1 col-span-2 flex flex-col gap-4">
                <h3 className="text-xl md:text-2xl font-semibold">Lesson 1: Introduction</h3>
                <ReadingProgress />
            </div>
            <div className="row-span-8 col-span-1">
                <Card className="p-2">
                    <small className="text-sm font-medium leading-none text-muted-foreground">
                        {lesson?lesson.text:null}
                    </small>
                </Card>
            </div>
            <div className="row-span-8 col-span-1">
                <Card className="p-2">
                    <small className="text-sm font-medium leading-none">
                        {lesson?lesson.transcribed:null}
                    </small>
                </Card>
            </div>
        </div>
    )
}