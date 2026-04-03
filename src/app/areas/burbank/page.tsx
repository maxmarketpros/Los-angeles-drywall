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
    title: "Drywall Contractor in Burbank, CA | Los Angeles Drywall & Framing",
    description: "Licensed drywall contractor serving Burbank, CA. Professional drywall installation, framing, and finishing for residential homes, studio-adjacent properties, and commercial builds. CA #1141917. Call (310) 730-9832.",
};

const regionalServices = [
    {
        title: "Drywall Services",
        description: "Full drywall solutions for Burbank homes, commercial buildings, and studio-adjacent properties, from installation through high-quality finishing.",
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
        description: "Structural and non-structural framing for Burbank residential renovations, new builds, commercial projects, and media industry facilities.",
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
        description: "Exterior painting, stucco, and metal framing for Burbank commercial and residential properties requiring specialized construction methods.",
        links: [
            { text: "Exterior Painting", url: "/services/exterior-painting" },
            { text: "Stucco", url: "/services/stucco" },
            { text: "Metal Framing", url: "/services/metal-framing" },
        ]
    }
];

const faqs = [
    {
        question: "Do you work on commercial properties in the Burbank media district?",
        answer: "Yes, Los Angeles Drywall & Framing provides drywall and framing services for commercial properties throughout the Burbank media district and surrounding business areas. We have experience working on office spaces, post production facilities, sound stages, creative studios, and support buildings that serve the entertainment industry. Our team understands the specialized construction requirements these facilities demand, including soundproofing, fire rated assemblies, and high quality finish work that meets the standards of media industry tenants."
    },
    {
        question: "Can you handle residential renovations in older Burbank neighborhoods?",
        answer: "Yes, Burbank has many established residential neighborhoods with homes dating from the 1940s through the 1970s. These older homes often have a mix of original plaster and later drywall additions that need to be unified during renovation. Our team is experienced with transitioning from plaster to drywall, matching existing textures, and addressing the framing issues commonly found in mid century homes, including non standard stud spacing, inadequate blocking, and outdated construction methods that need to be brought up to current standards."
    },
    {
        question: "Are you familiar with Burbank building codes and permits?",
        answer: "Yes, the City of Burbank has its own building department with specific permit requirements and inspection processes. We are familiar with Burbank building code requirements and regularly coordinate with the Burbank building department on permitted projects. Our work is performed to meet all applicable codes, and we ensure that framing and drywall installations pass inspection the first time. We work with homeowners, general contractors, and property managers to keep projects compliant and on schedule."
    },
    {
        question: "Do you provide soundproofing solutions for Burbank homes near the airport?",
        answer: "Yes, we provide enhanced soundproofing solutions using specialized drywall products and construction techniques. For homes near Hollywood Burbank Airport or busy commercial areas, we can install sound damping drywall, resilient channel systems, and insulated wall assemblies that significantly reduce noise transmission. We also handle soundproofing upgrades for home studios, home theaters, and music rooms, which are common in Burbank given the city close ties to the entertainment industry."
    },
    {
        question: "What residential areas of Burbank do you serve?",
        answer: "We serve all residential areas throughout the City of Burbank, including the Rancho district, the Hillside community, Magnolia Park, the Media District neighborhood, Chandler Park, and all surrounding residential streets. We also serve adjacent communities including Toluca Lake, North Hollywood, Sun Valley, and the entire eastern San Fernando Valley. Our team provides free estimates for projects of any size throughout Burbank and the surrounding area."
    }
];

export default function BurbankArea() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* HERO */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/areas/burbank/hero.jpg"
                    alt="Professional drywall contractor serving Burbank, California"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            <MapPinIcon size={14} /> Burbank, CA
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Drywall Contractor in Burbank, CA
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Los Angeles Drywall & Framing is a licensed drywall contractor serving Burbank, CA and surrounding communities. We provide professional drywall installation, repair, finishing, and framing services for residential homes, studio adjacent properties, commercial builds, and media industry facilities throughout Burbank. Our team brings reliable craftsmanship and code compliant construction to every project in this vibrant city.
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
                                    src="/images/areas/burbank/hero.jpg"
                                    alt="Drywall and framing project in Burbank, California"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Burbank Construction</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Media Capital</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Local Expertise
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Burbank Drywall and Framing Services
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Burbank occupies a unique position in the Los Angeles metro area as both a thriving residential community and the headquarters of some of the world&apos;s largest entertainment companies. This dual identity creates a construction market that includes everything from charming single family home renovations in established neighborhoods to sophisticated commercial buildouts for media industry offices, production facilities, and creative workspaces. Los Angeles Drywall & Framing serves both sides of this market with professional drywall and framing services that meet the needs of Burbank homeowners and businesses alike.
                                </p>
                                <p>
                                    Our residential work in Burbank spans the full range of home improvement and construction projects. The city residential neighborhoods are filled with well maintained homes from the 1940s through the 1970s that are constantly being updated and improved by their owners. We handle everything from targeted drywall repairs and texture matching in single rooms to full scale renovations that involve demolition, new framing, insulation, drywall installation, and premium finishing. Burbank has also seen significant ADU and garage conversion activity in recent years, and our team provides complete framing and drywall services for these projects from start to finish.
                                </p>
                                <p>
                                    On the commercial side, Burbank&apos;s media district and surrounding business areas generate consistent demand for professional drywall and framing services. We build out offices for production companies, renovate creative spaces for post production and editing facilities, and construct retail spaces along the city commercial corridors. Many of these projects require specialized construction including soundproofing, fire rated walls, and high quality finishes that meet the expectations of entertainment industry clients. Our team has the skills and experience to deliver on these requirements while working within the tight timelines that commercial projects in Burbank often demand. We also serve the adjacent communities of Toluca Lake, North Hollywood, and Sun Valley with the same level of professionalism and quality.
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
                            Drywall and Framing Services in Burbank
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
                                Burbank Drywall FAQ
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
