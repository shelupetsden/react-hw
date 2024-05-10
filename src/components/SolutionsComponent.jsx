import {Popover, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/24/outline";
import {Context} from "../context/AppContext";
import {useContext} from "react";
import {Link} from "react-router-dom";


const SolutionsComponent = () => {
    const {solutions, callsToAction} = useContext(Context);

    return (<>
            <Popover className="relative">
                <Popover.Button className="flex text-sm font-semibold leading-6 text-gray-900">
                    <div className="flex items-center gap-x-2">
                        <div>
                            Solutions
                        </div>
                        <div className="">
                            <ChevronDownIcon className="h-6 w-6" aria-hidden="true"/>
                        </div>
                    </div>
                </Popover.Button>
                <Transition enter="transition duration-100"
                            enterFrom="opacity-0 -translate-y-20"
                            enterTo="opacity-100 translate-y-0"

                            leave="transition duration-100"
                            leaveFrom="opacity-100 translate-y-20"
                            leaveTo="opacity-0 translate-y-0"
                >
                    <Popover.Panel
                        className="absolute z-10 bg-white w-max h-max border-2 rounded-2xl shadow-2xl left-1/2 -translate-x-1/2 my-6">

                        <div className="flex flex-col gap-x-2 m-4">
                            {solutions.map(
                                item =>
                                    <Link to={item.url}
                                       className="group flex hover:bg-gray-400 hover:bg-opacity-5 hover:rounded-md">
                                        <div
                                            className="w-12 h-12 m-4 p-3 flex bg-gray-400 bg-opacity-5 rounded-md group-hover:bg-white">{item.icon}</div>

                                        <div className="flex flex-col items-start justify-center gap-x-2">
                                            <div className="font-bold">{item.name}</div>
                                            <div>{item.description}</div>
                                        </div>
                                    </Link>
                            )}
                        </div>

                        <div
                            className="bg-gray-400 bg-opacity-5 flex justify-between w-full mt-8 divide-x divide-gray-300">
                            {callsToAction.map(item =>
                                <Link to={item.url} className="flex items-center justify-center px-4 w-full">
                                    <div className="w-10 h-10 m-1 my-2 p-2 flex">{item.icon}</div>
                                    <div className="flex font-bold">{item.name}</div>
                                </Link>)}
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </>
    );
}

export default SolutionsComponent;