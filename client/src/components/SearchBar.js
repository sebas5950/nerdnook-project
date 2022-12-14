import SearchIcon from "@material-ui/icons/Search";
const SearchBar = ({ onChangeValue }) => {
  const handleChange = (e) => {
    onChangeValue(e.target.value);
  };

  return (
    <div className="search-bar">
      <input onChange={handleChange} placeholder="Search By Title" />
      <SearchIcon fontSize="large"/>
    </div>
  );
};

export default SearchBar;
