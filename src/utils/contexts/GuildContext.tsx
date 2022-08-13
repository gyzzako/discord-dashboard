import { createContext } from "react";
import { PartialGuild } from "../types";

type GuildContextType = {
    guild?: PartialGuild;
    setGuild: (guild: PartialGuild) => void;
}

export const GuildContext = createContext<GuildContextType>({
    setGuild: () => {},
})