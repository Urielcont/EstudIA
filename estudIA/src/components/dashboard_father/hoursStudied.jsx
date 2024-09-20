               
import { Card, CardContent, Typography } from "@mui/material";

const HoursStudied   = () => {
    return (
         <Card sx={{
            borderRadius: 5,
            width: "220px",
            height: "200px",
            position: 'relative', // Para posicionar el ícono
            display: 'flex', // Para usar flexbox
            flexDirection: 'column', // Direccion de los elementos
            justifyContent: 'center', // Centrar verticalmente
            alignItems: 'center', // Centrar horizontalmente
            textAlign: 'center', // Alinear el texto al centro
        }}>
            <CardContent>
                <Typography variant="h5" >
                   Tiempo de Estudio
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
