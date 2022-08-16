const SearchBar = ({ onChangeValue}) => {

    const handleChange = (e) => {
        onChangeValue(e.target.value)
    }


    return(
        <div>
            <input onChange={handleChange} placeholder="Search By Title"/>
        </div>
    )
}

export default SearchBar