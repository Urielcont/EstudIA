import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login';
import Dash from '../components/dashboard_father/dash'; // Asegúrate de importar el componente Dash
import Profiles from '../components/profiles/profiles'; // Asegúrate de importar el componente Dash
import Son from './son/pages/son';

function navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/hijo" element={<Son />} />
      
      </Routes>
    </Router>
  );
}

export default navigation;
