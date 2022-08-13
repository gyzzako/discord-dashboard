import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/layout/dashboard/Dashboard";
import { useCurrentGuild } from "../../../utils/hooks/CurrentGuildHook";
import { NextPageWithLayout, PartialGuild } from "../../../utils/types";

type Props = {
}


const CommandsPage: NextPageWithLayout<Props> = () => {
    const guild = useCurrentGuild();

    return (
        <div>
            Command Page
            <p>{guild?.name}</p>
        </div>
    );
}

CommandsPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
}

export default CommandsPage;