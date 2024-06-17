"use client"

import { Language } from "@/constants/types"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { useRouter } from "next/navigation"
import { createUserLanguage } from "@/actions/userLanguage"
import { useAuth, useUser } from "@clerk/nextjs"
import { createUser } from "@/actions/user"

interface LanguageTableProps {
    languages: Language[] | null
}

const LanguageTable: React.FC<LanguageTableProps> = ({languages}) => {
    const router = useRouter()
    const { userId } = useAuth()
    const {user} = useUser()
    var username = ""
    if (user) {
        username = user!.firstName! + user!.lastName!
    } else {
        username = "Unavailable"
    }

    const setLanguage = async (languageId:number) => {
        if (userId) {
            const user = await createUser({userId: userId, username: username, isAdmin: false})
            const userLanguage = await createUserLanguage({userId, languageId, levelId: 6})
            console.log(user, userLanguage, userId)
            router.push("/dashboard")
        }
    }
    
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Languages</TableHead>
                    <TableHead>Country</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {languages && languages.map((language, index) => (
                    <TableRow key={index} onClick={()=> setLanguage(language.id!)}>
                        <TableCell>{language.name}</TableCell>
                        <TableCell>{language.country}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default LanguageTable