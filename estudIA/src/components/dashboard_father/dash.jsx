import { Grid } from "@mui/material";
import WelcomeCard from "./welcomeCard";
import RegisteredChildren from "./registredChildrenCard";

const Dashboard = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <WelcomeCard />
            </Grid>
            <Grid item xs={12} md={6}>
                <RegisteredChildren />
            </Grid>
        </Grid>
    );
}

export default Dashboard;
