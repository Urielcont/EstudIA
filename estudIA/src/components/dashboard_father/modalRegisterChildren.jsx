import { useState } from 'react';
import { Modal, Card, CardContent, Typography, Box, TextField, Button } from '@mui/material';
import PropTypes from 'prop-types';  // Importamos PropTypes

const RegisterChildModal = ({ open, handleClose }) => {
    const [formValues, setFormValues] = useState({
        nombre: '',
        apellido: '',
        personajeFavorito: '',
        caricaturaFavorita: '',
        grado: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log('Formulario enviado:', formValues);
        handleClose();  // Cierra el modal después de enviar el formulario
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    padding: 2,
                }}
            >
                <Card sx={{ width: 400, padding: 3 }}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Registrar Niño
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Nombre"
                                name="nombre"
                                value={formValues.nombre}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                label="Apellido"
                                name="apellido"
                                value={formValues.apellido}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                label="Personaje Favorito"
                                name="personajeFavorito"
                                value={formValues.personajeFavorito}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                label="Caricatura Favorita"
                                name="caricaturaFavorita"
                                value={formValues.caricaturaFavorita}
                                onChange={handleChange}
                                fullWidth
                            />
                            <TextField
                                label="Grado"
                                name="grado"
                                value={formValues.grado}
                                onChange={handleChange}
                                fullWidth
                            />

                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Registrar
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Modal>
    );
};

// Validamos las props que el componente espera recibir
RegisterChildModal.propTypes = {
    open: PropTypes.bool.isRequired,    // 'open' es un booleano y es obligatorio
    handleClose: PropTypes.func.isRequired, // 'handleClose' es una función y es obligatorio
};

export default RegisterChildModal;
