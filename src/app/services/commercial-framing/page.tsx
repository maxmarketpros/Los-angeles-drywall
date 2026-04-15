import Header from "@/components/Header";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    BuildingIcon,
    LayersIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    RulerIcon,
    ShieldIcon,
    ClipboardIcon,
    HammerIcon,
} from "@/components/icons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
    title: "Commercial Framing in Los Angeles, CA | Los Angeles Drywall & Framing",
    description:
        "Commercial framing in Los Angeles, CA for offices, retail, restaurants, and tenant improvements. Metal and wood framing. CA License #1141917. Call (310) 730-9832.",
    openGraph: {
        images: [{
            url: "/images/services/commercial-framing/hero.jpg",
            width: 1200,
            height: 630,
            alt: "Commercial Framing in Los Angeles",
        }],
    },
};

const processSteps = [
    {
        title: "Scope Review and Project Scheduling",
        description:
            "We review the commercial construction documents, identify the framing scope within the overall project timeline, and coordinate our schedule with the general contractor. This includes confirming material lead times for steel studs, track, and any specialty framing components required for the Los Angeles project.",
    },
    {
        title: "Material Procurement and Staging",
        description:
            "Commercial projects require precise material coordination. We procure metal studs, track, structural steel connectors, wood framing lumber, and engineered headers based on the approved plans. Materials are staged on site in phases to maintain an organized work area and support the construction schedule.",
    },
    {
        title: "Layout and Control Line Establishment",
        description:
            "Our crew establishes control lines from the structural grid using laser levels and transit equipment. Wall layout lines are snapped on the floor slab and transferred to the deck above, ensuring that every partition and demising wall aligns with the architectural plans and coordinates with mechanical, electrical, and plumbing rough-in.",
    },
    {
        title: "Framing Assembly and Integration",
        description:
            "We assemble metal stud walls, install wood-framed bulkheads and soffits, frame openings for storefronts and service windows, and build out specialty areas such as restrooms and kitchens. All framing integrates with the building's fire-rated assemblies, acoustical separations, and structural connections as specified in the construction documents.",
    },
    {
        title: "Inspection Coordination and Punch List",
        description:
            "Before calling for inspection, we conduct a detailed walkthrough to verify all framing elements, fire blocking, backing, and hardware. We coordinate with the city inspector and address any items on the punch list immediately. Our goal is to deliver inspection-ready framing that keeps the commercial project moving forward without delays.",
    },
];

const faqs = [
    {
        question: "Do you use metal or wood framing for commercial projects in Los Angeles?",
        answer: "We use both metal and wood framing depending on the project requirements. Metal stud framing is the standard for most commercial tenant improvements, office buildouts, and retail spaces in Los Angeles because it is non-combustible, dimensionally stable, and compatible with commercial fire-rated wall assemblies. Wood framing is used in some commercial applications, particularly in low-rise mixed-use buildings, restaurants, and projects where the structural plans specify wood. Our crews are proficient in both systems.",
    },
    {
        question: "What types of commercial projects do you frame?",
        answer: "We provide commercial framing services for office buildouts, retail tenant improvements, restaurants and food service facilities, medical offices, educational facilities, and multi-story commercial buildings throughout Los Angeles. Our scope includes interior partition framing, demising walls, rated corridor assemblies, bulkheads, soffits, and structural framing for mezzanines and raised platforms where specified in the plans.",
    },
    {
        question: "How do you handle fire-rated wall assemblies in commercial framing?",
        answer: "Fire-rated wall assemblies are critical in commercial construction. We frame these walls using the specific stud gauge, spacing, and track configurations required by the UL-listed assembly design. This includes installing proper fire blocking at specified intervals, using the correct screw patterns, and maintaining the clearances needed for the rated drywall layers. Our familiarity with common UL assemblies used in Los Angeles commercial construction helps ensure these walls are framed correctly the first time.",
    },
    {
        question: "Can you work within an occupied commercial building?",
        answer: "Yes. Many commercial framing projects in Los Angeles involve tenant improvements within occupied buildings. We implement dust containment barriers, coordinate access through occupied spaces, schedule noisy work during approved hours, and maintain clear egress paths throughout the project. Communication with building management and adjacent tenants is part of our standard process for occupied building projects.",
    },
    {
        question: "What is the typical timeline for a commercial framing project in Los Angeles?",
        answer: "Commercial framing timelines depend on project size and complexity. A standard office tenant improvement of 2,000 to 5,000 square feet typically requires one to two weeks of framing work. Larger commercial projects, such as full-floor buildouts, restaurant construction, or multi-tenant retail spaces, may take three to six weeks. We work within the general contractor's master schedule and can adjust crew sizes to meet accelerated timelines when needed.",
    },
];

