import { useState } from "react";
import { Card, CardContent, Typography, Box, TextField, Button, Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profiles = () => {
    const [showInput, setShowInput] = useState(false);
    const [password, setPassword] = useState('');

    const handleClick = () => {
        setShowInput(!showInput);
    };

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const navigate = useNavigate();

    const handleRedirectClick = () => {
        navigate("/ruta-del-archivo"); // Cambia esto a la ruta real
    };

    return (
        <Grid2 container spacing={0} sx={{ height: '100vh' }}> {/* Espaciado a 0 */}
            <Grid2 item xs={12} md={6}>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    bgcolor: '#7FAFC9', 
                    height: '100%' // Asegúrate de que el Box ocupe toda la altura
                }}>
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
                        <CardContent sx={{ width: '100%', height: '100%' }} />
                    </Card>
                    <Typography sx={{ marginTop: 1 }}>
                        Bienvenido Hijo
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
                            />
                            <Button variant="contained" sx={{ 
                                width: "10vh", 
                                height: "4vh", 
                                marginTop: 1.5, 
                                bgcolor: '#ffffff', 
                                color: '#7FAFC9' 
                            }} onClick={() => console.log(password)}>
                                Enviar
                            </Button>
                        </Box>
                    )}
                </Box>
            </Grid2>

            <Grid2 item xs={12} md={6}>
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    bgcolor: '#7FAFC9', 
                    height: '100%' // Asegúrate de que el Box ocupe toda la altura
                }}>
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
                        <CardContent sx={{ width: '100%', height: '100%' }} />
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
