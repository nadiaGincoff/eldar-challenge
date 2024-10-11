import { createContext, useState, useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ADMIN_TOKEN: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6IkJyZXQiLCJyb2xlIjoiMSJ9.TauEFAzDVttOXbEPAF7QPTG2cdxu9lz3uBtwAveyQ4A"
const USER_TOKEN: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJ1c2VybmFtZSI6IkFudG9uZXR0ZSIsInJvbGUiOiIyIn0.zZMEgeRL5uR24sEcA-1XTHRzsT2dYhMN-Zegfpzim_k"
const ADMIN_USERNAME: string = "Bret"
const USER_USERNAME: string = "Antonette" 
const ADMIN_PASSWORD: string = "admin123"
const USER_PASSWORD: string = "user123"

interface UserContextType {
  user: User | null;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

interface User {
  id: string;
  username: string;
  role: 'admin' | 'user';
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    const user = localStorage.getItem('user');
    const currentToken = localStorage.getItem('token');
    if (user && currentToken) {
      setUser(JSON.parse(user));
      setToken(currentToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
    }
    setIsReady(true);
  }, []);

  const loginUser = (username: string, password: string) => {
    let newToken: string;
    // Se asume que los usuarios y contraseñas son hardcodeados para este desafío (utilizando nombres de usuario de la API del desafío)
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      newToken = ADMIN_TOKEN;
    } else if (username === USER_USERNAME && password === USER_PASSWORD) {
      newToken = USER_TOKEN;
    } else {
      //TODO: Mostrar mensaje de error al usuario
      console.log("Invalid credentials");
      return;
    }
    localStorage.setItem('token', newToken);
    const decodedToken = jwtDecode<User>(newToken);
    setUser(decodedToken);
    navigate("/");
  };

  const isLoggedIn = () => {
    return !!user;
  }

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken("");
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logout, isLoggedIn }}>
      {isReady ? children : null}
    </UserContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(UserContext) 
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
