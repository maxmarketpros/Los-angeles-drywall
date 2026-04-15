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
    ClipboardIcon,
    HardHatIcon,
    ShieldIcon,
    HomeIcon,
    BuildingIcon,
} from "@/components/icons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
    title: "Drywall Installation in Los Angeles, CA | Los Angeles Drywall & Framing",
    description: "Professional drywall installation in Los Angeles, CA for residential and commercial projects. Expert board hanging, code-compliant builds, and seamless results. Call (310) 730-9832 for a free estimate.",
    openGraph: {
        images: [{
            url: "/images/services/drywall-installation/hero.jpg",
            width: 1200,
            height: 630,
            alt: "Drywall Installation in Los Angeles",
        }],
    },
};

const processSteps = [
    {
        title: "On-Site Evaluation",
        description: "We visit your property to assess the scope of work, take precise measurements, and evaluate framing conditions. This step ensures we identify any structural concerns, ventilation requirements, or code considerations specific to your Los Angeles project before materials are ordered."
    },
    {
        title: "Material Selection & Planning",
        description: "Based on your project requirements, we recommend the appropriate drywall type and thickness. Options include standard gypsum board, moisture resistant panels for bathrooms and kitchens, fire rated Type X for garage ceilings and rated assemblies, and lightweight panels for upper story applications."
    },
    {
        title: "Board Delivery & Staging",
        description: "We coordinate material delivery to your job site and stage panels for efficient installation. Boards are positioned by room and stacked on edge to prevent warping, with careful attention to protecting finished flooring and existing surfaces during the staging process."
    },
    {
        title: "Professional Hanging & Fastening",
        description: "Our crew hangs drywall panels starting with ceilings before moving to walls. We use proper screw patterns per manufacturer specifications and local building code, ensuring tight seams and minimal gapping at joints. All cutouts for electrical, plumbing, and HVAC are measured and made with precision."
    },
    {
        title: "Inspection & Quality Review",
        description: "Before handing off to the finishing phase, we conduct a thorough walkthrough to verify that all panels are secure, seams are tight, and fastener placement meets code. We check for any damaged boards, missed cutouts, or areas that need adjustment before taping begins."
    },
];

const faqs = [
    {
        question: "What types of drywall do you install in Los Angeles homes and commercial buildings?",
        answer: "We install a full range of drywall products including standard 1/2 inch gypsum board, 5/8 inch Type X fire rated panels required for garage ceilings and rated wall assemblies, moisture resistant greenboard and cement board for wet areas, lightweight panels for easier handling on upper floors, and soundproofing board for shared walls in multi-family buildings. The type of drywall we recommend depends on the room function, local building code requirements, and your project goals."
    },
    {
        question: "How long does a typical drywall installation project take in the Los Angeles area?",
        answer: "Project timelines depend on the size and complexity of the job. A single room installation can typically be completed in one to two days of hanging, while a full house or large commercial space may require one to two weeks. We provide a detailed timeline during your initial consultation so you know exactly what to expect, and we coordinate closely with other trades on site to avoid scheduling conflicts."
    },
    {
        question: "Do you handle building permits and inspections for drywall installation in LA?",
        answer: "Yes. As a California Licensed Contractor (License #1141917), we are fully equipped to work within the permitting and inspection framework of the City of Los Angeles and surrounding municipalities. We ensure all drywall installations comply with local building codes, including fire separation, sound transmission, and energy efficiency requirements under California Title 24."
    },
    {
        question: "Can you install drywall over existing walls or do old materials need to be removed first?",
        answer: "In many cases, new drywall can be installed over existing surfaces, but it depends on the condition of the underlying structure. If the existing drywall has significant water damage, mold, or compromised framing, removal is necessary before new panels are hung. During our on-site evaluation, we assess the condition of your walls and provide an honest recommendation on whether overlay installation or full replacement is the better approach for your project."
    },
    {
        question: "What areas in Los Angeles do you serve for drywall installation?",
        answer: "We serve the entire Los Angeles metropolitan area including Hollywood, Beverly Hills, Santa Monica, Burbank, Glendale, Pasadena, the San Fernando Valley, West Los Angeles, Downtown LA, South Bay, Culver City, and surrounding communities throughout LA County. Our crews are experienced with the specific code requirements and inspection processes across different LA municipalities."
    },
];

