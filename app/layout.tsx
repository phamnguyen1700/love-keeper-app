import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] })

export const metadata: Metadata = { title: "Love Keeper — Some memories deserve more than a message.", description: "Write a letter, gather a few memories, and share a cinematic moment.", applicationName: "Love Keeper" }
export const viewport: Viewport = { themeColor: "#f8fbff", colorScheme: "light", width: "device-width", initialScale: 1, userScalable: false }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html> }
