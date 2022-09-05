import { useMovies } from "../../hooks/useMovies";
import { Loading } from "../Loading";
import { MostrarMovies } from "../MostrarMovies";

export const PropsTypes = () => {
  const query = "/discover/movie";
  const { movies, setpages, pages, loading } = useMovies({ consultas: query });

  if(loading){
    return <Loading/>
  }
  return (
    <>
      <MostrarMovies movies={movies} />

      <button
        onClick={() => setpages(pages - 1)}
        className="btn btn-outline-primary me-3"
      >
        Menos
      </button>
      <button
        onClick={() => setpages(pages + 1)}
        className="btn btn-outline-success"
      >
        Mas
      </button>
    </>
  );
};
