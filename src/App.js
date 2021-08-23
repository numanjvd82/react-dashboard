import AuthProvider from './context/AuthContext';
import './App.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
