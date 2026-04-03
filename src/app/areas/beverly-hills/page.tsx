import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import ServicesGrid from "@/components/ServicesGrid";
import Image from "next/image";
import Link from "next/link";
import {
    MapPinIcon,
    ArrowRightIcon,
    BuildingIcon,
    HardHatIcon,
    LayersIcon,
    HammerIcon,
    HomeIcon,
    RulerIcon,
    CheckCircleIcon,
    DropletIcon,
    ShieldIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Drywall Contractor in Beverly Hills, CA | Los Angeles Drywall & Framing",
    description: "Licensed drywall contractor serving Beverly Hills, CA. Professional drywall installation, repair, finishing, and framing for luxury homes, estate remodels, and high-end renovations. CA #1141917. Call (310) 730-9832.",
};

const regionalServices = [
    {
        title: "Drywall Services",
        description: "Complete drywall solutions for Beverly Hills residential and commercial properties, from new construction to precision repairs.",
        links: [
            { text: "Drywall Installation", url: "/services/drywall-installation" },
            { text: "Drywall Repair", url: "/services/drywall-repair" },
            { text: "Drywall Finishing", url: "/services/drywall-finishing" },
            { text: "Drywall Texturing", url: "/services/drywall-texturing" },
            { text: "Drywall Patching", url: "/services/drywall-patching" },
        ]
    },
    {
        title: "Framing Services",
        description: "Structural framing for Beverly Hills new builds, additions, remodels, and custom architectural features requiring precision craftsmanship.",
        links: [
            { text: "Wall Framing", url: "/services/wall-framing" },
            { text: "Residential Framing", url: "/services/residential-framing" },
            { text: "Commercial Framing", url: "/services/commercial-framing" },
            { text: "Rough Carpentry", url: "/services/rough-carpentry" },
            { text: "Custom Framing", url: "/services/custom-framing" },
        ]
    },
    {
        title: "Specialty Services",
        description: "Exterior finishing and specialty construction services for Beverly Hills properties requiring premium materials and expert application.",
        links: [
            { text: "Exterior Painting", url: "/services/exterior-painting" },
            { text: "Stucco", url: "/services/stucco" },
            { text: "Metal Framing", url: "/services/metal-framing" },
        ]
    }
];

const faqs = [
    {
        question: "Do you work on luxury homes in Beverly Hills?",
        answer: "Yes, Los Angeles Drywall & Framing regularly works on luxury residential properties throughout Beverly Hills. Our team is experienced with high end finishes including Level 5 smooth wall finishes, custom architectural details, curved walls, coffered ceilings, and specialty textures. We understand the exacting standards that Beverly Hills homeowners and their architects expect, and we deliver work that meets those standards on every project."
    },
    {
        question: "Can you match existing drywall textures and finishes in older Beverly Hills homes?",
        answer: "Absolutely. Many Beverly Hills homes feature unique plaster and drywall textures that were applied decades ago. Our team has extensive experience matching existing textures including smooth plaster, skip trowel, knockdown, and custom hand applied finishes. We create sample patches for approval before proceeding with the full repair to ensure a seamless match with your existing walls and ceilings."
    },
    {
        question: "Are you licensed and insured for work in Beverly Hills?",
        answer: "Yes, Los Angeles Drywall & Framing holds California Contractor License #1141917 and carries full general liability insurance and workers compensation coverage. We meet all licensing and insurance requirements for residential and commercial construction work in the City of Beverly Hills. We are happy to provide copies of our license and insurance certificates upon request."
    },
    {
        question: "How do you handle Beverly Hills permit requirements?",
        answer: "Beverly Hills has its own building department with specific permit requirements for construction projects. We are familiar with the Beverly Hills permitting process and can coordinate permit applications for projects that require them. Our work is performed to meet all applicable building codes, and we are available for inspections as required by the city. We work closely with homeowners, general contractors, and architects to ensure all permit conditions are satisfied."
    },
    {
        question: "What is the typical timeline for a drywall project in Beverly Hills?",
        answer: "Project timelines vary depending on the scope of work. A single room drywall repair or patching project in Beverly Hills can often be completed in one to two days. A full home renovation involving drywall installation, taping, and finishing across multiple rooms typically takes one to three weeks depending on square footage and finish level. We provide a detailed timeline with every estimate so you can plan accordingly, and we communicate proactively if anything changes during the project."
    }
];

