import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { validateCookies } from "./helpers";
import { PartialGuild } from "./types";

const API_URL = "http://localhost:3001/api";

export const isAuthenticated = async () => {
    try{
        const { status } = await axios.get(`${API_URL}/auth/is-authenticated`, { withCredentials: true });

        return status === 200;
    }catch(err){
        console.error(err);
        return null;
    }
}

export const fetchMutualGuilds = async (context: GetServerSidePropsContext) => {
    const headers = validateCookies(context);
    if(!headers) return { redirect: {destination: "/"}};

    try{
        const { data: guilds } = await axios.get<PartialGuild[]>(`${API_URL}/guilds`, { headers });
        return { props: {guilds}};
    }catch(err){
        console.error(err);
        return { redirect: {destination: "/"}};
    }
}

export const fetchValidGuild = async (id: string, headers: HeadersInit) => {
    const response = await fetch(`${API_URL}/guilds/${id}/permissions`, {headers})
    return response;
}

export const fetchGuild = async (guildId: string) => {
    try{
        const { data: guild } = await axios.get<PartialGuild>(`${API_URL}/guilds/${guildId}`, { withCredentials: true });
        return guild;
    }catch(err){
        console.error(err);
        return null;
    }
}

export const logout = async () => {
    window.location.href = `${API_URL}/auth/logout`;
}