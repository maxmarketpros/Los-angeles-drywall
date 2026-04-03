import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    HammerIcon,
    LayersIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    RulerIcon,
    HardHatIcon,
    ShieldIcon,
    HomeIcon,
    BuildingIcon,
    ShovelIcon,
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Drywall Texturing in Los Angeles, CA | Los Angeles Drywall & Framing",
    description: "Custom drywall texturing in Los Angeles, CA including knockdown, orange peel, skip trowel, smooth finish, and popcorn ceiling removal. Call (310) 730-9832 for a free estimate.",
};

const processSteps = [
    {
        title: "Surface Preparation",
        description: "Before any texture is applied, we prepare the drywall surface to ensure proper adhesion and a consistent result. This includes verifying that all joints are fully cured, sanding any ridges or imperfections, priming bare drywall where needed, and masking off areas that should not receive texture such as trim, cabinetry, and electrical fixtures."
    },
    {
        title: "Texture Selection & Sample",
        description: "We work with you to select the right texture pattern for your space. For projects where an existing texture must be matched, we create a sample on a test board and compare it to the existing surface under similar lighting conditions. This step ensures you approve the pattern, depth, and consistency before we apply it to your walls or ceilings."
    },
    {
        title: "Application",
        description: "Our crew applies the selected texture using professional-grade spray equipment or hand tools, depending on the pattern. Knockdown and orange peel textures are typically sprayed and then manipulated with a knockdown knife or left as-is. Skip trowel textures are applied by hand for a more organic, plaster-like appearance. Each method requires specific material consistency and technique to achieve a uniform result."
    },
    {
        title: "Knockdown & Detailing",
        description: "For knockdown textures, we allow the sprayed compound to set briefly before skimming the high points with a wide trowel to create the characteristic flattened pattern. The timing of this step is critical. If the compound is knocked down too early, the pattern is lost. If it sets too long, the trowel drags and tears the surface. Our experienced texturers know exactly when to make the pass for a clean, consistent knockdown."
    },
    {
        title: "Inspection & Priming",
        description: "After the texture has fully dried, we inspect the entire surface for consistency in pattern and coverage. Any thin spots or inconsistencies are touched up before the surface is ready for priming and painting. We also verify that all masking has been removed cleanly and that adjacent surfaces are free of overspray or compound splatter."
    },
];

const faqs = [
    {
        question: "What are the most common drywall textures used in Los Angeles homes?",
        answer: "The most common drywall textures in Los Angeles include knockdown, which features a mottled, flattened pattern; orange peel, which resembles the surface of an orange rind; skip trowel, a hand-applied texture with an organic, Mediterranean feel; and smooth finish, which has no applied texture at all. Older Los Angeles homes frequently have popcorn or acoustic texture on ceilings, which many homeowners choose to have removed and replaced with a modern knockdown or smooth finish."
    },
    {
        question: "Can you match the existing texture on my Los Angeles home?",
        answer: "Yes. Texture matching is one of the most common requests we receive, particularly for repair projects and additions where new drywall must blend with existing surfaces. We analyze the existing texture pattern, depth, and material to determine the best method for replication. We create a sample on a test board for your approval before applying the texture to the project area. While exact matching depends on the age and type of the original texture, we achieve seamless blends in the vast majority of projects."
    },
    {
        question: "How much does popcorn ceiling removal cost in Los Angeles?",
        answer: "Popcorn ceiling removal cost depends on the size of the area, the number of coats applied, and whether the existing texture contains asbestos, which is common in homes built before 1980. If asbestos is present, specialized abatement procedures are required before removal can proceed, which adds to the overall cost. We recommend having the texture tested before beginning any removal work. We provide detailed estimates after an on-site evaluation. Call us at (310) 730-9832 to schedule your assessment."
    },
    {
        question: "Is popcorn ceiling texture in my Los Angeles home dangerous?",
        answer: "Popcorn ceiling texture applied before 1980 may contain asbestos fibers, which can be hazardous when disturbed. If the texture is in good condition and left undisturbed, it does not pose an immediate health risk. However, if you plan to scrape, sand, or remove the texture, it should be tested for asbestos first. We recommend having a sample sent to a certified lab before any removal work begins. If asbestos is confirmed, a licensed abatement contractor must handle the removal before we can apply new texture."
    },
    {
        question: "How long does drywall texturing take to complete?",
        answer: "Texturing timelines depend on the type of texture, the size of the area, and the condition of the underlying surface. Most texture applications can be completed within one to two days for average-sized rooms, with an additional day for drying before priming and painting can begin. Popcorn ceiling removal adds time for scraping, surface repair, and re-texturing. We provide a specific timeline during your consultation based on the scope of your project."
    },
];

