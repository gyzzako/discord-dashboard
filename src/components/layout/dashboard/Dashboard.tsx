import { ReactElement } from "react";
import { Appbar } from "./Appbar";
import { Sidebar } from "./Sidebar";
import styles from "./Dashboard.module.scss";

export function DashboardLayout({children} : {children: ReactElement}) {
    return (
        <>
            <Sidebar/>
            <Appbar />
            <main className={styles.layout}>
                <>{children}</>
            </main>
        </>
    );
}