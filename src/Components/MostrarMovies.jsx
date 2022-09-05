import styles from "../estilos-css/MostrarMovies.module.css";

export const MostrarMovies = ({ movies }) => {
  const img = "https://image.tmdb.org/t/p/original";
  return (
    <div className={styles.caja}>
      {movies.map((movie) => (
        <div key={movie.id} className={styles.caja2}>
          <img
            src={img + movie.poster_path}
            alt={movie.title ? movie.title : movie.name}
          />
          <p key={movie.id}>{movie.title ? movie.title : movie.name}</p>
        </div>
      ))}
    </div>
  );
};
