import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { fetchValidGuild } from "./utils/api";

const validateMiddlewareCookies = (req: NextRequest) => {
    const sessionsId = req.cookies.get("connect.sid");
    return sessionsId ? ({ Cookie: `connect.sid=${sessionsId}`}) : false;
}

export async function middleware(req: NextRequest, event: NextFetchEvent){
    if(req.nextUrl.pathname.startsWith("/dashboard")){
        /* const headers = validateMiddlewareCookies(req);
        if(!headers) return NextResponse.redirect(new URL('/', req.url));

        const id = req.nextUrl.pathname.split("/")[2];
        if(!id) return NextResponse.redirect(new URL('/menu', req.url));

        const responses = await fetchValidGuild(id, headers); 
        return responses.status === 200 ? NextResponse.next() : NextResponse.redirect(new URL('/menu', req.url)); */
    }
}