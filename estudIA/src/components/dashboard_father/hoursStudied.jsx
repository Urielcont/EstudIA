               
import { Card, CardContent, Typography } from "@mui/material";

const HoursStudied   = () => {
    return (
        <Card sx={{
            borderRadius: 5,
            minWidth: "100%"
        }}>
            <CardContent>
                <Typography variant="h5" >
                   Tiempode Estudio
                </Typography>
                <Typography variant="h2" >
                    16hrs                </Typography>
                    <Typography variant="h5" >
                   por semana
                </Typography>
            </CardContent>
        </Card>
    );
}

export default HoursStudied  ;
