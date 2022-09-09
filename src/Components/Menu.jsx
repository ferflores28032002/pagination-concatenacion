import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="btn-group mt-3">
      <Link to={"/"}>
        <button className="btn btn-outline-primary">Pagination</button>
      </Link>

      <Link to={"/concatenation"}>
        <button className="btn btn-outline-danger">Concatenation</button>
      </Link>
      <Link to={"/ecomerme"}>
        <button className="btn btn-outline-warning">Comermes</button>
      </Link>
      {/* <button className='btn btn-outline-primary'></button> */}
    </div>
  );
};
