import type { HTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"
export function Surface({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn("lk-surface", className)} {...props} /> }
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn("lk-card", className)} {...props} /> }
export function Panel({ className, ...props }: HTMLAttributes<HTMLDivElement>) { return <div className={cn("lk-panel", className)} {...props} /> }
export function Badge({ className, variant = "neutral", children }: { className?: string; variant?: "neutral" | "primary" | "success" | "warning" | "danger"; children: ReactNode }) { return <span className={cn("lk-badge", `lk-badge--${variant}`, className)}>{children}</span> }
