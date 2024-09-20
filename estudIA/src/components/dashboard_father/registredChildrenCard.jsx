import { useState } from "react";
import { Card, CardContent, IconButton, Typography } from "@mui/material";
import Add from "@mui/icons-material/Add";
import RegisterChildModal from './modalRegisterChildren'; // Asegúrate de importar el modal

const RegistredChildren = () => {
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    return (
        <>
            <Card sx={{
                borderRadius: 5,
                width: "220px",
                height: "200px",
                position: 'relative', // Para posicionar el ícono
                display: 'flex', // Para usar flexbox
                flexDirection: 'column', // Dirección de los elementos
                justifyContent: 'center', // Centrar verticalmente
                alignItems: 'center', // Centrar horizontalmente
                textAlign: 'center', // Alinear el texto al centro
            }}>
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        color: '#7FAFC9', // Color del ícono
                    }}
                    onClick={handleOpenModal} // Maneja el evento de clic
                >
                    <Add />
                </IconButton>
                <CardContent>
                    <Typography variant="h5">
                        Hijos Registrados
                    </Typography>
                    <Typography variant="h2">
                        1
                    </Typography>
                </CardContent>
            </Card>

            {/* Aquí renderizas el modal */}
            <RegisterChildModal  open={open} handleClose={handleCloseModal} />
        </>
    );
};

export default RegistredChildren;
