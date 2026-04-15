import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    DropletIcon,
    CheckCircleIcon,
    ShieldIcon,
    RulerIcon,
    HammerIcon,
    ClipboardIcon,
    ArrowRightIcon,
    SearchIcon
} from "@/components/icons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ServiceSchema from "@/components/ServiceSchema";
import FAQSchema from "@/components/FAQSchema";

export const metadata: Metadata = {
    title: "Exterior Painting in Los Angeles, CA | Los Angeles Drywall & Framing",
    description: "Professional exterior painting services in Los Angeles, CA. Surface preparation, priming, and premium paint application for homes and commercial buildings. Licensed contractor, CA #1141917. Call (310) 730-9832.",
    openGraph: {
        images: [{
            url: "/images/services/exterior-painting/hero.jpg",
            width: 1200,
            height: 630,
            alt: "Exterior Painting in Los Angeles",
        }],
    },
};

const processSteps = [
    {
        title: "Property Assessment and Color Consultation",
        description: "We begin every exterior painting project with a thorough inspection of your building exterior. Our team evaluates the condition of existing paint, identifies areas of peeling, cracking, or water damage, and assesses substrate conditions including stucco, wood siding, and trim. We discuss your color preferences and provide professional recommendations based on your architecture and neighborhood aesthetic."
    },
    {
        title: "Surface Preparation and Repair",
        description: "Proper preparation is what separates a paint job that lasts from one that fails within a year. Our crew pressure washes all surfaces to remove dirt, mildew, and loose paint. We scrape and sand any peeling areas, fill cracks and holes with appropriate patching compounds, caulk gaps around windows and trim, and mask off all areas that should not receive paint including windows, doors, and landscaping."
    },
    {
        title: "Priming and Sealing",
        description: "We apply high quality primer to all prepared surfaces, paying special attention to bare wood, patched areas, and any stains that could bleed through the topcoat. For stucco exteriors, we use masonry primer that bonds properly to the textured surface. This step ensures maximum adhesion and uniform color coverage in the final coats."
    },
    {
        title: "Paint Application",
        description: "Our painters apply two full coats of premium exterior paint using the appropriate method for each surface. We spray large stucco walls for even coverage, brush trim and detail work for precision, and roll areas where overspray is a concern. We use paints specifically formulated for the Southern California climate with UV resistance and flexible formulations that withstand temperature swings."
    },
    {
        title: "Final Inspection and Cleanup",
        description: "After the final coat has dried, our project lead conducts a detailed walkthrough inspection with you. We check for uniform coverage, clean cut lines, and proper adhesion. Any touch ups are completed on the spot. We remove all masking materials, clean up debris, and leave your property looking better than we found it. A written warranty is provided for all exterior painting work."
    }
];

const faqs = [
    {
        question: "How long does exterior painting last in the Los Angeles climate?",
        answer: "A properly prepared and painted exterior in Los Angeles typically lasts between 7 and 10 years depending on sun exposure, the quality of paint used, and the condition of the substrate. South and west facing walls receive the most UV exposure and may show wear sooner. We use premium paints with high UV resistance specifically designed for the Southern California climate, which helps maximize the lifespan of your exterior paint job."
    },
    {
        question: "What type of paint do you use for exterior projects?",
        answer: "We use 100 percent acrylic latex exterior paints from premium manufacturers. These paints are formulated to resist fading from UV exposure, flex with temperature changes without cracking, and resist mildew growth in coastal areas. For commercial properties, we also offer elastomeric coatings that provide a waterproof barrier and bridge hairline cracks in stucco surfaces."
    },
    {
        question: "Do you paint stucco exteriors?",
        answer: "Yes, stucco is one of the most common exterior surfaces we paint in Los Angeles. Stucco requires specific preparation techniques including proper pressure washing, crack repair with elastomeric caulk, and the use of masonry primer before topcoats are applied. We have extensive experience painting both traditional cement stucco and synthetic EIFS stucco systems throughout the LA area."
    },
    {
        question: "How much does exterior painting cost in Los Angeles?",
        answer: "The cost of exterior painting in Los Angeles varies based on the size of the building, the condition of existing paint, the number of stories, accessibility, and the quality of materials selected. A typical single story home in Los Angeles ranges from a few thousand dollars for basic repainting to significantly more for large homes requiring extensive prep work. We provide free written estimates for every project so you know exactly what to expect before work begins."
    },
    {
        question: "Can you paint my building while tenants are present?",
        answer: "Yes, we regularly paint occupied residential and commercial buildings. Our team takes precautions to minimize disruption including scheduling work during business hours, using low VOC paints, protecting walkways and entry points, and communicating the schedule in advance. We coordinate closely with property managers and building owners to ensure the painting process does not interfere with daily operations or tenant access."
    }
];

