import { useMovies } from "../hooks/useMovies";
import { Loading } from "./Loading";
import { MostrarMovies } from "./MostrarMovies";

export const TvDiscover = () => {
  const { movies, pages, setpages, loading } = useMovies({
    consultas: "/discover/tv",
    conca: false,
  });
  if(loading){
    return <Loading/>
  }

  return (
    <div className="container mt-4">
      <MostrarMovies movies={movies} />

      <div className="d-grid mt-4 mb-5">
        <button onClick={()=> setpages(pages + 1)} className="btn btn-primary">Ver Más</button>
      </div>
    </div>
  );
};
