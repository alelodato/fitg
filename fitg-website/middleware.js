import { NextResponse } from 'next/server'

const PRODUCTION_DOMAINS = ['federtacticalgames.it', 'www.federtacticalgames.it']

export function middleware(request) {
    const { pathname } = request.nextUrl
    const hostname = request.headers.get('host') || ''

    // Applica il redirect coming-soon SOLO sul dominio reale
    const isProductionDomain = PRODUCTION_DOMAINS.some((domain) => hostname.includes(domain))

    if (!isProductionDomain) {
        return NextResponse.next()
    }

    if (
        pathname === '/coming-soon' ||
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.startsWith('/.well-known') ||
        /\.(png|jpe?g|webp|gif|svg|ico|css|js|woff2?)$/.test(pathname)
    ) {
        return NextResponse.next()
    }

    return NextResponse.redirect(new URL('/coming-soon', request.url))
}

export const config = {
    matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
}