import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const inputVariants = cva("focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-color-softPurple disabled:cursor-not-allowed disabled:opacity-50", {
  variants: {
    variant: {
      default:
        "rounded-xl border border-color-border bg-white text-color-primerText shadow",
      glass:
        "rounded-xl text-white bg-color-secondaryText/20 border border-color-white/20 backdrop-blur",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-xl px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground md:text-sm",
          inputVariants({ variant }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
