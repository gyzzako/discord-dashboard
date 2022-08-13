import { createContext, ReactElement, useContext, useEffect, useRef } from "react";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import styles from "./Dashboard.module.scss";
import { GuildContext } from "../../../utils/contexts/GuildContext";
import { useLoggedIn } from "../../../utils/hooks/LoggedInHook";
import { useRouter } from "next/router";

export function DashboardLayout({children} : {children: ReactElement}) {
    const router = useRouter();
    const { guild } = useContext(GuildContext);
    const isLoggedIn = useLoggedIn()

    useEffect(() => {
        console.log(isLoggedIn)
        if(!isLoggedIn) router.push("/");
    })

    return (
        <>
            <Sidebar guild={guild}/>
            <Appbar  guild={guild}/>
            <main className={styles.layout}>
                <>{children}</>
            </main>
        </>
    );
}