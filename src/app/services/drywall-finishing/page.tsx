import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    LayersIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    RulerIcon,
    ClipboardIcon,
    HardHatIcon,
    ShieldIcon,
    HomeIcon,
    BuildingIcon,
    FileCheckIcon,
} from "@/components/icons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
    title: "Drywall Finishing in Los Angeles, CA | Los Angeles Drywall & Framing",
    description: "Professional drywall finishing in Los Angeles, CA including taping, mudding, sanding, and finish levels 1 through 5. Licensed contractor delivering paint-ready surfaces. Call (310) 730-9832.",
    openGraph: {
        images: [{
            url: "/images/services/drywall-finishing/hero.jpg",
            width: 1200,
            height: 630,
            alt: "Drywall Finishing in Los Angeles",
        }],
    },
};

const processSteps = [
    {
        title: "Joint Taping",
        description: "We begin the finishing process by embedding paper or fiberglass mesh tape into every seam and joint using a bed coat of joint compound. This step reinforces the joints between drywall panels and prevents cracking. All inside and outside corners receive appropriate corner bead or flexible tape for clean, durable edges."
    },
    {
        title: "First Coat Application",
        description: "After the tape is set, we apply the first full coat of joint compound over all seams, corners, and fastener heads. This coat fills the bulk of the joint and begins the process of building a smooth, flat surface. We use the correct knife width for each application to minimize excess buildup and reduce sanding time."
    },
    {
        title: "Second and Third Coat Application",
        description: "Additional coats of joint compound are applied progressively wider to feather the joints smoothly into the surrounding drywall surface. Each coat is allowed to dry fully before the next is applied. The number of coats depends on the specified finish level, with Level 4 and Level 5 finishes requiring the most material and the widest feathering."
    },
    {
        title: "Sanding and Smoothing",
        description: "Once all coats have cured, we sand the entire surface to remove ridges, tool marks, and imperfections. We use a combination of pole sanders and hand sanding blocks to achieve a consistently smooth surface across walls and ceilings. For Level 5 finishes, we apply a skim coat of joint compound over the entire surface before final sanding."
    },
    {
        title: "Quality Inspection Under Light",
        description: "Before declaring the surface paint-ready, we inspect all finished areas under strong side lighting conditions. This technique reveals any remaining imperfections, ridges, or depressions that would be visible under painted surfaces. Any defects identified are corrected and re-sanded before the project is handed off for painting."
    },
];

const faqs = [
    {
        question: "What are the different drywall finish levels and which one do I need?",
        answer: "Drywall finish levels range from Level 0 through Level 5, each defined by the Gypsum Association. Level 0 is unfinished drywall with no taping. Level 1 provides basic tape embedment for areas above ceilings and in service corridors. Level 2 adds a coat over tape and fasteners, suitable for tile substrate. Level 3 adds an additional coat and is used under heavy texture applications. Level 4 is the standard for most residential and commercial projects where walls will be painted with flat or eggshell paint. Level 5 provides the highest quality finish with a full skim coat, required for areas with critical lighting or gloss paint finishes. We help you select the right level based on your final wall covering and lighting conditions."
    },
    {
        question: "How long does drywall finishing take for a typical Los Angeles project?",
        answer: "Finishing timelines depend on the size of the project and the specified finish level. Each coat of joint compound requires 24 hours of drying time before the next coat can be applied. A standard Level 4 finish on a single room typically takes four to five working days including taping, three coats of mud, and sanding. Larger projects and Level 5 finishes require additional time. We provide a detailed schedule during your consultation so you can plan other trades accordingly."
    },
    {
        question: "Why do my walls show lines and imperfections after painting?",
        answer: "Visible joint lines, ridges, and fastener bumps after painting are almost always the result of insufficient finishing before paint was applied. This commonly happens when corners are cut during the finishing phase, when surfaces are not properly sanded, or when the wrong finish level was specified for the paint sheen being used. High-gloss and semi-gloss paints reveal surface imperfections far more than flat paints. If your walls are showing these issues, we can re-finish the affected areas to the appropriate level before repainting."
    },
    {
        question: "Do you offer Level 5 drywall finishing in Los Angeles?",
        answer: "Yes. We are experienced in Level 5 finishing, which is the highest standard defined by the Gypsum Association. Level 5 involves applying a thin skim coat of joint compound over the entire drywall surface after standard taping and coating is complete. This creates a perfectly uniform surface with no variation in texture or porosity, which is critical for areas with harsh lighting conditions, high-gloss paint, or dark paint colors that highlight even minor surface irregularities. Level 5 finishing is commonly specified for high-end residential projects and commercial lobbies in Los Angeles."
    },
    {
        question: "Can you finish drywall that was taped by another contractor?",
        answer: "Yes. We frequently take over finishing work where another contractor has completed the hanging and initial taping. We assess the quality of the existing tape work before proceeding. If the taping was done properly, we continue with additional coats and sanding. If we find issues such as loose tape, bubbling, or improper embedment, we address those areas first to ensure a quality finished product. We provide an honest assessment of the existing work so you know exactly what is needed to achieve the desired finish level."
    },
];

