import { createContext, useState } from "react";

export const NoteContext = createContext({
  notes: [],
  addNote: () => {},
  editNote: () => {},
  addFavourite: () => {},
  search: () => {},
  sort: () => {},
  filteredNotes: [],
  // isEditing: () => {},
  // favouriteNotes: [],
});

export const NoteContextProvider = ({ children }) => {
  const [notesList, setNotesList] = useState({
    notes: [],
    // favouriteNotes: [],
  });
  const [searchText, setSearchText] = useState("");
  const [order, setOrder] = useState(null);
  const [filteredNotes, setFilteredNotes] = useState(notesList);

  const addNote = (title, category, desc) => {
    if (title === "" || category === "" || desc === "") return;
    setNotesList((prevState) => {
      const newNote = {
        id: Math.floor((Math.random() * 100) / 10),
        title,
        category,
        desc,
        flag: false,
      };
      prevState.notes = [newNote, ...prevState.notes];
      return { notes: prevState.notes, ...prevState };
    });
    console.log(notesList.notes);
  };

  const editNote = (title, category, desc, id) => {
    if (title === "" || category === "" || desc === "") return;
    setNotesList((prevState) => {
      // const newNote = { id, title, category, desc, flag: false };
      // const newArr = prevState.notes.filter((note) => {
      //   return note.id != id;
      // });
      // console.log(newArr);
      // prevState.notes = [newNote, ...newArr];
      // return { notes: prevState.notes, ...prevState };

      const arr = prevState.notes.map((note) => {
        if (note.id === id) return { id, title, category, desc, flag: false };
        return note;
      });
      console.log(arr);

      return { ...prevState, notes: prevState.notes };

      //   const arr = prevState.notes.filter((note) => {
      //     return note.id == id;
      //   });
      //   prevState.notes = [
      //     ...prevState.notes,
      //     { title: title, desc: desc, category: category },
      //   ];
      //   return { notes: prevState.notes, ...prevState };
    });
  };

  // const handleIsEditing = (index) => {
  //   console.log(index);
  //   setNotesList((prevState) => {
  //     const tempArr = [...prevState.notes];
  //     // eslint-disable-next-line no-undef
  //     tempArr[index] = {
  //       ...tempArr[index],
  //       isEditing: true === 1 ? false : true,
  //     };
  //     console.log(tempArr[index]);
  //     return { notes: tempArr };
  //   });
  // };

  const handleAddFavourite = (nId) => {
    setNotesList((prevState) => {
      const favNote = prevState.notes.filter((note, index) => {
        console.log(nId + " " + index);
        return nId === note.id;
      });
      const nonFavNote = prevState.notes.filter((note) => {
        return nId !== note.id;
      });
      console.log(favNote);
      console.log(nonFavNote);
      if (favNote.length) {
        for (const i of favNote) {
          i.flag = i.flag === false ? true : false;
          // console.log(i);
        }
      }
      prevState.notes = [...favNote, ...nonFavNote];
      return { notes: prevState.notes, ...prevState };
    });
  };

  const handleSearch = () => {
    let text = event.target.value;
    setSearchText(text);
    if (searchText === null) return;
    const filterNote = notesList.notes.filter((note) => {
      // console.log(text.toLowerCase());
      return note.title.toLowerCase().includes(text.toLowerCase());
    });
    if (filterNote.length == 0) {
      setFilteredNotes([]);
    } else setFilteredNotes(filterNote);
  };

  const handleSort = () => {
    console.log(event.target.value);
    // let sortOrder = event.target.value;
    setOrder(order === null ? "ascending" : "descending");
    // let orderText = e.target.value;
    // let order = e.target.value;
    // setNotesList((prevState) => {
    const sortedState = notesList.notes.sort((a, b) => {
      if (order == "ascending") {
        setOrder("descending");
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
      } else if (order == "descending") {
        setOrder("ascending");
        return b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1;
      }
    });
    // setOrder(order == "ascending" ? "descending" : "ascending");
    // return { notes: sortedState };
    // });

    console.log(sortedState);
  };

  const contextValue = {
    notes:
      searchText != "" && filteredNotes.length > 0
        ? filteredNotes
        : notesList.notes,
    filteredNotes: filteredNotes,
    // favouriteNotes: notesList.favouriteNotes,
    addNote: addNote,
    addFavourite: handleAddFavourite,
    search: handleSearch,
    sort: handleSort,
    editNote: editNote,
    // isEditing: handleIsEditing,
  };

  return (
    <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>
  );
};
