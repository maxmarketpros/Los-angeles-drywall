import Header from "@/components/Header";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    HammerIcon,
    LayersIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    RulerIcon,
    ShieldIcon,
    ClipboardIcon,
    HardHatIcon,
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Wall Framing in Los Angeles, CA | Los Angeles Drywall & Framing",
    description:
        "Professional wall framing in Los Angeles, CA. Load-bearing walls, partition walls, and stud layout built to California seismic codes. Licensed contractor #1141917. Call (310) 730-9832.",
};

const processSteps = [
    {
        title: "Site Evaluation and Structural Assessment",
        description:
            "We begin every wall framing project with a thorough evaluation of the existing structure. Our team examines floor plans, identifies load paths, and determines where load-bearing and partition walls will be positioned to meet both the architectural design and California Building Code requirements.",
    },
    {
        title: "Permit Coordination and Plan Review",
        description:
            "For wall framing in Los Angeles, permits are required for most structural work. We coordinate with the Los Angeles Department of Building and Safety to submit framing plans, engineering calculations, and any required seismic compliance documentation before work begins on site.",
    },
    {
        title: "Layout and Bottom Plate Installation",
        description:
            "Our framers snap chalk lines and install pressure-treated bottom plates anchored to the concrete slab or subfloor. Every layout is verified against the approved plans to ensure stud spacing, door and window openings, and corner assemblies are positioned correctly from the start.",
    },
    {
        title: "Stud Assembly and Wall Raising",
        description:
            "Wall sections are assembled on the deck with studs, top plates, and headers cut to specification. Once assembled, walls are raised into position, plumbed, and braced. Load-bearing walls receive engineered headers sized to carry the required spans as specified in the structural plans.",
    },
    {
        title: "Inspection and Final Securing",
        description:
            "After all walls are standing, we perform an internal quality review before scheduling the city framing inspection. We verify stud spacing, nailing patterns, holdown and strap connections, and header sizing. Once the inspector approves the framing, the project is cleared for the next phase of construction.",
    },
];

const faqs = [
    {
        question: "What is the difference between load-bearing and partition walls?",
        answer: "Load-bearing walls transfer weight from the roof, upper floors, or ceiling joists down to the foundation. They are part of the structural system and cannot be removed without engineering analysis and proper temporary shoring. Partition walls divide interior space but carry no structural load, making them easier to relocate during remodeling. In Los Angeles, a licensed contractor and structural engineer should always verify which walls are load-bearing before any modification work begins.",
    },
    {
        question: "Do I need a permit for wall framing in Los Angeles?",
        answer: "Yes. The Los Angeles Department of Building and Safety requires permits for new wall framing, removal of existing walls, and modifications to load-bearing structures. Permit requirements apply to both residential and commercial properties. Unpermitted framing work can result in fines, complications during property sales, and potential safety hazards. Our team handles permit applications and coordinates all required inspections throughout the project.",
    },
    {
        question: "How does seismic code affect wall framing in Los Angeles?",
        answer: "Los Angeles falls within Seismic Design Category D or E, which means wall framing must include specific holdown hardware, shear wall panels, and nailing schedules designed to resist lateral forces during an earthquake. The California Building Code and local amendments require engineered connections between the walls and the foundation, as well as between wall sections at each story. Our framing crews are trained in current seismic detailing requirements for the greater Los Angeles area.",
    },
    {
        question: "What stud spacing do you use for wall framing?",
        answer: "Standard stud spacing is 16 inches on center for most residential and commercial wall framing. Some applications, such as load-bearing walls supporting heavy roof assemblies or walls requiring specific fire ratings, may require 12 inch spacing. Non-load-bearing partition walls in some cases can use 24 inch spacing to reduce material costs. We follow the spacing specified in the approved structural plans for every project.",
    },
    {
        question: "How long does a wall framing project take?",
        answer: "Timeline depends on the scope of work. A single room addition with new wall framing in Los Angeles typically takes three to five working days for the framing phase. A full house frame can take two to four weeks depending on square footage and complexity. Commercial tenant improvement projects vary based on the number of partition walls and any structural modifications required. We provide detailed schedules during the estimate process.",
    },
];

