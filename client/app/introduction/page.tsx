
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { getAllLanguages } from "@/actions/language"
import LanguageTable from "./_components/language-table"

export default async function Page() {
    const languages = await getAllLanguages()
    console.log(languages) 

    return (
        <div className="grid grid-rows-10 gap-5 p-5 md:p-15 lg:p-20">
            <div className="row-span-3">
                <div className="grid grid-cols-4 gap-4">
                    <Image src="/Linger2.svg" alt="Linger" className="col-span-1" height={100} width={150} />
                    <Card className="col-span-3">
                        <CardContent className="p-2">
                            <p>Select the language you want to learn</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="row-span-7">
                <LanguageTable languages={languages!} />
            </div>
        </div>
    )
}
