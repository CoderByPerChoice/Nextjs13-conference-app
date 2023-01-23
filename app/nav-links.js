'use client';

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const NavLink = ({ header, href, children }) => {
    const segment = useSelectedLayoutSegment();
    const currentSegment = segment === null ? "" : segment;
    const active = href === `/${currentSegment}`;
    //console.log(header);
    //console.log(`/${currentSegment}`);

    return (
        <Link className={active ? "text-2xl underline" : ""} href={href} >
            {children}
        </Link>
    )
}

export default NavLink;