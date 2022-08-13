import { useContext, useEffect } from "react";
import { fetchGuild } from "../api";
import { GuildContext } from "../contexts/GuildContext";

export function useCurrentGuild(){
    const { guild, setGuild } = useContext(GuildContext);
    useEffect(() => {
        (async () => {
            const guildId = window.location.pathname.split("/")[2];
            if(!guild || guild.id !== guildId){
                const fetchedGuild = await fetchGuild(guildId)
                if(fetchedGuild) setGuild(fetchedGuild);
            }
        })();
    }, [guild, setGuild]);

    return guild;
}