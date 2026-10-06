"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Menu, Globe, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";



export function Navbar({ dict, locale }: { dict: any; locale: string }) {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const navLinks = [
    { href: `/${locale}/about`, label: dict.common.nav.about },
    { href: `/${locale}/products`, label: dict.common.nav.products },
    { href: `/${locale}/quality`, label: dict.common.nav.quality },
    { href: `/${locale}/resources`, label: dict.common.nav.resources },
    { href: `/${locale}/contact`, label: dict.common.nav.contact },
  ];
  const switchLocale = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  // Close language dropdown on outside click or Escape
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setLangOpen(false);
    }
    if (langOpen) {
      document.addEventListener("mousedown", handleClick);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [langOpen]);

  const currentLangLabel = dict.common.languageOptions[locale as keyof typeof dict.common.languageOptions];

  return (
    <header className="bg-forest text-white sticky top-0 z-50 shadow-sm h-[90px]">
      <nav aria-label={locale === 'ne' ? 'मुख्य नेभिगेसन' : 'Main navigation'} className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Left: Logo */}
        <Link href={`/${locale}`} className="flex items-center shrink-0 h-full py-0" aria-label={locale === 'ne' ? 'AIPL गृहपृष्ठ' : 'AIPL Home'}>
          <Image src="/logo-white.png" alt="AIPL — Agricultural Investment Pvt. Ltd." width={320} height={90} className="h-10 w-auto object-contain origin-left" priority />
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[15px] px-4 py-2 rounded-md font-medium transition-colors ${
                  isActive ? "bg-white/20 text-white font-bold" : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              aria-expanded={langOpen}
              aria-haspopup="true"
              aria-label={`${locale === 'ne' ? 'भाषा छान्नुहोस्' : 'Select language'}: ${currentLangLabel}`}
              className="flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-white cursor-pointer p-2 rounded-md"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span>{currentLangLabel}</span>
              <ChevronDown className={`h-4 w-4 text-white/70 transition-transform ${langOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-100 z-50" role="menu">
                <div className="py-2">
                  <button role="menuitem" onClick={() => { switchLocale('en'); setLangOpen(false); }} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${locale === 'en' ? 'font-semibold text-forest' : 'text-gray-700'}`}>English</button>
                  <button role="menuitem" onClick={() => { switchLocale('ne'); setLangOpen(false); }} className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${locale === 'ne' ? 'font-semibold text-forest' : 'text-gray-700'}`}>नेपाली</button>
                </div>
              </div>
            )}
          </div>
          <Link
            href={`/${locale}/career`}
            className="inline-flex items-center justify-center rounded-md px-6 py-2.5 text-sm font-semibold bg-white text-forest hover:bg-gray-50 transition-colors"
          >
            {dict.common.nav.career}
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="lg:hidden p-3 -mr-3 text-white hover:text-white/80 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={locale === 'ne' ? 'मेनु खोल्नुहोस्' : 'Open navigation menu'}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-white border-l border-gray-100 w-full sm:w-80 pt-16">
            <SheetTitle className="sr-only">{locale === 'ne' ? 'नेभिगेसन मेनु' : 'Navigation Menu'}</SheetTitle>
            <nav aria-label={locale === 'ne' ? 'मोबाइल नेभिगेसन' : 'Mobile navigation'} className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block px-4 py-4 text-lg font-medium rounded-lg transition-colors min-h-[44px] ${
                      isActive ? "bg-forest/5 text-forest" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              <div className="mt-8 border-t border-gray-100 pt-8 px-4 flex flex-col gap-4">
                <fieldset className="flex flex-col gap-2 py-3 border-none p-0 m-0">
                  <legend className="flex items-center gap-2 text-base font-medium text-gray-700 mb-2">
                    <Globe className="h-5 w-5 text-gray-500" aria-hidden="true" />
                    <span>{locale === 'en' ? 'Language' : 'भाषा'}</span>
                  </legend>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => switchLocale('en')} aria-pressed={locale === 'en'} className={`py-2 rounded-md border min-h-[44px] ${locale === 'en' ? 'border-forest bg-forest/5 text-forest font-semibold' : 'border-gray-200 text-gray-600'}`}>English</button>
                    <button onClick={() => switchLocale('ne')} aria-pressed={locale === 'ne'} className={`py-2 rounded-md border min-h-[44px] ${locale === 'ne' ? 'border-forest bg-forest/5 text-forest font-semibold' : 'border-gray-200 text-gray-600'}`}>नेपाली</button>
                  </div>
                </fieldset>
                <Link
                  href={`/${locale}/career`}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-lg px-4 py-4 text-base font-semibold bg-forest text-white hover:bg-forest-dark transition-colors min-h-[44px]"
                >
                  {dict.common.nav.career}
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
