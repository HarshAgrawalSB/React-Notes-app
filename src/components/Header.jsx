import { useContext, useRef, useState } from "react";
import ProfileImg from "../assets/profile-img.png";
import SortIcon from "../assets/icons8-descending-sorting-30.png";
import Modal from "./Modal";
import { NoteContext } from "../store/notes-context";

const Header = () => {
  const modal = useRef();
  const [isSort, setIsSort] = useState(false);
  const { sort, notes } = useContext(NoteContext);

  // let modalActions = <button onClick={addNote}>Add</button>;
  const handleAddNote = () => {
    modal.current.open();
  };

  return (
    <>
      {/* <Modal ref={modal} addNote={addNote} /> */}
      <Modal ref={modal} />

      <header className=" bg-stone-400 py-4">
        <div className="container mx-auto flex items-center justify-around">
          <div className="w-14 rounded-md bg-[inherit]">
            <img src={ProfileImg} alt="User Profile Image" />
          </div>

          <h1 className="text-2xl font-bold ">Notes Application</h1>

          {notes.length > 0 ? (
            <div>
              <img
                src={SortIcon}
                alt="Sorting Icon"
                onClick={() => {
                  setIsSort(!isSort);
                  // sort();
                }}
              />
            </div>
          ) : null}
          <select
            name="sort"
            id="sort"
            className={`${isSort === true ? "" : "hidden"}`}
            onChange={sort}
          >
            <option disabled>Select sort order</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>

          <div>
            <button
              onClick={handleAddNote}
              // onClick={() => addNote()}
              className="bg-black text-white p-2 rounded-md"
            >
              Add Note
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
