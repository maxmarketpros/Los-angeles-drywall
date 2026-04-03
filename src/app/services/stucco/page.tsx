import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    LayersIcon,
    CheckCircleIcon,
    ShieldIcon,
    RulerIcon,
    HammerIcon,
    BuildingIcon,
    ArrowRightIcon,
    HomeIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Stucco in Los Angeles, CA | Los Angeles Drywall & Framing",
    description: "Expert stucco application and repair services in Los Angeles, CA. Traditional and synthetic stucco for residential and commercial properties. Licensed contractor, CA #1141917. Call (310) 730-9832.",
};

const processSteps = [
    {
        title: "Inspection and Assessment",
        description: "Every stucco project begins with a comprehensive evaluation of your existing exterior or new construction substrate. We inspect for moisture damage, structural cracks, delamination, and substrate condition. For new construction, we verify that the framing, sheathing, and weather barrier are installed correctly before any stucco work begins. This assessment allows us to recommend the right stucco system and repair approach for your specific property."
    },
    {
        title: "Substrate Preparation and Lath Installation",
        description: "Proper substrate preparation is the foundation of a long lasting stucco application. Our crew installs weather resistant barriers, weep screeds, control joints, and metal or fiberglass lath according to manufacturer specifications and local building codes. For repair work, we remove all damaged stucco down to sound substrate, address any underlying moisture or structural issues, and install new lath where needed."
    },
    {
        title: "Scratch Coat Application",
        description: "The scratch coat is the first layer of the traditional three coat stucco system. Our team applies a cement based mix over the lath, building up the correct thickness and scoring horizontal lines into the surface to create a mechanical bond for the next layer. We allow the scratch coat to cure properly before proceeding, following strict timing requirements that ensure maximum strength and adhesion."
    },
    {
        title: "Brown Coat and Leveling",
        description: "The brown coat is the second layer and serves as the leveling surface for the final finish. Our crew applies the brown coat to establish a flat, true plane across the entire wall surface. We use straightedges and darbies to eliminate high and low spots, creating a uniform substrate that ensures the finish coat will look consistent and professional. The brown coat is moist cured to prevent cracking."
    },
    {
        title: "Finish Coat and Texture Application",
        description: "The finish coat is where the character of your stucco exterior comes to life. We offer a full range of stucco textures including smooth trowel, sand float, dash, lace, and custom patterns that complement your architecture. The finish coat is mixed with integral color or can be painted after curing. We apply it evenly across the entire surface and work continuously to avoid lap marks and ensure a uniform appearance."
    }
];

const faqs = [
    {
        question: "What is the difference between traditional stucco and synthetic stucco?",
        answer: "Traditional stucco is a cement based system applied in three coats over metal lath. It is extremely durable, fire resistant, and well suited to the Los Angeles climate. Synthetic stucco, also known as EIFS (Exterior Insulation and Finish System), uses foam insulation boards covered with a thin acrylic finish coat. Synthetic stucco provides better insulation but requires proper detailing to prevent moisture problems. We install and repair both systems and can recommend the right option for your property."
    },
    {
        question: "How long does stucco last in Los Angeles?",
        answer: "Traditional cement stucco properly installed in Los Angeles can last 50 years or more with appropriate maintenance. The dry Southern California climate is ideal for stucco, as the material performs best in low humidity environments. However, stucco requires periodic inspection for cracks, especially after seismic activity, and should be sealed or painted every 7 to 10 years to maintain its weather resistance and appearance."
    },
    {
        question: "Can you repair cracked stucco without replacing the entire wall?",
        answer: "Yes, we regularly perform targeted stucco repairs without removing the entire wall surface. Hairline cracks can be sealed with elastomeric caulk and painted. Larger cracks and damaged sections require cutting out the affected area, addressing any underlying substrate or moisture issues, and patching with new stucco that is texture matched to blend with the existing surface. We have extensive experience matching existing textures and colors throughout Los Angeles."
    },
    {
        question: "How much does stucco repair cost in Los Angeles?",
        answer: "Stucco repair costs in Los Angeles vary depending on the extent of damage, accessibility, and whether the underlying substrate needs attention. Minor crack repairs are relatively affordable, while large scale stucco replacement involving lath removal and full three coat reapplication costs more per square foot. Water damaged areas that require sheathing or framing repair will add to the overall cost. We provide free on site estimates for every stucco project."
    },
    {
        question: "Do you handle stucco work for new construction?",
        answer: "Yes, we provide full stucco services for new construction projects in Los Angeles. This includes installing weather barriers, metal lath, control joints, weep screeds, and the complete three coat stucco system. We work closely with general contractors and builders to coordinate scheduling and ensure that stucco work integrates properly with windows, doors, roofing, and other exterior trades. Our team is experienced with both residential and commercial new construction stucco."
    }
];

