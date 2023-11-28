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

const items = [
    {
        name: "Project Portfolio",
        link: "/"
    },
    {
        name: "E-commerce App",
        link: "/"
    }
]

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="w-full">
                <div className="sm:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className=" pl-2">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            <div className="w-full">
                <ul className={`${isOpen ? 'block' : 'hidden' } sm:flex flex-row justify-around bg-green-500 w-full text-center`}>
                    <li className="w-32 bg-white">Home</li>
                    <li className="w-32 bg-white">Contact</li>
                    <li className="w-32 bg-white">
                        <DropdownMenu title="Projects" dropdowns={items} />
                    </li>
                </ul>
            </div>
        </>
    );
}