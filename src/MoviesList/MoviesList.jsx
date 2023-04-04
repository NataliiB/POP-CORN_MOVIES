import AddToFavorite from "../AddToFavorite/AddToFavorite";
import "./Movieslist.css";

const MoviesList = (props) => {
  let arrayFromMovies = props.movies;
  console.log(arrayFromMovies)



  return (
    <div>
          <div className="movie-wrapper">
      {arrayFromMovies.map((movie) => (
        <div сlassName="movie-item">
            <div className="title">{movie.title}</div>
          <div className="img-container">
          <img
            src={props.images[arrayFromMovies.findIndex((m) => m == movie)]}
            alt="Image"
          />
          <div className="over-lay" onClick={props.addFavoriteMovie(movie)} ><AddToFavorite /></div>
          </div>
         
        </div>
      ))}
    </div>
    </div>

  );
};
export default MoviesList;
