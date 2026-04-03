import Header from "@/components/Header";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    HammerIcon,
    ShovelIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    RulerIcon,
    ShieldIcon,
    LayersIcon,
    ClipboardIcon,
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Rough Carpentry in Los Angeles, CA | Los Angeles Drywall & Framing",
    description:
        "Professional rough carpentry in Los Angeles, CA. Blocking, backing, furring strips, subflooring, and sheathing. Prep work done right before drywall. CA License #1141917. Call (310) 730-9832.",
};

const processSteps = [
    {
        title: "Scope Identification and Plan Review",
        description:
            "We review the construction documents to identify every rough carpentry element required for the project. This includes blocking schedules, backing requirements for fixtures and equipment, furring strip layouts, subflooring specifications, and sheathing details. A clear scope prevents missed items that would require costly return visits.",
    },
    {
        title: "Coordination with Other Trades",
        description:
            "Rough carpentry must be completed at the right time in the construction sequence. We coordinate with the plumber, electrician, HVAC installer, and drywall crew to ensure blocking and backing are installed before walls are closed. This coordination is especially important on fast-track Los Angeles projects where multiple trades work simultaneously.",
    },
    {
        title: "Material Preparation and Cutting",
        description:
            "We prepare blocking, furring strips, and backing materials on site, cutting them to the exact dimensions needed for each application. Materials are selected based on the structural requirements, whether that means pressure-treated lumber for moisture-prone areas, fire-retardant-treated wood for rated assemblies, or standard dimensional lumber for general blocking.",
    },
    {
        title: "Installation and Fastening",
        description:
            "Our carpenters install each rough carpentry element according to the approved plans and applicable codes. Blocking is secured with the correct fastener type and schedule, backing for heavy fixtures is installed at the specified heights, and furring strips are shimmed level to provide a true plane for finish materials. Every installation is verified for plumb, level, and proper attachment.",
    },
    {
        title: "Documentation and Pre-Inspection Review",
        description:
            "Before the framing inspection, we photograph all installed blocking and backing to provide a reference for trades that will work behind finished walls. We verify that all items on the blocking schedule have been completed and that nothing will be inaccessible once drywall is installed. This documentation also serves as a record for the property owner.",
    },
];

const faqs = [
    {
        question: "What is rough carpentry and how is it different from framing?",
        answer: "Rough carpentry refers to the structural and preparatory woodwork that supports finished surfaces and mounted fixtures but is not the primary wall, floor, or roof framing. This includes blocking between studs for cabinet mounting, backing for grab bars and towel bars, furring strips for leveling irregular surfaces, subflooring installation, and wall and roof sheathing. While framing creates the structural skeleton of the building, rough carpentry provides the secondary support elements that make the building functional and ready for finish work.",
    },
    {
        question: "Why is blocking and backing important before drywall installation?",
        answer: "Blocking and backing must be installed before drywall because these elements are concealed inside the wall cavity. Once drywall is hung, there is no practical way to add solid wood backing for heavy items like kitchen cabinets, wall-mounted televisions, grab bars, handrails, and commercial equipment. Missing blocking leads to callbacks, drywall patches, and compromise solutions that reduce the holding strength of the installation. Our rough carpentry crew installs all blocking per the plans so that finish carpenters and installers have solid attachment points throughout the project.",
    },
    {
        question: "Do you install subflooring and sheathing in Los Angeles?",
        answer: "Yes. Subflooring and sheathing are core components of our rough carpentry scope. We install plywood and OSB subflooring over floor joists with the nailing schedules and adhesive applications required by the structural plans. Wall sheathing, including structural plywood shear panels, is installed with the edge nailing patterns required for seismic resistance in the Los Angeles area. Roof sheathing is installed with proper panel stagger and the specific nailing schedule dictated by wind and seismic load calculations.",
    },
    {
        question: "What types of projects need rough carpentry services?",
        answer: "Nearly every construction project in Los Angeles requires some form of rough carpentry. New residential construction needs extensive blocking for kitchens, bathrooms, and closet systems. Commercial tenant improvements require backing for signage, display cases, and wall-mounted equipment. Remodels and additions need furring strips to level existing walls before applying new drywall. Even projects that use metal stud framing often require wood blocking and backing at specific locations for attachment of heavy items.",
    },
    {
        question: "How do you determine where blocking needs to be installed?",
        answer: "Blocking locations come from multiple sources. The structural plans include a blocking schedule that specifies locations for shear transfer blocking, holdown blocking, and structural connections. The architectural plans show cabinet locations, fixture heights, and equipment mounting points. We also reference the plumbing and mechanical plans to identify backing requirements for pipe supports and duct hangers. Before installation begins on any Los Angeles project, we compile a complete blocking list from all plan sheets to ensure nothing is missed.",
    },
];

