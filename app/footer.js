import '../styles/globals.css';
import { Poppins } from '@next/font/google'
const poppins = Poppins({ weight: '800', subsets: ['latin'], })


const Footer = () => {
    return (
        <footer className={poppins.className}>
            <div class="h-10 text-white text-right flex items-center justify-end bg-black pr-2 lg:pr-5 md:pr-5">@ 2023 Conference App. All Rights Reserved</div>
        </footer>
    );
}

export default Footer;