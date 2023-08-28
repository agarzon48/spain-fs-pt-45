import { createContext, useContext, useState, useEffect } from 'react';

// 1. Creamos el contexto
const CountContext = createContext();

// 2. Creamos el proveedor (provider)
export const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userRole, setUserRole] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const increment = () => setCount((count) => count + 1);
  const login = () => {
    setIsLoggedIn(true);
    setUserName('Pepito');
    setUserRole('Admin');
  };
  const logout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setUserRole(null)
  }

  useEffect(() => {
    setIsLoading(true);
    // Proceso de login (fetch)
    setTimeout(() => {
      login();
      setIsLoading(false);
    }, 1000);
  }, []);

  const saveUserInLocalStorage = (user) => {
    const stringifiedUser = JSON.stringify(user);
    localStorage.setItem('user', stringifiedUser);
  };

  const getUserFromLocalStorage = () => {
    const rawUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(rawUser);
    console.log(parsedUser);
    return parsedUser;
  };

  const deleteUserFromLocalStorage = () => localStorage.removeItem('user')

  const store = { count, isLoggedIn, userName, userRole, isLoading };

  const actions = {
    increment,
    login,
    logout,
    saveUserInLocalStorage,
    getUserFromLocalStorage,
    deleteUserFromLocalStorage,
  };

    return (
      <CountContext.Provider value={{ store, actions }}>{children}</CountContext.Provider>
    );
}

// 3. Creamos el consumidor(consumer)
const useCountContext = () => useContext(CountContext);

export default useCountContext;