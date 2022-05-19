import { createRef, useEffect, useState } from "react";
import useTodoStore from "../stores";
import { Todo } from "./Type";

function NewTodo() {
  const [tasks, setTask] = useState<Todo[]>(
    JSON.parse(localStorage.getItem("tasks") || "[]")
  );
  const [inputValue, setInputValue] = useState<string>();
  const textInput = createRef<HTMLInputElement>();
  const addTodo = useTodoStore((state) => state.addTodo);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleButtonClickEvent() {
    if (textInput) {
      setTask([
        ...tasks,
        {
          id: JSON.parse(localStorage.getItem("tasks") || "[]").length + 1,
          task: textInput.current!.value.toString(),
          isCompleted: false,
        },
      ]);

      addTodo([
        ...tasks,
        {
          id: JSON.parse(localStorage.getItem("tasks") || "[]").length + 1,
          task: textInput.current!.value.toString(),
          isCompleted: false,
        },
      ]);
    }

    console.log(tasks);

    setInputValue("");
  }

  return (
    <div className="flex justify-between w-full">
      <input
        type="text"
        placeholder="add details"
        className="w-4/5 h-10 px-4 focus:outline-none focus:border-blue-400 border rounded-md "
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        ref={textInput}
      />
      <button
        className="w-20 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-md ml-2"
        onClick={handleButtonClickEvent}
      >
        add
      </button>
    </div>
  );
}

export default NewTodo;
