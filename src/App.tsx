import { useState } from "react";
import NewTodo from "./components/NewTodo";
import ListTodos from "./components/ListTodos";

function App() {
  const [isAllTabActive, changeAllTabStatus] = useState<boolean>(true);
  const [isActiveTabActive, changeActiveTabStatus] = useState<boolean>(false);
  const [isCompletedTabActive, changeCompletedTabStatus] =
    useState<boolean>(false);

  function handleAllTabClick() {
    changeAllTabStatus(true);
    changeActiveTabStatus(false);
    changeCompletedTabStatus(false);
  }

  function handleActiveTabClick() {
    changeAllTabStatus(false);
    changeActiveTabStatus(true);
    changeCompletedTabStatus(false);
  }

  function handleCompletedTabClick() {
    changeAllTabStatus(false);
    changeActiveTabStatus(false);
    changeCompletedTabStatus(true);
  }

  return (
    <div className="text-gray-700 flex flex-col items-center mt-10">
      <div className="w-6/12 text-center">
        <h1 className="text-3xl font-bold">#todo</h1>
        <div className="flex justify-center border-b mt-10">
          <div className="w-1/3 text-center">
            <button
              className={
                isAllTabActive ? "w-32 border-b-4 w-24 border-blue-400" : ""
              }
              onClick={handleAllTabClick}
            >
              All
            </button>
          </div>
          <div className="w-1/3 text-center">
            <button
              className={
                isActiveTabActive ? "w-32 border-b-4 w-24 border-blue-400" : ""
              }
              onClick={handleActiveTabClick}
            >
              Active
            </button>
          </div>
          <div className="w-1/3 text-center">
            <button
              className={
                isCompletedTabActive
                  ? "w-32 border-b-4 w-24 border-blue-400"
                  : ""
              }
              onClick={handleCompletedTabClick}
            >
              Completed
            </button>
          </div>
        </div>
        <div className=" flex justify-between m-auto mt-5">
          {(isAllTabActive && <NewTodo />) ||
            (isActiveTabActive && <NewTodo />)}
        </div>
        <div className="flex justify-start">
          {isAllTabActive && <ListTodos />}
        </div>
      </div>
    </div>
  );
}

export default App;
