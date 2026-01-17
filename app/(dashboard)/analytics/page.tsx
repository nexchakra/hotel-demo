"use client";

import React from 'react';

export default function AnalyticsPage() {
  const stats = [
    { label: 'Total Revenue', value: '₹77,000', change: '+12.5%', color: 'bg-emerald-500' },
    { label: 'Occupancy Rate', value: '68%', change: '+5.2%', color: 'bg-indigo-600' },
    { label: 'Avg. Daily Rate', value: '₹12,800', change: '-2.1%', color: 'bg-slate-900' }
  ];

  return (
    <div className="p-12 space-y-12 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter italic uppercase leading-none">Analytics</h1>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mt-4 ml-1">Performance Overview</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">{stat.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic">{stat.value}</h3>
              <span className={`text-[10px] font-black px-3 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                {stat.change}
              </span>
            </div>
            <div className={`h-1.5 w-full ${stat.color} rounded-full mt-8 opacity-20`} />
          </div>
        ))}
      </div>

      <div className="bg-white p-12 rounded-[60px] border border-slate-100 shadow-sm">
        <h3 className="text-2xl font-black text-slate-900 italic mb-8">Revenue by Category</h3>
        <div className="space-y-8">
          {[
            { type: 'Suites', amount: 35000, color: 'bg-indigo-600', percent: '45%' },
            { type: 'Deluxe', amount: 26500, color: 'bg-emerald-500', percent: '34%' },
            { type: 'Standard', amount: 15500, color: 'bg-slate-900', percent: '21%' }
          ].map((item) => (
            <div key={item.type} className="space-y-3">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                <span className="text-slate-900">{item.type}</span>
                <span className="text-slate-400">₹{item.amount.toLocaleString('en-IN')}</span>
              </div>
              <div className="h-4 w-full bg-slate-50 rounded-full overflow-hidden">
                
                <div 
                  className={`h-full ${item.color} rounded-full`} 
                  style={{ width: item.percent }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}