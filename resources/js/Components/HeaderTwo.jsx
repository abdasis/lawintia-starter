import React, {Fragment, useEffect} from 'react';
import {IconMoon, IconSun} from "@tabler/icons-react";
import {useStore} from "@/Context/useStore.jsx";

const HeaderTwo = () => {

    const {isDarkMode, toggleDarkMode} = useStore();

    const handleToggle = () => {
        toggleDarkMode()
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }

            // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    }

    return (
        <Fragment>
            <header
                className='h-16 border-b border-slate-100 flex py-4 items-center bg-white justify-between shadow-sm shadow-slate-50'>
                <div className="container flex mx-auto px-5">
                    <div className="section-start flex-1">

                    </div>
                    <div className="section-end">
                        <button onClick={handleToggle} type="button"
                                className="text-slate-700 transition-all group ease-in-out duration-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-200 dark:hover:text-slate-50 dark:focus:ring-slate-200 rounded-lg text-sm p-2.5">
                            {isDarkMode ? (
                                <IconMoon stroke={1.5} id="theme-toggle-dark-icon" className="w-5 h-5 group-hover:rotate-90 transition-transform duration-700"/>
                            ) : (
                                <IconSun stroke={1.5} id="theme-toggle-light-icon" className=" w-5 h-5 group-hover:rotate-90 transition-transform duration-700"/>
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default HeaderTwo;
