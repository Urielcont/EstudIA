import { Card, CardContent, Grid2, Typography } from "@mui/material";

const WelcomeCard = () => {
    return (
        <Card sx={{
            borderRadius: 5,
            width: "800px",
            height: "200px"
        }}>
            <CardContent className="content-card" sx={{ position: 'relative' }}>
                <Grid2 container spacing={2} direction="column"> {/* Cambiado a dirección columna */}
                    <Grid2 item>
                        <Typography variant="h3">
                            Bienvenido Usuario
                        </Typography>
                    </Grid2>
                    <Grid2 item>
                        <Typography variant="h4">
                            Esta es la información de tu hijo/a
                        </Typography>
                    </Grid2>
                </Grid2>
            </CardContent>
        </Card>
    );
}

export default WelcomeCard;
