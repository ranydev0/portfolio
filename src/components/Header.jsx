import home from "../assets/home-light.png";
import Navbar from "./Navbar";
import { NAV_LINKS } from "../data.js";

function Header() {
    return (
        <header>
            <a href="#portfolio"><img className="icon" src={home} alt="Logo" /></a>
            <Navbar links={NAV_LINKS} />
        </header>
    );
}

export default Header;