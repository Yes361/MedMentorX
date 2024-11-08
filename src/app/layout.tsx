import type { Metadata } from "next"
import "./globals.css"
import NextUIWrapper from "@/components/wrappers/NextUIWrapper"
import MainHeaderNav from "@/components/ui/MainHeaderNav"
// import { SessionProvider } from "next-auth/react"
import SessionWrapper from "@/components/wrappers/SessionWrapper"

export const metadata: Metadata = {
  title: "MedMentorX",
  description: "Medical Duolingo",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper>
          <NextUIWrapper>
            <MainHeaderNav />
            {children}
          </NextUIWrapper>
        </SessionWrapper>
      </body>
    </html>
  )
}
