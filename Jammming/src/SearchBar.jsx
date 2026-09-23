import { useState } from "react";

function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearch(){
        props.onSearch(searchTerm)

    }


return (
    <>
    <h1>SearchBar</h1>
    <div>
    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
    <button onClick={handleSearch}>search</button>
    </div>
    
    </>
)
}

export default SearchBar;