import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { add } from "../redux/modules/todo";

export default function TodoForm() {
    const [currentTodo, setCurrentTodo] = useState("");

    const dispatch = useAppDispatch();

    const handleSubmittedTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(add(currentTodo));
        setCurrentTodo("");
    };
    
    return (
        <form onSubmit={handleSubmittedTodo}>
            <input type="text" name="todo" id="todo" value={currentTodo}
                onChange={(e) => setCurrentTodo(e.target.value)} />
            <button type="submit">+</button>
        </form>
    )
}