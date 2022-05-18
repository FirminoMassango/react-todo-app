function CompletedTasks() {
  return (
    <div className="mt-5 w-full">
      <ul>
        <li className="pb-2 flex justify-between">
          <div className="">
            <input type="checkbox" className="mr-5" checked />
            <span>
              <s>Do coding challenges</s>
            </span>
          </div>
          <button>
            <span className="material-icons text-gray-400 mr-2">delete</span>
          </button>
        </li>
      </ul>
      <div className="flex justify-end mt-5">
        <button className="w-36 h-10 bg-red-400 hover:bg-red-500 text-white rounded-md flex justify-center items-center">
          <span className="material-icons mr-2">delete</span>
          <span>delete all</span>
        </button>
      </div>
    </div>
  );
}

export default CompletedTasks;
