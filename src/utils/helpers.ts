import { GetServerSidePropsContext } from "next";
import { PartialGuild } from "./types";

export const validateCookies = (ctx: GetServerSidePropsContext) => {
    const sessionsId = ctx.req.cookies["connect.sid"];
    return sessionsId ? ({ Cookie: `connect.sid=${sessionsId}`}) : false;
}

export const getIconUrl = (guild?: PartialGuild) => {
    return (!guild || !guild.icon) ? "/discord-icon.svg" : `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;
}