import { useState } from 'react';
import { Modal, Card, CardContent, Typography, Box, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PropTypes from 'prop-types'; // Importamos PropTypes

const RegisterChildModal = ({ open, handleClose }) => {
    const [formValues, setFormValues] = useState({
        nombre: '',
        apellido: '',
        personajeFavorito: '',
        caricaturaFavorita: '',
        grado: '',
    });

    const [errors, setErrors] = useState({}); // Estado para manejar las validaciones

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const validate = () => {
        let tempErrors = {};
        tempErrors.nombre = formValues.nombre ? "" : "El nombre es requerido";
        tempErrors.apellido = formValues.apellido ? "" : "El apellido es requerido";
        tempErrors.personajeFavorito = formValues.personajeFavorito ? "" : "El personaje favorito es requerido";
        tempErrors.caricaturaFavorita = formValues.caricaturaFavorita ? "" : "La caricatura favorita es requerida";
        tempErrors.grado = formValues.grado ? "" : "El grado es requerido";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === ""); // Retorna true si no hay errores
    };

    const handleSubmit = () => {
        if (validate()) {
            console.log('Formulario enviado:', formValues);
            handleClose(); // Cierra el modal después de enviar el formulario
        }
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
                <Card sx={{ width: 500, padding: 4 }}> {/* Modal más grande */}
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Registrar Niño
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}> {/* Mayor margen entre campos */}
                            <TextField
                                label="Nombre"
                                name="nombre"
                                value={formValues.nombre}
                                onChange={handleChange}
                                error={!!errors.nombre}
                                helperText={errors.nombre}
                                fullWidth
                                sx={{ borderRadius: 2 }} // Más redondeado
                            />
                            <TextField
                                label="Apellido"
                                name="apellido"
                                value={formValues.apellido}
                                onChange={handleChange}
                                error={!!errors.apellido}
                                helperText={errors.apellido}
                                fullWidth
                                sx={{ borderRadius: 2 }} // Más redondeado
                            />
                            <TextField
                                label="Personaje Favorito"
                                name="personajeFavorito"
                                value={formValues.personajeFavorito}
                                onChange={handleChange}
                                error={!!errors.personajeFavorito}
                                helperText={errors.personajeFavorito}
                                fullWidth
                                sx={{ borderRadius: 2 }} // Más redondeado
                            />
                            <TextField
                                label="Caricatura Favorita"
                                name="caricaturaFavorita"
                                value={formValues.caricaturaFavorita}
                                onChange={handleChange}
                                error={!!errors.caricaturaFavorita}
                                helperText={errors.caricaturaFavorita}
                                fullWidth
                                sx={{ borderRadius: 2 }} // Más redondeado
                            />

                            {/* Select para grados */}
                            <FormControl fullWidth error={!!errors.grado}>
                                <InputLabel>Grado</InputLabel>
                                <Select
                                    label="Grado"
                                    name="grado"
                                    value={formValues.grado}
                                    onChange={handleChange}
                                    sx={{ borderRadius: 2 }} // Más redondeado
                                >
                                    <MenuItem value="1°">1°</MenuItem>
                                    <MenuItem value="2°">2°</MenuItem>
                                    <MenuItem value="3°">3°</MenuItem>
                                    <MenuItem value="4°">4°</MenuItem>
                                    <MenuItem value="5°">5°</MenuItem>
                                    <MenuItem value="6°">6°</MenuItem>
                                </Select>
                                {errors.grado && <Typography color="error" variant="caption">{errors.grado}</Typography>}
                            </FormControl>

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

export default RegisterChildModal