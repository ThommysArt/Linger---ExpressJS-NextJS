
import { getAllLanguages } from "@/actions/language"
import LanguageTable from "./_components/language-table"

export default async function Page() {
    const languages = await getAllLanguages()
    console.log(languages) 

    return (
        <LanguageTable languages={languages} />
    )
}
