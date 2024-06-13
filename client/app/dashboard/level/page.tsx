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
                <CommandGroup heading="Lessons">
                    <CommandItem>Lesson 1: Introduction</CommandItem>
                    <CommandItem>Lesson 2: Vocabulary</CommandItem>
                    <CommandItem>Lesson 3</CommandItem>
                    <CommandItem>Lesson 4</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Quizes">
                    <CommandItem>Quiz 1</CommandItem>
                    <CommandItem>Quiz 2</CommandItem>
                    <CommandItem>Quiz 3</CommandItem>
                </CommandGroup>
                <CommandSeparator />
            </CommandList>
        </Command>
    )
}