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
    title: "Drywall Contractor in Glendale, CA | Los Angeles Drywall & Framing",
    description: "Licensed drywall contractor serving Glendale, CA. Professional drywall installation, framing, and finishing for residential, commercial, and multi-family properties. CA #1141917. Call (310) 730-9832.",
};

const regionalServices = [
    {
        title: "Drywall Services",
        description: "Complete drywall solutions for Glendale residential and commercial properties, from new construction to expert repairs and finishing.",
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
        description: "Structural and interior framing for Glendale new builds, remodels, multi-family projects, and commercial tenant improvements.",
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
        description: "Exterior painting, stucco, and metal framing services for Glendale properties requiring durable finishes and code-compliant construction.",
        links: [
            { text: "Exterior Painting", url: "/services/exterior-painting" },
            { text: "Stucco", url: "/services/stucco" },
            { text: "Metal Framing", url: "/services/metal-framing" },
        ]
    }
];

const faqs = [
    {
        question: "Do you work on multi-family apartment buildings in Glendale?",
        answer: "Yes, multi family construction is one of our core capabilities, and Glendale has a significant multi family housing market. We provide drywall and framing services for new apartment buildings, condominium complexes, and renovations to existing multi unit properties. Our team is experienced with the fire rated assemblies, sound rated walls, and corridor framing requirements that are standard in multi family construction. We work efficiently on large projects with tight timelines and coordinate closely with general contractors to keep the overall schedule on track."
    },
    {
        question: "Can you handle commercial tenant improvements in Glendale?",
        answer: "Yes, we provide full commercial drywall and framing services for tenant improvements throughout Glendale. This includes office buildouts in the Glendale business district, retail renovations along Brand Boulevard and the Americana area, medical office construction, and restaurant buildouts. Our team works with commercial property owners, tenant representatives, and general contractors to deliver projects on time and to specification. We are familiar with Glendale building department processes and can coordinate inspections as needed."
    },
    {
        question: "Are you familiar with Glendale building codes and permit requirements?",
        answer: "Yes, Los Angeles Drywall & Framing is familiar with the City of Glendale building department and its specific requirements. Glendale has its own municipal building code based on the California Building Code, and certain projects require permits and inspections. We ensure that all framing and drywall work meets applicable code requirements, including fire rated assemblies, seismic detailing, and energy code compliance. We are available to be on site for required inspections and work with building inspectors to address any questions."
    },
    {
        question: "Do you serve the hillside areas of Glendale?",
        answer: "Yes, we serve all of Glendale including the hillside communities along the Verdugo Mountains. Hillside homes in Glendale can present unique construction challenges including limited access, steep terrain, and older construction methods. Our team is equipped to handle these conditions and has experience working on properties throughout the Glendale hills, the flats, Adams Hill, Montrose, and all surrounding neighborhoods. We also serve nearby communities including Eagle Rock, Highland Park, and La Crescenta."
    },
    {
        question: "What types of residential projects do you handle in Glendale?",
        answer: "We handle all types of residential drywall and framing projects in Glendale. This includes full home renovations, kitchen and bathroom remodels, room additions, garage conversions, ADU construction, single room repairs, water damage restoration, and new home construction. Glendale has a diverse housing stock ranging from 1920s bungalows to modern contemporary homes, and our team has the experience to work on properties of any age and style. We provide free estimates for all residential projects."
    }
];

export default function GlendaleArea() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* HERO */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/areas/glendale/hero.jpg"
                    alt="Professional drywall contractor serving Glendale, California"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            <MapPinIcon size={14} /> Glendale, CA
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Drywall Contractor in Glendale, CA
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Los Angeles Drywall & Framing is a licensed drywall contractor serving Glendale, CA and the surrounding communities. We provide professional drywall installation, repair, finishing, and framing services for residential homes, multi family buildings, retail spaces, and commercial properties throughout Glendale. Our team delivers reliable, code compliant construction for this growing city&apos;s diverse mix of residential and commercial projects.
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
                                    src="/images/areas/glendale/hero.jpg"
                                    alt="Drywall and framing project in Glendale, California"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Glendale Projects</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Residential & Commercial</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Local Expertise
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Glendale Drywall and Framing Contractor
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Glendale is one of the largest and most dynamic cities in the Los Angeles metro area, with a construction market that spans everything from single family home renovations to large scale multi family and commercial developments. The city has experienced significant growth in recent years, with new apartment buildings, mixed use projects, and retail developments transforming the downtown corridor and surrounding neighborhoods. Los Angeles Drywall & Framing has been serving Glendale through this growth, providing professional drywall and framing services for projects of every type and scale.
                                </p>
                                <p>
                                    Our residential work in Glendale covers the full spectrum of the city housing stock. We renovate older homes in established neighborhoods where walls may need to transition from original plaster to modern drywall. We handle kitchen and bathroom remodels that require new framing for reconfigured layouts. We build ADUs and garage conversions for homeowners looking to add living space to their properties. And we provide complete framing and drywall services for new custom homes being built in the Glendale hills and flats. Every residential project receives the same attention to detail and commitment to clean, professional workmanship.
                                </p>
                                <p>
                                    On the commercial side, Glendale offers a robust market for tenant improvements, retail buildouts, and office construction. The Brand Boulevard corridor, the Americana at Brand area, and the Glendale Galleria district all generate steady demand for commercial drywall and framing work. We serve property owners, general contractors, and businesses throughout these commercial areas with reliable, code compliant construction. Our commercial crews are experienced with metal stud framing, fire rated assemblies, demountable partitions, and the fast paced scheduling demands that commercial projects require. Whether your Glendale project is residential or commercial, large or small, Los Angeles Drywall & Framing has the capacity and expertise to deliver.
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
                            Drywall and Framing Services in Glendale
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
                                Glendale Drywall FAQ
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
