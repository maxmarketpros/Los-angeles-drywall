"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneIcon, MenuIcon, XIcon, ArrowRightIcon } from "./icons";

const navLinks = [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    {
        label: "Services",
        href: "/services",
        megaMenu: [
            {
                title: "Drywall Services",
                links: [
                    { label: "Drywall Installation", href: "/services/drywall-installation" },
                    { label: "Drywall Repair", href: "/services/drywall-repair" },
                    { label: "Drywall Finishing", href: "/services/drywall-finishing" },
                    { label: "Drywall Texturing", href: "/services/drywall-texturing" },
                    { label: "Drywall Patching", href: "/services/drywall-patching" },
                ]
            },
            {
                title: "Framing Services",
                links: [
                    { label: "Wall Framing", href: "/services/wall-framing" },
                    { label: "Residential Framing", href: "/services/residential-framing" },
                    { label: "Commercial Framing", href: "/services/commercial-framing" },
                    { label: "Rough Carpentry", href: "/services/rough-carpentry" },
                    { label: "Custom Framing", href: "/services/custom-framing" },
                ]
            },
            {
                title: "Specialty Services",
                links: [
                    { label: "Exterior Painting", href: "/services/exterior-painting" },
                    { label: "Stucco", href: "/services/stucco" },
                    { label: "Metal Framing", href: "/services/metal-framing" },
                ]
            }
        ]
    },
    {
        label: "Areas",
        href: "/areas",
        megaMenu: [
            {
                title: "Los Angeles Metro",
                links: [
                    { label: "Beverly Hills", href: "/areas/beverly-hills" },
                    { label: "Santa Monica", href: "/areas/santa-monica" },
                    { label: "Pasadena", href: "/areas/pasadena" },
                    { label: "Glendale", href: "/areas/glendale" },
                    { label: "Burbank", href: "/areas/burbank" },
                ]
            }
        ]
    },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll(); // Check on initial load
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-4"
                    }`}
            >
                <div className="page-container flex items-center justify-between">
                    <a href="/" className="flex items-center shrink-0 mr-4 xl:mr-8">
                        {/* When transparent, use the white (inverted) logo. When scrolled, use the colored logo. */}
                        <div className="relative w-[150px] h-[46px] md:w-[200px] md:h-[61px] lg:w-[220px] lg:h-[67px]">
                            <Image
                                src="/images/logo.png"
                                alt="Los Angeles Drywall & Framing logo"
                                fill
                                sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 220px"
                                className="object-contain object-left transition-[filter] duration-300"
                                style={{ filter: isScrolled || isMobileMenuOpen ? 'none' : 'brightness(0) invert(1)' }}
                                priority
                            />
                        </div>
                    </a>

                    <nav className="hidden xl:flex items-center gap-5">
                        {navLinks.map((link) => (
                            <div key={link.label} className="relative group">
                                <a
                                    href={link.href}
                                    className={`text-[13px] tracking-widest font-bold uppercase transition-colors flex items-center gap-1.5 py-4 ${isScrolled || isMobileMenuOpen
                                        ? "text-[var(--color-neutral-600)] hover:text-[var(--color-primary)]"
                                        : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                    {link.megaMenu && (
                                        <svg className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </a>

                                {link.megaMenu && (
                                    <div className={`absolute top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 ${link.megaMenu.length === 1 ? '-left-4' : '-left-20'}`}>
                                        <div className={`bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[var(--color-neutral-100)] overflow-hidden p-8 text-left grid gap-8 ${link.megaMenu.length === 1 ? 'grid-cols-1 w-[220px]' : link.megaMenu.length === 2 ? 'grid-cols-2 w-[420px]' : 'grid-cols-3 w-[600px]'}`}>
                                            {link.megaMenu.map(category => (
                                                <div key={category.title}>
                                                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-primary)] uppercase mb-4 pb-2 border-b border-[var(--color-neutral-100)]">
                                                        {category.title}
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {category.links.map(sublink => (
                                                            <li key={sublink.href}>
                                                                <a
                                                                    href={sublink.href}
                                                                    className="block text-[13px] font-semibold text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-900)] transition-colors leading-snug"
                                                                >
                                                                    {sublink.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}


                            </div>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4 shrink-0 pl-4">
                        <a
                            href="tel:3107309832"
                            className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${isScrolled || isMobileMenuOpen
                                ? "text-[var(--color-neutral-800)] hover:text-[var(--color-primary)]"
                                : "text-white hover:text-[var(--color-primary-light)]"
                                }`}
                        >
                            <PhoneIcon size={16} />
                            (310) 730-9832
                        </a>
                        <a
                            href="/contact"
                            className={`btn-primary text-[13px] !py-2.5 !px-5 shadow-lg ${!(isScrolled || isMobileMenuOpen)
                                ? "!bg-white !text-[var(--color-primary)] hover:!bg-[var(--color-neutral-100)]"
                                : ""
                                }`}
                        >
                            Get Free Estimate
                        </a>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`xl:hidden p-2 transition-colors cursor-pointer ${isScrolled || isMobileMenuOpen ? "text-[var(--color-neutral-800)]" : "text-white"
                            }`}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <XIcon size={26} /> : <MenuIcon size={26} />}
                    </button>
                </div>
            </header>

            {/* Mobile menu rendered OUTSIDE the header to avoid backdrop-filter containment */}
            {isMobileMenuOpen && (
                <div className="xl:hidden fixed inset-0 top-[62px] bg-white z-[55] overflow-y-auto">
                    <div className="page-container py-8 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={() => !link.megaMenu && setIsMobileMenuOpen(false)}
                                    className="block py-3 px-4 text-lg font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-800)] hover:text-[var(--color-primary)] hover:bg-[var(--color-neutral-50)] rounded-xl transition-colors"
                                >
                                    {link.label}
                                </a>
                                {link.megaMenu && (
                                    <div className="pl-6 border-l-2 border-[var(--color-neutral-100)] ml-6 mt-1 mb-2 flex flex-col gap-4">
                                        {link.megaMenu.map(category => (
                                            <div key={category.title}>
                                                <h4 className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-primary)] uppercase mb-2 px-4">
                                                    {category.title}
                                                </h4>
                                                <div className="flex flex-col gap-0.5">
                                                    {category.links.map(sublink => (
                                                        <a
                                                            key={sublink.href}
                                                            href={sublink.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block py-2 px-4 text-[14px] font-medium text-[var(--color-neutral-600)] hover:text-[var(--color-primary)] hover:bg-[var(--color-neutral-50)] rounded-lg transition-colors"
                                                        >
                                                            {sublink.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>
                        ))}
                        <hr className="my-6 border-[var(--color-neutral-200)]" />
                        <a
                            href="tel:3107309832"
                            className="flex items-center justify-center gap-2 py-4 px-4 text-lg font-bold text-[var(--color-primary)]"
                        >
                            <PhoneIcon size={20} />
                            (310) 730-9832
                        </a>
                        <a
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="btn-primary text-center mt-2 mx-4"
                        >
                            Get Free Estimate
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
