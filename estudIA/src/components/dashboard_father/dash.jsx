import { Grid2 } from "@mui/material";
import WelcomeCard from "./welcomeCard";
import RegisteredChildren from "./registredChildrenCard";
import HoursStudied from "./hoursStudied";
import { Box } from "@mui/system";
import Bar from "../bar";
import StatisticsCard from "./statisticsSubjectsCard";

const Dashboard = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh', // Asegura que el Box cubra toda la altura de la vista
                bgcolor: '#ADD8E6', // Color de fondo azul claro
                padding: {
                    xs: 2,
                    sm: 2,
                    md: 5,
                },
            }}
        >
            <Bar />
            <Grid2
            container
            spacing={4}>
                
            <Grid2
                container
                spacing={4}
                sx={{
                    flexGrow: 1, // Permite que el Grid2 crezca para llenar el espacio restante
                }}
            >
                <Grid2 item xs={12} md={6}  lg={4}sx={{ display: 'flex', alignItems: 'stretch', mt: 7 }}>
                    <WelcomeCard />
                </Grid2>
                <Grid2 item xs={12} md={6}  lg={2}sx={{ display: 'flex', alignItems: 'stretch', mt: 7 }}>
                    <RegisteredChildren />
                </Grid2>
                <Grid2 item xs={12} md={6} lg={2} sx={{ display: 'flex', alignItems: 'stretch', mt: 7 }}>
                    <HoursStudied />
                </Grid2>
                <Grid2 item xs={12} md={6} lg={4} sx={{ display: 'flex', alignItems: 'stretch', mt: 7 }}>
                    <StatisticsCard />
                </Grid2>
            </Grid2>
            <Grid2
                container
                spacing={4}
                sx={{
                    flexGrow: 1, // Permite que el Grid2 crezca para llenar el espacio restante
                }}
            >
              
                <Grid2 item xs={12} md={6} sx={{ display: 'flex', alignItems: 'stretch', mt: 7 }}>
                    <RegisteredChildren />
                </Grid2>
                <Grid2 item xs={12} md={6} sx={{ display: 'flex', alignItems: 'stretch', mt: 7 }}>
                    <HoursStudied />
                </Grid2>
            </Grid2>
            </Grid2>
        </Box>
    );
}

export default Dashboard;
