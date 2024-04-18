import {useContext} from "react";
import {TodoContext} from "../store/context";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
    const {state, dispatch} = useContext(TodoContext);

    const changeStateOfItem = (item) => {
        dispatch({type: 'CHANGE_ITEM_STATE', payload: item});
    }

    const deleteItem = (item) => {
        dispatch({type: 'DELETE_TODO', payload: item.id});
    }

    return (
        <ul className="todoList">
            {state.todos.map((item) => (
                <TodoListItem key={item.id}
                              item={item}
                              changeStateOfItem={changeStateOfItem}
                              deleteItem={deleteItem}/>
            ))}
        </ul>
    );
}

export default TodoList;