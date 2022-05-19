import create from "zustand";
import {Todo} from "../components/Type";

type State = {
  todos: Todo[];
  addTodo: (todo: Todo[]) => void;
};

const useTodoStore = create<State>((set) => ({
  todos: [],
  addTodo: (todos) => {
    set((state) => ({ todos: todos }));
  },
}));


export default useTodoStore;