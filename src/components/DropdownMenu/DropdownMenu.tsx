import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

interface Dropdown {
    name: string,
    link: string,
}

export default function({title, dropdowns, handleOpen}: {
    title: string,
    dropdowns: Dropdown[],
    handleOpen: () => void
}){
    return(
        <Menu>
            <div className="relative">
                <Menu.Button className={`w-full`}>
                    {title}
                </Menu.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className={`flex flex-col w-full absolute left-32 top-0 sm:left-0 sm:top-6 z-10 bg-white`}>
                        {dropdowns.map(item => (
                            <Menu.Item key={item.name}>
                                {({active}) => (
                                    <Link
                                        className={`${active && 'bg-blue-500'}`}
                                        to={item.link}
                                        onClick={handleOpen}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </Menu.Item>
                        ))}
                    </Menu.Items>
                </Transition>
            </div>
        </Menu>
    )
}