export default function DrywallTexturingPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/drywall-texturing/hero.jpg"
                    alt="Custom drywall texturing being applied in a Los Angeles property"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Custom Drywall Texturing
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Drywall Texturing in<br className="hidden md:block" />
                            <span className="text-[var(--color-primary-light)]">Los Angeles, CA</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Drywall texturing is the application of decorative surface patterns to finished drywall, giving walls and ceilings their final visual character before paint. Los Angeles Drywall & Framing provides professional drywall texturing services for homeowners, contractors, and property managers across the greater Los Angeles area. Our team applies a full range of texture styles including knockdown, orange peel, skip trowel, smooth, and custom patterns. We also specialize in popcorn ceiling removal, a service in high demand among Los Angeles homeowners looking to modernize properties built in the 1960s through 1980s. Whether you are texturing a new build in Pasadena or updating a rental property in Koreatown, we deliver a consistent, high-quality result.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Explore Texture Options
                            <ArrowRightIcon className="inline-block ml-2" size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. WHY TEXTURE SELECTION MATTERS */}
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
                                    src="/images/services/drywall-texturing/detail.jpg"
                                    alt="Knockdown texture being applied to drywall in a Los Angeles home"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Custom Textures</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Los Angeles, CA</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Texture Options
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Choosing the Right Drywall Texture for Los Angeles Properties
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    The texture you choose for your walls and ceilings has a significant impact on the look and feel of your interior space. In Los Angeles, design trends range from the clean minimalism of smooth walls in modern homes to the warmth and character of hand-applied skip trowel textures in Spanish and Mediterranean-inspired properties. The right texture can enhance architectural style, hide minor surface imperfections, and influence how light interacts with your walls throughout the day.
                                </p>
                                <p>
                                    Knockdown texture remains one of the most popular choices in the Los Angeles market. It provides visual depth and interest while being easier to maintain than smooth walls, which show every scuff and ding. Orange peel is another widely used option that provides a subtle, uniform texture with excellent durability. For homeowners seeking a more distinctive look, skip trowel creates a hand-crafted, plaster-like appearance that pairs well with the earth-toned color palettes common in Southern California interiors.
                                </p>
                                <p>
                                    Many Los Angeles homeowners contact us specifically for popcorn ceiling removal. This acoustic texture was standard in homes built from the 1950s through the 1980s and has fallen out of favor due to its dated appearance and tendency to collect dust and cobwebs. Removing popcorn texture and replacing it with a modern knockdown or smooth finish is one of the most impactful cosmetic upgrades you can make to an older LA home, significantly improving both the appearance and perceived value of the space.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TEXTURE TYPES & APPLICATIONS */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative overflow-hidden text-left border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                                Application Methods
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Spray, Hand, and Trowel Applied Wall Textures
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium mb-10">
                                Each texture type requires specific equipment, material consistency, and application technique. Our crew is trained in all major texture methods and uses professional equipment to deliver consistent coverage across large areas while maintaining precise control in detailed spaces.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white border border-[var(--color-neutral-200)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <HammerIcon size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Spray Textures for LA Homes and Buildings
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Knockdown and orange peel textures are applied using hopper guns or airless spray equipment that atomizes joint compound into a consistent pattern on the wall surface. Knockdown is then flattened with a broad knife after a brief setting period. Orange peel is left as sprayed, creating a fine, dimpled surface. Both methods produce uniform coverage and are well suited for large residential and commercial projects.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white border border-[var(--color-neutral-200)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <ShovelIcon size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Hand Applied and Trowel Textures
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Skip trowel and other hand-applied textures are created by spreading a thin layer of compound across the surface with a curved trowel, leaving a pattern of intentional gaps and ridges. This technique produces a natural, artisan quality that is popular in Los Angeles homes with Mediterranean, Tuscan, or Spanish Colonial architectural styles. The result is a unique, tactile surface that cannot be replicated by machine.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)]">
                                <Image
                                    src="/images/services/drywall-texturing/detail.jpg"
                                    alt="Spray texture application on drywall in a Los Angeles property"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)] mt-8">
                                <Image
                                    src="/images/services/drywall-texturing/result.jpg"
                                    alt="Finished knockdown texture on walls in an LA home"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DARK SECTION - POPCORN REMOVAL & SAFETY */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-900)] relative overflow-hidden text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f18] via-[#020617] to-black opacity-100"></div>
                <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    backgroundPosition: 'center top'
                }}></div>

                <div className="page-container relative z-10">
                    <div className="max-w-3xl mb-16 lg:mb-24">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary-light)]/20">
                            Safety & Removal
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-6">
                            Popcorn Removal and Asbestos Safety in LA
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed font-[family-name:var(--font-inter)]">
                            Removing old ceiling textures in Los Angeles homes requires awareness of potential hazardous materials and compliance with local safety regulations. We approach every removal project with proper precautions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>
                            <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                <ShieldIcon size={30} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                Pre-Removal Testing Protocols
                            </h3>
                            <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                Before removing any textured surface in a home built prior to 1980, we recommend asbestos testing by a certified laboratory. This is a standard precaution in Los Angeles, where thousands of homes have popcorn ceilings that may contain asbestos fibers. If testing confirms the presence of asbestos, a licensed abatement contractor must handle the removal before our team can apply new texture to the ceiling.
                            </p>
                        </div>
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>
                            <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                <HardHatIcon size={30} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                Containment and Cleanup Standards
                            </h3>
                            <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                Even when asbestos is not present, texture removal generates significant dust and debris. We protect your furnishings, flooring, and HVAC system with plastic sheeting and tarps before beginning any scraping work. All debris is collected and properly disposed of according to local waste handling regulations. We leave the space clean and ready for the new texture application.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. OUR TEXTURING PROCESS */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-[var(--color-neutral-100)]">
                <div className="page-container relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                            Our Process
                        </div>
                        <h3 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            Our Drywall Texturing Process in Los Angeles
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                            From surface preparation to final inspection, our texturing process is designed to deliver a uniform, professional result on every wall and ceiling.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                                <div className="text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-primary)]/20 mb-4">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                                <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                    {step.title}
                                </h4>
                                <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ SECTION */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                                Common Questions
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15]">
                                Drywall Texturing FAQs
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details key={index} className="group bg-white border border-[var(--color-neutral-200)] rounded-xl overflow-hidden">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] hover:text-[var(--color-primary)] transition-colors list-none">
                                        {faq.question}
                                        <span className="ml-4 text-[var(--color-primary)] shrink-0 transition-transform group-open:rotate-45">
                                            <CheckCircleIcon size={20} />
                                        </span>
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
