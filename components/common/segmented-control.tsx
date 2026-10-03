"use client"
import type { ReactNode } from "react"
export function SegmentedControl<T extends string>({ value, items, onChange }: { value: T; items: { value: T; label: ReactNode }[]; onChange: (value: T) => void }) { return <div className="lk-segmented" role="group" aria-label="Choose mode">{items.map((item) => <button key={item.value} type="button" className="lk-segmented__item" aria-pressed={value === item.value} onClick={() => onChange(item.value)}>{item.label}</button>)}</div> }
