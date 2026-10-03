import { Button as ButtonPrimitive } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const variants = { primary: "lk-button--primary", secondary: "lk-button--secondary", ghost: "lk-button--ghost", danger: "lk-button--danger" } as const
const sizes = { sm: "lk-button--sm", md: "lk-button--md", lg: "lk-button--lg", icon: "lk-button--icon" } as const

type Props = Omit<React.ComponentProps<typeof ButtonPrimitive>, "variant" | "size"> & { variant?: keyof typeof variants; size?: keyof typeof sizes }

export function Button({ className, variant = "primary", size = "md", ...props }: Props) {
  return <ButtonPrimitive className={cn("lk-button", variants[variant], sizes[size], className)} {...props} />
}

export function IconButton({ className, label, ...props }: Omit<Props, "size"> & { label: string }) {
  return <Button {...props} aria-label={label} size="icon" className={cn("lk-icon-button", className)} />
}
