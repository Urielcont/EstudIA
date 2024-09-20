import { Card, CardContent, Typography } from "@mui/material";

const WelcomeCard = () => {
    return (
        <Card sx={{
            borderRadius: 5,
            minWidth: "100%"
        }}>
            <CardContent>
                <Typography variant="h3" >
                   Bienvenido Usuario
                </Typography>
                <Typography variant="h4" >
                 Esta es la informacion de tu hijo/a
                </Typography>
            </CardContent>
        </Card>
    );
}

export default WelcomeCard;
