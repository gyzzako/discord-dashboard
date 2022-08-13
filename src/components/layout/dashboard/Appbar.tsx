import styles from "./Dashboard.module.scss";
import { RiMenu3Line } from "react-icons/ri";
import { useRouter } from "next/router";
import { FC, memo } from "react";
import { PartialGuild } from "../../../utils/types";

type Props = {
    guild?: PartialGuild;
};


const Appbar: FC<Props> = ({ guild }) => {
    const router = useRouter();
    return (
        <div className={styles.appbar}>
            <div className={styles.menu} onClick={() => router.push("/menu")}>
                <RiMenu3Line size={60} />
                <p>Menu</p>
            </div>
            <div>
                <p>{guild?.name || "GyzzakO Bot"}</p>
            </div>
        </div>
    );
}

export default memo(Appbar);