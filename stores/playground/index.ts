import { create } from "zustand"
export type PlaygroundMode = "write" | "read"
type PlaygroundState = { mode: PlaygroundMode; setMode: (mode: PlaygroundMode) => void }
export const usePlaygroundStore = create<PlaygroundState>((set) => ({ mode: "write", setMode: (mode) => set({ mode }) }))
