import { auth } from "@clerk/nextjs/server"
import SelectLevel from "./_components/select-level"
import { getAllLevels } from "@/actions/level"
import { getUserLanguage } from "@/actions/userLanguage"
import { redirect } from "next/navigation"
  
export default async function Page () {
    const { userId } = auth()
    const userLanguage = await getUserLanguage(userId!)
    console.log('userId:', userId, 'userLanguage:', userLanguage)
    
    if (userLanguage === null) {
        redirect("/introduction")
    }

    const levels = await getAllLevels(userLanguage![0].languageId)
    console.log('levels:', levels)

    return (
        <SelectLevel levels={levels} />
    )
}
