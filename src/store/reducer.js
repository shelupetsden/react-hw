export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        case 'CHANGE_ITEM_STATE':
            return {
                ...state,
                todos: state.todos.map(
                    todo => todo.id === action.payload.id
                    ? {...todo, completed: !action.payload.completed }
                    : todo
                )
            }

        default:
            return state;
    }
}