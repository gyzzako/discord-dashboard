import { ReactElement } from "react";
import { DashboardLayout } from "../../../components/layout/dashboard/Dashboard";
import { NextPageWithLayout } from "../../../utils/types";

const CommandsPage: NextPageWithLayout = () => {
    return (
        <div>
            Command Page
        </div>
    );
}

CommandsPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>
}

export default CommandsPage;