import { Grid2 } from "@mui/material";
import WelcomeCard from "./welcomeCard";
import RegisteredChildren from "./registredChildrenCard";
import HoursStudied from "./hoursStudied";
import { Box } from "@mui/system";

const Dashboard = () => {
    return (
        <Box
        sx={{
            paddingLeft: {
                xs: 2,
                sm: 2,
                md: 5,
            },
            paddingBottom: {
                xs: 1,
                sm: 2,
                md: 5,
            },
        }}>
        <Grid2
            container
            spacing={4}
            sx={{
                bgcolor: '#ADD8E6', // Color de fondo azul claro
                minHeight: '100vh', // Asegura que el fondo cubra toda la altura de la vista
                padding: 2, // Espaciado interno
            }}
        >
        <Grid2 item xs={12} md={7} sx={{ display: 'flex', alignItems: 'stretch', mt: 7 }}>

                <WelcomeCard />
            </Grid2>
            <Grid2 item xs={12} md={7} sx={{ display: 'flex', alignItems: 'stretch', mt: 7 }}>
            <RegisteredChildren />
            </Grid2>
            <Grid2 item xs={12} md={7} sx={{ display: 'flex', alignItems: 'stretch', mt: 7 }}>
            <HoursStudied />
            </Grid2>
        </Grid2>
       </Box>
    );
}

export default Dashboard;
