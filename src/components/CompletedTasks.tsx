import { useState, useEffect } from "react";
import useTodoStore from "../stores";
import { Todo } from "./Type";

function CompletedTasks() {
  const todos = useTodoStore((state) => state.todos);
  const [tasks, setTask] = useState<Todo[]>(todos);

  useEffect(() => {
    setTask(JSON.parse(localStorage.getItem("tasks") || "[]"));
  }, [todos]);

  function deleteAllTasks() {
    localStorage.removeItem("tasks");
  }

  function deleteOneTask(id: number) {
    const fetchTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    fetchTasks.splice(id - 1, 1);
    console.log(fetchTasks);
    localStorage.setItem("tasks", JSON.stringify(fetchTasks));
    setTask(fetchTasks);
  }

  return (
    <div className="mt-5 w-full">
      <ul>
        {tasks
          .slice(0)
          .reverse()
          .map((task) => {
            return (
              <div>
                {task.isCompleted && (
                  <li key={task.id} className="pb-2 flex justify-between">
                    <div className="">
                      <input type="checkbox" className="mr-5" checked />
                      <span>
                        <s>{task.task}</s>
                      </span>
                    </div>
                    <button onClick={() => deleteOneTask(task.id)}>
                      <span className="material-icons text-gray-400 mr-2">
                        delete
                      </span>
                    </button>
                  </li>
                )}
              </div>
            );
          })}
      </ul>
      <div className="flex justify-end mt-5">
        <button
          className="w-36 h-10 bg-red-400 hover:bg-red-500 text-white rounded-md flex justify-center items-center"
          onClick={deleteAllTasks}
        >
          <span className="material-icons mr-2">delete</span>
          <span>delete all</span>
        </button>
      </div>
    </div>
  );
}

export default CompletedTasks;
