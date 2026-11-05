import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-color-softPurple focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-color-softGreen text-color-dark shadow hover:bg-color-mintGreen",
        secondary:
          "border-transparent bg-color-softPurple text-white hover:bg-color-darkPurple",
        destructive:
          "border-transparent bg-color-cherryRed text-white shadow hover:bg-color-cherryRed/80",
        outline: "text-color-primerText border-color-border",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
