"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function SignInRedirectButton () {
    const router = useRouter()
    return (
        <Button className="uppercase font-semibold" variant="outline" onClick={() => router.push("/auth/sign-in")}>I already have an account</Button>
    )
}