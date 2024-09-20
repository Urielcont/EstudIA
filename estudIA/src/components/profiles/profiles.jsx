import { useState } from "react";
import { Card, CardContent, Typography, Box, TextField, Button, Grid2 } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Profiles = () => {
    const [showInput, setShowInput] = useState(false);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        setShowInput(!showInput);
    };

    const handleChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRedirectClick = () => {
        navigate("/ruta-del-archivo"); // Cambia esto a la ruta real
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
                                }} onClick={() => console.log(password)}>
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