export default function WallFramingPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
                <Image
                    src="/images/services/wall-framing/hero.jpg"
                    alt="Professional wall framing in Los Angeles"
                    fill
                    className="object-cover"
                    priority
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="relative z-10 page-container px-4 sm:px-6 pb-16 md:pb-24 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
                            Structural Wall Framing
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Wall Framing in Los Angeles, CA
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
                            Precision stud layout, engineered headers, and code-compliant wall assemblies for residential and commercial projects across greater Los Angeles.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
                        >
                            Start Your Framing Project
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
                                Why Professional Wall Framing Services Matter in Los Angeles
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
                                Wall framing in Los Angeles, CA is the structural backbone of every building project, from new construction to room additions and tenant improvements. A properly framed wall distributes loads safely, provides attachment points for drywall and finishes, and ensures the building can withstand the lateral forces generated by seismic activity. In a region as seismically active as Southern California, the quality of wall framing directly impacts the safety and longevity of the entire structure.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
                                Los Angeles Drywall and Framing provides wall framing services for homeowners, general contractors, and commercial developers throughout Los Angeles County. Whether the project involves framing load-bearing walls for a new home, constructing partition walls for a commercial office buildout, or reinforcing existing walls during a seismic retrofit, our licensed crews deliver accurate, code-compliant framing that passes city inspection on the first visit.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                                Every wall framing project we complete in Los Angeles is built to the specifications outlined in the approved structural plans. We work closely with architects, structural engineers, and general contractors to ensure that stud spacing, header sizing, holdown placement, and shear wall nailing patterns all conform to the California Building Code and local Los Angeles amendments. Our CA License #1141917 reflects our commitment to performing work that meets the highest professional standards in the industry.
                            </p>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/services/wall-framing/detail.jpg"
                                alt="Wall framing stud layout detail in Los Angeles"
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
                                    src="/images/services/wall-framing/detail.jpg"
                                    alt="Load-bearing wall framing with engineered headers"
                                    fill
                                    className="object-cover"
                                    quality={75}
                                />
                            </div>
                            <div className="relative aspect-[3/4] overflow-hidden mt-8">
                                <Image
                                    src="/images/services/wall-framing/result.jpg"
                                    alt="Completed wall framing ready for inspection"
                                    fill
                                    className="object-cover"
                                    quality={75}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] mb-6 w-max border border-[var(--color-primary)]/20">
                                Load-Bearing and Partition Walls
                            </div>
                            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-tight mb-6">
                                Complete Wall Framing Solutions for Every Application
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8">
                                From structural load-bearing assemblies to interior partition walls, our framing services cover the full range of wall types required in residential and commercial construction throughout Los Angeles County.
                            </p>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <HammerIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">
                                            Load-Bearing Wall Construction
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Load-bearing walls require engineered headers, proper stud spacing, and holdown hardware to safely transfer structural loads to the foundation. Our team frames load-bearing walls according to the structural engineer's specifications, using LVL or solid sawn headers sized for the required span and load conditions. Every connection is installed with the correct hardware and fastener schedule to meet California seismic requirements.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <LayersIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">
                                            Partition Wall Layout and Assembly
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Partition walls define the interior layout of any building. While they do not carry structural loads, they must be properly anchored, plumb, and straight to provide a quality substrate for drywall installation. We frame partition walls with consistent stud spacing, proper blocking for cabinets and fixtures, and solid backing at all intersecting wall corners.
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
                                Built to California Seismic and Safety Standards
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-10">
                                Los Angeles sits within one of the most seismically active zones in the United States. Every wall we frame incorporates the hardware, nailing schedules, and structural connections required by current California Building Code and the city of Los Angeles local amendments. Compliance is not optional; it is fundamental to the safety of every occupant.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <ShieldIcon size={24} className="text-[var(--color-primary)] mb-4" />
                                    <h3 className="text-white font-bold mb-2">Seismic Code Compliance</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        All wall framing includes seismic holdowns, shear wall nailing, tie straps, and engineered connections required for Seismic Design Category D and E structures in the Los Angeles area. We follow the latest Title 24 requirements and LADBS guidelines.
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <ClipboardIcon size={24} className="text-[var(--color-primary)] mb-4" />
                                    <h3 className="text-white font-bold mb-2">Inspection-Ready Framing</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Our crews document nailing patterns, hardware installation, and header specifications throughout the framing process. When the LADBS inspector arrives, every element is clearly visible and accessible, resulting in first-pass inspection approvals.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/services/wall-framing/result.jpg"
                                alt="Code-compliant wall framing in Los Angeles"
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
                            Our Wall Framing Process in Los Angeles
                        </h3>
                        <p className="mt-4 text-[var(--color-neutral-600)] text-lg max-w-2xl mx-auto">
                            A structured approach ensures every wall is framed accurately, passes inspection, and meets the structural requirements of your project.
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
                            Frequently Asked Questions About Wall Framing
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
