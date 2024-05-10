import {Link} from "react-router-dom";

const LoginButton = ({arrowExist, textStyle}) => {
    return (
        <Link to="/" className={textStyle}>
            Log in {arrowExist && <span>&rarr;</span>}
        </Link>
    )
}

export default LoginButton;