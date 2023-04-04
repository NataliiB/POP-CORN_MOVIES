import SearchBox from "../SearchBox/SearchBox";
import "./Head.css"

const Head =(props)=>{
    return (
        <div>
            <div className="head-name">POP CORN</div>
        <SearchBox searchMovie={props.searchMovie} setSearchMovie = {props.setSearchMovie}/>
        </div>
        
    )
}
export default Head;