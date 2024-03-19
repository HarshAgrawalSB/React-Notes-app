/* eslint-disable react/display-name */
import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { NoteContext } from "../store/notes-context";

const Modal = forwardRef(({ props }, ref) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");

  const { addNote } = useContext(NoteContext);

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  // const handleTitle = (val, e) => {
  //   setTitle(val);
  // };

  return createPortal(
    <dialog id="modal" ref={dialog} className="p-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-center text-2xl border-black border-b-2 p-1">
          Add Note
        </h2>
        <button
          onClick={() => dialog.current.close()}
          className="font-bold text-xl"
        >
          X
        </button>
      </div>

      <div>
        <div className="py-2 ">
          <label className="text-lg mx-6">Title</label>
          <input
            type="text"
            className="border ml-4"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          />
        </div>

        <div className="py-2">
          <label className="text-lg mr-2">Category</label>
          <input
            type="text"
            className="border ml-5 "
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
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
        {/* {actions} */}
        <button
          type="submit"
          onClick={() => {
            if (title === "" || category === "" || desc === "")
              alert("All fields are required");
            addNote(title, category, desc);
            setTitle("");
            setDesc("");
            setCategory("");
          }}
          className="bg-black text-white py-2 px-3 rounded-md font-semibold"
        >
          Add
        </button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
