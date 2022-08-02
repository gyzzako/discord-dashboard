import { FC } from "react";
import Image from "next/image";
import { Guild } from "../../utils/types";
import styles from "./GuildMenuItem.module.scss"

type Props = {
    guild: Guild;
}

export const GuildMenuItem: FC<Props> = ({guild}) => {
    return (
        <div className={styles.container}>
            {
                !!guild?.icon ? <Image src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} height={55} width={55} className={styles.image} alt=""/> : <span></span>
            }
            <p>{guild.name}</p>
        </div>
    );
}