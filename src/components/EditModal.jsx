/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { NoteContext } from "../store/notes-context";

// eslint-disable-next-line react/prop-types
const EditModal = forwardRef(({ editNoteData }, ref) => {
  // const { notes } = useContext(NoteContext);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState(null);

  const dialog = useRef();
  const { editNote } = useContext(NoteContext);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      // close: () => {
      //   dialog.current.hideModal();
      // },
    };
  });

  useEffect(() => {
    setId(editNoteData.id);
    setTitle(editNoteData.title);
    setCategory(editNoteData.category);
    setDesc(editNoteData.desc);
  }, [editNoteData]);

  return createPortal(
    <dialog id="editmodal" ref={dialog} className="p-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-center text-2xl border-black border-b-2 p-1">
          Edit Note
        </h2>
        <button
          onClick={() => dialog.current.close()}
          className="font-bold text-xl"
        >
          X
        </button>
      </div>
      <div>
        {/* {notes.map((note, index) => (
          <div key={index}>
            <div className="py-2 ">
              <label className="text-lg mx-6">Title</label>
              <input
                type="text"
                className="border ml-4"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                placeholder={note.title}
              />
            </div>

            <div className="py-2">
              <label className="text-lg mr-2">Category</label>
              <input
                type="text"
                className="border ml-5 "
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              />
            </div>

            <div className="py-2">
              <label className="text-lg mr-3">Description</label>
              <input
                type="text"
                className="border ml-0"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
            </div>
          </div>
        ))} */}
        <div className="py-2 ">
          <label className="text-lg mx-6">Title</label>
          <input
            type="text"
            className="border ml-4"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
        </div>

        <div className="py-2">
          <label className="text-lg mr-2">Category</label>
          <input
            type="text"
            className="border ml-5 "
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>

        <div className="py-2">
          <label className="text-lg mr-3">Description</label>
          <input
            type="text"
            className="border ml-0"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            required
          />
        </div>
      </div>

      <form method="dialog" id="modal-actions">
        <button
          type="submit"
          onClick={() => {
            if (title === "" || category === "" || desc === "")
              alert("All fields are required");
            editNote(title, category, desc, id);
            setTitle("");
            setDesc("");
            setCategory("");
          }}
          className="bg-black text-white py-2 px-3 rounded-md font-semibold"
        >
          Edit
        </button>
      </form>
    </dialog>,
    document.getElementById("editmodal")
  );
});

export default EditModal;
