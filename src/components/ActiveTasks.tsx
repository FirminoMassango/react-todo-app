import NewTodo from "./NewTodo";

function ActiveTasks() {
  return (
    <div className="w-full">
      <NewTodo />
      <div className="flex justify-start">
        <ul className="mt-5">
          <li className="pb-2">
            <input type="checkbox" className="mr-5" />
            <span>Do coding challenges</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ActiveTasks;
