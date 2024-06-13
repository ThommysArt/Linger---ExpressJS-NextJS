
import SelectLevel from "./_components/select-level"
import { getAllLevels } from "@/actions/level"
  

export default async function Page () {
    const levels = await getAllLevels()
    return (
        <SelectLevel levels={levels} />
    )
}