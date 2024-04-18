const TodoListItem = ({item, changeStateOfItem, deleteItem}) => (
    <li key={item.id}>
        <span className={`todoMessage ${item.completed && "completed"}`}>{item.text}</span>
        <div className="container">
            <div className="round">
                <input type="checkbox" id="checkbox" defaultChecked={item.completed}/>
                <label htmlFor="checkbox"
                       className={`${item.completed && "completed"}`}
                       onClick={() => changeStateOfItem(item)}>
                </label>
            </div>
        </div>
        <button onClick={() => deleteItem(item)}>DELETE</button>
    </li>
)

export default TodoListItem;