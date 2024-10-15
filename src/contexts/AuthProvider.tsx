import { createContext, useState, useContext, useEffect, ReactNode} from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ADMIN_TOKEN, USER_TOKEN, ADMIN_USERNAME, USER_USERNAME, ADMIN_PASSWORD, USER_PASSWORD } from '../lib/constants';

interface UserContextType {
  user: User | null;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
  isAdmin: boolean;
  error: string;
}

interface User {
  id: number | null;
  username: string;
  role: 'admin' | 'user';
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');

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
      setError('Credenciales inválidas, intente nuevamente');
      return;
    }
    localStorage.setItem('token', newToken);
    const decodedToken = jwtDecode<User>(newToken);
    setUser(decodedToken);
    setIsAdmin(decodedToken.role === 'admin');
    navigate(`/${decodedToken.role.toLowerCase()}`);
  };

  const isLoggedIn = () => {
    return !!user;
  }

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      loginUser, 
      logout, 
      isLoggedIn, 
      isAdmin, 
      error 
    }}>
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
