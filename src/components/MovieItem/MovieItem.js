import { Link } from "react-router-dom";
import { MovieImage } from "../MovieImage/MovieImage";
import styles from "./MovieItem.module.css";

export function MovieItem({ movie }) {
    return (
        <div className={styles.movie}>
            <h3>{movie.title}</h3>

            <MovieImage path={movie.poster_path} />

            <div className={styles.movieInfo}>
                <div>
                    <strong>Data de lançamento</strong>
                    {new Date(movie.release_date).getDate()}
                </div>
            </div>
            <div className={styles.movieFooter}>
                <Link to={`/movie/${movie.id}`}>Ver detalhes</Link>
            </div>
        </div>
    );
}