export default function RoughCarpentryPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
                <Image
                    src="/images/services/rough-carpentry/hero.jpg"
                    alt="Rough carpentry blocking and backing installation in Los Angeles"
                    fill
                    className="object-cover"
                    priority
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="relative z-10 page-container px-4 sm:px-6 pb-16 md:pb-24 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
                            Professional Rough Carpentry
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Rough Carpentry in Los Angeles, CA
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
                            Blocking, backing, furring strips, subflooring, and sheathing installed with precision. The prep work that makes every finish trade successful.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
                        >
                            Schedule Rough Carpentry
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
                                Why Rough Carpentry Services Are Essential in Los Angeles Construction
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
                                Rough carpentry in Los Angeles, CA is the critical preparatory work that bridges the gap between structural framing and finished surfaces. It encompasses every piece of blocking, backing, furring, subflooring, and sheathing that supports the finished building but remains hidden behind walls, under floors, and above ceilings. When rough carpentry is done correctly, cabinets mount securely, grab bars hold under load, drywall surfaces are flat, and sheathing panels resist the lateral forces generated during a seismic event.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
                                Los Angeles Drywall and Framing provides comprehensive rough carpentry services for residential and commercial projects throughout Los Angeles County. Our carpenters understand that rough carpentry is not an afterthought. It is a planned, documented scope of work that must be completed before walls are closed up with drywall. Missing a single piece of backing for a wall-mounted television or a cabinet run can result in expensive tearouts and delays later in the project.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                                We work from the approved blocking schedules and architectural plans to compile a complete list of every rough carpentry element required. Our crews install blocking at the correct heights, in the correct stud bays, using the correct lumber sizes and fastening methods. This attention to detail, backed by our CA License #1141917, ensures that every subsequent trade has the solid backing they need to complete their work to the highest standard.
                            </p>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/services/rough-carpentry/detail.jpg"
                                alt="Blocking and backing detail for rough carpentry"
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
                                    src="/images/services/rough-carpentry/detail.jpg"
                                    alt="Furring strip installation for wall leveling"
                                    fill
                                    className="object-cover"
                                    quality={75}
                                />
                            </div>
                            <div className="relative aspect-[3/4] overflow-hidden mt-8">
                                <Image
                                    src="/images/services/rough-carpentry/result.jpg"
                                    alt="Completed rough carpentry ready for drywall"
                                    fill
                                    className="object-cover"
                                    quality={75}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] mb-6 w-max border border-[var(--color-primary)]/20">
                                Blocking, Backing, and Support Work
                            </div>
                            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-tight mb-6">
                                Comprehensive Rough Carpentry for Residential and Commercial Builds
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8">
                                From solid wood blocking for heavy fixture mounting to furring strips that create true wall planes on uneven surfaces, our rough carpentry services cover every preparatory element your project requires.
                            </p>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <HammerIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">
                                            Blocking and Backing Installation
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            We install solid wood blocking between studs and joists for cabinets, handrails, grab bars, wall-mounted fixtures, and heavy equipment. Backing is positioned at the exact heights and locations specified in the plans, using lumber sizes that provide adequate bearing surface and pullout resistance. Every piece is secured with the correct fastener type and quantity to ensure long-term holding strength.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <LayersIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">
                                            Furring, Subflooring, and Sheathing
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Furring strips are used to create level surfaces on masonry walls, irregular framing, or concrete surfaces before applying drywall or paneling. Our subflooring installation includes proper adhesive application, fastener schedules, and panel layout to create a solid, squeak-free floor platform. Wall and roof sheathing is installed with the nailing patterns required by the structural engineer for seismic and wind resistance on Los Angeles projects.
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
                                Code Requirements for Rough Carpentry in Los Angeles
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-10">
                                Rough carpentry in Los Angeles is subject to the same code enforcement as primary structural framing. Shear panel nailing patterns, fire blocking between floors, and structural blocking at holdown locations are all inspected by LADBS inspectors. Our crews understand these requirements and install every element to code, avoiding inspection holds and project delays.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <ShieldIcon size={24} className="text-[var(--color-primary)] mb-4" />
                                    <h3 className="text-white font-bold mb-2">Structural Sheathing Standards</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Plywood and OSB sheathing panels serve as shear walls that resist lateral seismic forces. We install structural sheathing with the exact edge nailing, field nailing, and panel orientation specified in the structural plans. Panel thickness, species, and grade are verified against the specifications before installation begins.
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <ClipboardIcon size={24} className="text-[var(--color-primary)] mb-4" />
                                    <h3 className="text-white font-bold mb-2">Fire Blocking Compliance</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        California Building Code requires fire blocking in concealed wall spaces at each floor level, at the ceiling line, and at stair stringers. This prevents the spread of fire within wall cavities. Our carpenters install fire blocking with tight-fitting lumber or approved sealant at every required location, documented and ready for the inspector.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/services/rough-carpentry/result.jpg"
                                alt="Code-compliant rough carpentry installation in Los Angeles"
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
                            Our Rough Carpentry Process
                        </h3>
                        <p className="mt-4 text-[var(--color-neutral-600)] text-lg max-w-2xl mx-auto">
                            A methodical approach ensures every piece of blocking, backing, and sheathing is installed correctly before the walls are closed and access is lost.
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
                            Frequently Asked Questions About Rough Carpentry
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
