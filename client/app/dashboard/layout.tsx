import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Image from "next/image";
import { SideMenu } from "./_components/side-menu";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const metadata: Metadata = {
    title: "Linger | DashBoard",
    description: "Get to the next level. Your quiz is ready!",
  };

export default function AuthLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="grid grid-rows-8 gap-4 md:gap-8 overscroll-none">
            <div className="row-span-1 flex flex-col">
                <div className="grid grid-cols-6 gap-1 items-center p-2">
                    <Image src="/Linger1.svg" alt="Linger" className="col-span-1 rounded-xl" width={40} height={40}/>
                    <div className="col-span-4 flex justify-start">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight text-orange-600">
                            linger
                        </h4>
                    </div>
                    <div className="col-span-1">
                        <SideMenu />
                    </div>
                </div>
                <Separator />
            </div>
            <div className="row-span-7 h-full px-2 md:px-8 lg:px-12 overscroll-y-auto">
                {children}
            </div>
        </div>
    )
}