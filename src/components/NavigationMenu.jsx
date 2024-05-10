import {useContext} from "react";
import {Context} from "../context/AppContext";
import SolutionsComponent from "./SolutionsComponent";
import {Link} from "react-router-dom";

const NavigationMenu = () => {
    const {navigation} = useContext(Context);

    return (
        <>
            {navigation.map(
                ({name, url}) => (
                    <Link key={name} to={url} className="text-sm font-semibold leading-6 text-gray-900">
                        {name}
                    </Link>
                )
            )
            }
            <SolutionsComponent/>
        </>)
}
export default NavigationMenu;