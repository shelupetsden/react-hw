import Logo from "./Logo";
import Nav from "./Nav";

const FirstLeftBlock = () => {
    return (<div className="inner-first-left-block">
        <header>
            <div>
                <Logo/>
                <Nav/>
            </div>
        </header>

    </div>);
}

export default FirstLeftBlock;