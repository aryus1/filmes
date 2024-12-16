import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Slider from "react-slick";
import { Link } from "react-router";
import Footer from "../../components/Footer";

export function HomePage() {

    const [movie, setMovie] = useState([]);
    const [movieTopRated, setMovieTopRated] = useState([]);
    const [terrorMovie, setTerrorMovie] = useState([]);
    const [actionMovie, setActionMovie] = useState([]);
    const [crimeMovie, setCrimeMovie] = useState([]);
    const [comedyMovie, setComedyMovie] = useState([]);

    useEffect(() => {
        async function getMoviePopular() {
            const response = await api.get('/movie/popular');
            setMovie(response.data.results);
        }

        getMoviePopular();
    }, []);

    useEffect(() => {
        async function getMovieTopRated() {
            const reponse = await api.get('/movie/top_rated');
            setMovieTopRated(reponse.data.results);
        }

        getMovieTopRated();
    }, []);

    useEffect(() => {
        async function getTerrorMovie() {
            const response = await api.get('/discover/movie', {
                params: {
                    with_genres: 27
                }
            });

            setTerrorMovie(response.data.results);
        }

        getTerrorMovie();
    }, []);

    useEffect (() => {
        async function getActionMovie(){
            const response = await api.get('/discover/movie',{
                params: {
                    with_genres: 28
                }
            });

            setActionMovie(response.data.results);
        }

        getActionMovie();
    })

    useEffect (() => {
        async function getCrimeMovie(){
            const response = await api.get('/discover/movie', {
                params: {
                    with_genres: 80
                }
            });

            setCrimeMovie(response.data.results);
        }

        getCrimeMovie();
    })

    useEffect (() => {
        async function getComedyMovie(){
            const response = await api.get('/discover/movie', {
                params: {
                    with_genres: 35
                }
            });

            setComedyMovie(response.data.results);
        }

        getComedyMovie();
    })

    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
    };

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-red-600 text-4xl font-semibold text-center p-8 mb-10 font-oswald">
                MOVIE APP
            </h1>
            <section className="w-full max-w-7xl px-4">
                <h2 className="text-red-600 text-center text-2xl font-semibold p-8 font-oswald">
                    FILMES POPULARES
                </h2>
                <div>
                    <Slider {...settings} className="w-full">
                        {movie.map((item) => (
                            <div key={item.id} className="flex flex-col items-center mx-2">
                                <Link to={`/movie/${item.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={item.title}
                                        className="w-full max-w-sm rounded-lg"
                                    />
                                </Link>
                                <h3 className="text-center text-lg font-semibold p-2 text-red-500 font-oswald">{item.title}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <section className="w-full max-w-7xl px-4">
                <h2 className="text-red-600 text-center text-2xl font-semibold p-8 font-oswald mt-20">
                    FILMES BEM AVALIADOS
                </h2>
                <div>
                    <Slider {...settings} className="w-full">
                        {movieTopRated.map((item) => (
                            <div key={item.id} className="flex flex-col items-center mx-2">
                                <Link to={`/movie/${item.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={item.title}
                                        className="w-full max-w-sm rounded-lg"
                                    />
                                </Link>
                                <h3 className="text-center text-lg font-semibold p-2 text-red-500 font-oswald">{item.title}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <div  className="mt-20">
                <h2 className="text-red-600 text-4xl font-semibold text-center p-8 mb-10 font-oswald">NAVEGUE PELOS GENÊROS MAIS FAMOSOS</h2>
            </div>

            <section className="w-full max-w-7xl px-4">
                <h2 className="text-red-600 text-center text-2xl font-semibold p-8 font-oswald">
                    FILMES DE TERROR
                </h2>
                <div>
                    <Slider {...settings} className="w-full">
                        {terrorMovie.map((item) => (
                            <div key={item.id} className="flex flex-col items-center mx-2">
                                <Link to={`/movie/${item.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={item.title}
                                        className="w-full max-w-sm rounded-lg"
                                    />
                                </Link>
                                <h3 className="text-center text-lg font-semibold p-2 text-red-500 font-oswald">{item.title}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <section className="w-full max-w-7xl px-4">
                <h2 className="text-red-600 text-center text-2xl font-semibold p-8 font-oswald mt-20">
                    FILMES DE AÇÃO
                </h2>
                <div>
                    <Slider {...settings} className="w-full">
                        {actionMovie.map((item) => (
                            <div key={item.id} className="flex flex-col items-center mx-2">
                                <Link to={`/movie/${item.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={item.title}
                                        className="w-full max-w-sm rounded-lg"
                                    />
                                </Link>
                                <h3 className="text-center text-lg font-semibold p-2 text-red-500 font-oswald">{item.title}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <section className="w-full max-w-7xl px-4">
                <h2 className="text-red-600 text-center text-2xl font-semibold p-8 font-oswald mt-20">
                    FILMES DE CRIME
                </h2>
                <div>
                    <Slider {...settings} className="w-full">
                        {crimeMovie.map((item) => (
                            <div key={item.id} className="flex flex-col items-center mx-2">
                                <Link to={`/movie/${item.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={item.title}
                                        className="w-full max-w-sm rounded-lg"
                                    />
                                </Link>
                                <h3 className="text-center text-lg font-semibold p-2 text-red-500 font-oswald">{item.title}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <section className="w-full max-w-7xl px-4">
                <h2 className="text-red-600 text-center text-2xl font-semibold p-8 font-oswald mt-20">
                    FILMES DE COMÉDIA
                </h2>
                <div>
                    <Slider {...settings} className="w-full">
                        {comedyMovie.map((item) => (
                            <div key={item.id} className="flex flex-col items-center mx-2">
                                <Link to={`/movie/${item.id}`}>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                        alt={item.title}
                                        className="w-full max-w-sm rounded-lg"
                                    />
                                </Link>
                                <h3 className="text-center text-lg font-semibold p-2 text-red-500 font-oswald">{item.title}</h3>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            <Footer />
        </div>
    );
}