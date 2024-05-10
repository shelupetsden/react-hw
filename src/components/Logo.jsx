import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="p-1.5">
            <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
            />
        </Link>
    )
}
export default Logo;