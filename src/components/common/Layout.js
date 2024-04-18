import AddTodo from "../AddTodo";
import TodoList from "../TodoList";
import Header from "./Header";

const Layout = () => {
    return (
        <div className="main-container">
            <Header/>
            <main>
                <AddTodo/>
                <TodoList/>
            </main>
        </div>
    );
}

export default Layout;