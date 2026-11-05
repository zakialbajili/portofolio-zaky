import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority";

const textareaVariants = cva("placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-color-softPurple disabled:cursor-not-allowed disabled:opacity-50", {
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
});

export interface TextareaProps
  extends React.ComponentProps<"textarea">,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-2xl px-5 py-4 text-base shadow-sm transition-colors md:text-sm",
          textareaVariants({ variant }),
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
