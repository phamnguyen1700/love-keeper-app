"use client"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, LockKeyhole, Mail } from "lucide-react"
import { Brand, Button, Field, Input } from "@/components/common"
import { authenticate } from "@/services/auth"
import { useAuth } from "@/hooks/auth"

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth(); const [identifier, setIdentifier] = useState(""); const [password, setPassword] = useState(""); const [error, setError] = useState("")
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); if (!authenticate(identifier, password)) { setError("Enter your email and password to continue."); return }; login(identifier.trim()); router.push("/playground") }
  return <main className="lk-auth-shell"><section className="lk-card lk-auth-card" aria-labelledby="login-title"><Brand /><div className="mt-10 flex flex-col gap-2"><p className="lk-label text-[var(--lk-primary-active)]">Welcome back</p><h1 id="login-title" className="lk-heading-1">Sign in to your space</h1><p className="lk-body-sm lk-text-muted">Keep the moments that matter close.</p></div><form className="mt-8 flex flex-col gap-5" onSubmit={submit}><Field label="Email or username" error={error && !identifier ? error : undefined}><div className="relative"><Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--lk-muted-foreground)]" size={16} aria-hidden="true" /><Input className="pl-10" value={identifier} onChange={(event) => { setIdentifier(event.target.value); setError("") }} placeholder="you@example.com" autoComplete="username" /></div></Field><Field label="Password" error={error && identifier ? error : undefined}><div className="relative"><LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--lk-muted-foreground)]" size={16} aria-hidden="true" /><Input className="pl-10" type="password" value={password} onChange={(event) => { setPassword(event.target.value); setError("") }} placeholder="Enter your password" autoComplete="current-password" /></div></Field><Button type="submit" size="lg" className="mt-2 w-full">Sign in <ArrowRight data-icon="inline-end" size={16} /></Button></form><p className="mt-8 text-center lk-caption lk-text-muted">Your memories are yours. Always.</p></section></main>
}
