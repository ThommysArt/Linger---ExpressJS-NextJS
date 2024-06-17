"use client"
import { Card } from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Level } from "@/constants/types"
import { useRouter } from "next/navigation"

interface SelectLevelProps {
    levels: Level[] | null
}

const SelectLevel: React.FC<SelectLevelProps> = ({ levels }) => {
    const router = useRouter()
    console.log(levels)

    if (!levels || !Array.isArray(levels)) {
        return <div>No levels available</div>
    }

    return (
        <Card>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Levels</TableHead>
                        <TableHead>Title</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {levels.map((level, index) => (
                        <TableRow key={index} onClick={() => router.push(`/dashboard/level/${level.id}`)}>
                            <TableCell>{level.id}</TableCell>
                            <TableCell>{level.title}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default SelectLevel
