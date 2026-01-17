"use client";

import React from 'react';

const MOCK_GUESTS = [
  { name: 'Aarav Sharma', email: 'aarav@email.com', phone: '+91 98765 43210', visits: 4, status: 'VIP' },
  { name: 'Priya Patel', email: 'priya@email.com', phone: '+91 91234 56789', visits: 1, status: 'New' },
  { name: 'Rohan Gupta', email: 'rohan@email.com', phone: '+91 99887 76655', visits: 12, status: 'Regular' }
];

export default function GuestsPage() {
  return (
    <div className="p-12 space-y-12 animate-in fade-in duration-700">
      <div>
        <h1 className="text-6xl font-black text-slate-900 tracking-tighter italic uppercase leading-none">Guest Registry</h1>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-4 ml-1">Customer Relationship Management</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {MOCK_GUESTS.map((guest) => (
          <div key={guest.email} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm flex items-center justify-between hover:border-indigo-200 transition-all group">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-slate-100 rounded-3xl flex items-center justify-center font-black text-slate-400 text-xl group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                {guest.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 italic leading-none">{guest.name}</h3>
                <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">{guest.email} • {guest.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-12">
              <div className="text-right">
                <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Total Visits</p>
                <p className="text-xl font-black text-slate-900">{guest.visits}</p>
              </div>
              <div className={`px-6 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest ${
                guest.status === 'VIP' ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-400'
              }`}>
                {guest.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}