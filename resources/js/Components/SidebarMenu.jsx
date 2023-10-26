import React, {Fragment} from 'react';
import useSidebarToggle from "@/Components/SidebarToggle.jsx";
import dropdown from "@/Components/Dropdown.jsx";
import {Link} from "@inertiajs/react";
import {IconCaretDown, IconCaretDownFilled} from "@tabler/icons-react";
import {Menu, Transition} from "@headlessui/react";

const Item = ({icon, text, active, props}) => {
    const {open} = useSidebarToggle()

    return (
        <Fragment>
            <li className={`item-menu cursor-pointer text-slate-700 transition-all group py-2 px-3 rounded-md  flex items-center gap-1 ${active ? 'text-slate-50 font-medium bg-blue-600 hover:bg-blue-600 border-b-2 backdrop-blur border-b-blue-700' : 'hover:bg-blue-50'}`}>
                <div
                    className={`menu-icon ${active ? 'group-hover:text-slate-50 group-hover:font-semibold text-white' : 'group-hover:text-blue-700'} transition-all flex gap-3 relative duration-500 ease-in-out`}>
                    {icon}
                </div>
                <div
                    className={`${open ? 'opacity-0 group-hover:opacity-100 fixed left-20 ms-1  bg-white border-gray-400 shadow-sm text-white px-4 py-1 rounded-md text-slate-600' : 'opacity-100 group-hover:ms-1'} text-sm font-medium menu-text ${active ? 'text-white' : 'group-hover:font-medium group-hover:text-blue-600'} duration-300 ease-in-out `}>{text}
                </div>
            </li>
        </Fragment>
    )
}

const Dropdown = ({title, icon, active = false, target, children, props}) => {
    const {open} = useSidebarToggle()

    return (
        <Fragment>
            <li>

                <Menu>
                    <Menu.Button className={`item-menu cursor-pointer text-slate-700 transition-all group py-2 px-3 rounded-md  flex items-center gap-1 ${active ? 'text-slate-50 font-medium bg-blue-600 hover:bg-blue-600 border-b-2 backdrop-blur border-b-blue-700' : 'hover:bg-blue-50'} group w-full`}>
                        <div
                            className={`menu-icon ${active ? 'group-hover:text-slate-50 group-hover:font-semibold text-white' : 'group-hover:text-blue-700'} transition-all flex gap-3 relative duration-500 ease-in-out select-none`}>
                            {icon}
                        </div>
                        <div
                            className={`${open ? 'opacity-0 group-hover:opacity-100 fixed left-20 ms-1  bg-white border-gray-400 shadow-sm text-white px-4 py-1 rounded-md text-slate-600' : 'opacity-100 group-hover:ms-1  whitespace-nowrap'} text-sm font-medium menu-text ${active ? 'text-white' : 'group-hover:font-medium group-hover:text-blue-600'} duration-300 ease-in-out flex-1 ml-0 text-left whitespace-nowrap`}>{title}
                        </div>
                        <IconCaretDownFilled size={16} className='text-slate-500 group-hover:text-blue-600' stroke={1}/>
                    </Menu.Button>
                    <Menu.Items className={`${open ? 'fixed bg-white border-slate-400 px-5 ps-0 py-4 pb-2 z-50 left-20 shadow-sm  rounded-sm' : 'py-2 space-y-2'} `}>
                        {children}
                    </Menu.Items>

                </Menu>
            </li>
        </Fragment>
    )
}

const DropdownItem = ({title, link}) => {

    return (
        <Fragment>
            <li>
                <Link href={link}
                   className={`flex leading-none items-center pb-0 mb-2 pt-0 px-2 pl-9 w-full text-base font-medium text-gray-700 rounded-lg transition duration-75 group hover:text-slate-700 hover:font-semibold dark:text-white dark:hover:bg-gray-700 text-sm`}>{title}</Link>
            </li>
        </Fragment>
    )
}

const SidebarMenu = ({children}) => {

    return (
        <Fragment>
            <ul className='menu-wrapper'>
                {children}
            </ul>
        </Fragment>
    );
};


SidebarMenu.Item = Item;
SidebarMenu.DropdownMenu = Dropdown;
SidebarMenu.DropdownMenuItem = DropdownItem;
export default SidebarMenu;
