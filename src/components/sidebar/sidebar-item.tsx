import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"


/**
 * SidebarItem Props
 * @param label - The text to display in the sidebar item
 * @param icon - The icon to display in the sidebar item
 * @param to - The route to navigate to when the sidebar item is clicked
 * @param highlight - The CSS class to apply to the sidebar item when the current route matches the `to` prop
 */

interface SidebarItemProps {
    label: string;
    icon?: React.ReactNode;
    to: string;
    highlight?: string;
}


export const SidebarItem = ({
    label,
    icon,
    to,
    highlight
}: SidebarItemProps) => {

    const location = useLocation();
    const [active, setActive] = useState(location.pathname == to);

    useEffect(() => {
        setActive(location.pathname === to);
    }, [location.pathname, to]);

    return (
        <Link 
            to={to} 
            className={`p-2 rounded-[5px] hover:bg-neutral-200/40 transition cursor-pointer font-semibold flex gap-2
                ${active ? "bg-neutral-200" : ""} 
        `}>

            <div  className={`${active ? highlight : ""}`}>
                {icon}
            </div>
            <div>
                {label}
            </div>

        </Link>
    );
}