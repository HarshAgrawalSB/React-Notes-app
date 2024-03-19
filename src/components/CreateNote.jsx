import React from "react";

const CreateNote = ({ setTitle, setCategory, setDesc }) => {
  return (
    <div>
      <div className="py-2 ">
        <label className="text-lg mx-5">Title</label>
        <input
          type="text"
          className="border"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="py-2">
        <label className="text-lg ">Category</label>
        <input
          type="text"
          className="border "
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="py-2">
        <label className="text-lg">Description</label>
        <input
          type="text"
          className="border"
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
    </div>
  );
};

export default CreateNote;
