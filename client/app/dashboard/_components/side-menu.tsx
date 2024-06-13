import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { SignOutButton } from "@clerk/nextjs"
  
const SideMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="icon" variant="outline">
                    <HamburgerMenuIcon />
                </Button>
            </SheetTrigger>
            <SheetContent className="grid grid-rows-10 gap-2">
                <SheetHeader className="row-span-2">
                    <SheetTitle>Linger</SheetTitle>
                </SheetHeader>
                <div className="row-span-8"></div>
                <SheetFooter className="row-span-2 flex flex-row justify-end gap-8">
                    <SignOutButton />
                    <SheetClose>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export { SideMenu }