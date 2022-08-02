import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/layout/dashboard/Dashboard";
import { NextPageWithLayout } from "../../../utils/types";

const SettingsPage: NextPageWithLayout = () => {
    return (
        <div>
            Settings Page
        </div>
    );
}

SettingsPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
}

export default SettingsPage;