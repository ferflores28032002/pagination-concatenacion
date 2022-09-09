import { useEcomerme } from "../hooks/useEcomerme";
import "../estilos-css/ecomerme.css";

import { Link } from "react-router-dom";
export const Ecomermes = () => {
  const { movies } = useEcomerme({ consultas: "products" });
  return (
    <div className="caja-caja">
      <div className="container-fluid my-3">
        <div className="row">
          <div className="col-md-12 mt-5 text-center text-dark">
            <h1>
              Card Products <Link to="/">:(</Link>{" "}
            </h1>
            <hr />
          </div>
          <div className="col-md-12 d-flex flex-wrap gap-3 justify-content-center">
            {movies.map((movie) => (
              <div key={movie.id} className="card my-1 border-2" id="caja">
                <img
                  src={movie.image}
                  height="250px"
                  width="10rem"
                  className="card-img-top p-2"
                />
                <div className="card-body py-4">
                  <h1 className="card-title text-dark">$ {movie.price}</h1>
                  <p className="card-text text-dark">{movie.title}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
