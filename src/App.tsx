import { useState } from "react";
import AllTasks from "./components/AllTasks";
import ActiveTasks from "./components/ActiveTasks";
import CompletedTasks from "./components/CompletedTasks";

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
    <div className="text-gray-700 flex flex-col items-center">
      <div className="w-6/12 text-center">
        <h1 className="text-3xl font-bold mt-10">#todo</h1>
        <div className="flex justify-center border-b mt-10">
          <div className="w-1/3 text-center">
            <button
              className={
                isAllTabActive
                  ? "w-3/5 border-b-4 w-24 border-blue-400"
                  : undefined
              }
              onClick={handleAllTabClick}
            >
              All
            </button>
          </div>
          <div className="w-1/3 text-center">
            <button
              className={
                isActiveTabActive
                  ? "w-3/5 border-b-4 w-24 border-blue-400"
                  : undefined
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
                  ? "w-3/5 border-b-4 w-24 border-blue-400"
                  : undefined
              }
              onClick={handleCompletedTabClick}
            >
              Completed
            </button>
          </div>
        </div>
        <div className=" flex justify-between m-auto mt-5">
          {isAllTabActive && <AllTasks />}
          {isActiveTabActive && <ActiveTasks />}
          {isCompletedTabActive && <CompletedTasks />}
        </div>
      </div>
      <div className="mt-20">
        <span className="text-gray-500 text-xs text-center retaltive bottom-20">
          created by{" "}
          <a
            className="text-blue-500 font-semibold"
            href="https://github.com/FirminoMassango/react-todo-app"
          >
            Firmino Massango
          </a>{" "}
          - devChallenges.io
        </span>
      </div>
    </div>
  );
}

export default App;
