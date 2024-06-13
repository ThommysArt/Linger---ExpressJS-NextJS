import { auth } from "@clerk/nextjs/server"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  

export default function Page () {
    const { userId } = auth()
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
                <Command className="rounded-lg border shadow-md">
                    <CommandInput placeholder="Enter the language" />
                    <CommandList>
                        <CommandEmpty>No Language found.</CommandEmpty>
                        <CommandGroup heading="Languages">
                        <CommandItem>German</CommandItem>
                        <CommandItem>French</CommandItem>
                        <CommandItem>Japanese</CommandItem>
                        <CommandItem>Chinese</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
        </div>
    )
}