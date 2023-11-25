import NewToDoBtn from "@/components/ToDoList/NewTodoBtn/newtodobtn";
import ToDos from "@/components/ToDoList/ToDos/todos";

export default function ToDoList() {
  return (
    <main>
      <h1>To Do List</h1>
      <ToDos />
      <NewToDoBtn />
    </main>
  );
}
