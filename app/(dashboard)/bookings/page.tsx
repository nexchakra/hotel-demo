"use client";

import React, { useState } from 'react';
import { ICONS } from '../../../constants';

const MOCK_BOOKINGS = [
  { id: 'BK-101', guestName: 'Aarav Sharma', roomNumber: '101', checkIn: '2026-01-15', checkOut: '2026-01-18', amount: 37500, status: 'Confirmed' },
  { id: 'BK-304', guestName: 'Priya Patel', roomNumber: '304', checkIn: '2026-01-16', checkOut: '2026-01-20', amount: 140000, status: 'Pending' },
  { id: 'BK-202', guestName: 'Rohan Gupta', roomNumber: '202', checkIn: '2026-01-14', checkOut: '2026-01-16', amount: 17000, status: 'Checked Out' },
];

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-12 space-y-10 animate-in fade-in duration-700">
      {/* Header Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter italic uppercase leading-none">Bookings</h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-4 ml-1">Guest Registry Terminal</p>
        </div>

        <div className="flex gap-4">
          <div className="relative">
            <ICONS.Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
            <input 
              type="text" 
              placeholder="Search Guest..." 
              className="pl-12 pr-6 py-4 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest focus:ring-2 focus:ring-indigo-600 transition-all outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Professional Data Table */}
      <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              {['ID', 'Guest', 'Room', 'Duration', 'Total Amount', 'Status', 'Actions'].map((header) => (
                <th key={header} className="px-8 py-6 text-[9px] font-black uppercase tracking-widest text-slate-400">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {MOCK_BOOKINGS.filter(b => b.guestName.toLowerCase().includes(searchTerm.toLowerCase())).map((booking) => (
              <tr key={booking.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="px-8 py-6 font-bold text-slate-400 text-[10px]">{booking.id}</td>
                <td className="px-8 py-6">
                  <p className="font-black text-slate-900 text-sm italic">{booking.guestName}</p>
                </td>
                <td className="px-8 py-6">
                  <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg font-black text-[10px]">Room {booking.roomNumber}</span>
                </td>
                <td className="px-8 py-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-900">{booking.checkIn}</span>
                    <span className="text-[8px] font-black text-slate-300 uppercase italic">To {booking.checkOut}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="font-black text-slate-900">₹{booking.amount.toLocaleString('en-IN')}</span>
                </td>
                <td className="px-8 py-6">
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full w-fit ${
                    booking.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-600' : 
                    booking.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-slate-100 text-slate-400'
                  }`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span className="text-[8px] font-black uppercase tracking-widest">{booking.status}</span>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <button 
                  aria-label="Filter Bookings"
                  className="p-3 bg-slate-900 text-white rounded-xl hover:bg-indigo-600 transition-all">
                    <ICONS.Filter size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}