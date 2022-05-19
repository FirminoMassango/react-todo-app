import { useEffect, useState } from "react";
import NewTodo from "./NewTodo";
import { Todo } from "./Type";
import useTodoStore from "../stores";

function AllTasks() {
  const todos = useTodoStore((state) => state.todos);
  const [tasks, setTask] = useState<Todo[]>(todos);
  const addTodo = useTodoStore((state) => state.addTodo);

  useEffect(() => {
    setTask(JSON.parse(localStorage.getItem("tasks") || "[]"));
  }, [todos]);

  function handleToggle(id: number) {
    const updatedTask: Todo[] = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });

    localStorage.setItem("tasks", JSON.stringify(updatedTask));
    addTodo(JSON.parse(localStorage.getItem("tasks") || "[]"));
  }

  // setInterval(updateData, 1000);

  return (
    <div className="w-full">
      <NewTodo />
      <div className="flex justify-start">
        <ul className="mt-5">
          {tasks
            .slice(0)
            .reverse()
            .map((task) => {
              return !task.isCompleted ? (
                <li key={task.task} className="ml-0 pb-2 flex justify-start">
                  <input
                    type="checkbox"
                    className="mr-5"
                    onClick={() => handleToggle(task.id)}
                    checked={task.isCompleted}
                  />
                  <span>{task.task}</span>
                </li>
              ) : (
                <li className="pb-2 flex justify-start">
                  <input
                    type="checkbox"
                    className="mr-5"
                    onClick={() => handleToggle(task.id)}
                    checked={task.isCompleted}
                  />
                  <span>
                    <s>{task.task}</s>
                  </span>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default AllTasks;
