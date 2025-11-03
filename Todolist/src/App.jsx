import { TodoProvider } from "./TodoContext";
import TodoList from "./TodoList";
import './App.css'

export default function App() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}
