import Image from "next/image";
import { MdSpaceDashboard } from "react-icons/md";
import { BsTerminal } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import styles from "./Dashboard.module.scss";
import { useRouter } from "next/router";
import { PartialGuild } from "../../../utils/types";
import { FC, memo } from "react";
import { getIconUrl } from "../../../utils/helpers";
import { logout } from "../../../utils/api";

const routes = [
    {
        name: "dashboard",
        getPath: (id: string) => `/dashboard/${id}`,
        icon: <MdSpaceDashboard size={48} />,
    },
    {
        name: "commands",
        getPath: (id: string) => `/dashboard/${id}/commands`,
        icon: <BsTerminal size={48} />,
    },
    {
        name: "settings",
        getPath: (id: string) => `/dashboard/${id}/settings`,
        icon: <FaWrench size={48} />,
    },
]

type Props = {
    guild?: PartialGuild;
};

const Sidebar: FC<Props> = ({ guild }) => {
    const router = useRouter();
    return (
        <div className={styles.sidebar}>
            <Image className={styles.avatar} src={getIconUrl(guild)} height={80} width={80} alt="guild_avatar" />
            <div className={styles.icons}>
                {routes.map((route) => (
                    <div key={route.name} onClick={() => router.push(route.getPath(router.query?.id!.toString()))}>{route.icon}</div>
                ))}
            </div>
            <div>
                <RiLogoutCircleLine className={styles.logout__icon} size={48} onClick={async () => await logout()}/>
            </div>
        </div>
    );
}

export default memo(Sidebar);