export default function DrywallFinishingPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <BreadcrumbSchema items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Drywall Finishing", href: "/services/drywall-finishing" },
            ]} />
            <ServiceSchema
                name="Drywall Finishing in Los Angeles, CA"
                description="Professional drywall finishing in Los Angeles, CA including taping, mudding, sanding, and finish levels 1 through 5. Licensed contractor delivering paint-ready surfaces."
                url="/services/drywall-finishing"
                image="/images/services/drywall-finishing/hero.jpg"
            />
            <FAQSchema faqs={faqs} />
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/drywall-finishing/hero.jpg"
                    alt="Professional drywall finishing and taping in a Los Angeles building"
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
                            Professional Drywall Finishing
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Drywall Finishing in<br className="hidden md:block" />
                            <span className="text-[var(--color-primary-light)]">Los Angeles, CA</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Drywall finishing is the multi-step process of taping joints, applying joint compound, and sanding surfaces to create smooth, paint-ready walls and ceilings. Los Angeles Drywall & Framing provides professional drywall finishing services for residential and commercial projects throughout the greater Los Angeles area. Our experienced finishers deliver clean, flat surfaces at every finish level from basic Level 1 for concealed areas to premium Level 5 for high-end interiors where surface quality is critical. Whether you are building a new home in Encino or renovating a commercial space in West Hollywood, our team ensures your walls are ready for paint or wallcovering.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Request a Finishing Estimate
                            <ArrowRightIcon className="inline-block ml-2" size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. WHY QUALITY FINISHING MATTERS */}
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
                                    src="/images/services/drywall-finishing/detail.jpg"
                                    alt="Applying joint compound to drywall seams in a Los Angeles home"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Expert Finishing</h4>
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
                                Why Expert Drywall Finishing in Los Angeles Makes a Difference
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    The finishing phase is where the quality of your interior surfaces is ultimately determined. Even if drywall was hung perfectly, poor finishing will leave visible seams, ridges, and bumps that show through every coat of paint. In the Los Angeles market, where property values are high and design standards are demanding, the quality of your wall finish directly affects the perceived value and appearance of your space.
                                </p>
                                <p>
                                    Professional drywall finishing requires a specific skill set that is distinct from drywall hanging. A skilled finisher understands how joint compound behaves at different thicknesses, how to feather edges so they disappear into the surrounding surface, and how to control sanding dust while achieving a consistently smooth result. These skills are developed over years of practice and cannot be replicated by general laborers or handymen attempting to finish drywall on the side.
                                </p>
                                <p>
                                    The lighting conditions in a room also play a critical role in determining the appropriate finish level. Rooms with large windows and abundant natural light, such as those found in many Los Angeles homes with open floor plans, expose surface imperfections that would be hidden in dimly lit spaces. Our finishers evaluate the lighting conditions of each room and recommend the appropriate finish level to ensure your walls look flawless under real-world conditions, not just under the dim work lights on a construction site.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. FINISH LEVELS & APPLICATIONS */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative overflow-hidden text-left border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                                Finish Levels
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Taping, Mudding, and Sanding to the Right Standard
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium mb-10">
                                Not every surface requires the same level of finish. We work with you to determine the right specification for each area of your project, balancing quality requirements with budget and timeline considerations. The goal is always the same: a surface that performs as expected under its final wall covering.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white border border-[var(--color-neutral-200)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <LayersIcon size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Standard Residential Drywall Finishing
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Most residential projects in Los Angeles call for a Level 4 finish, which includes three coats of joint compound with thorough sanding. This level produces a smooth surface suitable for flat, eggshell, and satin paint sheens. It is the industry standard for new construction homes, remodels, and room additions throughout the LA metro.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white border border-[var(--color-neutral-200)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <FileCheckIcon size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Premium and Level 5 Finishing
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            For high-end residential interiors, commercial lobbies, and spaces where gloss or semi-gloss paint will be used, we provide Level 5 finishing. This involves skim coating the entire surface with a thin layer of joint compound to eliminate any variation in surface texture and porosity, resulting in a perfectly uniform substrate for the final paint application.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)]">
                                <Image
                                    src="/images/services/drywall-finishing/detail.jpg"
                                    alt="Joint compound application during drywall finishing in Los Angeles"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)] mt-8">
                                <Image
                                    src="/images/services/drywall-finishing/result.jpg"
                                    alt="Smooth finished drywall surface ready for paint in an LA property"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DARK SECTION - STANDARDS */}
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
                            Industry Standards
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-6">
                            Finishing to Gypsum Association Standards
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed font-[family-name:var(--font-inter)]">
                            Our finishing work follows the standards defined by the Gypsum Association (GA-214) and is performed by experienced tradespeople who understand the nuances of achieving each finish level consistently.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>
                            <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                <RulerIcon size={30} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                Dust Control and Air Quality
                            </h3>
                            <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                Sanding drywall compound produces fine particulate dust that can travel throughout a building if not properly managed. We use dust containment measures including plastic barriers, negative air pressure when necessary, and vacuum-assisted sanding systems to minimize dust migration into occupied areas. This is especially important for renovation projects in Los Angeles homes and commercial buildings where other spaces are in active use.
                            </p>
                        </div>
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>
                            <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                <ClipboardIcon size={30} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                Material Quality and Consistency
                            </h3>
                            <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                We use professional-grade joint compounds from trusted manufacturers and select the right product for each application. Lightweight all-purpose compound is used for coating, while setting-type compound is used for taping and high-build applications where shrinkage control is important. Using the correct compound for each step ensures a durable finish that resists cracking and maintains its smooth surface over time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. OUR FINISHING PROCESS */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-[var(--color-neutral-100)]">
                <div className="page-container relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                            Our Process
                        </div>
                        <h3 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            How We Finish Drywall in Los Angeles
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                            Each step of our finishing process builds on the last, resulting in a smooth, uniform surface that is ready for your chosen wall covering.
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
                                Drywall Finishing FAQs
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
