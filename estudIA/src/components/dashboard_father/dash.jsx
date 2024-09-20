import { Grid2 } from "@mui/material";
import WelcomeCard from "./welcomeCard";
import RegisteredChildren from "./registredChildrenCard";
import HoursStudied from "./hoursStudied";
import { Box } from "@mui/system";

const Dashboard = () => {
    return (
        <Grid2 container spacing={4}>
            <Grid2 item xs={12} md={6}>
                <WelcomeCard />
            </Grid2>
            <Grid2 item xs={12} md={6}>
                <RegisteredChildren />
            </Grid2>
        </Grid2>
    );
}

export default Dashboard;
