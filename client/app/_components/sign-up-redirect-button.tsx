"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SignUpRedirectButton () {
    const router = useRouter()
    return (
        <Button className="uppercase font-semibold" onClick={() => router.push("/auth/sign-up")}>Get Started</Button>
    )
}