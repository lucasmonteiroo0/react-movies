import { useParams } from "react-router-dom";
import { MovieImage } from "../../components/MovieImage/MovieImage";
import styles from "./MovieDetails.module.css";
import { useGetMovieDetails } from "../../hooks/useGetMovieDetails";

export function MovieDetails() {

    const params = useParams();
    const movie = useGetMovieDetails(params.movieId)  

    return (
        <article className={styles.movie}>
            <MovieImage path={movie.poster_path} size={500} />

            <div className={styles.movieInfo}>
                <h1>{movie.title}</h1>
                <div className={styles.movieDescription}>{movie.overview}</div>
            </div>
        </article>
    );
}
