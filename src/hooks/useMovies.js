import { useEffect, useState } from "react";

export const useMovies = ({ consultas, conca=true }) => {
  const [movies, setmovies] = useState([]);
  const [pages, setpages] = useState(1);
  const [loading, setloading] = useState(true);

  const API = async () => {
    const consulta = await fetch(
      `https://api.themoviedb.org/3${consultas}?page=${pages}&api_key=a8bf047869d000586a3eb83df8fa3819`
    );
    const resp = await consulta.json();
    const { results } = await resp;
    setloading(false);

    !conca ? setmovies(()=>movies.concat(results)) : setmovies(results); 
  };

  useEffect(() => {
    API();
  }, [pages]);

  return {
    movies,
    loading,
    setpages,
    pages,
  };
};
