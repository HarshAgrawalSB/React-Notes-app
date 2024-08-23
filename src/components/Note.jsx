import { useContext, useRef, useState } from "react";
import StarIcon from "../assets/icons8-star-25.png";
import StarIconFilled from "../assets/icons8-star-25 (1).png";
import { NoteContext } from "../store/notes-context";
import EditIcon from "../assets/icons8-edit-15.png";
import EditModal from "./EditModal";

const Note = () => {
  const { notes, addFavourite, filteredNotes } = useContext(NoteContext);
  // const [noteIndex, setNoteIndex] = useState(null);
  const [editNoteData, setEditNoteData] = useState({
    id: "",
    title: "",
    category: "",
    desc: "",
  });
  console.log(notes);
  const editModal = useRef();

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0");

    return `bg-[#${randomColor}]`;
  };

  const handleEditModal = (title, category, desc, id) => {
    console.log(title);
    setEditNoteData((prevState) => ({
      ...prevState,
      id: id,
      title: title,
      category: category,
      desc: desc,
    }));

    // const editArr = notes.filter((note) => {
    //   return note.id == id;
    // });
    // for (let i of editArr) {
    //   // setTitle(i.title);
    //   etitle = i.title;
    //   console.log(i.title);
    // }
    editModal.current.open();
  };
  // const temp = notes.find((note) => {
  //   note.error == "No notes";
  // });
  // if (notes.length == 1) {
  //   return <div>{temp}</div>;
  // }

  return (
    <>
      <EditModal ref={editModal} editNoteData={editNoteData} />

      <div className="container grid grid-cols-4 text-white  mt-5  ">
        {filteredNotes.length == 0 ? (
          <div className="ml-[100vh] w-full">
            <h1 className="text-black mx-auto text-3xl">No Notes Available</h1>
          </div>
        ) : (
          notes?.map((note, index) => (
            <div
              key={index}
              className={`p-5  my-4 ${
                note.flag == true ? "bg-yellow-400 text-black" : generateColor()
              }  w-52 mx-5 rounded-md`}
            >
              <h2 className="text-2xl flex justify-between">
                {note.title}
                {""}
                <span>
                  <button
                    className=""
                    onClick={() => {
                      // isEditing(index);
                      // setNoteIndex(note.id);
                      handleEditModal(
                        note.title,
                        note.category,
                        note.desc,
                        note.id
                      );
                    }}
                  >
                    {/* {console.log(index)} */}
                    <img src={EditIcon} alt="edit icon" className="w-full" />
                  </button>
                </span>
              </h2>
              <h3 className="text-lg ">{note.category}</h3>
              <p>{note.desc}</p>

              <div className="flex justify-between mt-4">
                <span className="w-20">{new Date().toLocaleString()}</span>
                <button onClick={() => addFavourite(note.id)}>
                  <img
                    src={note.flag === true ? StarIconFilled : StarIcon}
                    alt="Star Icon"
                    className="w-5"
                  />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Note;
