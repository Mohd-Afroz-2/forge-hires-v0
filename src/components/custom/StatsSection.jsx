"use client";

import React from "react";
import { FaBuilding, FaUsers, FaHandshake } from "react-icons/fa";

const StatCard = ({ icon: Icon, value, label, description }) => {
  return (
    <div className="flex flex-col items-center p-10 rounded-3xl bg-white border-2 border-gray-300 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group hover:-translate-y-2">
      <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-black group-hover:text-white text-black">
        <Icon className="text-3xl transition-colors duration-500" />
      </div>
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-black mb-3">{value}</h3>
      <div className="px-6 py-1.5 rounded-full bg-gray-50 border border-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider mb-6">
        {label}
      </div>
      <p className="text-gray-500 text-center text-base leading-relaxed max-w-[240px]">
        {description}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: FaBuilding,
      value: "7537+",
      label: "Business",
      description: "Businesses and Employees trust and maintain confidence in Forge Hire.",
    },
    {
      icon: FaUsers,
      value: "40%",
      label: "Employers",
      description: "Linking employers and employees for mutual success and effective collaboration.",
    },
    {
      icon: FaHandshake,
      value: "736287+",
      label: "Resumes",
      description: "Fulfilling dreams, exceed expectations. Submit your resume for success today!",
    },
  ];

  return (
    <section className="bg-gray-50/30">
      <div className="max-w-7xl mx-auto p-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black">
            Visionary Views: Unraveling Success Strategies
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Gaining profound insights into the path to Success and unleashing your business's full potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
