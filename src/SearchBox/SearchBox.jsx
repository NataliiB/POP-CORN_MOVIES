

const SearchBox = (props) => {
    return (
        <div><input className="search" value={props.value} onChange={(event)=>{props.setSearchMovie(event.target.value) }} placeholder='Type to search...'></input></div>
    )
};
export default SearchBox;