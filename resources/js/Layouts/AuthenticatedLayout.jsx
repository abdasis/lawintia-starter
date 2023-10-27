import {useState} from 'react';
import Sidebar from "@/Components/Sidebar.jsx";
import HeaderTwo from "@/Components/HeaderTwo.jsx";
import useSidebarToggle from "@/Components/SidebarToggle.jsx";

export default function Authenticated({user, header, children}) {
    const {isExpanded} = useSidebarToggle()
    return (
        <div className="min-h-screen flex justify-between gap-3 bg-slate-50">
            <Sidebar/>
            <main className={`${isExpanded ? 'ms-20' : 'ms-64 delay-300'} transition-all duration-300 flex-grow mx-auto w-full bg-slate-50`}>
                <HeaderTwo/>
                <div className="container">
                    {children}
                </div>
            </main>
        </div>
    );
}
