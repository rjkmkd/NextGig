import React from 'react'
import { Outlet } from 'react-router-dom'
import "../App.css"
import Header from '@/components/Header.component';
const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <footer className="p-10 text-center bg-gray-800 mt-10">
        <p className=" text-gray-400">made By Raj✌ @copyRight</p>
      </footer>
    </div>
  );
}

export default AppLayout
