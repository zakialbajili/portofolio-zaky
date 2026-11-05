"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChartNoAxesGantt } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
];

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div
      className={cn(
        `fixed top-10 inset-x-0 w-full mx-auto z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? "bg-gray-500/30 backdrop-blur shadow-md" : "bg-transparent"} flex justify-between lg:justify-evenly items-center py-3 px-5`,
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <Link href={"/"} className="rounded-full bg-color-softPurple p-1 hover:bg-color-darkPurple">
          <Image src="/logo_zaky.webp" alt="logo" width={30} height={30} />
        </Link>
      </div>
      <nav className="hidden lg:flex items-center gap-6 font-gabarito">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm 2xl:text-base transition-colors",
              isActive(link.href)
                ? "text-color-softPurple font-semibold"
                : "text-color-softPurple hover:text-color-softPurple",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Button
        asChild
        variant="default"
        className="hidden lg:inline-flex h-fit py-3 px-4 font-gabarito"
      >
        <Link href={"/contact"}>
          <p className="text-sm 2xl:text-base">Contact Me</p>
        </Link>
      </Button>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="block lg:hidden text-color-primerText">
            <ChartNoAxesGantt />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80%] sm:max-w-sm">
          <SheetHeader>
            <SheetTitle className="font-gabarito text-color-darkPurple">Menu</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4 pt-6 font-gabarito">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-lg font-medium",
                  isActive(link.href)
                    ? "text-color-softPurple"
                    : "text-color-primerText hover:text-color-softPurple",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="text-lg font-medium text-color-softPurple">
              Contact Me
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
