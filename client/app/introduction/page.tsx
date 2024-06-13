import { auth } from "@clerk/nextjs/server"

export default function Page () {
    const { userId } = auth()
    return (
        <div>
            <h1>Intro Page</h1>
            <p>{userId}</p>
        </div>
    )
}