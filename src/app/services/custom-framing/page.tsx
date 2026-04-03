import Header from "@/components/Header";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    RulerIcon,
    LayersIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    HammerIcon,
    ShieldIcon,
    ClipboardIcon,
    HomeIcon,
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Custom Framing in Los Angeles, CA | Los Angeles Drywall & Framing",
    description:
        "Custom architectural framing in Los Angeles, CA. Soffits, arches, tray ceilings, bulkheads, curved walls, and specialty designs. CA License #1141917. Call (310) 730-9832.",
};

const processSteps = [
    {
        title: "Design Consultation and Detail Review",
        description:
            "We begin every custom framing project by reviewing the architectural details with the designer or homeowner. This includes studying section drawings, elevation views, and any 3D renderings that illustrate the intended appearance. Understanding the design intent ensures that our framing accurately produces the curves, angles, and profiles specified in the plans.",
    },
    {
        title: "Template Fabrication and Mockup",
        description:
            "For complex custom elements such as arches, curved walls, and multi-tiered ceilings, we build full-scale templates or mockups on site. This allows the architect and property owner to verify proportions, heights, and radii before permanent framing begins. Adjustments are much simpler at the template stage than after the framing is installed.",
    },
    {
        title: "Custom Component Assembly",
        description:
            "Our carpenters fabricate the custom framing components on site using specialized techniques. Arched headers are built from laminated layers or kerfed lumber. Curved walls use closely spaced studs with flexible track. Tray ceilings are framed with stepped soffits and precise transitions. Each element is assembled to match the approved templates and dimensions.",
    },
    {
        title: "Installation and Alignment Verification",
        description:
            "Custom framing elements are installed and integrated with the surrounding standard framing. We use laser levels, string lines, and measuring tools to verify that curves are smooth, soffits are level, and transitions between custom and standard framing are seamless. Any irregularities at this stage would be visible in the finished drywall, so precision is essential.",
    },
    {
        title: "Drywall Coordination and Final Check",
        description:
            "Before drywall installation begins, we walk the project with the drywall crew to review all custom framing elements. We confirm that backing is installed where needed for curved drywall panels, that soffit dimensions allow for proper drywall coverage, and that all framing planes are true. This coordination step prevents fit issues and produces the clean lines the architect envisioned.",
    },
];

const faqs = [
    {
        question: "What types of custom framing do you build in Los Angeles?",
        answer: "We build a wide range of custom architectural framing elements including arched doorways and passageways, curved walls, tray ceilings with single and multi-tier designs, soffits and bulkheads for kitchen and bathroom applications, barrel vault ceilings, coffered ceiling grids, recessed ceiling coves for indirect lighting, radius walls, and custom wall niches. Each element is framed to the exact dimensions and profiles specified in the architectural plans for Los Angeles residential and commercial projects.",
    },
    {
        question: "How do you frame curved walls and arches?",
        answer: "Curved walls are framed using flexible metal track bent to the specified radius and secured to the floor and ceiling. Studs are placed at close spacing, typically 6 to 8 inches on center, to create a smooth curve that supports drywall without flat spots. Arched openings are framed with laminated plywood headers cut to the arch profile, or with kerfed lumber that bends to the required radius. The framing method depends on the radius, wall height, and whether the curve must support structural loads.",
    },
    {
        question: "Can you frame tray ceilings in existing homes?",
        answer: "Yes. Tray ceilings can be framed in existing Los Angeles homes when the ceiling structure provides adequate depth. We build the stepped soffit framework from the existing ceiling joists down to the desired tray depth, creating the recessed center portion that defines the tray profile. For homes with limited ceiling joist depth, we discuss alternative approaches such as a shallow tray or a flat soffit perimeter that achieves a similar visual effect within the available space.",
    },
    {
        question: "Do custom framing elements require structural engineering?",
        answer: "It depends on the element. Purely decorative features like soffits, bulkheads, and non-structural arches typically do not require structural engineering. However, arched openings in load-bearing walls, large curved walls, and custom ceiling framing that modifies or replaces existing structural members will require structural engineering approval and possibly a permit from the Los Angeles Department of Building and Safety. We advise clients on which elements need engineering review during the initial consultation.",
    },
    {
        question: "How much do custom framing services cost in Los Angeles?",
        answer: "Custom framing costs vary significantly based on the complexity, size, and number of custom elements in the project. A single arched doorway or basic tray ceiling costs considerably less than a room full of curved walls, barrel vaults, and coffered ceilings. We provide detailed estimates based on the architectural plans, and we break down pricing by element so you can prioritize features within your budget. Contact us at (310) 730-9832 to discuss your specific project and receive a custom estimate.",
    },
];

