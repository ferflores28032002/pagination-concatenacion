import { useEffect, useState } from "react";

export const useEcomerme = ({ consultas }) => {
  const [movies, setmovies] = useState([]);
  const [loading, setloading] = useState(true);
  const API = async () => {
    const consulta = await fetch(`https://fakestoreapi.com/${consultas}`);
    const resp = await consulta.json();
    console.log(resp)
    setmovies(resp);
  };

  useEffect(() => {
    API();
  }, []);

  return {
    movies,
    loading,
  };
};
