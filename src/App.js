import './scss/styles.scss';
import Home from "./pages/Home";
import {Route, Routes} from "react-router";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import About from "./pages/About";
import NotFound from "./common/NotFound";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/shop" element={<Shop/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default App;
