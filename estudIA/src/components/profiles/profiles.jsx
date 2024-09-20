import { useState } from "react";
import { Card, CardContent, Typography, Box, TextField, Button, Grid2, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Woman from '../../assets/Woman.png'; // Asegúrate de tener estas imágenes en tu proyecto
import ChildAvatar from '../../assets/Astronaut.png';   // Asegúrate de tener estas imágenes en tu proyecto

const Profiles = () => {
    const [showInput, setShowInput] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        setShowInput(true); // Mostrar el campo de contraseña
    };

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        if (password === '1234') { // Contraseña falsa para el ejemplo
            navigate("/dash"); // Redirigir a la ventana de dash
        } else {
            alert("Contraseña incorrecta"); // Manejo básico de error
        }
    };

    const handleRedirectClick = () => {
        navigate("/son"); // Redirigir al perfil de hijo
    };

    return (
        <Grid2 container spacing={0} justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', bgcolor: '#376981' }}>
            <Grid2 item xs={12} md={6} sx={{margin:'10vh'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Card
                        sx={{
                            borderRadius: '50%', 
                            minWidth: "150px", 
                            minHeight: "150px", 
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                        }}
                        onClick={handleClick}
                    >
                        <CardContent sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar alt="Padre" src={Woman} sx={{ width: 100, height: 100 }} />
                        </CardContent>
                    </Card>
                    <Typography sx={{ marginTop: 1, color: '#ffffff' }}>
                        Padre
                    </Typography>

                    {showInput && (
                        <Box sx={{ 
                            marginTop: 1, 
                            textAlign: 'center', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <TextField
                                id="standard-password-input"
                                label="Password"
                                type="password"
                                value={password}
                                onChange={handleChange}
                                autoComplete="current-password"
                                variant="standard"
                                InputProps={{
                                    sx: {
                                        color: '#fff',
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        color: '#fff', 
                                        '&.Mui-focused': {
                                            color: '#fff'
                                        },
                                    },
                                }}
                                sx={{
                                    '& .MuiInputBase-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#fff'
                                        },
                                    },
                                    '& .MuiInputBase-input': {
                                        color: '#fff',
                                    },
                                }}
                            />

                            <Button variant="contained" sx={{ 
                                width: "10vh", 
                                height: "4vh", 
                                marginTop: 1.5, 
                                bgcolor: '#ffffff', 
                                color: '#376981' 
                            }} onClick={handleLogin}>
                                Enviar
                            </Button>
                        </Box>
                    )}
                </Box>
            </Grid2>

            <Grid2 item xs={12} md={6} sx={{margin:'10vh'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <Card
                        sx={{
                            borderRadius: '50%',
                            minWidth: "150px",
                            minHeight: "150px",
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                        }}
                        onClick={handleRedirectClick}
                    >
                        <CardContent sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar alt="Hijo" src={ChildAvatar} sx={{ width: 100, height: 100 }} />
                        </CardContent>
                    </Card>
                    <Typography sx={{ marginTop: 1, color: '#ffffff' }}>
                        Hijo
                    </Typography>
                </Box>
            </Grid2>
        </Grid2>
    );
}

export default Profiles;
