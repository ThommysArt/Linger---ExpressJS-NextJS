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
    return (
        <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Levels">
                    <CommandItem>Level 1: Introduction</CommandItem>
                    <CommandItem>Level 2: Vocabulary</CommandItem>
                    <CommandItem>Level 3</CommandItem>
                    <CommandItem>Level 4</CommandItem>
                </CommandGroup>
                <CommandSeparator />
            </CommandList>
        </Command>
    )
}