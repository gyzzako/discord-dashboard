import { FC, memo } from "react";
import Image from "next/image";
import { PartialGuild } from "../../utils/types";
import styles from "./GuildMenuItem.module.scss"
import { getIconUrl } from "../../utils/helpers";

type Props = {
    guild: PartialGuild;
}

const GuildMenuItem: FC<Props> = ({ guild }) => {
    return (
        <div className={styles.container}>
            {
                !!guild?.icon ? <Image src={getIconUrl(guild)} height={55} width={55} className={styles.image} alt=""/> : <span></span>
            }
            <p>{guild.name}</p>
        </div>
    );
}

export default memo(GuildMenuItem);