import { ArrowUpRight } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

type ProjectViewButtonVariant = "default" | "green" | "purple" | "dark";

const variantClasses: Record<
  ProjectViewButtonVariant,
  { track: string; badge: string; label: string }
> = {
  default: {
    track: "bg-color-white text-color-darkPurple",
    badge: "bg-color-darkPurple text-color-white",
    label: "bg-color-softGreen text-color-dark",
  },
  green: {
    track: "bg-color-softGreen text-color-darkPurple",
    badge: "bg-color-white text-color-softPurple",
    label: "bg-color-softPurple text-color-white",
  },
  purple: {
    track: "bg-color-softPurple text-color-white",
    badge: "bg-color-white text-color-softPurple",
    label: "bg-color-softGreen text-color-darkPurple",
  },
  dark: {
    track: "bg-color-dark text-color-white",
    badge: "bg-color-white text-color-dark",
    label: "bg-color-softGreen text-color-dark",
  },
};

interface ProjectViewButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ProjectViewButtonVariant;
  asChild?: boolean;
}

const CustomButton = ({
  className,
  variant = "default",
  asChild = false,
  children,
  ...props
}: ProjectViewButtonProps) => {
  const Comp = asChild ? Slot : "button"
  const classes = variantClasses[variant];
  return (
    <Comp
      className={cn(
        "group relative flex h-12 w-fit items-center gap-2.5 overflow-hidden rounded-full py-1.5 pl-1.5",
        "transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10 active:translate-y-0 active:scale-95",
        classes.track,
        className,
      )}
      {...props}
    >
      {/* Shine sweep — kilau menyapu saat hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/3 -translate-x-[150%] rotate-12 bg-white/30 blur-md transition-transform duration-700 ease-out group-hover:translate-x-[400%]"
      />
      {/* Badge ikon — lingkaran, ikon melesat diagonal saat hover */}
      <span
        className={cn(
          "relative z-10 flex h-9 w-9 items-center justify-center rounded-full",
          "transition-transform duration-500 ease-out group-hover:rotate-45 group-hover:scale-110",
          classes.badge,
        )}
      >
        <ArrowUpRight className="h-5 w-5 transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
      {/* Label */}
      <span
        className={cn(
          "relative z-10 whitespace-nowrap text-sm font-bold font-gabarito rounded-full py-3.5 px-5",
          "transition-transform duration-500 ease-out group-hover:translate-x-0.5",
          classes.label,
        )}
      >
        {children}
      </span>
    </Comp>
  );
};
export default CustomButton;
