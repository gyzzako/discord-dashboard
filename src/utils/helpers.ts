import { GetServerSidePropsContext } from "next";

export const validateCookies = (ctx: GetServerSidePropsContext) => {
    const sessionsId = ctx.req.cookies["connect.sid"];
    return sessionsId ? ({ Cookie: `connect.sid=${sessionsId}`}) : false;
} 