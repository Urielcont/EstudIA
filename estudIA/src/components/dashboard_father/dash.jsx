import { Grid2 } from "@mui/material"; // Usa `Grid` en vez de `Grid2`
import WelcomeCard from "./welcomeCard";
import RegisteredChildren from "./registredChildrenCard";
import HoursStudied from "./hoursStudied";
import { Box } from "@mui/system";
import Bar from "../bar";
import StatisticsCard from "./statisticsSubjectsCard";
import SubjectsTable from "./subjectsTable";

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
            
            {/* Primera fila con tres componentes */}
            <Grid2
                container
                spacing={4}
                sx={{
                    flexGrow: 1, 
                    mt: 7,
                }}
            >
                <Grid2 item xs={12} sm={4} md={4} lg={4} sx={{ display: 'flex', alignItems: 'stretch' }}>
                    <WelcomeCard />
                </Grid2>

                <Grid2 item xs={12} sm={4} md={4} lg={4} sx={{ display: 'flex', alignItems: 'stretch' }}>
                    <RegisteredChildren />
                </Grid2>

                <Grid2 item xs={12} sm={4} md={4} lg={4} sx={{ display: 'flex', alignItems: 'stretch' }}>
                    <HoursStudied />
                </Grid2>
            </Grid2>

            {/* Segunda fila con la gráfica y la tabla */}
            <Grid2
                container
                spacing={4}
                sx={{
                    flexGrow: 1, 
                    mt: 4, // Espacio entre la fila superior y la inferior
                }}
            >
                <Grid2 item xs={12} md={6} lg={6} sx={{ display: 'flex', alignItems: 'stretch' }}>
                    <StatisticsCard />
                </Grid2>

                <Grid2 item xs={12} md={6} lg={6} sx={{ display: 'flex', alignItems: 'stretch' }}>
                    <SubjectsTable />
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default Dashboard;
