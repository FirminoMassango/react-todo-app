import { useRef, useState } from "react";
import React from "react";

function NewTodo() {
  const [details, setDetails] = useState("");
  console.log(details);

  const detailsInput = useRef(null);

  function handleButtonClick() {
    setDetails(detailsInput.current.value);
  }

  return (
    <div className="flex justify-between w-full">
      <input
        type="text"
        placeholder="add details"
        className="w-4/5 h-10 px-4 focus:outline-none focus:border-blue-400 border rounded-md "
        ref={detailsInput}
        onClick={(e) => setDetails(e.target.value)}
      />
      <button className="w-20 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-md">
        add
      </button>
    </div>
  );
}

export default NewTodo;
