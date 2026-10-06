import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['ne', 'en'];
const defaultLocale = 'ne';

function getLocale(request: NextRequest): string {
  // 1. Explicit user-selected language (cookie)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale;
  }

  // 2. Regional default
  const country = request.headers.get('x-vercel-ip-country') || request.headers.get('cf-ipcountry');
  if (country === 'NP') {
    return 'ne';
  }

  // 3. Browser language
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    // Parse accept-language header: "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7"
    const parsed = acceptLanguage.split(',').map(lang => {
      const parts = lang.split(';q=');
      const code = parts[0].trim().split('-')[0].toLowerCase();
      const q = parts[1] ? parseFloat(parts[1]) : 1.0;
      return { code, q };
    }).sort((a, b) => b.q - a.q);
    
    for (const lang of parsed) {
      if (locales.includes(lang.code)) {
        return lang.code;
      }
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files, API routes, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // If the pathname starts with /ne, redirect to remove it
  if (pathname.startsWith('/ne/') || pathname === '/ne') {
    const newPathname = pathname.replace(/^\/ne/, '') || '/';
    request.nextUrl.pathname = newPathname;
    return NextResponse.redirect(request.nextUrl);
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Rewrite if there is no locale
  const locale = getLocale(request);
  if (locale === 'ne') {
    request.nextUrl.pathname = `/ne${pathname}`;
    return NextResponse.rewrite(request.nextUrl);
  } else {
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};
