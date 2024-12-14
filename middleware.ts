import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { localeUrls } from './config/localeUrls'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // If path is just '/', redirect to '/en'
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/en', request.url))
  }

  // Check if the pathname starts with a locale
  const pathnameHasLocale = /^\/[a-z]{2}($|\/)/.test(pathname)

  if (!pathnameHasLocale) {
    // Redirect to default locale (en)
    return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
  }

  // All other requests with valid locales should pass through
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|static|[\\w-]+\\.\\w+).*)',
  ],
}