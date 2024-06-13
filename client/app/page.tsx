
import Image from "next/image";
import SignInRedirectButton from "@/app/_components/sign-in-redirect-button";
import SignUpRedirectButton from "@/app/_components/sign-up-redirect-button";

export default function Home() {
  return (
    <div className="grid grid-rows-10 h-screen bg-orange-950 p-5 md:p-16 lg:p-20 md:px-52 lg:px-64 gap-10 justify-between">
      <div className="row-span-8 flex flex-col gap-2 items-center">
        <Image src="/Linger2.svg" alt="linger" height={200} width={150} />
        <div className="flex flex-col justify-center px-2 lg:px-10 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-orange-600 p-2">linger</h2>
          <p className="font-sans text-xl text-muted-foreground">
            Speak the Language of Opportunity,
            Embrace New Horizons and Master New Tongues
          </p>
        </div>
      </div>
      <div className="row-span-2 flex flex-col md:flex-row md:justify-end gap-4">
        <SignUpRedirectButton />
        <SignInRedirectButton />
      </div>
    </div>
  );
}
