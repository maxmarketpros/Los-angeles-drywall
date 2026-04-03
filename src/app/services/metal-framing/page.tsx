import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    HardHatIcon,
    CheckCircleIcon,
    ShieldIcon,
    RulerIcon,
    BuildingIcon,
    ArrowRightIcon,
    HammerIcon,
    LayersIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Metal Framing in Los Angeles, CA | Los Angeles Drywall & Framing",
    description: "Professional metal framing and steel stud services in Los Angeles, CA. Non-combustible framing for commercial and residential projects, fire-rated assemblies, and code-compliant installations. CA #1141917. Call (310) 730-9832.",
};

const processSteps = [
    {
        title: "Project Review and Layout Planning",
        description: "Every metal framing project starts with a thorough review of architectural plans, structural engineering drawings, and project specifications. Our team identifies load bearing walls, fire rated assemblies, shaft walls, and special conditions that require specific gauge steel or reinforcement. We create a detailed layout plan that accounts for MEP penetrations, backing requirements, and coordination with other trades before any material arrives on site."
    },
    {
        title: "Material Procurement and Staging",
        description: "We source steel studs, track, headers, and accessories from reputable manufacturers that meet ASTM standards and project specifications. Material is organized by gauge, size, and location within the building to maximize installation efficiency. For large commercial projects, we coordinate delivery schedules with the general contractor to ensure material is available when needed without congesting the job site."
    },
    {
        title: "Track Layout and Installation",
        description: "Our crew snaps chalk lines and installs floor and ceiling track according to the approved layout. Track is fastened with power actuated fasteners to concrete or screws to structural steel, depending on the substrate. We verify alignment with laser levels and ensure all track is properly positioned before stud installation begins. Control joints and expansion gaps are installed where required by the design."
    },
    {
        title: "Stud Installation and Bracing",
        description: "Steel studs are cut to length and installed plumb within the track at the specified spacing, typically 16 or 24 inches on center. We install horizontal bridging and bracing at required intervals for lateral stability. Headers are built up over door and window openings using the gauge and configuration called for in the structural drawings. Fire rated walls receive the specific stud gauge, spacing, and layer requirements dictated by the UL assembly listing."
    },
    {
        title: "Inspection and Drywall Preparation",
        description: "Before drywall installation begins, our project lead conducts a detailed quality check of all metal framing. We verify stud spacing, gauge compliance, bridging installation, backing for fixtures and equipment, and proper clearance for MEP systems. Any corrections are made before the framing is closed up. We coordinate with the building inspector for rough framing approval, ensuring the project passes inspection the first time and stays on schedule."
    }
];

const faqs = [
    {
        question: "What is the advantage of metal framing over wood framing?",
        answer: "Metal framing offers several advantages over wood, particularly in commercial construction and fire sensitive applications in Los Angeles. Steel studs are non combustible, which is critical for fire rated wall assemblies required in multi story buildings, mixed use developments, and commercial spaces. Metal framing is also dimensionally stable, meaning it will not warp, shrink, or twist like wood. Steel is resistant to termites and moisture damage, both of which are concerns in Los Angeles. For these reasons, most commercial construction and many residential projects in LA specify metal framing."
    },
    {
        question: "Do you use metal framing for residential projects?",
        answer: "Yes, metal framing is increasingly common in residential construction throughout Los Angeles. It is particularly well suited for interior partition walls, basement finishing, garage conversions, and ADU construction where fire resistance and dimensional stability are important. Metal framing is also an excellent choice for properties in wildfire prone areas of Los Angeles where non combustible construction is encouraged or required by local fire codes."
    },
    {
        question: "What gauges of steel studs do you work with?",
        answer: "We work with the full range of steel stud gauges used in construction, from light gauge 25 and 22 gauge studs for interior non load bearing partitions up through 20, 18, 16, and 14 gauge studs for load bearing walls and structural applications. The gauge required for your project depends on the wall height, loading conditions, stud spacing, and whether the wall is load bearing or non load bearing. Our team follows the structural engineer specifications for every project."
    },
    {
        question: "Can metal framing be used for fire rated walls?",
        answer: "Absolutely. Metal framing is the standard framing material for fire rated wall assemblies in commercial construction across Los Angeles. Fire rated walls are built according to specific UL listed assemblies that dictate the stud gauge, spacing, number of drywall layers, and type of insulation. Common ratings include one hour, two hour, and three hour assemblies. Our team is experienced with all common fire rated wall configurations and ensures every detail matches the tested assembly to maintain the fire rating."
    },
    {
        question: "How does metal framing work with Los Angeles seismic requirements?",
        answer: "Los Angeles is in a high seismic zone, and metal framing systems are engineered to accommodate seismic movement. Steel stud walls use slip track connections at the top of the wall that allow the structure to move laterally during an earthquake without damaging the framing or drywall. Shear walls using steel studs are designed with specific fastener patterns and hold down connections to resist lateral seismic forces. Our team installs all seismic detailing according to the structural engineer drawings and California Building Code requirements."
    }
];