export default function CommercialFramingPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <BreadcrumbSchema items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Commercial Framing", href: "/services/commercial-framing" },
            ]} />
            <ServiceSchema
                name="Commercial Framing in Los Angeles, CA"
                description="Commercial framing in Los Angeles, CA for offices, retail, restaurants, and tenant improvements. Metal and wood framing."
                url="/services/commercial-framing"
                image="/images/services/commercial-framing/hero.jpg"
            />
            <FAQSchema faqs={faqs} />
            <Header />

            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
                <Image
                    src="/images/services/commercial-framing/hero.jpg"
                    alt="Commercial framing project in Los Angeles"
                    fill
                    className="object-cover"

                    sizes="100vw"
                    priority
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="relative z-10 page-container px-4 sm:px-6 pb-16 md:pb-24 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
                            Commercial Framing Services
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Commercial Framing in Los Angeles, CA
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
                            Metal and wood framing for offices, retail spaces, restaurants, and tenant improvements across Los Angeles. Built to commercial code with reliable project timelines.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
                        >
                            Discuss Your Commercial Project
                            <ArrowRightIcon size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* WHY / WHEN SECTION */}
            <section className="py-16 md:py-24 lg:py-32">
                <div className="page-container px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-tight mb-8">
                                Dependable Commercial Framing Services in Los Angeles
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
                                Commercial framing in Los Angeles, CA requires a different approach than residential work. Commercial projects operate on tighter schedules, demand coordination with multiple trades, and must comply with International Building Code requirements as adopted by the state of California and the city of Los Angeles. From metal stud partitions in a high-rise office tower to wood-framed demising walls in a neighborhood retail strip, the framing contractor sets the pace for the entire interior buildout.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
                                Los Angeles Drywall and Framing provides commercial framing services for general contractors, property managers, and business owners across Los Angeles County. We specialize in office tenant improvements, retail buildouts, restaurant construction, medical facilities, and mixed-use developments. Our crews are experienced with both light-gauge metal stud framing and conventional wood framing, allowing us to handle any commercial scope specified in the construction documents.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                                What separates our commercial framing work is consistency and communication. We assign dedicated lead framers to every project, maintain daily contact with the project superintendent, and provide updated schedules as work progresses. Our CA License #1141917 and our track record on commercial projects throughout Los Angeles give general contractors confidence that the framing phase will be completed correctly and on time.
                            </p>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/services/commercial-framing/detail.jpg"
                                alt="Metal stud framing in a commercial tenant improvement"
                                fill
                                className="object-cover"
                                quality={75}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SYNERGY SECTION */}
            <section className="py-16 md:py-24 lg:py-32 bg-[var(--color-neutral-50)]">
                <div className="page-container px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <Image
                                    src="/images/services/commercial-framing/detail.jpg"
                                    alt="Commercial metal stud framing layout"
                                    fill
                                    className="object-cover"
                                    quality={75}
                                />
                            </div>
                            <div className="relative aspect-[3/4] overflow-hidden mt-8">
                                <Image
                                    src="/images/services/commercial-framing/result.jpg"
                                    alt="Completed commercial framing for office buildout"
                                    fill
                                    className="object-cover"
                                    quality={75}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] mb-6 w-max border border-[var(--color-primary)]/20">
                                Offices, Retail, and Restaurants
                            </div>
                            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-tight mb-6">
                                Framing Solutions for Every Commercial Environment
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8">
                                Commercial spaces have unique framing requirements driven by occupancy type, fire ratings, acoustical performance, and tenant specifications. We deliver framing that meets these requirements while keeping the project on schedule.
                            </p>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <BuildingIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">
                                            Office and Retail Tenant Improvements
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Tenant improvement projects require fast-paced framing that coordinates with mechanical, electrical, and plumbing trades. We frame partition walls, corridor assemblies, conference rooms, reception areas, and storefront openings using metal studs in the gauges and heights specified by the structural engineer. Our crews maintain tight tolerances to ensure clean drywall finishes and accurate door frame installations.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <HammerIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">
                                            Restaurant and Food Service Framing
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Restaurants and commercial kitchens present framing challenges that standard office buildouts do not. We frame grease hood enclosures, walk-in cooler compartments, service window openings, and heavy-duty wall backing for commercial equipment mounting. These spaces require specific fire-rated assemblies and moisture-resistant framing details that comply with Los Angeles health department and building code requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DARK SECTION */}
            <section className="py-16 md:py-24 lg:py-32 bg-[var(--color-neutral-900)]">
                <div className="page-container px-4 sm:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-white leading-tight mb-6">
                                Commercial Building Codes and Fire Safety Standards
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-10">
                                Commercial construction in Los Angeles is governed by the California Building Code with local LADBS amendments that establish requirements for fire-rated assemblies, occupancy separations, and structural performance. Our framing work addresses these requirements at every stage, from stud gauge selection to fire blocking installation, ensuring the completed frame meets all code obligations.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <ShieldIcon size={24} className="text-[var(--color-primary)] mb-4" />
                                    <h3 className="text-white font-bold mb-2">Fire-Rated Assembly Framing</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        We frame one-hour and two-hour fire-rated wall assemblies using the UL-listed designs specified in the construction documents. This includes correct stud gauge and spacing, proper screw patterns, fire blocking at specified intervals, and coordination with the drywall scope to ensure the complete assembly achieves its rated performance.
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <ClipboardIcon size={24} className="text-[var(--color-primary)] mb-4" />
                                    <h3 className="text-white font-bold mb-2">ADA and Accessibility Compliance</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Commercial framing must account for ADA clearances at doorways, restrooms, and corridors. We frame openings to the exact dimensions required for accessible door hardware and clear widths, install backing for grab bars at the heights specified by ADA guidelines, and maintain corridor widths that comply with Los Angeles accessibility requirements.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/services/commercial-framing/result.jpg"
                                alt="Commercial framing meeting Los Angeles building codes"
                                fill
                                className="object-cover"
                                quality={75}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-16 md:py-24 lg:py-32">
                <div className="page-container px-4 sm:px-6">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-tight">
                            Our Commercial Framing Approach
                        </h3>
                        <p className="mt-4 text-[var(--color-neutral-600)] text-lg max-w-2xl mx-auto">
                            A systematic process that keeps commercial projects on schedule and delivers framing that meets the standards expected by general contractors and inspectors across Los Angeles.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-8 relative"
                            >
                                <div className="text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-primary)]/10 absolute top-4 right-6">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                                <CheckCircleIcon size={24} className="text-[var(--color-primary)] mb-4" />
                                <h4 className="text-lg font-bold text-[var(--color-neutral-900)] mb-3">
                                    {step.title}
                                </h4>
                                <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 md:py-24 lg:py-32 bg-[var(--color-neutral-50)]">
                <div className="page-container px-4 sm:px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-tight text-center mb-12">
                            Frequently Asked Questions About Commercial Framing
                        </h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-white border border-[var(--color-neutral-200)] [&_summary]:list-none"
                                >
                                    <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-[var(--color-neutral-900)] hover:text-[var(--color-primary)] transition-colors">
                                        {faq.question}
                                        <ArrowRightIcon size={16} className="shrink-0 ml-4 transition-transform group-open:rotate-90" />
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
