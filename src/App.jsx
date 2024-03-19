import { useContext, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Notes from "./components/Notes";
import { NoteContext, NoteContextProvider } from "./store/notes-context";
import NoteIcon from "./assets/icons8-notepad-70.png";

function App() {
  const { notes } = useContext(NoteContext);
  // const [notesList, setNotesList] = useState({
  //   notes: [],
  //   favouriteNotes: [],
  // });
  // const [filteredNotes, setFilteredNotes] = useState(notesList);

  const [searchText, setSearchText] = useState("");

  // const addNote = (title, category, desc) => {
  //   if (title === "" || category === "" || desc === "") return;
  //   setNotesList((prevState) => {
  //     const newNote = { title, category, desc };
  //     prevState.notes = [newNote, ...prevState.notes];
  //     return { notes: prevState.notes, ...prevState };
  //   });
  // };

  const editNote = () => {};

  // const handleSearch = (e) => {
  //   let text = e.target.value;

  //   setSearchText(text);
  //   // if (searchText === null) return;

  //   const filterNote = notesList.notes.filter((note) => {
  //     console.log(text.toLowerCase());
  //     return (note.title ?? "").toLowerCase().includes(text.toLowerCase());
  //   });
  //   console.log(filterNote);
  //   // setNotesList({  notes: filterNote });
  //   // setNotesList((prevState) => {
  //   //   prevState.notes = [...filterNote];
  //   //   return { notes: prevState.notes };
  //   // });
  //   setFilteredNotes(filterNote);
  // };

  // setNotesList((prevState) => {
  //   // return notesList.notes.filter((note) => {
  //   //   console.log(note);
  //   //   note.title.toLowerCase() === searchText.toLowerCase();
  //   // });

  //   return {
  //     ...prevState,
  //     notes: prevState.notes.filter((note) => {
  //       console.log(note);
  //       note.title.toLowerCase() === searchText.toLowerCase();
  //     }),
  //   };
  // });

  // console.log(notesList.notes);
  // const contextValue = {
  //   notes: notesList.notes,
  //   favouriteNotes: notesList.favouriteNotes,
  //   addNote: addNote,
  //   editNote: editNote,
  // };

  // const handleAddFavourite = (title) => {
  //   const existingNote = notesList.notes.filter((note) => {
  //     return note.title === title;
  //   });
  //   console.log(existingNote);
  //   setNotesList((prevState) => {
  //     const temp = [existingNote, prevState.favouriteNotes];
  //     return {
  //       ...prevState,
  //       favouriteNotes: temp,
  //     };
  //   });
  //   console.log(notesList);
  // };

  return (
    // <NoteContext.Provider value={contextValue}>

    //  <Header addNote={addNote} />

    // <SearchBox
    //   setSearchText={setSearchText}
    //   handleSearch={handleSearch}
    //   searchText={searchText}
    // />
    // <Notes
    //   notes={searchText !== "" ? filteredNotes : notesList.notes}
    //   editNote={editNote}
    //   addFav={handleAddFavourite}
    // />

    /* </NoteContext.Provider> */

    <NoteContextProvider>
      <Header />

      <SearchBox />
      <Notes
      // notes={searchText !== "" ? filteredNotes : notesList.notes}
      // editNote={editNote}
      // addFav={handleAddFavourite}
      />

      {/* </section> */}
    </NoteContextProvider>
  );
}

export default App;
