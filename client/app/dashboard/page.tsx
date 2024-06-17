
import { auth } from "@clerk/nextjs/server"
import SelectLevel from "./_components/select-level"
import { getAllLevels } from "@/actions/level"
import { getUserLanguage } from "@/actions/userLanguage"
import { redirect } from "next/navigation"
  

export default async function Page () {
    const { userId } = auth()
    const userLanguage = await getUserLanguage(userId!)
    console.log(userId, userLanguage)
    if (userLanguage === null) {
        redirect("/introduction")
    }
    const levels = await getAllLevels(userLanguage!.languageId)
    console.log(levels)
    return (
        <SelectLevel levels={levels} />
    )
}