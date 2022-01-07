import propTypes from "prop-types";
import {Link} from "react-router-dom";
import "../styles.css";

function Movie({id, coverImg, title, summary, genres}){
    return (
        <div className="Position">
        <hr className="lineSty"></hr>
        <Link to = {`/ReactProj_MovieApp/movie/${id}`}>
        <img className = "fadein" src = {coverImg} alt = {title} />
        </Link>
        <h2>{title}</h2>
            <div>{genres != null ? genres.map((g) => (
                <li key = {g}>{g}</li>
            )) : null}
            </div>
            <p>{summary}</p>
        </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
  }


export default Movie;