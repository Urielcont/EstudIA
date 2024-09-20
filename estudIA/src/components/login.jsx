import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  Card,
  Grid2,
  
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

const Login = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();  
    navigate('/profiles');
  };

  return (
    <Grid2 
      container
      spacing={0}
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh', // Para asegurar que ocupe el 100% de la altura
        bgcolor: '#f5f5f5', // Fondo claro para diferenciar el contenido
      }}
    >
      <Grid2 item xs={12} sm={8} md={6} lg={4}>
        <Card
          sx={{
            p: 4,
            bgcolor: '#7FAFC9',
            color: '#ffffff',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="login register tabs"
            variant="fullWidth"
            sx={{
              '.MuiTab-root': {
                color: '#ffffff',
              },
              '.Mui-selected': {
                color: '#ffffff',
              },
              '.MuiTabs-indicator': {
                backgroundColor: '#ffffff',
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
              sx={{ color: '#ffffff', textAlign: 'center' }}
            >
              Bienvenidos a EstudIA
            </Typography>
            <Typography
              component="span"
              gutterBottom
              sx={{ color: '#ffffff', textAlign: 'center', display: 'block' }}
            >
              EstudIA es una aplicación que fomenta el estudio a nivel de educación primaria
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
                size="small"
                sx={{ bgcolor: '#ffffff', borderRadius: 1 }}
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
                size="small"
                sx={{ bgcolor: '#ffffff', borderRadius: 1 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#ffffff', color: '#7FAFC9' }}
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
                size="small"
                sx={{ bgcolor: '#ffffff', borderRadius: 1 }}
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
                size="small"
                sx={{ bgcolor: '#ffffff', borderRadius: 1 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: '#ffffff', color: '#7FAFC9' }}
              >
                Registrarse
              </Button>
            </Box>
          </TabPanel>
        </Card>
      </Grid2>
    </Grid2>
  );
};

export default Login;
