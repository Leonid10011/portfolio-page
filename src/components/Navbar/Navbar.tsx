/**
 * This is the navigation bar and it sits on top of each page.
 * On screens smaller than sm we provide a hamburger button and hide the navbar items.
 * On larger screens we show the navbar items.
 * The Dropdown Menu for the projects resides in the ProjectsMenuBox Component, which shows its elements beneath the button and on smaller screens shows them on the right side.
 */
import { useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
/**
 * Needs to be replaced and combined with the items
 */
const items = [
    {
        name: "Project Portfolio",
        link: "/projects"
    },
    {
        name: "E-commerce App",
        link: "/projects"
    }
]

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-2 border-b-2 border-black">
            <div className="w-full">
                <div className="sm:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className=" pl-2">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            <div className="w-full">
                <ul className={`${isOpen ? 'block' : 'hidden' } sm:flex flex-row justify-around w-full text-center`}>
                    <li className="w-32 bg-white"><Link to={"/"} >Home</Link></li>
                    <li className="w-32 bg-white"><Link to={"/contact"} >Contact</Link></li>
                    <li className="w-32 bg-white">
                        <DropdownMenu title="Projects" dropdowns={items} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

