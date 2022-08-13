import { GetServerSidePropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import GuildMenuItem from "../../components/guilds/GuildMenuItem";
import { fetchMutualGuilds } from "../../utils/api";
import { useLoggedIn } from "../../utils/hooks/LoggedInHook";
import { PartialGuild, NextPageWithLayout } from "../../utils/types";
import styles from './index.module.scss';

type Props = {
    guilds: PartialGuild[];
}

const MenuPage: NextPageWithLayout<Props> = ({guilds}) => {
    const router = useRouter();
    const isLoggedIn = useLoggedIn()

    useEffect(() => {
        if(!isLoggedIn) router.push("/");
    })
    
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

export default MenuPage;