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
    IconReportAnalytics, IconSchool, IconServerBolt,
    IconSettings,
    IconSignRight, IconStatusChange,
    IconUserCog,
    IconWallet
} from "@tabler/icons-react";
import SidebarMenu from "@/Components/SidebarMenu.jsx";
import {create} from "zustand";
import SidebarMenuTitle from "@/Components/SidebarMenuTitle.jsx";
import useSidebarToggle from "@/Components/SidebarToggle.jsx";
import {Menu} from "@headlessui/react";


const Sidebar = () => {
    const {isExpanded, setExpand} = useSidebarToggle();
    return (
        <Fragment>
            <aside
                className={`${isExpanded ? 'w-20' : 'w-64'} h-screen transition-all duration-500 overflow-y-hidden bg-white border-e border-e-slate-100 fixed`}>
                <div className="sidebar flex flex-col">
                    <div
                        className={`${isExpanded ? 'flex flex-col justify-center pt-2 gap-2 mb-5' : 'flex justify-between'}  sidebar-header transition-transform px-6  items-center border-b border-b-slate-100 h-16`}
                    >
                        <div className="logo-wrapper">
                            <div
                                className="logo flex items-center cursor-pointer hover:scale-90 gap-1 hover:rotate-3 transition-all duration-200 ease-linear">
                                <IconAffiliateFilled className='text-blue-500' size={34}/>
                                <h1 className={`${isExpanded ? 'hidden' : 'flex'} font-calistoga transition-all duration-500 ease-out text-3xl text-slate-600`}>Lawintia</h1>
                            </div>
                        </div>
                        <div className={`right-3 z-50 toggle-wrapper flex items-center `}>
                            <button onClick={setExpand}
                                    className={`${isExpanded ? 'bg-slate-100 absolute bottom-28 left-0 ms-7' : 'bg-white hover:bg-slate-100 transition-all hover:border-slate-200 duration-500'} p-1 rounded-md`}>
                                <IconChevronsLeft
                                    size={open ? 16 : 20}
                                    className={`${isExpanded ? ' rotate-180 transition-all duration-500 ease-in-out' : 'rotate-0 transition-all duration-500 ease-in-out'}`}
                                    stroke={1.5}/>
                            </button>
                        </div>
                    </div>
                    <div className={`${isExpanded ? 'px-4' : 'px-6'}  sidebar-body relative flex-1 overflow-y-auto overflow-x-hidden min-h-fit max-h-96 border-b border-b-slate-100`}>
                        <SidebarMenu>

                            <SidebarMenuTitle title="Dashboard"/>
                            <SidebarMenu.Item active icon={<IconDashboard stroke={1.5} size={20}/>} text="Dashboard"/>
                            <SidebarMenu.Item  icon={<IconCoins stroke={1.5} size={20}/>} text="Transaction"/>
                            <SidebarMenu.Item icon={<IconWallet stroke={1.5} size={20}/>} text="Budget"/>
                            <SidebarMenu.Item icon={<IconReportAnalytics stroke={1.5} size={20}/>} text="Statistik"/>
                            <SidebarMenu.DropdownMenu target={'pengajar'}  icon={<IconSchool stroke={1.5} size={20}/>} title={'Pengajar'}>
                                <SidebarMenu.DropdownMenuItem link={'/'} title={'Pengajar Baru'}/>
                                <SidebarMenu.DropdownMenuItem link='' title={'Semua Pengajar'}/>
                            </SidebarMenu.DropdownMenu>
                            <SidebarMenuTitle title="Sistem"/>
                            <SidebarMenu.Item icon={<IconUserCog stroke={1.5} size={20}/>} text="User"/>
                            <SidebarMenu.Item icon={<IconServerBolt stroke={1.5} size={20}/>} text="Sync"/>
                            <SidebarMenu.Item icon={<IconSettings stroke={1.5} size={20}/>} text="Setting"/>

                        </SidebarMenu>
                    </div>
                    <div className="sidebar-footer absolute bottom-5 w-full mb-5">
                        <div className={`${isExpanded ? '' : 'px-6 mx-auto'} container `}>
                            <div
                                className={`${isExpanded ? '' : 'bg-sky-50 border border-slate-200'} box-info h-auto py-3  rounded-xl text-center `}
                            >
                                <div
                                    className="avatar-box inline-flex relative rounded-full p-2 border-2 border-violet-600 bg-violet-500">
                                    <h1 className='text-2xl text-white'>AS</h1>
                                    <span
                                        className='h-3 w-3 absolute bottom-0 right-0 border border-white rounded-full bg-teal-400'></span>
                                </div>
                                <p className={`${isExpanded ? 'hidden' : ''} user-name mt-2 mb-0 font-bold`}>Abd. Asis</p>
                                <p className={`${isExpanded ? 'hidden' : ''} user-email leading-none mb-0 font-light text-sm`}>id.abdasis@gmail.com</p>
                                <button
                                    className={`${isExpanded ? 'hidden' : ''} flex items-center justify-center py-1.5 mx-auto border-b-2 border-b-rose-700 rounded-full hover:bg-rose-700 border-b w-44 capitalize font-light gap-1 bg-rose-600 text-white mt-3`}>
                                    <IconLogout size={18}/>
                                    <span className='text-sm font-medium'>Logout</span>
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
