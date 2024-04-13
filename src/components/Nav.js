import {Link} from "react-router-dom";

const Nav = () => {
    const listItems = [
        {name: "home", url: "/home"},
        {name: "shop", url: "/shop"},
        {name: "about", url: "/about"},
        {name: "contact", url: "/contact"}
    ]
    return (
        <nav>
            <ul>
                {
                    listItems.map(({name, url}) => (
                        <li key={name}>
                            <Link to={url}>{name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}
export default Nav;