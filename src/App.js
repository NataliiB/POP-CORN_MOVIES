import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import MoviesList from "./MoviesList/MoviesList";
import Image00 from "./Images/Image00.jpg";
import Image01 from "./Images/Image01.jpg";
import Image02 from "./Images/Image02.jpeg";
import Image03 from "./Images/Image03.jpeg";
import Image04 from "./Images/Image04.jpg";
import Image05 from "./Images/Image05.jpg";
import Image06 from "./Images/Image06.jpg";
import Image07 from "./Images/Image07.jpg";
import Image08 from "./Images/Image08.jpg";
import Image09 from "./Images/Image09.jpg";
import Image10 from "./Images/Image10.jpg";
import Image11 from "./Images/Image11.jpg";
import Image12 from "./Images/Image12.jpg";
import Image13 from "./Images/Image13.jpg";
import Image14 from "./Images/Image14.jpg";
import Image15 from "./Images/Image15.jpg";
import Image16 from "./Images/Image16.jpg";
import Image17 from "./Images/Image17.jpg";
import Image18 from "./Images/Image18.jpg";
import Image19 from "./Images/Image19.jpg";
import Head from "./Head/Head";
import Favorites from "./Favorites/Favorites";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  let images = [
    Image00,
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Image07,
    Image08,
    Image09,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
  ];
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const request = async (searchMovie) => {
    axios
      .get(
        "https://api.themoviedb.org/4/list/7?s=${searchMovie}&api_key=302896cf41e02eecd778c1d1e71c7911"
      )
      .then((data) => setMovies(data.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    request();
  }, [searchMovie]);
  const addFavoriteMovie = (movie) => {
    let newFavorites = [];
    setFavorites([...newFavorites, movie]);
    console.log(newFavorites);
  };

  return (
    <div>
      <Head searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
      <a href="/my_favorites">My favorites</a>
      <MoviesList
        movies={movies}
        images={images}
        addFavoriteMovie={addFavoriteMovie}
        
      />


    </div>
  );
};

export default App;
