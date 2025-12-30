/* eslint-disable */
import { NextRequest, NextResponse } from "next/server";

import { i18nRouter } from "next-i18n-router";

import type { SessionPayload } from "@/app/[locale]/(main)/auth/_types";
import { getSession } from "@/lib/session";

import { i18nConfig } from "./i18n-config";

const protectedRoutes = ["/dashboard", "/profile", "/settings"];

export async function proxy(request: NextRequest) {
  const currentPath = request.nextUrl.pathname;

  // Strip locale using i18nConfig to check protected routes against canonical paths
  let path = currentPath;
  const segments = path.split("/");
  if (segments.length > 1 && i18nConfig.locales.includes(segments[1])) {
    path = "/" + segments.slice(2).join("/");
    // If path was just /en, it becomes /, which is fine, or empty string if bad slice
    if (path === "/") path = "/";
    // Ensure leading slash if empty (e.g. /en -> slice(2) is empty array -> join is "")
    if (path === "") path = "/";
  }

  // Check if route is protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    path.startsWith(route),
  );
  // Get session from cookie
  const session = request.cookies.get("session")?.value;
  const userSession = await getSession();
  // Redirect to login if accessing protected route without session
  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }
  // Role-specific redirect helper (keeps proxy function small)
  const getClientRedirect = (
    p: string,
    sessionObj: SessionPayload | null | undefined,
  ) => {
    const role = sessionObj?.role;
    if (
      role === "client" &&
      p.startsWith("/dashboard") &&
      p !== "/dashboard/client-dashboard"
    ) {
      return "/dashboard/client-dashboard";
    }
    return null;
  };

  const clientRedirect = getClientRedirect(path, userSession);
  if (clientRedirect)
    if (path === "/auth/login" && session) {
      return NextResponse.redirect(new URL(clientRedirect, request.nextUrl));
    }

  // Check if we should redirect to dashboard (already logged in)
  // Be careful with logic here, original code had a return inside the block
  if (path === "/auth/login" && session) {
    // The original code seemed to fall through or had a bug? It returned inside the if(clientRedirect) block?
    // Original:
    // if (clientRedirect)
    //   if (path === "/auth/login" && session) { return ...; return ... }
    // The second return was unreachable in original logic if it was in the same block?
    // Let's preserve intent: redirect to dashboard if logged in and visiting login.
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  // Use i18nRouter instead of NextResponse.next()
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, fonts, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|eot)).*)",
  ],
};
