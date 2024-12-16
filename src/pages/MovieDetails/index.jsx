import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router";

export function MovieDetails() {

    const { id } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function getInformation() {
            const response = await api.get(`/movie/${id}`);
            setMovie(response.data);
        }

        getInformation();
    })

    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-red-600 text-center text-4xl font-semibold p-8 font-oswald">
                {movie.title}
            </h1>
            <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
            />
            <p className="text-white text-center font-oswald text-2xl p-10">{movie.overview}</p>
        </div>
    );
}