import styles from "./Dashboard.module.scss";
import { RiMenu3Line } from "react-icons/ri";
import { useRouter } from "next/router";

export const Appbar = () => {
    const router = useRouter();
    return (
        <div className={styles.appbar}>
            <div className={styles.menu} onClick={() => router.push("/menu")}>
                <RiMenu3Line size={60} />
                <p>Menu</p>
            </div>
            <div>
                <p>GyzzakO Bot</p>
            </div>
        </div>
    );
}