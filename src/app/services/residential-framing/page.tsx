import Header from "@/components/Header";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    HomeIcon,
    LayersIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    RulerIcon,
    ShieldIcon,
    HardHatIcon,
    HammerIcon,
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Residential Framing in Los Angeles, CA | Los Angeles Drywall & Framing",
    description:
        "Expert residential framing in Los Angeles, CA for single-family homes, ADUs, additions, and multi-unit projects. CA License #1141917. Call (310) 730-9832 for a free estimate.",
};

const processSteps = [
    {
        title: "Blueprint Review and Material Takeoff",
        description:
            "Our estimating team reviews architectural and structural plans to produce a detailed material takeoff. We identify every wall, floor, and roof framing element, calculate lumber quantities, and confirm hardware requirements before the first board is delivered to the jobsite.",
    },
    {
        title: "Foundation and Sill Plate Layout",
        description:
            "Before vertical framing begins, we anchor sill plates to the foundation using code-required bolts and holdown hardware. Accurate sill plate layout establishes the reference for every wall line, ensuring the entire structure starts square and level on the Los Angeles jobsite.",
    },
    {
        title: "Floor, Wall, and Ceiling Framing",
        description:
            "We frame floor systems with engineered joists or dimensional lumber, raise walls with proper stud spacing and headers, and install ceiling joists or trusses per plan. Each component ties into the next, creating an integrated structural system that meets California residential building codes.",
    },
    {
        title: "Roof Framing and Sheathing",
        description:
            "Our crews install roof rafters, ridge boards, or pre-engineered trusses depending on the design. Roof sheathing is nailed with the required edge and field nailing patterns for wind and seismic resistance. Fascia and sub-fascia boards are installed to complete the roof frame.",
    },
    {
        title: "Quality Review and City Inspection",
        description:
            "We conduct a thorough walkthrough to verify all framing connections, nailing schedules, and hardware placements before scheduling the LADBS framing inspection. Any discrepancies are corrected immediately so the project passes inspection and advances to the next construction phase without delay.",
    },
];

const faqs = [
    {
        question: "What types of residential framing projects do you handle in Los Angeles?",
        answer: "We provide residential framing for new single-family homes, room additions, accessory dwelling units (ADUs), garage conversions, second-story additions, and multi-unit residential buildings throughout Los Angeles. Our team handles floor framing, wall framing, ceiling framing, and roof framing for projects of all sizes, from small ADU builds to large custom homes in neighborhoods across the city.",
    },
    {
        question: "How much does residential framing cost in Los Angeles?",
        answer: "Residential framing costs in Los Angeles vary based on project size, complexity, number of stories, and the structural requirements specified in the plans. Factors such as engineered beam sizes, the number of point loads, and seismic hardware requirements also affect pricing. We provide detailed written estimates after reviewing your architectural and structural plans so you have a clear understanding of costs before work begins.",
    },
    {
        question: "Do you frame ADUs in Los Angeles?",
        answer: "Yes. Accessory dwelling units are one of the most common residential framing projects in Los Angeles due to recent state and local legislation that has simplified the permitting process. We frame detached ADUs, attached ADUs, and garage conversions. Each ADU framing project follows the same structural standards as primary residences, including full compliance with California seismic codes and Title 24 energy requirements for wall and ceiling insulation cavities.",
    },
    {
        question: "What lumber species and grades do you use for residential framing?",
        answer: "We primarily use Douglas Fir and Hem-Fir lumber graded No. 2 or better for wall studs, plates, and blocking. Engineered lumber products such as LVL beams, I-joists, and PSL columns are used where the structural plans require higher load capacity or longer spans. All lumber delivered to Los Angeles jobsites is grade-stamped and moisture content verified to prevent issues with shrinkage or warping after installation.",
    },
    {
        question: "How long does it take to frame a house in Los Angeles?",
        answer: "A typical single-story residential frame of approximately 1,500 to 2,000 square feet takes two to three weeks from sill plate layout through roof sheathing. Two-story homes and larger custom residences may require three to five weeks. ADU framing projects often take one to two weeks depending on complexity. These timelines assume materials are on site and permits have been issued by the Los Angeles Department of Building and Safety.",
    },
];

