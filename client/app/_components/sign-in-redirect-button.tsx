"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { ReloadIcon } from "@radix-ui/react-icons"

export default function SignInRedirectButton () {
    const router = useRouter()
    const [loading, setLoading] = useState<Boolean>(false)
    return (
        <Button 
            className="uppercase font-semibold" 
            variant="outline"
            onClick={() => {
                setLoading(true)
                router.push("/auth/sign-in")
            }}>
                {loading ? (<ReloadIcon className="mr-2 h-4 w-4 animate-spin" />): (<></>)}
                I already have an account
        </Button>
    )
}