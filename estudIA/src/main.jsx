import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Login from './components/login'; // Asegúrate de tener el componente Login
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>
);
