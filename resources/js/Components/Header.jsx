import React, {Fragment} from 'react';
import {Link} from "@inertiajs/react";
import {IconLogin, IconRegistered, IconSignRight} from "@tabler/icons-react";

const Header = () => {
    return (
        <Fragment>
            <header className="h-16 fixed w-full shadow-sm bg-white border-b border-b-slate-100 backdrop-blur flex items-center justify-between">
                <div className="container mx-auto flex items-center justify-between px-5">
                    <div className="left-section">
                        <div className="logo cursor-pointer hover:scale-90 hover:rotate-3 transition-all duration-200 ease-linear">
                            <h1 className='font-inter text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-violet-800 font-bold text-3xl text-rose-600'>Lawintia</h1>
                        </div>
                    </div>
                    <div className="rigth-section">
                        <div className="btn-group flex items-center">
                            <Link href={route('login')} className='btn btn-sm capitalize'>Login</Link>
                            <Link href={route('register')} className='btn btn-sm capitalize'>
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </Fragment>
    );
};

export default Header;
