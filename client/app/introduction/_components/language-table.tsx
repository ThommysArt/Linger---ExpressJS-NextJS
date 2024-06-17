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
import { useAuth } from "@clerk/nextjs"
import { createUser } from "@/actions/user"

interface LanguageTableProps {
    languages: Language[] | null
}

const LanguageTable: React.FC<LanguageTableProps> = ({languages}) => {
    const router = useRouter()
    const { userId } = useAuth()

    const setLanguage = async (languageId:number) => {
        if (userId) {
            const user = await createUser({userId: userId, fullname: "", isAdmin: false})
            const userLanguage = await createUserLanguage({userId, languageId, levelId: 6})
            console.log(user, userLanguage)
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