export default function StuccoPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* HERO */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/stucco/hero.jpg"
                    alt="Professional stucco application on a Los Angeles property by Los Angeles Drywall and Framing"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Expert Stucco Services
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Stucco in Los Angeles, CA
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Los Angeles Drywall & Framing provides expert stucco application, repair, and refinishing services for residential and commercial properties throughout the greater Los Angeles area. Stucco is one of the most prevalent exterior finishes in Southern California, and our licensed team has the experience to install, repair, and maintain it to the highest standards.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Request a Stucco Estimate
                        </a>
                    </div>
                </div>
            </section>

            {/* WHY STUCCO */}
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
                                    src="/images/services/stucco/detail.jpg"
                                    alt="Stucco texture detail and application work in Los Angeles"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Stucco Craftsmanship</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Los Angeles, CA</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Stucco Expertise
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Expert Stucco Services for Los Angeles Properties
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Stucco in Los Angeles, CA is more than just an exterior finish. It is a defining feature of the region&apos;s architectural identity. From Spanish Colonial Revival homes in Hancock Park to mid century modern residences in the Hollywood Hills and contemporary commercial buildings in Downtown LA, stucco has been the exterior cladding of choice in Southern California for over a century. Its fire resistance, durability in dry climates, and versatile aesthetic make it the ideal material for Los Angeles construction. Los Angeles Drywall & Framing specializes in traditional three coat cement stucco as well as synthetic EIFS systems for both new installations and repair work.
                                </p>
                                <p>
                                    Our stucco services cover the full scope of work required for any project. For new construction, we handle everything from weather barrier and lath installation through the scratch, brown, and finish coats. For repair and maintenance, we diagnose the root cause of stucco failure, whether it is moisture intrusion, settling cracks, seismic damage, or poor original installation, and we implement lasting repairs rather than surface level patches. Our goal is to restore your stucco to its original condition and ensure it continues to protect your building for decades.
                                </p>
                                <p>
                                    As a licensed California contractor with extensive experience in both drywall and exterior systems, we bring a unique perspective to stucco work. We understand the structural framing behind the stucco, the importance of proper flashing and moisture management, and how to coordinate stucco installation with other trades on the job site. This comprehensive knowledge allows us to identify and address issues that a stucco only contractor might miss, saving our clients time and money on their projects.
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
                                Stucco Solutions
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Full Service Stucco for LA Architecture
                            </h2>

                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-[var(--color-primary)]/20">
                                        <HomeIcon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Stucco Repair and Restoration in LA
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Los Angeles stucco exteriors are subject to cracking from seismic activity, moisture damage near plumbing penetrations, and deterioration from decades of sun exposure. Our repair process goes beyond surface patching. We investigate the cause of every crack and damaged area, address structural or moisture issues at the source, and apply new stucco that is texture and color matched to blend seamlessly with the existing surface. We specialize in restoring older homes and buildings to their original appearance.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-[var(--color-primary)]/20">
                                        <BuildingIcon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Commercial and Residential New Stucco
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            For new construction projects across Los Angeles, we provide complete stucco installation from substrate preparation through finish coat application. Our team works with architects, general contractors, and property owners to select the right stucco system, texture, and color for each project. We handle residential homes of all sizes, multi unit apartment buildings, retail storefronts, and commercial buildings with the same level of precision and professionalism.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)] group">
                                <Image
                                    src="/images/services/stucco/result.jpg"
                                    alt="Completed stucco finish on Los Angeles building"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)] group mt-12">
                                <Image
                                    src="/images/services/stucco/detail.jpg"
                                    alt="Stucco texture and application detail in Los Angeles"
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
                                        <ShieldIcon size={30} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4">Weather Resistant</h3>
                                    <p className="text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors">
                                        Stucco provides an inherently fire resistant, weather proof exterior that is ideal for the Los Angeles climate. Properly applied stucco resists UV damage, sheds water effectively, and maintains its structural integrity through decades of Southern California sun exposure and seasonal temperature variations.
                                    </p>
                                </div>
                                <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                                    <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner">
                                        <LayersIcon size={30} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4">Texture Matching</h3>
                                    <p className="text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors">
                                        Matching existing stucco textures is one of the most challenging aspects of stucco repair. Our team has years of experience replicating the exact texture, finish, and color of your existing stucco. Whether your building features a smooth trowel, sand float, dash, or lace finish, we deliver seamless repairs that are virtually undetectable.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                                <Image
                                    src="/images/services/stucco/hero.jpg"
                                    alt="Stucco application in progress on Los Angeles property"
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
                            Los Angeles Stucco Installation Process
                        </h3>
                        <p className="text-lg text-[var(--color-neutral-600)] leading-relaxed">
                            Our stucco installation follows a proven five step process that ensures a durable, beautiful finish built to last in the Los Angeles climate.
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
                                Stucco FAQ
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
