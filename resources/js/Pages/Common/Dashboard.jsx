import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="p-6 text-gray-900">
                <div className="welcome-text bg-slate-900 p-10 rounded-xl text-white">
                    <h5 className='font-inter font-light'>Selamat Datang Kembali</h5>
                    <h1 className='font-calistoga text-4xl '>Abdul Aziz</h1>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
