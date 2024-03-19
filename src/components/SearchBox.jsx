import { useContext } from "react";
import { NoteContext } from "../store/notes-context";

const SearchBox = () => {
  const { search, notes } = useContext(NoteContext);

  return (
    <div className="container flex justify-end">
      {notes.length > 0 ? (
        <input
          type="search"
          placeholder="Search"
          className="border mr-20 my-5 p-2"
          // value={searchText}
          // onChange={(e) => setSearchText(e.target.value)}
          onChange={search}
          // onKeyDown={search}
        />
      ) : null}
      {/* <button onClick={handleSearch}>Search</button> */}
    </div>
  );
};

export default SearchBox;
