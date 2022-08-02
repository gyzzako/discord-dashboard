import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import { GuildMenuItem } from "../../components/guilds/GuildMenuItem";
import { BaseLayout } from "../../components/layout/base/Base";
import { fetchMutualGuilds } from "../../utils/api";
import { Guild } from "../../utils/types";
import styles from './index.module.scss';

type Props = {
    guilds: Guild[];
}

type MenuPageWithLayout = NextPage<Props> & {
    getLayout: (page: ReactElement) => ReactNode;
}

const MenuPage: MenuPageWithLayout = ({guilds}) => {
    const router = useRouter();
    return(
        <div className="container">
            <div className={styles.guilds}>
                <h1 className={styles.title}>Please Select a Guild</h1>
                {guilds.map((guild) => <div key={guild.id} onClick={() => router.push(`/dashboard/${guild.id}`)}><GuildMenuItem guild={guild}/></div> )}
            </div>
        </div>
    );
};

export async function getServerSideProps(context: GetServerSidePropsContext){
    return await fetchMutualGuilds(context);
}

MenuPage.getLayout = function (page: ReactElement) {
    return <BaseLayout>{page}</BaseLayout>
}

export default MenuPage;