"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality & Impact" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-forest-deeper text-white sticky top-0 z-50 border-b border-white/5 shadow-md h-[72px]">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between py-[2px]">
        <Link href="/" className="flex items-center shrink-0 h-full py-1">
          <Image src="/logo.webp" alt="AIPL Logo" width={1000} height={1000} className="h-full w-auto object-contain drop-shadow-sm" priority />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium transition-colors ${
                  isActive ? "text-white font-bold underline underline-offset-8 decoration-2 decoration-forest" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg px-5 py-2 text-base font-semibold bg-white text-forest hover:bg-white/90 transition-colors shadow-sm cursor-pointer"
          >
            Job Apply
          </button>

        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden p-2 -mr-2"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-forest-deeper text-white border-forest-deeper w-72">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="flex flex-col items-center gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-base font-medium transition-colors py-2 ${
                      isActive ? "text-white font-bold underline underline-offset-8 decoration-2 decoration-forest" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-base font-semibold bg-white text-forest hover:bg-white/90 transition-colors mt-4 w-full cursor-pointer"
              >
                Job Apply
              </button>

            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