export default function BeverlyHillsArea() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* HERO */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/areas/beverly-hills/hero.jpg"
                    alt="Professional drywall and framing contractor serving Beverly Hills, California"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            <MapPinIcon size={14} /> Beverly Hills, CA
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Drywall Contractor in Beverly Hills, CA
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Los Angeles Drywall & Framing is a licensed drywall contractor serving Beverly Hills, CA and the surrounding communities. We provide professional drywall installation, repair, finishing, and framing services for luxury homes, estate remodels, high end renovations, and commercial properties throughout Beverly Hills. Our team delivers premium craftsmanship that meets the exacting standards Beverly Hills property owners expect.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Get a Free Estimate
                        </a>
                    </div>
                </div>
            </section>

            {/* LOCAL KNOWLEDGE */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden text-left border-b border-[var(--color-neutral-100)]">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(var(--color-primary-dark) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-dark) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        <div className="lg:col-span-5 relative order-2 lg:order-1">
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-200)] group">
                                <Image
                                    src="/images/areas/beverly-hills/hero.jpg"
                                    alt="Drywall and framing work on a Beverly Hills luxury property"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Beverly Hills Projects</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Premium Craftsmanship</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Local Expertise
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Beverly Hills Drywall and Framing Contractor
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Beverly Hills is home to some of the most prestigious residential properties in the country, and the drywall and framing work inside those homes must reflect that standard. Los Angeles Drywall & Framing has built a reputation for delivering premium quality interior construction throughout Beverly Hills, from the flats south of Sunset Boulevard to the hillside estates above. We understand that Beverly Hills homeowners and their architects demand perfection, and we have the skilled tradespeople and attention to detail needed to deliver it consistently.
                                </p>
                                <p>
                                    Our Beverly Hills projects range from targeted drywall repairs in single rooms to complete whole home renovations involving structural framing, drywall installation, and high end finishing. We regularly work on estate remodels where walls must be finished to Level 5 specifications for ultra smooth surfaces that show no imperfections under any lighting. We build custom architectural features including arched doorways, coffered ceilings, recessed niches, and curved walls that require precision framing and skilled drywall application. Our team also handles fire rated assemblies and soundproofing upgrades for home theaters, music rooms, and multi story residences.
                                </p>
                                <p>
                                    Working in Beverly Hills requires more than technical skill. It requires professionalism, respect for the property, and clear communication with homeowners, architects, interior designers, and general contractors. Our crew arrives on time, maintains a clean work area, and protects existing finishes and furnishings throughout the project. We coordinate our schedule around other trades to keep the overall project timeline on track. Whether you are building a new custom home, renovating a mid century estate, or making targeted improvements to your Beverly Hills property, Los Angeles Drywall & Framing is the contractor you can trust to deliver results that match your vision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID */}
            <ServicesGrid hideHeader={true} hideButton={false} />

            {/* REGIONAL SERVICES LINKS */}
            <section className="py-24 lg:py-32 bg-white relative border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 border border-[var(--color-primary)]/20">
                            Our Services
                        </div>
                        <h3 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            Drywall and Framing Services in Beverly Hills
                        </h3>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {regionalServices.map((category, idx) => (
                            <div key={idx} className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] rounded-3xl p-8 lg:p-10 hover:border-[var(--color-primary)] transition-colors group shadow-sm flex flex-col">
                                <h4 className="text-2xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] mb-3">
                                    {category.title}
                                </h4>
                                <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed mb-8">
                                    {category.description}
                                </p>
                                <ul className="space-y-4 flex-grow">
                                    {category.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <Link href={link.url} className="flex items-center justify-between text-[15px] font-bold text-[var(--color-neutral-800)] group/link hover:text-[var(--color-primary)] transition-colors">
                                                <span>{link.text}</span>
                                                <ArrowRightIcon size={16} className="text-[var(--color-neutral-300)] group-hover/link:text-[var(--color-primary)] group-hover/link:translate-x-1 transition-all" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 border border-[var(--color-primary)]/20">
                                Common Questions
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15]">
                                Beverly Hills Drywall FAQ
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details key={index} className="group bg-white border border-[var(--color-neutral-200)] rounded-2xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-[var(--color-neutral-900)] text-lg font-[family-name:var(--font-outfit)] hover:text-[var(--color-primary)] transition-colors">
                                        {faq.question}
                                        <ArrowRightIcon size={18} className="text-[var(--color-neutral-400)] group-open:rotate-90 transition-transform shrink-0 ml-4" />
                                    </summary>
                                    <div className="px-6 pb-6 text-[var(--color-neutral-600)] leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
