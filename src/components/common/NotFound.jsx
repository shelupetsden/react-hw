import Logo from "../Logo";
import GradientTop from "../GradientTop";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (<div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex justify-between items-center p-6 lg:p-8">
                <div className="flex flex-1">
                    <Logo/>
                </div>
            </nav>
            <GradientTop/>
        </header>
        <section className="text-center px-6 lg:px-8 mt-48 flex flex-col justify-end">
            <h1 className="text-9xl font-bold text-primary-900">404</h1>
            <p className="text-2xl mt-4">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="mt-8 px-4 py-2 bg-primary-600 text-black rounded-md text-xl">Return Home</Link>
        </section>
    </div>)
}

export default NotFound;
