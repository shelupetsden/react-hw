import Logo from "../Logo";
import NavigationMenu from "../NavigationMenu";
import LoginButton from "../LoginButton";
import NavigationMenuMobileButton from "../NavigationMenuMobileButton";
import NavigatorMenuMobileDialog from "../NavigatorMenuMobileDialog";
import GradientTop from "../GradientTop";


const Layout = ({children}) => {
    return (<div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex justify-between items-center p-6 lg:p-8">
                <div className="flex flex-1">
                    <Logo/>
                </div>
                <div className="hidden lg:flex gap-x-12">
                    <NavigationMenu/>
                </div>
                <div className="hidden lg:flex flex-1 justify-end">
                    <LoginButton arrowExist={true}/>
                </div>
                <NavigationMenuMobileButton/>
            </nav>
            <NavigatorMenuMobileDialog/>
            <GradientTop/>
        </header>
        <section className="relative px-6 pt-14 lg:px-8 mt-48">
            {children}
        </section>
    </div>)
}

export default Layout;