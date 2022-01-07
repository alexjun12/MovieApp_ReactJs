import propTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImg, title, summary, genres}){
    return (
        <div>
        <img src = {coverImg} alt = {title} />
        <h2>
            <Link to = {`/movie/${id}`}>{title}</Link>
        </h2>
        <ul>{genres != null ? genres.map((g) => (
            <li key = {g}>{g}</li>
        )) : null}
        </ul>
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