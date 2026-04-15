"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaX, FaChevronDown, FaChevronUp } from "react-icons/fa6";

export default function Navbar() {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [jobOpen, setJobOpen] = useState(false);
    const [employersOpen, setEmployersOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [employeesOpen, setEmployeesOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const navLinks = [
        {
            title: "About",
            isOpen: aboutOpen,
            setOpen: setAboutOpen,
            links: [
                { name: "Company", href: "/about/company" },
                { name: "People", href: "/about/people" },
                { name: "Career", href: "/about/career" },
            ]
        },
        {
            title: "Find a Job",
            isOpen: jobOpen,
            setOpen: setJobOpen,
            links: [
                { name: "Accounting", href: "/find-a-job/accounting" },
                { name: "Air lines", href: "/find-a-job/air-lines" },
                { name: "Environmental", href: "/find-a-job/environmental" },
                { name: "Healthcare Pharmaceuticals", href: "/find-a-job/healthcare-pharmaceuticals" },
                { name: "Hospitality", href: "/find-a-job/hospitality" },
                { name: "Legal", href: "/find-a-job/legal" },
                { name: "Oil and gas", href: "/find-a-job/oil-and-gas" },
                { name: "Public Safety", href: "/find-a-job/public-safety" },
                { name: "Retail", href: "/find-a-job/retail" },
                { name: "Sports", href: "/find-a-job/sports" },
                { name: "Constructions", href: "/find-a-job/constructions" },
                { name: "Architecture", href: "/find-a-job/architecture" },
                { name: "Hardware & Networking", href: "/find-a-job/hardware-and-networking" },
                { name: "Mechanical", href: "/find-a-job/mechanical" },
                { name: "Resturants (F&B)", href: "/find-a-job/resturants" },
                { name: "Mining", href: "/find-a-job/mining" },
                { name: "Telecommunications & Wireless", href: "/find-a-job/telecommunications-wireless" },
                { name: "Public Administration", href: "/find-a-job/public-administration" },
                { name: "Manufacturing", href: "/find-a-job/manufacturing" },
            ]
        },
        {
            title: "Employers",
            isOpen: employersOpen,
            setOpen: setEmployersOpen,
            links: [
                { name: "Our Services", href: "/employers/our-services" },
                { name: "Posting jobs", href: "/employers/posting-jobs" },
                { name: "Sucess stories", href: "/employers/sucess-stories" },
                { name: "Testimonials Form", href: "/employers/testimonials-form" },
                { name: "why profieient now", href: "/employers/why-proficient-now" },
            ]
        },
        {
            title: "Employees",
            isOpen: employeesOpen,
            setOpen: setEmployeesOpen,
            links: [
                { name: "Career advice", href: "/employees/career-advice" },
                { name: "Career insights", href: "/employees/career-insights" },
                { name: "Effective job search", href: "/employees/effective-job-search" },
                { name: "Preparing Interview", href: "/employees/preparing-interview" },
                { name: "Resume-submission", href: "/employees/resume-submission" },
                { name: "Talent Grooming", href: "/employees/talent-grooming" },
                { name: "Tips and resources for career development", href: "/employees/tips-and-resources-for-career-development" },
                { name: "Tips on submitting resume", href: "/employees/tips-on-submitting-resume" },
            ]
        },
        {
            title: "Services",
            isOpen: servicesOpen,
            setOpen: setServicesOpen,
            links: [
                { name: "Product Support", href: "/services/product-support" },
                { name: "Product development", href: "/services/product-development" },
                { name: "Payroll services", href: "/services/payroll-services" },
                { name: "Recruitment services", href: "/services/recruitment-services" },
                { name: "Accounting bookkeeping", href: "/services/accounting-bookkeeping" },
            ]
        }
    ];

    return (
        <>
            <nav className="w-full bg-white border-b shadow-sm sticky top-0 z-50">
                <div className="max-w-[1600px] mx-auto px-6 md:px-10 md:py-5 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center shrink-0">
                        <Image
                            src="/logo-forge.png"
                            width={120}
                            height={40}
                            alt="Logo"
                            className="mix-blend-multiply brightness-[1.1] contrast-[1.1] h-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8 relative h-full">
                        {navLinks.map((section, idx) => (
                            <div
                                key={idx}
                                className="relative h-full flex items-center group/nav"
                                onMouseEnter={() => section.setOpen(true)}
                                onMouseLeave={() => section.setOpen(false)}
                            >
                                <button className={`font-medium py-2 cursor-pointer flex items-center gap-1.5 transition-all duration-200 ${section.isOpen ? 'text-black' : 'text-black hover:text-black'}`}>
                                    {section.title}
                                </button>

                                {section.isOpen && (
                                    <div className="absolute top-[85%] left-[-70px] pt-4 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                                        <div className={`${section.links.length > 5 ? 'w-[440px] grid grid-cols-2 gap-x-2' : 'w-56'} bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-2.5 ring-1 ring-black/5`}>
                                            {section.links.map((link, lIdx) => (
                                                <Link
                                                    key={lIdx}
                                                    href={link.href}
                                                    className="flex items-center gap-3 px-3.5 py-2.5 hover:bg-black/5 hover:text-black rounded-xl text-[13.5px] font-medium transition-all duration-200 group/item"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/item:bg-black group-hover/item:scale-125 transition-all"></div>
                                                    {link.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex items-center gap-8 pl-4">
                            <Link href="/blogs" className="font-medium text-black hover:text-black transition-colors">
                                Blogs
                            </Link>
                            <Link href="/contact-us" className="bg-black text-white px-7 py-2.5 rounded-full font-bold hover:scale-102 duration-300 transition-all active:scale-95 text-sm uppercase tracking-wide">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="lg:hidden p-2 text-gray-700 hover:text-black transition-colors cursor-pointer"
                        onClick={toggleMobileMenu}
                    >
                        {mobileMenuOpen ? <FaX className="text-2xl" /> : <FaBars className="text-2xl" />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden fixed inset-0 bg-white z-[60] transition-transform duration-300 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full bg-white">
                        <div className="flex items-center justify-between px-6 py-4 border-b">
                            <Image
                                src="/logo-forge.png"
                                width={120}
                                height={40}
                                alt="Logo"
                                className="mix-blend-multiply brightness-[1.1] contrast-[1.1] h-auto"
                                priority
                            />
                            <button onClick={toggleMobileMenu} className="p-2 text-gray-700 cursor-pointer">
                                <FaX className="text-2xl" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6 py-8">
                            <div className="flex flex-col gap-6">
                                {navLinks.map((section, idx) => (
                                    <div key={idx} className="flex flex-col border-b border-gray-50 last:border-0">
                                        <button
                                            onClick={() => section.setOpen(!section.isOpen)}
                                            className="flex items-center justify-between w-full py-4 text-left focus:outline-none group cursor-pointer"
                                        >
                                            <span className={`font-bold uppercase text-[11px] tracking-[0.15em] border-l-4 pl-3 transition-all duration-300 ${section.isOpen ? 'border-black text-black' : 'border-gray-200 text-gray-700 group-hover:text-black group-hover:border-black'}`}>
                                                {section.title}
                                            </span>
                                            <div className={`transition-transform duration-300 ${section.isOpen ? 'rotate-180 text-black' : 'text-gray-400 group-hover:text-black'}`}>
                                                <FaChevronDown className="text-xs" />
                                            </div>
                                        </button>

                                        {section.isOpen && (
                                            <div className="grid grid-cols-1 gap-1.5 pl-7 pb-5 animate-in fade-in slide-in-from-top-1 duration-300">
                                                {section.links.map((link, lIdx) => (
                                                    <Link
                                                        key={lIdx}
                                                        href={link.href}
                                                        onClick={toggleMobileMenu}
                                                        className="text-gray-500 hover:text-black py-1.5 text-[13px] font-medium transition-colors flex items-center gap-2"
                                                    >
                                                        <div className="w-1.5 h-[1px] bg-gray-300 group-hover:bg-black"></div>
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <Link
                                    href="/blogs"
                                    onClick={toggleMobileMenu}
                                    className="flex items-center w-full py-4 text-left group border-b border-gray-50"
                                >
                                    <span className="font-bold uppercase text-[11px] tracking-[0.15em] border-l-4 border-gray-200 pl-3 text-gray-700 group-hover:text-black group-hover:border-black transition-all duration-300">
                                        Blogs
                                    </span>
                                </Link>
                                <Link
                                    href="/contact-us"
                                    onClick={toggleMobileMenu}
                                    className="w-full bg-black text-white text-center py-4 rounded-xl font-bold mt-4 active:scale-[0.98] transition-all"
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}