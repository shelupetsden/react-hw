import {useContext, useState} from "react";
import {TodoContext} from "../store/context";

const AddTodo = () => {
    const {dispatch} = useContext(TodoContext);
    const [inputValue, setInputValue] = useState('')
    const [checkBoxState, setCheckBoxState] = useState(false)

    function handleSubmit(e, completed) {
        e.preventDefault();

        if (inputValue.trim() === '') {
            return;
        }

        dispatch({
            type: 'ADD_TODO', payload: {
                id: Date.now(),
                text: inputValue,
                completed: checkBoxState
            }
        });

        setInputValue('');
        setCheckBoxState(false);
    }

    const toggleCheckBox = () => setCheckBoxState(prevState => !prevState);

    return (<form onSubmit={handleSubmit}>
        <input
            maxLength={35}
            className="inputTodo"
            type="text"
            placeholder="Create a new todo.."
            value={inputValue}
            onChange={e => {
                setInputValue(e.target.value)
            }}
        />
        <div className="container">
            <div className="round">
                <input type="checkbox" checked id="checkbox"/>
                <label htmlFor="checkbox" className={`${checkBoxState && "completed"}`}
                       onClick={toggleCheckBox}></label>
            </div>
        </div>

        <button onClick={handleSubmit}>ADD</button>
    </form>)

}
export default AddTodo;