export default function ResidentialFramingPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
                <Image
                    src="/images/services/residential-framing/hero.jpg"
                    alt="Residential framing for a new home in Los Angeles"
                    fill
                    className="object-cover"
                    priority
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="relative z-10 page-container px-4 sm:px-6 pb-16 md:pb-24 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
                            Residential Framing Experts
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Residential Framing in Los Angeles, CA
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
                            Complete structural framing for single-family homes, ADUs, additions, and multi-unit residential projects built to California seismic and energy codes.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
                        >
                            Get a Framing Estimate
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
                                Trusted Residential Framing Services Across Los Angeles
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
                                Residential framing in Los Angeles, CA forms the skeleton of every home, defining its structural integrity, room layout, and ability to withstand the seismic forces unique to Southern California. Whether you are building a new single-family home in the San Fernando Valley, adding a second story in Mid-City, or constructing an ADU in Silver Lake, the framing phase sets the standard for every trade that follows.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
                                Los Angeles Drywall and Framing has built a reputation for delivering residential framing that is accurate, structurally sound, and fully compliant with California Building Code and LADBS requirements. Our crews understand the specific challenges of framing in Los Angeles, from hillside lot conditions and expansive soil foundations to the seismic detailing required for multi-story residential structures. We work on new ground-up construction, home additions, ADUs, garage conversions, and full remodels throughout the city.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                                Our approach to residential framing begins with a careful review of the architectural and structural plans. We identify potential issues before they become problems on the jobsite, coordinate material deliveries to keep the project on schedule, and maintain clean, organized work areas that allow other trades to begin their work as soon as framing is complete. Every project is backed by our CA License #1141917 and our commitment to professional workmanship.
                            </p>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/services/residential-framing/detail.jpg"
                                alt="Residential home framing detail with engineered connections"
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
                                    src="/images/services/residential-framing/detail.jpg"
                                    alt="Floor and wall framing for residential construction"
                                    fill
                                    className="object-cover"
                                    quality={75}
                                />
                            </div>
                            <div className="relative aspect-[3/4] overflow-hidden mt-8">
                                <Image
                                    src="/images/services/residential-framing/result.jpg"
                                    alt="Completed residential frame ready for inspection"
                                    fill
                                    className="object-cover"
                                    quality={75}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] mb-6 w-max border border-[var(--color-primary)]/20">
                                Homes, ADUs, and Additions
                            </div>
                            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-tight mb-6">
                                Full-Scope Framing for Every Residential Project Type
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8">
                                Our residential framing services cover every component of the structural frame, from floor systems and walls to ceilings and roofs, across all project types found in the Los Angeles residential market.
                            </p>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <HomeIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">
                                            New Home and Addition Framing
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Ground-up residential construction requires coordinated floor, wall, and roof framing that integrates with the foundation design and mechanical systems. Our team frames new homes and additions with careful attention to load paths, bearing point alignment, and the clearances needed for plumbing, HVAC, and electrical rough-in. We frame single-story and multi-story residences throughout Los Angeles neighborhoods.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <LayersIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">
                                            ADU and Garage Conversion Framing
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Accessory dwelling units and garage conversions have become a significant part of residential construction in Los Angeles. These projects require framing that meets the same structural and energy code standards as primary residences, including proper wall insulation cavities, ventilated roof assemblies, and seismic connections. We frame both detached and attached ADU structures to the specifications required for LADBS permit approval.
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
                                Residential Code Compliance and Safety
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-10">
                                Residential framing in Los Angeles must satisfy the California Residential Code, Title 24 energy standards, and local LADBS amendments. Our team stays current with code changes that affect stud sizing, insulation cavity depths, fire blocking requirements, and seismic hardware specifications. Every home we frame is built to protect the people who will live in it.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <ShieldIcon size={24} className="text-[var(--color-primary)] mb-4" />
                                    <h3 className="text-white font-bold mb-2">Seismic Residential Standards</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Los Angeles residential framing requires holdown anchors, shear wall panels, and continuous load path connections from roof to foundation. We install Simpson Strong-Tie and approved equivalent hardware at every engineered connection point as specified in the structural plans.
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <HardHatIcon size={24} className="text-[var(--color-primary)] mb-4" />
                                    <h3 className="text-white font-bold mb-2">Energy Code Framing Details</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Title 24 energy compliance begins at the framing stage. We frame walls with the correct stud depth for required insulation R-values, install raised heel trusses for full attic insulation coverage, and frame advanced framing details where specified to reduce thermal bridging in Los Angeles homes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/services/residential-framing/result.jpg"
                                alt="Code-compliant residential framing in Los Angeles"
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
                            How We Approach Residential Framing Projects
                        </h3>
                        <p className="mt-4 text-[var(--color-neutral-600)] text-lg max-w-2xl mx-auto">
                            Our proven process keeps residential framing projects on schedule, on budget, and ready to pass LADBS inspection on the first visit.
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
                            Frequently Asked Questions About Residential Framing
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
