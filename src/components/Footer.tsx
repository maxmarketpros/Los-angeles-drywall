import Image from "next/image";
import { PhoneIcon, EmailIcon, MapPinIcon } from "./icons";

const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "FAQ", href: "/faq" },
];

const serviceGroups = [
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
];

const areaGroups = [
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
];

export default function Footer() {
    return (
        <footer className="bg-[var(--color-neutral-900)] text-white">
            <div className="page-container py-20 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    <div className="lg:col-span-4 lg:pr-8">
                        <Image
                            src="/images/logo.png"
                            alt="Los Angeles Drywall & Framing logo"
                            width={160}
                            height={52}
                            className="mb-6"
                            style={{ filter: 'brightness(0) invert(1)' }}
                        />
                        <p className="text-[15px] text-neutral-400 leading-relaxed max-w-sm">
                            Licensed drywall contractor and framing specialist serving Los Angeles, CA and the surrounding metro area. Quality craftsmanship for residential and commercial projects. CA License #1141917.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-white mb-6 uppercase tracking-widest">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-[14px] text-neutral-400 hover:text-[var(--color-primary-light)] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-white mb-6 uppercase tracking-widest">
                            Services
                        </h4>
                        <div className="flex flex-col gap-6">
                            {serviceGroups.map(group => (
                                <div key={group.title}>
                                    <h5 className="text-[11px] font-bold tracking-[0.15em] text-[var(--color-primary-light)] uppercase mb-3 opacity-90">
                                        {group.title}
                                    </h5>
                                    <ul className="space-y-2.5">
                                        {group.links.map((link) => (
                                            <li key={link.href}>
                                                <a
                                                    href={link.href}
                                                    className="text-[14px] text-neutral-400 hover:text-white transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-white mb-6 uppercase tracking-widest">
                            Service Areas
                        </h4>
                        <div className="flex flex-col gap-6">
                            {areaGroups.map(group => (
                                <div key={group.title}>
                                    <h5 className="text-[11px] font-bold tracking-[0.15em] text-[var(--color-primary-light)] uppercase mb-3 opacity-90">
                                        {group.title}
                                    </h5>
                                    <ul className="space-y-2.5">
                                        {group.links.map((link) => (
                                            <li key={link.href}>
                                                <a
                                                    href={link.href}
                                                    className="text-[14px] text-neutral-400 hover:text-white transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-white mb-6 uppercase tracking-widest">
                            Contact
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="tel:3107309832"
                                className="flex items-center gap-3 text-[14px] text-[var(--color-primary-light)] font-medium hover:text-white transition-colors"
                            >
                                <PhoneIcon size={18} />
                                (310) 730-9832
                            </a>
                            <a
                                href="mailto:sales@losangelesdrywallandframing.com"
                                className="flex items-center gap-3 text-[14px] text-neutral-400 hover:text-white transition-colors"
                            >
                                <EmailIcon size={18} />
                                sales@losangelesdrywallandframing.com
                            </a>
                            <div className="flex items-start gap-3 text-[14px] text-neutral-400">
                                <MapPinIcon size={18} className="shrink-0 mt-0.5" />
                                <span className="leading-relaxed">
                                    Los Angeles, CA
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 bg-black/20">
                <div className="page-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-neutral-500 font-inter">
                        &copy; {new Date().getFullYear()} Los Angeles Drywall & Framing. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a
                            href="/privacy-policy"
                            className="text-sm text-neutral-500 hover:text-[var(--color-primary-light)] transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/sitemap.xml"
                            className="text-sm text-neutral-500 hover:text-[var(--color-primary-light)] transition-colors"
                        >
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
