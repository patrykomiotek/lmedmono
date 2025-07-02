// React Context Hook Pattern
import { createContext, useContext, useState } from 'react';

type AuthContextType = {
  isLogged: boolean;
  logIn: () => void;
  logOut: () => void;
  toggle: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const logIn = () => setIsLogged(true);
  const logOut = () => setIsLogged(false);
  const toggle = () => setIsLogged((value) => !value);

  return { isLogged, logIn, logOut, toggle };
};

type Props = {
  children: React.ReactNode;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'Oh no! Component should be placed inside AuthProvider component'
    );
  }

  return context;
};

export const AuthProvider = ({ children }: Props) => {
  const { isLogged, logIn, logOut, toggle } = useAuth();
  return (
    <AuthContext.Provider value={{ isLogged, logIn, logOut, toggle }}>
      {children}
    </AuthContext.Provider>
  );
};
