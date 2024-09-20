import { Card, CardContent, Grid2, Typography } from "@mui/material";

const WelcomeCard = () => {
    return (
        <Card sx={{
            borderRadius: 5,
            minWidth: "100%"
        }}>
               <CardContent className="content-card" sx={{ position: 'relative' }}>
               <Grid2 container spacing={2}>
                <Typography variant="h3" >
                   Bienvenido Usuario
                </Typography>
                <Typography variant="h4" >
                 Esta es la informacion de tu hijo/a
                </Typography>
                </Grid2>
            </CardContent>
        
        </Card>
     
    );
}

export default WelcomeCard;
