
const Favorites = (props) => {
    console.log(props.favorites[0])
    return (
    <div>{props.favorites.map(((favorite)=>(<div>{favorite.title}</div>)))}</div>
    )
}
export default Favorites;