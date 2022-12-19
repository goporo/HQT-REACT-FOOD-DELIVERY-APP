import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = () => {
    return (
        <main className="flex min-h-screen">
            <Sidebar />
            <div className="w-full bg-gray-50">
                <Header />
                <div>
                    <Outlet />
                </div>
            </div>

        </main>

    )
}

export default Layout