export default function DrywallInstallationPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <BreadcrumbSchema items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Drywall Installation", href: "/services/drywall-installation" },
            ]} />
            <ServiceSchema
                name="Drywall Installation in Los Angeles, CA"
                description="Professional drywall installation in Los Angeles, CA for residential and commercial projects. Expert board hanging, code-compliant builds, and seamless results."
                url="/services/drywall-installation"
                image="/images/services/drywall-installation/hero.jpg"
            />
            <FAQSchema faqs={faqs} />
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/drywall-installation/hero.jpg"
                    alt="Professional drywall installation in a Los Angeles residential project"
                    fill
                    className="object-cover object-center"

                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Professional Drywall Installation
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Drywall Installation in<br className="hidden md:block" />
                            <span className="text-[var(--color-primary-light)]">Los Angeles, CA</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Drywall installation is the process of hanging gypsum wallboard panels onto wood or metal stud framing to create the interior walls and ceilings of a building. Los Angeles Drywall & Framing provides professional drywall installation services for homeowners, general contractors, and commercial developers throughout the greater Los Angeles metropolitan area. Whether you are building a new home in the San Fernando Valley or completing a tenant improvement in a Downtown LA office building, our licensed crew delivers precise, code compliant board hanging on every project.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Schedule Your Installation
                            <ArrowRightIcon className="inline-block ml-2" size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. WHY PROFESSIONAL DRYWALL INSTALLATION MATTERS */}
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
                                    src="/images/services/drywall-installation/detail.jpg"
                                    alt="Drywall board being installed on framed walls in a Los Angeles home"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Precision Installation</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Los Angeles, CA</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Why It Matters
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Why Professional Drywall Installation in Los Angeles Matters
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Properly installed drywall is the foundation of every finished interior. When panels are hung incorrectly, the problems compound through every subsequent phase of the project. Poorly aligned seams create visible ridges after taping. Improper fastener depth leads to screw pops that crack through paint months after move-in. And gaps around electrical boxes, windows, and penetrations compromise fire ratings and energy efficiency, both of which are heavily regulated under Los Angeles building codes.
                                </p>
                                <p>
                                    The Los Angeles construction environment presents unique requirements that make experienced installation even more critical. California Title 24 mandates specific energy performance standards that affect insulation and air barrier details at the drywall layer. Seismic design requirements demand proper attachment patterns and flexible connections at control joints to accommodate building movement during earthquakes. Fire rated assemblies in multi-family and commercial buildings must use specific board types and fastener spacing to achieve the required hourly rating.
                                </p>
                                <p>
                                    When you hire Los Angeles Drywall & Framing for your installation project, you get a team that understands these requirements from years of working across the LA metro. We know which inspectors are checking for what, which board types are required for which applications, and how to hang drywall efficiently without sacrificing quality. The result is a clean, flat, inspection-ready installation that sets the stage for a flawless finish.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. RESIDENTIAL & COMMERCIAL EXPERTISE */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative overflow-hidden text-left border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                                Residential & Commercial
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Complete Wallboard Installation for Every Building Type
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium mb-10">
                                Whether you are framing and boarding a new custom home in Bel Air or hanging thousands of sheets in a commercial office buildout, our crews scale to meet the demands of your project. We maintain the same standard of craftsmanship regardless of project size or complexity.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white border border-[var(--color-neutral-200)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <HomeIcon size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Residential Drywall Installation Services in LA
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            From new construction homes to room additions and garage conversions, we handle residential drywall installation of all scales. Our crew works carefully in occupied homes, protecting your flooring, cabinetry, and fixtures while delivering a precise installation that is ready for taping and finishing.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white border border-[var(--color-neutral-200)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <BuildingIcon size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Commercial and Multi-Family Projects
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Our commercial teams are equipped to handle high-volume drywall installation on tight schedules. We work alongside other trades on large job sites, coordinating our scope to keep the overall project timeline on track. We have experience with tenant improvements, medical offices, retail buildouts, and multi-story residential buildings throughout Los Angeles.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)]">
                                <Image
                                    src="/images/services/drywall-installation/detail.jpg"
                                    alt="Residential drywall installation in progress in Los Angeles"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)] mt-8">
                                <Image
                                    src="/images/services/drywall-installation/result.jpg"
                                    alt="Completed drywall installation on a commercial project in LA"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. STANDARDS & SAFETY - DARK SECTION */}
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
                            Standards & Compliance
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-6">
                            Code Compliant Drywall Hanging in Los Angeles
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed font-[family-name:var(--font-inter)]">
                            Every drywall installation we perform is built to meet or exceed the requirements set by the City of Los Angeles Department of Building and Safety, the California Building Code, and applicable fire and energy standards.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>
                            <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                <ShieldIcon size={30} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                Fire Rated Assembly Compliance
                            </h3>
                            <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                We install fire rated drywall assemblies in accordance with UL design specifications and the California Building Code. This includes using the correct board type, fastener spacing, and joint treatment to achieve the required hourly fire resistance rating for garage separations, party walls, corridor enclosures, and shaft walls in commercial and multi-family buildings.
                            </p>
                        </div>
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>
                            <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                <HardHatIcon size={30} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                Seismic and Structural Considerations
                            </h3>
                            <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                Los Angeles sits in one of the most seismically active regions in the country. We install control joints at the appropriate intervals and use flexible connections at partition tops where building movement is anticipated. Our fastener patterns and attachment methods are designed to maintain panel integrity during seismic events, providing both safety and long-term durability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. OUR INSTALLATION PROCESS */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-[var(--color-neutral-100)]">
                <div className="page-container relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                            Our Process
                        </div>
                        <h3 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            How We Handle Drywall Installation in LA
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                            Our installation process is designed to deliver consistent, inspection-ready results on every project we take on across the Los Angeles metro area.
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
                                Drywall Installation FAQs
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
