import '../styles/globals.css';
import { Poppins } from '@next/font/google'
const poppins = Poppins({ weight: '800', subsets: ['latin'], })


const Footer = () => {
    return (
        <footer className={poppins.className}>
            <h5>@ 2023 Conference App. All Rights Reserved</h5>
        </footer>
    );
}

export default Footer;