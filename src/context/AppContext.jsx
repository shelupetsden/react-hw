import {createContext, useState} from "react";
import {
    ArrowPathIcon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    PhoneIcon,
    PlayCircleIcon,
    SquaresPlusIcon
} from "@heroicons/react/24/outline";

export const Context = createContext(null);

const solutions = [
    {
        name: "Analytics",
        description: "Get a better understanding of your traffic",
        url: "/analytics",
        icon: <ChartPieIcon/>
    },
    {
        name: "Engagement",
        description: "Speak directly to your customers",
        url: "/engagement",
        icon: <CursorArrowRaysIcon/>
    },
    {
        name: "Security",
        description: "Your customers' data will be safe and secure",
        url: "/security",
        icon: <FingerPrintIcon/>
    },
    {
        name: "Integrations",
        description: "Connect with third-party tools",
        url: "/integrations",
        icon: <SquaresPlusIcon/>
    },
    {
        name: "Automations",
        description: "Build strategic funnels that will convert",
        url: "/automations",
        icon: <ArrowPathIcon/>
    }
];

const callsToAction = [
    {
        name: "Watch demo",
        url: "/watch-demo",
        icon: <PlayCircleIcon/>
    },
    {
        name: "Contact sale",
        url: "/contact-sale",
        icon: <PhoneIcon/>
    }
]

const navigation = [
    {name: "Product", url: "/product", description: ""},
    {name: "Features", url: "/features", description: ""},
    {name: "Marketplace", url: "/marketplace", description: ""},
    {name: "Company", url: "/company", description: ""}
];

export const AppContext = ({children}) => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <Context.Provider value={{navigation, setMobileMenuOpen, mobileMenuOpen, solutions, callsToAction}}>
            {children}
        </Context.Provider>
    );
}

