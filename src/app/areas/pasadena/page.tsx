import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import ServicesGrid from "@/components/ServicesGrid";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import FAQSchema from "@/components/FAQSchema";
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
    title: "Drywall Contractor in Pasadena, CA | Los Angeles Drywall & Framing",
    description: "Licensed drywall contractor serving Pasadena, CA. Expert drywall and framing for Craftsman homes, historic properties, and modern renovations in Pasadena, South Pasadena, and Altadena. CA #1141917. Call (310) 730-9832.",
    openGraph: {
        images: [{
            url: "/images/areas/pasadena/hero.jpg",
            width: 1200,
            height: 630,
            alt: "Drywall and framing services in Pasadena, CA",
        }],
    },
};

const regionalServices = [
    {
        title: "Drywall Services",
        description: "Professional drywall solutions for Pasadena homes and commercial properties, including historic plaster matching and modern drywall installations.",
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
        description: "Structural framing for Pasadena new construction, additions, seismic upgrades, and renovations in older homes and commercial buildings.",
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
        description: "Exterior finishing and specialty construction services for Pasadena properties, including stucco repair on historic structures.",
        links: [
            { text: "Exterior Painting", url: "/services/exterior-painting" },
            { text: "Stucco", url: "/services/stucco" },
            { text: "Metal Framing", url: "/services/metal-framing" },
        ]
    }
];

const faqs = [
    {
        question: "Do you have experience working on Craftsman homes in Pasadena?",
        answer: "Yes, Pasadena is known for its Craftsman and bungalow style homes, and our team has extensive experience working on these properties. Craftsman homes often feature plaster walls, picture rails, plate rails, and built in cabinetry that require careful attention during drywall repair and renovation. We understand how to match existing plaster textures, integrate modern drywall with original plaster surfaces, and preserve the character defining features that make Pasadena Craftsman homes so valuable."
    },
    {
        question: "Can you handle seismic retrofit framing in older Pasadena homes?",
        answer: "Yes, many older homes in Pasadena require seismic retrofitting to meet current California building codes. Our framing services include cripple wall bracing, foundation bolting preparation, shear wall installation, and structural upgrades that improve a home resistance to earthquake damage. We work with structural engineers and follow their specifications precisely to ensure your retrofit meets all code requirements and passes inspection."
    },
    {
        question: "Do you serve South Pasadena and Altadena as well?",
        answer: "Yes, Los Angeles Drywall & Framing serves Pasadena, South Pasadena, Altadena, San Marino, La Canada Flintridge, and all surrounding communities. We provide the same professional drywall and framing services throughout this area, including residential renovations, new construction, commercial buildouts, and specialty work. Our team is familiar with the building departments and permit requirements across these jurisdictions."
    },
    {
        question: "How do you handle drywall work in Pasadena historic district homes?",
        answer: "Properties in Pasadena historic districts may be subject to additional review by the city Design Commission or local historic preservation guidelines. While drywall and interior framing work is typically not subject to exterior design review, we are mindful of maintaining the historic character of these homes. When working in historic properties, we take care to preserve original trim, moldings, and architectural details. We can match existing plaster textures and work with preservation consultants when needed."
    },
    {
        question: "What is the cost of drywall work in Pasadena?",
        answer: "The cost of drywall work in Pasadena depends on the scope of the project, the condition of existing walls, accessibility, and the finish level required. Repair and patching projects are generally priced by the job, while larger installation projects are estimated based on square footage. Pasadena homes with plaster walls may require additional preparation work when transitioning to or integrating with modern drywall. We provide free written estimates for every project and explain the scope of work in detail before beginning."
    }
];

export default function PasadenaArea() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />
            <BreadcrumbSchema items={[
                { name: "Home", href: "/" },
                { name: "Areas We Serve", href: "/areas" },
                { name: "Pasadena", href: "/areas/pasadena" },
            ]} />
            <FAQSchema faqs={faqs} />

            {/* HERO */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/areas/pasadena/hero.jpg"
                    alt="Professional drywall contractor serving Pasadena, California and surrounding areas"
                    fill
                    className="object-cover object-center"

                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            <MapPinIcon size={14} /> Pasadena, CA
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Drywall Contractor in Pasadena, CA
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Los Angeles Drywall & Framing is a licensed drywall contractor serving Pasadena, CA, South Pasadena, and Altadena. We provide professional drywall installation, repair, finishing, and framing services for Craftsman homes, historic properties, modern renovations, and commercial projects throughout the Pasadena area. Our team has the experience to work on older structures with the care and precision they require while delivering modern quality standards.
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
                                    src="/images/areas/pasadena/hero.jpg"
                                    alt="Drywall and framing work in a Pasadena Craftsman home"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Historic Home Expertise</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Pasadena, CA</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Local Expertise
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Pasadena Drywall Contractor for Historic and Modern Homes
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Pasadena is one of the most architecturally rich cities in the Los Angeles area. The city is celebrated for its concentration of Craftsman bungalows, Spanish Colonial Revival homes, and mid century modern residences, many of which are located within designated historic districts. Working on these older structures requires a contractor who understands how to integrate modern drywall and framing techniques with existing plaster walls, lath systems, and vintage construction methods. Los Angeles Drywall & Framing brings that expertise to every Pasadena project we take on.
                                </p>
                                <p>
                                    Many of our Pasadena projects involve renovating older homes where the original plaster walls need repair or where homeowners are opening up floor plans, adding rooms, or modernizing kitchens and bathrooms. In these situations, we often need to remove deteriorated plaster, address underlying lath or framing issues, and install new drywall that integrates seamlessly with the remaining original surfaces. We match existing wall textures precisely so that the transition between old and new is invisible. For homeowners who want to preserve the character of their Pasadena home while bringing it up to modern standards, we are the contractor to call.
                                </p>
                                <p>
                                    Beyond residential work, Pasadena has a thriving commercial sector centered around Old Town, the South Lake Avenue business district, and the growing tech and biomedical corridor. We provide commercial drywall and framing services for tenant improvements, office buildouts, retail renovations, and restaurant construction throughout Pasadena. Our team also serves the surrounding communities of South Pasadena, Altadena, San Marino, and La Canada Flintridge, bringing the same commitment to quality and professionalism to every project regardless of size or location.
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
                            Drywall and Framing Services in Pasadena
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
                                Pasadena Drywall FAQ
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
