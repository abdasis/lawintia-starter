import React, {Fragment} from 'react';
import {useSidebarToggle} from './Sidebar.jsx'

const Item = ({icon, text, active, ...prop}) => {
    const {open} = useSidebarToggle()

    return (
        <Fragment>
            <li className={`item-menu cursor-pointer transition-all group hover:bg-slate-100  py-2 px-3 rounded-md  flex items-center gap-1 ${active ? ' text-white bg-primary hover:bg-primary-focus border-b-2 backdrop-blur border-b-primary-focus/90' : ''}`}>
                <div className={`menu-icon ${active ? 'group-hover:text-slate-50 group-hover:font-semibold' : 'group-hover:text-slate-900'} transition-all flex gap-3 relative] duration-500 ease-in-out`}>
                    {icon}
                    {/*{open ? (
                        <div className="tooltip  tooltip-open tooltip-right" data-tip={text}></div>
                    ) : ''}*/}
                </div>
                <div  className={`${open ? 'opacity-0 ' : 'opacity-100'} text-sm font-medium transition-opacity ease-out duration-500 menu-text ${active ? '' : 'group-hover:font-semibold group-hover:ms-1'} duration-300 ease-in-out `}>{text}</div>
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
export default SidebarMenu;