export default function MetalFramingPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* HERO */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/metal-framing/hero.jpg"
                    alt="Steel stud metal framing installation on a commercial project in Los Angeles"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Steel Stud Framing
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Metal Framing in Los Angeles, CA
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Los Angeles Drywall & Framing provides professional metal framing services for commercial and residential projects throughout the greater Los Angeles area. Our licensed team specializes in steel stud framing systems, fire rated wall assemblies, and non combustible construction that meets the strict building and fire codes enforced across LA County.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Discuss Metal Framing
                        </a>
                    </div>
                </div>
            </section>

            {/* WHY METAL FRAMING */}
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
                                    src="/images/services/metal-framing/detail.webp"
                                    alt="Steel stud framing detail showing gauge and spacing in Los Angeles"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Steel Stud Precision</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Los Angeles, CA</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Steel Stud Expertise
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Professional Metal Framing for Los Angeles Construction
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Metal framing in Los Angeles, CA is the backbone of modern commercial construction and an increasingly popular choice for residential projects across the metro area. Steel stud framing systems offer superior fire resistance, dimensional stability, and structural performance compared to traditional wood framing. For commercial buildings, tenant improvements, mixed use developments, and multi story residential projects in Los Angeles, metal framing is often required by building codes and fire regulations. Los Angeles Drywall & Framing has the expertise and workforce to handle metal framing projects of any scale, from small office buildouts to large commercial buildings.
                                </p>
                                <p>
                                    Our metal framing services encompass the full range of steel stud construction. We install non load bearing interior partitions using light gauge studs for standard office and retail environments. We build fire rated wall assemblies using the specific gauge, spacing, and layering required by UL listed configurations. We construct shaft walls for elevator and stairwell enclosures. And we install structural load bearing metal stud walls where engineered designs call for heavier gauge steel. Every installation is performed according to manufacturer guidelines, structural engineering specifications, and the California Building Code.
                                </p>
                                <p>
                                    Working in Los Angeles means understanding the unique demands of construction in a major seismic zone. Metal framing systems in LA require proper slip track detailing at the top of walls to allow for structural drift during earthquakes. Shear walls built with steel studs must incorporate specific fastener patterns and hold down hardware per the structural engineer drawings. Our crew is experienced with all seismic detailing requirements for metal framing in the Los Angeles region and ensures that every wall is built to perform safely when the ground moves.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SYNERGY SECTION */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative overflow-hidden border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                                Commercial Grade Solutions
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Steel Framing Built for LA Building Standards
                            </h2>

                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-[var(--color-primary)]/20">
                                        <ShieldIcon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Fire Rated Metal Framing Assemblies
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Los Angeles fire codes require specific fire rated wall assemblies in commercial buildings, multi family residential, and mixed use developments. Our team builds one hour, two hour, and three hour fire rated walls using UL listed metal framing assemblies. We ensure that every component, from stud gauge and spacing to drywall layers and insulation type, matches the tested assembly exactly. This attention to detail is critical because any deviation from the listed assembly can void the fire rating and create a code violation.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-[var(--color-primary)]/20">
                                        <BuildingIcon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Tenant Improvement and Commercial Buildout
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Metal framing is the standard for tenant improvement projects in office buildings, retail centers, and medical facilities throughout Los Angeles. Our crew works efficiently in occupied buildings, maintaining clean work areas and coordinating with building management to minimize disruption. We handle everything from demolition of existing partitions to installation of new metal stud walls, soffits, bulkheads, and ceiling framing for the new layout.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)] group">
                                <Image
                                    src="/images/services/metal-framing/result.jpg"
                                    alt="Completed metal framing for commercial project in Los Angeles"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)] group mt-12">
                                <Image
                                    src="/images/services/metal-framing/detail.webp"
                                    alt="Metal framing steel stud detail in Los Angeles"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DARK SECTION */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-900)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f18] via-[#020617] to-black opacity-100"></div>
                <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    backgroundPosition: 'center top'
                }}></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                        <div className="lg:col-span-7">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                                    <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner">
                                        <HardHatIcon size={30} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4">Non Combustible</h3>
                                    <p className="text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors">
                                        Steel studs are inherently non combustible, making metal framing the preferred choice for fire sensitive construction in Los Angeles. This is especially important for projects in wildfire prone areas, multi story buildings, and any construction where fire codes mandate non combustible framing materials.
                                    </p>
                                </div>
                                <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                                    <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner">
                                        <RulerIcon size={30} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4">Dimensionally Stable</h3>
                                    <p className="text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors">
                                        Unlike wood, steel studs do not warp, shrink, twist, or swell with changes in temperature and humidity. This dimensional stability ensures that walls remain straight and true over time, resulting in better drywall installations with fewer nail pops, cracks, and callbacks. Metal framing delivers consistent quality that holds up over the life of the building.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                                <Image
                                    src="/images/services/metal-framing/hero.jpg"
                                    alt="Metal framing installation in progress in Los Angeles"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-24 lg:py-32 bg-white relative border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 border border-[var(--color-primary)]/20">
                            Our Process
                        </div>
                        <h3 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            Los Angeles Metal Framing Process
                        </h3>
                        <p className="text-lg text-[var(--color-neutral-600)] leading-relaxed">
                            Our metal framing process follows five structured phases to deliver code compliant steel stud installations on schedule for Los Angeles projects.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className={`bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] rounded-2xl p-8 ${index >= 3 ? 'lg:col-span-1' : ''}`}>
                                <div className="w-10 h-10 bg-[var(--color-primary)] text-white rounded-xl flex items-center justify-center text-sm font-bold mb-6">
                                    {index + 1}
                                </div>
                                <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
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

            {/* FAQ */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 border border-[var(--color-primary)]/20">
                                Common Questions
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15]">
                                Metal Framing FAQ
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
