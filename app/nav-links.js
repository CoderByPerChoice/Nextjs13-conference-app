'use client';

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const NavLink = ({ href, children }) => {
    
    const segment = useSelectedLayoutSegment();
    const currentSegment = segment === null ? "" : segment;
    const active = href === `/${currentSegment}`;
 
    return (
        <Link className={active ? "text-2xl underline" : "hover:bg-black hover:text-white transition-colors duration-500 p-2 rounded md:text-base text-2xl"} href={href} >
            {children}
        </Link>
    )
}

export default NavLink;