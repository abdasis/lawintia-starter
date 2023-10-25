import React, {Fragment, useState} from 'react';
import {
    IconAffiliateFilled,
    IconAirBalloon,
    IconChevronsLeft,
    IconCoins,
    IconDashboard,
    IconLamp,
    IconLogin,
    IconLogout,
    IconReportAnalytics, IconServerBolt,
    IconSettings,
    IconSignRight,
    IconUserCog,
    IconWallet
} from "@tabler/icons-react";
import SidebarMenu from "@/Components/SidebarMenu.jsx";
import {create} from "zustand";
import SidebarMenuTitle from "@/Components/SidebarMenuTitle.jsx";

const useSidebarToggle = create((set) => ({
    open: false,
    setOpen: () => set((state) => ({open: !state.open})),
}));
const Sidebar = () => {
    const {open, setOpen} = useSidebarToggle();
    return (
        <Fragment>
            <aside
                className={`${open ? 'w-20' : 'w-72'} h-screen transition-all duration-500 overflow-hidden bg-white border-e border-e-slate-100 fixed`}>
                <div className="sidebar flex flex-col">
                    <div
                        className={`${open ? 'flex flex-col justify-center pt-4 gap-2' : 'flex justify-between'} sidebar-header transition-transform px-6 mb-5 items-center h-16`}>
                        <div className="logo-wrapper">
                            <div
                                className="logo flex items-center cursor-pointer hover:scale-90 gap-1 hover:rotate-3 transition-all duration-200 ease-linear">
                                <IconAffiliateFilled size={34}/>
                                <h1 className={`${open ? 'hidden' : 'flex'} font-calistoga transition-all duration-500 ease-out text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-focus/50 text-3xl text-rose-600`}>Lawintia</h1>
                            </div>
                        </div>
                        <div className={`right-3 z-50 toggle-wrapper flex items-center `}>
                            <button onClick={setOpen}
                                    className={`${open ? 'bg-slate-100' : 'bg-white'} p-1 rounded-md`}>
                                <IconChevronsLeft
                                    size={open ? 16 : 20}
                                    className={`${open ? 'rotate-180 transition-all duration-500 ease-in-out' : 'rotate-0 transition-all duration-500 ease-in-out'}`}
                                    stroke={1.5}/>
                            </button>
                        </div>
                    </div>
                    <div className={`sidebar-body overflow-y-auto overflow-x-hidden px-4`}>
                        <SidebarMenu>
                            <SidebarMenuTitle title="Dashboard"/>
                            <SidebarMenu.Item active icon={<IconDashboard stroke={1.5}/>} text="Dashboard"/>
                            <SidebarMenu.Item  icon={<IconCoins stroke={1.5}/>} text="Transaction"/>
                            <SidebarMenu.Item icon={<IconWallet stroke={1.5}/>} text="Budget"/>
                            <SidebarMenu.Item icon={<IconReportAnalytics stroke={1.5}/>} text="Statistik"/>
                            <SidebarMenuTitle title="Sistem"/>
                            <SidebarMenu.Item icon={<IconUserCog stroke={1.5}/>} text="User"/>
                            <SidebarMenu.Item icon={<IconServerBolt stroke={1.5}/>} text="Sync"/>
                            <SidebarMenu.Item icon={<IconSettings stroke={1.5}/>} text="Setting"/>

                        </SidebarMenu>
                    </div>
                    <div className="sidebar-footer absolute bottom-0 w-full mb-5">
                        <div className={`${open ? '' : 'px-6 mx-auto'} container `}>
                            <div
                                className={`${open ? '' : 'bg-primary-content/40 border border-slate-200'} box-info h-auto py-3  rounded-xl text-center `}
                            >
                                <div
                                    className="avatar-box inline-flex relative rounded-full p-2 border-2 border-violet-600 bg-violet-500">
                                    <h1 className='text-2xl text-white'>AS</h1>
                                    <span
                                        className='h-3 w-3 absolute bottom-0 right-0 border border-white rounded-full bg-teal-400'></span>
                                </div>
                                <p className={`${open ? 'hidden' : ''} user-name mt-2 mb-0 font-bold`}>Abd. Asis</p>
                                <p className={`${open ? 'hidden' : ''} user-email leading-none mb-0 font-light text-sm`}>id.abdasis@gmail.com</p>
                                <button
                                    className={`${open ? 'hidden' : ''} btn btn-sm rounded-full hover:bg-rose-500 border-b w-44 capitalize font-light gap-1 bg-rose-600 text-white mt-3`}>
                                    <IconLogout size={18}/>
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </Fragment>
    );
};

export default Sidebar;
export {useSidebarToggle}
