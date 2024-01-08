import { useState, useEffect } from 'react';

const useJugadoresList = () => {
  const [jugadores, setJugadores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en el fetch: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setJugadores(data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return {
    jugadores,
    isLoading,
    error,
  };
};

export default useJugadoresList;

