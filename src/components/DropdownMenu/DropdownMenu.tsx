import { Menu } from "@headlessui/react";

interface Dropdown {
    name: string,
    link: string,
}

export default function({title, dropdowns}: {
    title: string,
    dropdowns: Dropdown[]
}){
    return(
        <Menu>
            <div className="relative">
                <Menu.Button className={`w-full`}>
                    {title}
                </Menu.Button>
                <Menu.Items className={`flex flex-col w-full absolute left-32 top-0 sm:left-0 sm:top-6`}>
                    {dropdowns.map(item => (
                        <Menu.Item key={item.name}>
                            {({active}) => (
                                <a
                                    className={`${active && 'bg-blue-500'}`}
                                    href="link"
                                >
                                    {item.name}
                                </a>
                            )}
                        </Menu.Item>
                    ))}
                </Menu.Items>
            </div>
        </Menu>
    )
}