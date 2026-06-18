import { NextResponse } from "next/server";

export function middleware(req: any) {
  const session = req.cookies.get("cashpay_session");

  const isDashboard = req.nextUrl.pathname.startsWith("/dashboard");

  if (isDashboard && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
