import { useAppSelector } from "../redux/hooks";
import Todo from "./Todo";

export default function TodoList() {
    const todo = useAppSelector((state) => state.todo);

    return(
        <ul>
            {
                todo && (
                    todo.map((currentTodo) => (
                        <Todo id={currentTodo.id} todo={currentTodo.todo}
                            isDone={currentTodo.isDone} />
                    ))
                )
            }
        </ul>
    )
}