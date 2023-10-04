import { useAppDispatch } from "../redux/hooks";
import { handleDelete, handleDone } from "../redux/modules/todo";

interface InitialState {
    id: number;
    todo: string;
    isDone: boolean;
}

type TodoProp = InitialState;

export default function Todo({ id, todo, isDone }:TodoProp) {
    
    /*
    함수 컴포넌트 내에서 Redux 액션을 디스패치함으로써
    redux store로 상태 변경을 요청하거나 action을 발생시킬 수 있음
    */
    const dispatch = useAppDispatch();

    const handleDoneButton = (id : number) => dispatch(handleDone(id));
    const handleDeleteButton = (id : number) => dispatch(handleDelete(id));

    return( 
        <li key={id} style={{ textDecoration: isDone ? "line-through" : "none"}}>
            {todo}
            <button onClick={() => handleDoneButton(id)}>
                {
                    !isDone ? 'done' : 'cancel'
                }
            </button>
            <button onClick={() => handleDeleteButton(id)}>delete</button>
        </li>
    )
}