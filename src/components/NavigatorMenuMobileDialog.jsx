import {useContext} from "react";
import {Context} from "../context/AppContext";
import {Dialog} from "@headlessui/react";
import Logo from "./Logo";
import {XMarkIcon} from "@heroicons/react/24/outline";
import NavigationMenu from "./NavigationMenu";
import LoginButton from "./LoginButton";

const NavigatorMenuMobileDialog = () => {
    const {mobileMenuOpen, setMobileMenuOpen} = useContext(Context);
    return (
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white p-6">
                <div className="flex items-center justify-between">
                    <Logo/>
                    <button type="button" onClick={() => setMobileMenuOpen(false)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>
                <div className="flex flex-col gap-y-4 py-7 lg:hidden">
                    <NavigationMenu/>
                    <div className="flex items-center border-t border-gray-100 mt-2 w-full mx-auto"></div>
                    <LoginButton arrowExist={false} textStyle={"text-sm font-semibold leading-6 text-gray-900"}/>
                </div>
            </Dialog.Panel>
        </Dialog>
    );
}
export default NavigatorMenuMobileDialog;