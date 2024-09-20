import { Card, IconButton } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Asegúrate de tener el ícono de Material-UI instalado

const Bar = () => {
    return (
        <Card sx={{
            top: -40,
            width: "100%", // Asegúrate de que ocupe todo el ancho
            height: '60px', // Ajusta la altura según sea necesario
            position: 'relative', // Para posicionar el ícono
            padding: 2, // Espaciado interno
        }}>
            <IconButton
                sx={{
                    position: 'absolute',
                    top: "40%",
                    right: 20,
                    color: '#7FAFC9', // Color del ícono
                    height:"30px"
                }}
            >
                <AccountCircleIcon fontSize="large" />
            </IconButton>
        </Card>
    );
}

export default Bar;
