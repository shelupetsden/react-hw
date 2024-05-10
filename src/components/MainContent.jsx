import {Link} from "react-router-dom";

const MainContent = () => {
    return (
        <div className="mx-auto w-full max-w-2xl">
            <div className="text-center">
                <div className="rounded-xl mb-8 border-2 hidden lg:inline-block">
                    <p className="px-4"> Announcing our next round of funding.
                        <Link to="/" className="font-bold text-indigo-600"> Read
                            more <span>&rarr;</span></Link>
                    </p>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Data to enrich your online
                    business</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt
                    amet
                    fugiat veniam occaecat fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link to="/"
                          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Get started
                    </Link>
                    <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
                        Learn more <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainContent;