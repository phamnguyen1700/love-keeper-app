"use client"
import { useRouter } from "next/navigation"
import { BookOpen, LogOut, PenLine, Sparkles } from "lucide-react"
import { Brand, Button, IconButton, SegmentedControl } from "@/components/common"
import { EngineStage } from "./engine-stage"
import { useAuth } from "@/hooks/auth"
import { usePlayground } from "@/hooks/playground"

export function PlaygroundShell() { const router = useRouter(); const { user, logout } = useAuth(); const { mode, setMode } = usePlayground(); if (!user) { router.replace("/login"); return null }; return <main className="lk-playground-shell lk-app-shell"><header className="lk-playground-header"><Brand /><div className="lk-playground-header__actions"><SegmentedControl value={mode} onChange={setMode} items={[{ value: "write", label: <><PenLine size={14} /> Write</> }, { value: "read", label: <><BookOpen size={14} /> Read</> }]} /><IconButton label="Sign out" variant="ghost" onClick={() => { logout(); router.push("/login") }}><LogOut size={17} /></IconButton></div></header><div className="mt-7"><p className="lk-label text-[var(--lk-primary-active)]">Private playground</p><h1 className="lk-heading-1 mt-1">A quiet place for what matters.</h1><p className="lk-body-sm lk-text-muted mt-2 max-w-xl">Write, reflect, and revisit the moments you want to keep.</p></div><EngineStage /><footer className="flex flex-wrap items-center justify-between gap-3 py-4"><p className="lk-caption lk-text-muted">Signed in as {user}</p><Button variant="secondary" size="sm"><Sparkles data-icon="inline-start" size={15} /> Memory engine</Button></footer></main> }
