import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/layout/dashboard/Dashboard";
import { useCurrentGuild } from "../../../utils/hooks/CurrentGuildHook";
import { NextPageWithLayout } from "../../../utils/types";


type Props = {
}

const SettingsPage: NextPageWithLayout<Props> = () => {
    const guild = useCurrentGuild();

    return (
        <div>
            Settings Page
            <p>{guild?.name}</p>
        </div>
    );
}

SettingsPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
}


export default SettingsPage;