export default function CustomFramingPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* HERO SECTION */}
            <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
                <Image
                    src="/images/services/custom-framing/hero.jpg"
                    alt="Custom architectural framing in Los Angeles"
                    fill
                    className="object-cover"
                    priority
                    quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="relative z-10 page-container px-4 sm:px-6 pb-16 md:pb-24 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)] text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
                            Custom Architectural Framing
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Custom Framing in Los Angeles, CA
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
                            Soffits, arches, tray ceilings, curved walls, and architectural details framed with precision to bring design visions to life in Los Angeles homes and commercial spaces.
                        </p>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-colors"
                        >
                            Plan Your Custom Framing
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
                                Specialty Custom Framing for Architectural Design in Los Angeles
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
                                Custom framing in Los Angeles, CA transforms architectural plans into the built elements that define a space. While standard wall and ceiling framing creates the basic structure, custom framing adds the soffits, arches, tray ceilings, bulkheads, curved walls, and decorative features that give a room its character. These elements require a level of craftsmanship and geometric precision that goes beyond conventional stud layout, making the choice of framing contractor critically important to the finished result.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-6">
                                Los Angeles Drywall and Framing specializes in custom framing for architects, interior designers, homeowners, and general contractors who demand precise execution of complex design details. Our carpenters have extensive experience framing the types of architectural features that are common in high-end Los Angeles residences and upscale commercial interiors: radius walls that flow through open floor plans, multi-tiered tray ceilings with integrated cove lighting, barrel vault hallways, coffered ceiling grids, and custom soffits that conceal HVAC ductwork while adding visual interest.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                                The quality of custom framing directly determines the quality of the finished drywall and paint surfaces. A tray ceiling with uneven soffits, an arch with flat spots, or a curved wall with visible faceting will show through every finish layer. Our commitment to precision framing, verified with templates, laser levels, and careful measurement, ensures that the finished product matches the architect's vision. All work is performed under our CA License #1141917.
                            </p>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/services/custom-framing/detail.jpg"
                                alt="Tray ceiling and arch framing detail"
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
                                    src="/images/services/custom-framing/detail.jpg"
                                    alt="Curved wall framing with close stud spacing"
                                    fill
                                    className="object-cover"
                                    quality={75}
                                />
                            </div>
                            <div className="relative aspect-[3/4] overflow-hidden mt-8">
                                <Image
                                    src="/images/services/custom-framing/result.jpg"
                                    alt="Completed custom framing for architectural features"
                                    fill
                                    className="object-cover"
                                    quality={75}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] mb-6 w-max border border-[var(--color-primary)]/20">
                                Arches, Soffits, and Ceilings
                            </div>
                            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-tight mb-6">
                                Architectural Features That Elevate Any Space
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8">
                                Our custom framing capabilities cover the full spectrum of architectural elements, from simple soffits and bulkheads to complex curved geometries that require specialized fabrication techniques.
                            </p>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <RulerIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">
                                            Tray Ceilings and Coffered Designs
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Tray ceilings create a recessed center area that adds depth and visual interest to a room. We frame single-step and multi-step tray profiles with precise level transitions, straight soffit runs, and clean corners. Coffered ceilings use a grid of beams and recessed panels that require accurate framing to maintain consistent spacing and depth across the entire ceiling plane. Both designs can integrate indirect LED lighting in cove pockets framed to the electrician's specifications.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <HammerIcon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[var(--color-neutral-900)] mb-2">
                                            Arches, Curved Walls, and Radius Features
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Curved architectural elements require framing techniques that produce smooth, consistent radii. We frame arched doorways and window headers, full-radius curved walls, semicircular alcoves, and barrel vault ceiling profiles. The framing uses flexible track, closely spaced studs, and laminated or kerfed members to achieve curves that accept drywall without flat spots or visible faceting in the finished surface.
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
                                Precision Standards for Custom Architectural Work
                            </h2>
                            <p className="text-white/70 text-lg leading-relaxed mb-10">
                                Custom framing elements are held to tighter tolerances than standard wall and ceiling framing because every surface is visible in the finished space. A soffit that is one-quarter inch out of level or an arch that is slightly asymmetrical will be obvious once the drywall is finished and painted. Our quality standards address these demands from the first measurement through final verification.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <ShieldIcon size={24} className="text-[var(--color-primary)] mb-4" />
                                    <h3 className="text-white font-bold mb-2">Template Verified Geometry</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Complex curves and profiles are verified against full-scale templates before framing members are permanently fastened. This verification step catches dimensional errors before they are built into the structure, saving time and ensuring the finished geometry matches the design drawings approved by the architect.
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <ClipboardIcon size={24} className="text-[var(--color-primary)] mb-4" />
                                    <h3 className="text-white font-bold mb-2">Integrated Lighting and MEP Framing</h3>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        Many custom ceiling and soffit elements incorporate recessed lighting, cove lighting, or HVAC grilles. We coordinate framing dimensions with the electrical and mechanical contractors to ensure that light fixture housings, LED strip cove pockets, and register openings are properly positioned and sized within the custom framing assembly.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/services/custom-framing/result.jpg"
                                alt="Precision custom framing for architectural features in Los Angeles"
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
                            How We Deliver Custom Framing in Los Angeles
                        </h3>
                        <p className="mt-4 text-[var(--color-neutral-600)] text-lg max-w-2xl mx-auto">
                            A design-focused process that turns architectural plans into precisely built framing, ready for seamless drywall installation and flawless finished surfaces.
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
                            Frequently Asked Questions About Custom Framing
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
