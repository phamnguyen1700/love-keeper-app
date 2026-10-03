import type { ReactNode, InputHTMLAttributes, TextareaHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) { return <input className={cn("lk-input", className)} {...props} /> }
export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) { return <textarea className={cn("lk-textarea", className)} {...props} /> }
export function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) { return <div className="lk-field"><label className="lk-label lk-field__label">{label}</label>{children}{error ? <span className="lk-caption lk-field__error">{error}</span> : null}</div> }
