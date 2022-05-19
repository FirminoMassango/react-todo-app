import { useEffect, useState } from "react";
import NewTodo from "./NewTodo";
import { Todo } from "./Type";
import useTodoStore from "../stores";

function ActiveTasks() {
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

  return (
    <div className="w-full">
      <NewTodo />
      <div className="flex justify-start">
        <ul className="mt-5">
          {tasks
            .slice(0)
            .reverse()
            .map((task) => {
              return (
                <div>
                  {!task.isCompleted && (
                    <li key={task.id} className="ml-0 pb-2 flex justify-start">
                      <input
                        type="checkbox"
                        className="mr-5"
                        onClick={() => handleToggle(task.id)}
                      />
                      <span>{task.task}</span>
                    </li>
                  )}
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ActiveTasks;
