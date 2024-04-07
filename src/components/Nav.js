const Nav = () => {
    const listItems = [
        {name: "home", url: "#"},
        {name: "shop", url: "#"},
        {name: "about", url: "#"},
        {name: "contact", url: "#"}
    ]
    return (
        <nav>
            <ul>
                {
                    listItems.map(({name, url}) => (
                        <li key={name}>
                            <a href={url}>{name}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}
export default Nav;