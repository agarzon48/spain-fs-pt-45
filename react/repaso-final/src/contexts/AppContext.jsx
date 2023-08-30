import { createContext, useContext, useMemo, useState, useEffect } from "react";

import useResources from "../hooks/useResources";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [people, peopleAreLoading] = useResources("people");
  const [vehicles, vehiclesAreLoading] = useResources("vehicles");
  const [planets, planetsAreLoading] = useResources("planets");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const LSFavorites = localStorage.getItem('favorites');

    if (LSFavorites) {
      setFavorites(JSON.parse(LSFavorites));
      return;
    }
  }, []);

    const isLoading = useMemo(() => {
        return peopleAreLoading || vehiclesAreLoading || planetsAreLoading
    }, [peopleAreLoading, planetsAreLoading, vehiclesAreLoading]);
  
  const addToFavorites = (uid, name) => setFavorites(prev => {
    localStorage.setItem("favorites", JSON.stringify([...prev, { uid, name }]));
    return [...prev, { uid, name }]
  });

  const removeFromFavorites = (uid) =>
    setFavorites((prev) => {
      const newFavs = prev.filter((favorite) => favorite.uid !== uid);
      localStorage.setItem(
        "favorites",
        JSON.stringify(newFavs)
      );
      return newFavs;
    });
    
    const store = {
      people,
      vehicles,
      planets,
      isLoading,
      favorites,
    };

  const actions = {
    addToFavorites,
    removeFromFavorites
  };

    return <AppContext.Provider value={{store, actions}}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
