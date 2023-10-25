import {useState} from 'react';
import Sidebar from "@/Components/Sidebar.jsx";
import HeaderTwo from "@/Components/HeaderTwo.jsx";
import {useSidebarToggle} from "./../Components/Sidebar.jsx"

export default function Authenticated({user, header, children}) {
    const {open} = useSidebarToggle()
    return (
        <div className="min-h-screen flex justify-between gap-3 bg-slate-50">
            <Sidebar/>
            <main className={`${open ? 'ms-20' : 'ms-72 delay-300'} transition-all duration-300 flex-grow mx-auto w-full bg-slate-50`}>
                <HeaderTwo/>
                <div className="container">
                    {children}
                </div>
            </main>
        </div>
    );
}
