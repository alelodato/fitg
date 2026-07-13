import { NextResponse } from 'next/server'

export function middleware(request) {
    const { pathname } = request.nextUrl

    // Lascia sempre passare coming-soon, asset, api, e la verifica SSL
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