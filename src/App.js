import './styles/styles.scss';
import Layout from "./components/common/Layout";
import {useReducer} from "react";
import {todoReducer} from "./store/reducer";
import {TodoContext} from "./store/context";
import {initialState} from "./store/state";

function App() {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            <Layout/>
        </TodoContext.Provider>
    );
}

export default App;
