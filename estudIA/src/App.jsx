import { useState } from 'react';
import LoginForm from './components/login';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (loginData) => {
    setUser(loginData);
    console.log('Usuario logueado:', loginData);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#7FAFC9' }}>
      {!user ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <div style={{ textAlign: 'center', color: '#fff' }}>
          <h1>Bienvenido, {user.email}</h1>
          <button onClick={() => setUser(null)}>Cerrar Sesión</button>
        </div>
      )}
    </div>
  );
}

export default App;
