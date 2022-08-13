import { GetServerSidePropsContext } from "next";
import { ReactElement, useContext, useEffect } from "react";
import { DashboardLayout } from "../../../components/layout/dashboard/Dashboard";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/contexts/GuildContext";
import { useCurrentGuild } from "../../../utils/hooks/CurrentGuildHook";
import { NextPageWithLayout, PartialGuild } from "../../../utils/types";

type Props = {
}

const DashboardPage: NextPageWithLayout<Props> = () => {
    const guild = useCurrentGuild();

    return (
        <div>
            Dashboard Page
            <p>{guild?.name}</p>
        </div>
    );
}

DashboardPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
}


export default DashboardPage;