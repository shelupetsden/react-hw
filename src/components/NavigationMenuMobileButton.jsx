import {Bars3Icon} from "@heroicons/react/24/outline";
import {Context} from "../context/AppContext";
import {useContext} from "react";

const NavigationMenuMobileButton = () => {
    const {mobileMenuOpen, setMobileMenuOpen} = useContext(Context);

    return (<div className="flex lg:hidden">
        <button onClick={(() => setMobileMenuOpen(!mobileMenuOpen))} type="button" className="flex items-center p-2.5 text-gray-150">
            <Bars3Icon className="h-6 w-6 text-gray-400"/>
        </button>
    </div>)
}
export default NavigationMenuMobileButton;