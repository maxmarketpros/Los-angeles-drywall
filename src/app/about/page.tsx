import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    BuildingIcon,
    UsersIcon,
    CheckCircleIcon,
    RulerIcon,
    HardHatIcon,
    ShieldIcon,
    HammerIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "About Los Angeles Drywall & Framing | Licensed Drywall Contractor in LA",
    description: "Los Angeles Drywall & Framing is a licensed, full-service drywall and framing contractor serving the greater Los Angeles metro. Learn about our team, our commitment to quality, and why LA trusts us for residential and commercial projects.",
};

const pillarsOfExecution = [
    {
        icon: HardHatIcon,
        title: "Hands-On Leadership",
        description: "Our project leads are on the job site every day, not sitting behind a desk. We maintain a heavy physical presence on every drywall and framing project to ensure quality standards are met and questions are answered in real time."
    },
    {
        icon: ShieldIcon,
        title: "Licensed & Insured",
        description: "We hold California Contractor License #1141917 and carry full general liability and workers compensation insurance. Every project we take on is backed by the accountability and professionalism that proper licensing demands."
    },
    {
        icon: RulerIcon,
        title: "Precision Craftsmanship",
        description: "In drywall and framing, tolerances matter. We hold every phase of work to exacting standards, from perfectly plumb walls and level ceilings to seamless tape joints and flawless finishing. The work is done right the first time."
    },
    {
        icon: BuildingIcon,
        title: "Full-Scope Capability",
        description: "From wood and metal stud framing to complete drywall installation, taping, and finishing, we handle every aspect of interior construction. Our clients get a single point of accountability instead of juggling multiple subcontractors."
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <BreadcrumbSchema items={[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
            ]} />
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/about/hero.jpg"
                    alt="Los Angeles Drywall and Framing crew completing a large-scale drywall installation project"
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
                            About Our Company
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Licensed Drywall &<br className="hidden md:block" />
                            <span className="text-[var(--color-primary-light)]">Framing Experts in LA.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Los Angeles Drywall & Framing is a licensed, owner-operated contracting firm specializing in residential and commercial drywall installation, framing, and interior finishing across the greater Los Angeles metropolitan area.
                        </p>
                        <a href="#our-story" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Read Our Story
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. OUR STORY */}
            <section id="our-story" className="py-24 lg:py-32 bg-white relative overflow-hidden text-left border-b border-[var(--color-neutral-100)]">
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
                                    src="/images/services/wall-framing/hero.jpg"
                                    alt="Professional wall framing installation by Los Angeles Drywall and Framing"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Precision Framing</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Los Angeles, CA</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Our Story
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Built on the Job Site. <br /> Driven by Quality.
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Los Angeles Drywall & Framing was founded on a simple principle: the best contractors are the ones who have done the work themselves. Our company was not started in a corporate office. It was built in the field, through years of hands-on experience hanging drywall, framing walls, and finishing interiors across some of the most demanding job sites in Southern California.
                                </p>
                                <p>
                                    We understand the unique challenges of working in the Los Angeles market. From navigating strict building codes and seismic requirements to coordinating with general contractors on fast-paced commercial schedules, our team has the depth of experience needed to deliver consistent results on every project. Whether the scope involves a single-family home renovation in the San Fernando Valley or a multi-story commercial buildout in Downtown LA, we bring the same level of commitment and craftsmanship.
                                </p>
                                <p>
                                    As a California Licensed Contractor (License #1141917), we take full responsibility for every project we accept. Our crews are trained, insured, and held to the highest standards of workmanship. We believe that quality drywall and framing work forms the backbone of every great building, and we treat every wall, ceiling, and partition as if our name were stamped on it, because it is.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-6">
                                <div className="p-6 bg-[var(--color-neutral-50)] border border-[var(--color-neutral-100)] rounded-xl">
                                    <h4 className="text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-primary)] mb-2">CA #1141917</h4>
                                    <p className="text-xs uppercase tracking-widest font-bold text-[var(--color-neutral-500)]">Licensed Contractor</p>
                                </div>
                                <div className="p-6 bg-[var(--color-neutral-50)] border border-[var(--color-neutral-100)] rounded-xl">
                                    <h4 className="text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-primary)] mb-2">100%</h4>
                                    <p className="text-xs uppercase tracking-widest font-bold text-[var(--color-neutral-500)]">Fully Insured</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. OUR MISSION */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative overflow-hidden text-left border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                            Our Mission
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                            Delivering Quality That Stands Behind Every Wall
                        </h2>
                        <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium text-left max-w-3xl mx-auto">
                            <p>
                                Our mission at Los Angeles Drywall & Framing is straightforward: to provide the highest quality drywall and framing services in the Los Angeles area while maintaining transparent pricing, reliable scheduling, and clear communication throughout every project. We understand that contractors often get a bad reputation for missed deadlines and surprise costs. We exist to be the opposite of that experience.
                            </p>
                            <p>
                                Every project begins with a detailed consultation and written estimate. We walk you through the full scope of work, explain the materials and methods we will use, and provide a clear timeline so there are never surprises. From initial framing layout to final drywall finishing, we keep our clients informed at every step because we believe that a well-informed client is a satisfied client.
                            </p>
                            <p>
                                We are committed to building long-term relationships with homeowners, general contractors, property managers, and developers across Los Angeles. Many of our projects come from repeat clients and referrals, which tells us that our approach to honest, quality-first contracting works. When you hire Los Angeles Drywall & Framing, you are not just getting a crew. You are getting a partner who is invested in the outcome of your project.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CORE OPERATIONAL STANDARDS */}
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
                            Our Core Principles
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-6">
                            Building Without Compromise.
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed font-[family-name:var(--font-inter)]">
                            At Los Angeles Drywall & Framing, our standard of work is never relaxed. We believe that protecting your investment, your timeline, and your vision is our most important responsibility as your contractor.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        {pillarsOfExecution.map((pillar, index) => (
                            <div key={index} className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>

                                <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                    <pillar.icon size={30} />
                                </div>
                                <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                    {pillar.title}
                                </h3>
                                <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. OUR TEAM & LA EXPERTISE */}
            <section className="py-24 lg:py-32 bg-white relative border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                                Our Team & Expertise
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Local Knowledge. Professional Execution.
                            </h2>
                        </div>

                        <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                            <p>
                                Our team is composed of experienced tradespeople who specialize in drywall and framing work across the Los Angeles metro. Every member of our crew has been trained on proper installation techniques, building code compliance, and job site safety protocols. We do not use day laborers or untrained workers. When our team arrives on your project, you can expect professionals who understand the scope of work, respect your property, and take pride in the finished product.
                            </p>
                            <p>
                                Working in Los Angeles requires specialized knowledge that goes beyond standard drywall and framing skills. Our team understands California Title 24 energy requirements, seismic bracing and holdown specifications, fire-rated assembly requirements, and the permitting process across LA County and surrounding municipalities. We know how to build walls that meet inspection the first time, which saves our clients time and money on every project.
                            </p>
                            <p>
                                We serve the entire Los Angeles metropolitan area, including Hollywood, Beverly Hills, Santa Monica, Burbank, Glendale, Pasadena, the San Fernando Valley, West LA, Downtown LA, South Bay, and surrounding communities. Whether your project is a high-end residential remodel in Brentwood or a tenant improvement in a commercial building in Culver City, our team has the experience and equipment to deliver professional results on schedule and on budget.
                            </p>
                            <p>
                                At Los Angeles Drywall & Framing, we measure our success not just by the quality of our finished work, but by the relationships we build with our clients. We answer the phone when you call. We show up when we say we will. And we stand behind our work long after the job is complete. That is the standard we hold ourselves to, and it is the reason our clients keep coming back.
                            </p>
                        </div>

                        <div className="mt-12 grid sm:grid-cols-3 gap-6">
                            <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-6 rounded-xl text-center">
                                <div className="w-12 h-12 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl flex items-center justify-center mx-auto mb-4 border border-[var(--color-primary)]/20">
                                    <HammerIcon size={24} />
                                </div>
                                <h4 className="font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">Experienced Crews</h4>
                                <p className="text-sm text-[var(--color-neutral-600)]">Trained professionals on every job site, not temp workers.</p>
                            </div>
                            <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-6 rounded-xl text-center">
                                <div className="w-12 h-12 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl flex items-center justify-center mx-auto mb-4 border border-[var(--color-primary)]/20">
                                    <UsersIcon size={24} />
                                </div>
                                <h4 className="font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">Client Focused</h4>
                                <p className="text-sm text-[var(--color-neutral-600)]">Direct communication with project leads, no runaround.</p>
                            </div>
                            <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-6 rounded-xl text-center">
                                <div className="w-12 h-12 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl flex items-center justify-center mx-auto mb-4 border border-[var(--color-primary)]/20">
                                    <CheckCircleIcon size={24} />
                                </div>
                                <h4 className="font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">Code Compliant</h4>
                                <p className="text-sm text-[var(--color-neutral-600)]">Built to pass inspection the first time, every time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. CONTACT CTA */}
            <ContactCTA />

            <Footer />
        </main >
    );
}
