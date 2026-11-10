import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SESSION_COOKIE = "lexora_session";

export function proxy(request: NextRequest) {
    const hasSession = request.cookies.has(SESSION_COOKIE);
    const isLoginPage = request.nextUrl.pathname === "/login";

    if (!hasSession && !isLoginPage) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (hasSession && isLoginPage) {
        return NextResponse.redirect(new URL("/casos", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/casos/:path*", "/documentos/:path*", "/biblioteca/:path*", "/login"],
};