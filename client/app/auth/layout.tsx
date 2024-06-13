import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Linger | Auth",
    description: "Join Us and start your journey now. With us, language is not a barrier!",
  };

export default function AuthLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex min-h-screen bg-orange-900 justify-center items-center">
            {children}
        </div>
    )
}