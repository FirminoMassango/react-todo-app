import NewTodo from "./NewTodo";
function AllTasks() {
  return (
    <div className="w-full">
      <NewTodo />
      <div className="flex justify-start">
        <ul className="mt-5">
          <li className="pb-2">
            <input type="checkbox" className="mr-5" />
            <span>Do coding challenges</span>
          </li>
          <li className="pb-2">
            <input type="checkbox" className="mr-5" checked />
            <span>
              <s>Do coding challenges</s>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AllTasks;
