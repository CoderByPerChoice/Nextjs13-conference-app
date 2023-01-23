import '../styles/globals.css';
import NavLink from './nav-links';
import Link from 'next/link';
import { Poppins } from '@next/font/google'
const poppins = Poppins({ weight: '800', subsets: ['latin'], })


const Header = () => {
    return (
        <header className={poppins.className}>
            <nav>
            
                <NavLink href="/">
                CONFERENCE APP
                </NavLink>
            <h3>
                <NavLink href="/sessions">
                Conferences
                </NavLink>
            </h3>
            <h3>
                <NavLink href="/speakers">
                Speakers
                </NavLink>
            </h3>
            <h3>
                <NavLink href="/topics">
                Topics
                </NavLink>
            </h3>
            <h3>
                <NavLink className='menuBarLinks' href="/aboutus" header={false}>
                About Us
                </NavLink>
            </h3>
            </nav>
        </header>
    );
}

export default Header;