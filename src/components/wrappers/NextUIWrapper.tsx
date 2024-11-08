'use client'

import { NextUIProvider } from "@nextui-org/react"
import { useRouter } from "next/navigation"

export default function NextUIWrapper({ children } : Readonly<{children: React.ReactNode}>) {
    const router = useRouter()

    return (
        <NextUIProvider navigate={router.push}>
            {children}
        </NextUIProvider>
    )
}