import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  Paper,
  Container,
  Snackbar,
  Alert,
} from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function LoginForm({ onLogin }) {
  const [value, setValue] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      const message = value === 0 ? 'Inicio de sesión exitoso' : 'Registro exitoso';
      setSnackbarMessage(message);
      onLogin({ email, password });
    } else {
      setSnackbarMessage('Por favor, complete todos los campos');
    }
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpenSnackbar(false);
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width:'100%',
        bgcolor: '#ffffff', // Fondo blanco
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            mt: 3,
            bgcolor: '#7FAFC9', // Color de fondo del contenedor
            color: '#ffffff', // Letras blancas dentro del contenedor
            padding: 2, // Añade algo de padding para espaciar mejor el contenido
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="login register tabs"
            variant="fullWidth"
            sx={{
              '.MuiTab-root': {
                color: '#ffffff', // Cambiar el color del texto de las tabs a blanco
              },
              '.Mui-selected': {
                color: '#ffffff', // Asegura que la tab seleccionada también sea blanca
              },
              '.MuiTabs-indicator': {
                backgroundColor: '#ffffff', // Indicador de selección blanco
              },
            }}
          >
            <Tab label="Iniciar Sesión" />
            <Tab label="Registrarse" />
          </Tabs>
          <TabPanel value={value} index={0}>
          <Typography
          component="h1"
          variant="h4"
          gutterBottom
          sx={{ color: '#ffffff' }} // Letras blancas
        >
          Bienvenidos a EstudIA
        </Typography>
        <Typography
          component="span"
          gutterBottom
          sx={{ color: '#ffffff' }} // Letras blancas
        >
          Estudia es una aplicacion que fomenta el estudio a nivel de educacion primaria 
        </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{ style: { color: '#ffffff' } }} 
                InputProps={{
                  style: { color: '#ffffff' },
                }}
                size="small" // Reduce la altura del input
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{ style: { color: '#ffffff' } }} 
                InputProps={{
                  style: { color: '#ffffff' },
                }}
                size="small" // Reduce la altura del input
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#ffffff', color: '#7FAFC9' }} // Botón con texto azul y fondo blanco
              >
                Iniciar Sesión
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="register-email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{ style: { color: '#ffffff' } }} // Color de la etiqueta
                InputProps={{
                  style: { color: '#ffffff' }, // Color del texto
                }}
                size="small" // Reduce la altura del input
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="register-password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputLabelProps={{ style: { color: '#ffffff' } }} // Color de la etiqueta
                InputProps={{
                  style: { color: '#ffffff' }, // Color del texto
                }}
                size="small" // Reduce la altura del input
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#ffffff', color: '#7FAFC9' }} // Botón con texto azul y fondo blanco
              >
                Registrarse
              </Button>
            </Box>
          </TabPanel>
        </Paper>
      </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
