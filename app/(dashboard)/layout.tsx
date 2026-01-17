"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ICONS } from '../../constants';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showNotifications, setShowNotifications] = useState(false);

  const navItems = [
    { label: 'Inventory', href: '/rooms' },
    { label: 'Bookings', href: '/bookings' },
    { label: 'Guests', href: '/guests' },
    { label: 'Analytics', href: '/analytics' }
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Executive Sidebar */}
      <aside className="w-80 bg-[#1E2139] p-8 flex flex-col justify-between hidden lg:flex fixed h-full shadow-2xl">
        <div>
          <Link href="/rooms" className="flex items-center gap-4 mb-12 group">
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-600/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-2xl italic">H</span>
            </div>
            <h2 className="text-white text-xl font-black tracking-tighter uppercase italic">Luxe Hotel</h2>
          </Link>
          
          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-[20px] transition-all duration-300 ${
                  pathname === item.href 
                    ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="font-black text-[10px] uppercase tracking-[0.2em]">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
        
        
        <Link 
          href="/login" 
          className="bg-white/5 p-8 rounded-[40px] border border-white/10 hover:bg-white/10 transition-all group"
        >
          <p className="text-slate-500 text-[8px] font-black uppercase tracking-[0.4em] mb-4 group-hover:text-slate-300 transition-colors">Staff Terminal</p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-700 border border-white/20 shadow-inner flex items-center justify-center">
               <div className="w-4 h-4 bg-indigo-400 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <p className="text-white text-[11px] font-black uppercase tracking-widest leading-none">Admin Portal</p>
              <span className="text-indigo-400 text-[8px] font-bold mt-1">Logout</span>
            </div>
          </div>
        </Link>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-80 relative">
        {/* Top Header Bar with Notification Bell */}
        <header className="sticky top-0 z-30 flex justify-end p-8 pointer-events-none">
          <div className="relative pointer-events-auto">
            <button 
                              aria-label="Notification" 

              onClick={() => setShowNotifications(!showNotifications)}
              className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:shadow-xl transition-all relative"
            >
              <ICONS.Filter className="rotate-90" size={20} />
              <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white" />
            </button>

            {/* Notification Dropdown */}
            {showNotifications && (
              <div className="absolute right-0 mt-4 w-80 bg-white rounded-[32px] shadow-2xl border border-slate-100 p-6 space-y-4 animate-in fade-in zoom-in duration-300">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Alerts</p>
                <div className="space-y-3">
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                    <p className="text-amber-800 text-[10px] font-bold">Checkout Impending</p>
                    <p className="text-slate-600 text-[9px] mt-1">Room 304 (Priya Patel) leaves in 2 hours.</p>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <p className="text-indigo-800 text-[10px] font-bold">Cleaning Complete</p>
                    <p className="text-slate-600 text-[9px] mt-1">Room 202 is now ready for Check-In.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="-mt-24">
          {children}
        </div>
      </main>
    </div>
  );
}