export default function ExteriorPaintingPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <BreadcrumbSchema items={[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Exterior Painting", href: "/services/exterior-painting" },
            ]} />
            <ServiceSchema
                name="Exterior Painting in Los Angeles, CA"
                description="Professional exterior painting services in Los Angeles, CA. Surface preparation, priming, and premium paint application for homes and commercial buildings."
                url="/services/exterior-painting"
                image="/images/services/exterior-painting/hero.jpg"
            />
            <FAQSchema faqs={faqs} />
            <Header />

            {/* HERO */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/exterior-painting/hero.jpg"
                    alt="Professional exterior painting project in Los Angeles by Los Angeles Drywall and Framing"
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
                            Professional Exterior Painting
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Exterior Painting in Los Angeles, CA
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Los Angeles Drywall & Framing provides professional exterior painting services for residential homes and commercial buildings across the greater Los Angeles metropolitan area. From complete repaints to targeted touch ups, our licensed team delivers lasting results built on thorough surface preparation and premium materials.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Get a Painting Estimate
                        </a>
                    </div>
                </div>
            </section>

            {/* WHY EXTERIOR PAINTING */}
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
                                    src="/images/services/exterior-painting/detail.jpg"
                                    alt="Exterior painting surface preparation and detail work in Los Angeles"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Surface Preparation</h4>
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
                                Professional Exterior Painting Services in Los Angeles
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Exterior painting in Los Angeles, CA is about far more than aesthetics. The intense Southern California sun delivers some of the highest UV radiation levels in the country, which causes paint to fade, chalk, and break down faster than in cooler or cloudier regions. A quality exterior paint job serves as a protective barrier for your building, sealing out moisture, preventing wood rot, and keeping stucco surfaces in good condition for years to come. Whether you own a single family home in the San Fernando Valley or manage a commercial property in West Los Angeles, regular exterior painting is one of the most cost effective ways to protect your investment.
                                </p>
                                <p>
                                    Los Angeles Drywall & Framing approaches every exterior painting project with the same attention to detail we bring to our drywall and framing work. We understand that the longevity of a paint job depends almost entirely on what happens before the first coat goes on. That is why we invest significant time in surface preparation, including power washing, scraping, sanding, caulking, and priming. When the prep work is done right, the paint bonds properly and delivers lasting protection against the elements.
                                </p>
                                <p>
                                    We serve homeowners, property managers, HOAs, and commercial building owners throughout Los Angeles County. Our team is experienced with all common exterior substrates found in the LA area including cement stucco, wood siding, fiber cement, block walls, and metal surfaces. Whether your property needs a full repaint, a color change, or targeted repairs and touch ups, we provide a free written estimate and clear timeline so you know exactly what to expect.
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
                                Complete Exterior Solutions
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Painting Backed by Contractor Expertise
                            </h2>

                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-[var(--color-primary)]/20">
                                        <ShieldIcon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            LA Exterior Painting with Climate Protection
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Los Angeles properties face unique environmental challenges that demand more than a standard paint job. Our team selects coatings specifically engineered for the Southern California climate, including high UV resistance formulations, flexible acrylics that expand and contract with daily temperature swings, and mildew resistant paints for properties near the coast. We consider the orientation of each wall, the amount of direct sun exposure, and whether the building faces prevailing ocean moisture when recommending products and application methods.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center text-[var(--color-primary)] shrink-0 border border-[var(--color-primary)]/20">
                                        <HammerIcon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Integrated Repair and Painting
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Because we are a full service drywall and framing contractor, we can handle structural repairs that most painting companies cannot. If your exterior has damaged stucco, rotted wood framing, or deteriorated sheathing, our team addresses those issues before painting begins. This means you get a single contractor managing both the repair and the painting, which results in better quality control, faster completion, and a seamless finished product that protects your building for years.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)] group">
                                <Image
                                    src="/images/services/exterior-painting/result.jpg"
                                    alt="Completed exterior painting project on Los Angeles home"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)] group mt-12">
                                <Image
                                    src="/images/services/exterior-painting/detail.jpg"
                                    alt="Exterior paint detail and trim work in Los Angeles"
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
                                        <DropletIcon size={30} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4">Premium Materials</h3>
                                    <p className="text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors">
                                        We use only premium 100 percent acrylic exterior paints with high UV resistance and flexible formulations designed for the Los Angeles climate. Our primers, caulks, and patching materials are selected for compatibility and long term performance on Southern California exteriors.
                                    </p>
                                </div>
                                <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                                    <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner">
                                        <CheckCircleIcon size={30} />
                                    </div>
                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4">Licensed Contractor</h3>
                                    <p className="text-neutral-400 text-base leading-relaxed group-hover:text-neutral-300 transition-colors">
                                        Los Angeles Drywall & Framing holds California Contractor License #1141917 and carries full general liability and workers compensation insurance. Every exterior painting project is backed by professional accountability and a written warranty on workmanship.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                                <Image
                                    src="/images/services/exterior-painting/hero.jpg"
                                    alt="Exterior painting work in progress on Los Angeles property"
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
                            Los Angeles Exterior Painting Process
                        </h3>
                        <p className="text-lg text-[var(--color-neutral-600)] leading-relaxed">
                            Every exterior painting project follows a proven five step process designed to deliver lasting results in the demanding Los Angeles climate.
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
                                Exterior Painting FAQ
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
