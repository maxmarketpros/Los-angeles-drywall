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
    title: "Drywall Contractor in Santa Monica, CA | Los Angeles Drywall & Framing",
    description: "Licensed drywall contractor serving Santa Monica, CA. Moisture-resistant drywall, coastal property repairs, condo renovations, and professional framing services. CA #1141917. Call (310) 730-9832.",
    openGraph: {
        images: [{
            url: "/images/areas/santa-monica/hero.jpg",
            width: 1200,
            height: 630,
            alt: "Drywall and framing services in Santa Monica, CA",
        }],
    },
};

const regionalServices = [
    {
        title: "Drywall Services",
        description: "Full drywall solutions for Santa Monica homes, condos, and commercial spaces, including moisture-resistant installations for coastal properties.",
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
        description: "Structural and non-structural framing for Santa Monica residential remodels, additions, and commercial tenant improvements.",
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
        description: "Exterior painting, stucco, and metal framing services for Santa Monica properties requiring weather-resistant solutions near the coast.",
        links: [
            { text: "Exterior Painting", url: "/services/exterior-painting" },
            { text: "Stucco", url: "/services/stucco" },
            { text: "Metal Framing", url: "/services/metal-framing" },
        ]
    }
];

const faqs = [
    {
        question: "Do you use moisture-resistant drywall for Santa Monica coastal properties?",
        answer: "Yes, we strongly recommend and regularly install moisture resistant drywall for properties in Santa Monica and other coastal communities. The salt air and elevated humidity levels near the ocean create conditions that can cause standard drywall to absorb moisture and develop mold over time. We use moisture resistant greenboard and mold resistant purple board in bathrooms, kitchens, and areas with elevated humidity exposure. For properties directly on or near the beach, we can recommend additional moisture management strategies to protect your walls long term."
    },
    {
        question: "Can you work on condos and multi-unit buildings in Santa Monica?",
        answer: "Yes, we have extensive experience working in condos, apartment buildings, and multi unit properties throughout Santa Monica. We understand the coordination required for condo projects, including working within HOA guidelines, respecting quiet hours, protecting common areas, and coordinating access through building management. Our team is experienced with shared wall assemblies, fire rated corridors, and the specific construction requirements common to multi unit buildings in Santa Monica."
    },
    {
        question: "How do you protect existing finishes during renovation work in Santa Monica homes?",
        answer: "Protecting existing finishes is a top priority on every project. Our crew lays protective floor coverings, masks off woodwork, hardware, and fixtures, and erects dust barriers to contain drywall dust and debris. In occupied homes and condos in Santa Monica, we take extra care to seal HVAC registers and doorways to prevent dust migration to other rooms. We clean up thoroughly at the end of each work day and perform a final deep cleanup when the project is complete."
    },
    {
        question: "What areas near Santa Monica do you also serve?",
        answer: "In addition to Santa Monica, Los Angeles Drywall & Framing serves all surrounding communities including Pacific Palisades, Brentwood, Mar Vista, Venice, Marina del Rey, Playa del Rey, Westchester, and the entire Westside of Los Angeles. We serve the full greater Los Angeles metropolitan area, so no matter where your property is located, we can provide a free estimate and professional service."
    },
    {
        question: "Do you handle commercial drywall and framing projects in Santa Monica?",
        answer: "Yes, we provide full commercial drywall and framing services in Santa Monica. Our commercial work includes tenant improvements in office buildings, retail buildouts, restaurant construction, medical office renovations, and multi story commercial projects. We work with general contractors and property owners to deliver projects on schedule and within budget. Our team is experienced with Santa Monica building department requirements and can coordinate inspections as needed."
    }
];

export default function SantaMonicaArea() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />
            <BreadcrumbSchema items={[
                { name: "Home", href: "/" },
                { name: "Areas We Serve", href: "/areas" },
                { name: "Santa Monica", href: "/areas/santa-monica" },
            ]} />
            <FAQSchema faqs={faqs} />

            {/* HERO */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/areas/santa-monica/hero.jpg"
                    alt="Drywall contractor serving Santa Monica, California coastal properties"
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
                            <MapPinIcon size={14} /> Santa Monica, CA
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Drywall Contractor in Santa Monica, CA
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Los Angeles Drywall & Framing is a licensed drywall contractor serving Santa Monica, CA and the surrounding coastal communities. We provide professional drywall installation, moisture resistant solutions, repair, finishing, and framing services for homes, condominiums, and commercial properties throughout Santa Monica. Our team understands the unique challenges that coastal construction presents and delivers work that is built to last in the ocean environment.
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
                                    src="/images/areas/santa-monica/hero.jpg"
                                    alt="Drywall installation in a Santa Monica coastal property"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Coastal Construction</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Santa Monica, CA</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Local Expertise
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Santa Monica Drywall and Framing Services
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Santa Monica presents unique construction challenges that set it apart from inland Los Angeles communities. The proximity to the Pacific Ocean means that salt air, elevated humidity, and marine layer moisture are constant factors that affect building materials and interior finishes. Standard drywall can absorb this ambient moisture over time, leading to mold growth, soft spots, and premature failure. Los Angeles Drywall & Framing understands these coastal construction realities and specifies materials and installation methods that are specifically designed to perform in the Santa Monica environment.
                                </p>
                                <p>
                                    Our Santa Monica projects span the full range of residential and commercial construction. We work on single family homes throughout the city, from the tree lined streets north of Montana Avenue to the beachfront properties along Ocean Avenue. We renovate condominiums in the many multi unit buildings that define Santa Monica living, handling everything from individual unit remodels to building wide corridor and common area improvements. On the commercial side, we provide drywall and framing for retail spaces along the Third Street Promenade, office tenant improvements in the tech corridor, and restaurant buildouts across the city.
                                </p>
                                <p>
                                    Santa Monica also has an active ADU construction market as homeowners add accessory dwelling units to their properties. We provide complete framing and drywall services for ADU projects, from the initial wall framing through insulation, drywall installation, taping, and finishing. Our team is familiar with Santa Monica ADU regulations and works with architects and homeowners to deliver compliant, well constructed living spaces. Whatever your project requires in Santa Monica, Los Angeles Drywall & Framing brings the expertise, materials, and professionalism to get it done right.
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
                            Drywall and Framing Services in Santa Monica
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
                                Santa Monica Drywall FAQ
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
