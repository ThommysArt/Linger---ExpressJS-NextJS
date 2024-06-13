import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Linger",
  description: "Learn Any lnguage in the world. It can't be any easier!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#ea580c" }
      }}
    >
      <html lang="en">
        <head>
          <link rel="icon" href="/Linger1.svg" />
        </head>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}
