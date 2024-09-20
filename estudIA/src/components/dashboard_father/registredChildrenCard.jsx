import { useState } from "react";
import { Card, CardContent, IconButton, Typography, Modal, Box } from "@mui/material";
import Add from "@mui/icons-material/Add";

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
                flexDirection: 'column', // Direccion de los elementos
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

            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        Registro de Estudio
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Aquí puedes agregar información adicional sobre el tiempo de estudio.
                    </Typography>
                    {/* Aquí puedes agregar más contenido y formularios para tu modal */}
                </Box>
            </Modal>
        </>
    );
};

export default RegistredChildren;
