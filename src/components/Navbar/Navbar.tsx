/**
 * This is the navigation bar and it sits on top of each page.
 * On screens smaller than sm we provide a hamburger button and hide the navbar items.
 * On larger screens we show the navbar items.
 * The Dropdown Menu for the projects resides in the ProjectsMenuBox Component, which shows its elements beneath the button and on smaller screens shows them on the right side.
 */
import { Fragment, useEffect, useRef, useState } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
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
    const navbarRef = useRef<HTMLDivElement>(null); // reference to the navbar

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        // Function that checks if clicked outside the navbar
        function handleClickOutside(event: MouseEvent) {
            if(isOpen && navbarRef.current && !navbarRef.current.contains(event.target as Node)){
                setIsOpen(false);
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return() => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isOpen])

    return (
        <div ref={navbarRef} className="py-2 shadow-md border-b-2 border-gray-500">
            <div className="w-full">
                <div className="sm:hidden">
                    <button onClick={handleOpen} className=" pl-2">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            <div className="w-full">
                <ul className={`${isOpen ? 'block' : 'hidden' } sm:flex flex-row justify-around w-full text-center`}>
                    <li className="w-32 bg-white"><Link to={"/"} onClick={handleOpen} >Home</Link></li>
                    <li className="w-32 bg-white"><Link to={"/contact"} onClick={handleOpen} >Contact</Link></li>
                    <li className="w-32 bg-white">
                        <DropdownMenu title="Projects" dropdowns={items} handleOpen={() => setIsOpen(!isOpen)} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

