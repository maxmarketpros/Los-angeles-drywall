import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import ContactCTA from "@/components/ContactCTA";
import ProcessTimeline from "@/components/ProcessTimeline";
import Image from "next/image";
import { ShieldIcon, RulerIcon, ClipboardIcon } from "@/components/icons";

export const metadata = {
    title: "Our Process | Los Angeles Drywall & Framing",
    description: "Learn how Los Angeles Drywall & Framing approaches every drywall and framing project. Our six-step process ensures transparent pricing, quality craftsmanship, and on-time completion across the LA metro.",
};

export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white">
            <BreadcrumbSchema items={[
                { name: "Home", href: "/" },
                { name: "Our Process", href: "/process" },
            ]} />
            <Header />

            {/* Dark Mode Hero */}
            <section className="relative w-full pt-48 pb-24 lg:pt-56 lg:pb-32 bg-[var(--color-neutral-900)] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: `linear-gradient(var(--color-primary-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-light) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary-dark)]/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="page-container relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-[var(--color-primary-light)]/20 shadow-sm backdrop-blur-md">
                        Our Methodology
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.05] mb-6">
                        Our <span className="text-[var(--color-primary-light)]">Process</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-[var(--color-neutral-300)] leading-relaxed max-w-2xl mx-auto font-light">
                        Quality drywall and framing work does not happen by accident. It requires a clear, organized process from the very first phone call to the final walkthrough. Here is exactly how we approach every project.
                    </p>
                </div>
                {/* Massive Watermark */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none font-[family-name:var(--font-outfit)] leading-none whitespace-nowrap">
                    PROCESS
                </div>
            </section>

            {/* Split Introduction */}
            <section className="py-24 lg:py-32 relative bg-white overflow-hidden border-b border-[var(--color-neutral-200)]">
                {/* Architectural Grid Background */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(var(--color-neutral-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral-900) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-[var(--color-neutral-200)]">
                                <Image
                                    src="/images/process/hero.jpg"
                                    alt="Los Angeles Drywall and Framing team executing a professional framing project"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-primary-light)] uppercase mb-1">Professional Execution</p>
                                    <p className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Every Detail Matters</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[60px] -z-10"></div>
                        </div>

                        <div className="lg:col-span-7">
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Why Our Process Matters
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8 font-[family-name:var(--font-inter)]">
                                Many drywall and framing contractors show up without a clear plan, leading to delays, cost overruns, and subpar results. At Los Angeles Drywall & Framing, we eliminate that chaos through a structured, six-step workflow that we apply to every project, regardless of size. Our process ensures that the work is scoped correctly, priced fairly, executed professionally, and inspected thoroughly before we consider the job complete.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-[family-name:var(--font-inter)]">
                                Whether we are framing a new addition in Pasadena, hanging drywall in a commercial office space in Downtown LA, or completing a full interior buildout in Santa Monica, our process ensures that every phase is completed to code and to our exacting quality standards. We believe that a well-organized job site translates directly into better craftsmanship and a smoother experience for our clients.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-6 rounded-xl flex items-start gap-4">
                                    <div className="mt-1 text-[var(--color-primary)] shrink-0 bg-white p-2 rounded-lg border border-[var(--color-neutral-200)]"><ShieldIcon size={24} /></div>
                                    <div>
                                        <h4 className="font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-1">Transparent Pricing</h4>
                                        <p className="text-sm text-[var(--color-neutral-600)]">Detailed written estimates before any work begins. No hidden fees or surprise charges.</p>
                                    </div>
                                </div>
                                <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-6 rounded-xl flex items-start gap-4">
                                    <div className="mt-1 text-[var(--color-primary)] shrink-0 bg-white p-2 rounded-lg border border-[var(--color-neutral-200)]"><ClipboardIcon size={24} /></div>
                                    <div>
                                        <h4 className="font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-1">Clear Communication</h4>
                                        <p className="text-sm text-[var(--color-neutral-600)]">Direct access to your project lead throughout the entire job.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inject the existing Timeline Component */}
            <ProcessTimeline />

            {/* Deep Dive: Our Approach */}
            <section className="py-24 lg:py-32 relative bg-[var(--color-neutral-900)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f18] via-[#020617] to-black opacity-100"></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-6">
                                The Six Steps to a Completed Project
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-6 font-[family-name:var(--font-inter)]">
                                From the moment you contact us to the day we complete your final walkthrough, every phase of your project follows a defined process. This is how we consistently deliver quality results across residential and commercial projects throughout Los Angeles.
                            </p>
                            <ul className="space-y-4 text-neutral-300 font-medium">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 border border-[var(--color-primary)]/40 text-[var(--color-primary-light)]">1</div>
                                    <span><strong className="text-white">Consultation</strong> &mdash; We discuss your project scope, goals, timeline, and answer any questions about our services or approach.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 border border-[var(--color-primary)]/40 text-[var(--color-primary-light)]">2</div>
                                    <span><strong className="text-white">Site Assessment</strong> &mdash; We visit the job site to evaluate existing conditions, take measurements, and identify any structural or code considerations.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 border border-[var(--color-primary)]/40 text-[var(--color-primary-light)]">3</div>
                                    <span><strong className="text-white">Detailed Estimate</strong> &mdash; You receive a written, line-item estimate covering materials, labor, and timeline. No ambiguity and no hidden costs.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 border border-[var(--color-primary)]/40 text-[var(--color-primary-light)]">4</div>
                                    <span><strong className="text-white">Execution</strong> &mdash; Our trained crews complete the framing, drywall hanging, taping, and finishing work according to the approved scope and schedule.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 border border-[var(--color-primary)]/40 text-[var(--color-primary-light)]">5</div>
                                    <span><strong className="text-white">Quality Inspection</strong> &mdash; Our project lead performs a thorough quality check on all completed work, verifying plumb, level, finish quality, and code compliance.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 border border-[var(--color-primary)]/40 text-[var(--color-primary-light)]">6</div>
                                    <span><strong className="text-white">Final Walkthrough</strong> &mdash; We walk through the completed project with you to confirm every detail meets your expectations before we consider the job finished.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-10 blur-2xl rounded-3xl -z-10 transition-opacity duration-500 group-hover:opacity-30"></div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-12 rounded-3xl shadow-2xl">
                                <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-black border border-white/20 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner">
                                    <RulerIcon size={30} />
                                </div>
                                <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4">
                                    Measure Twice, Cut Once
                                </h3>
                                <p className="text-neutral-400 text-base leading-relaxed mb-6">
                                    Mistakes caught on paper cost pennies. Mistakes caught on the job site cost thousands. By front-loading our planning and assessment phases, we ensure that when our crews begin work, they have a precise scope and clear specifications. This approach prevents the costly rework and delays that plague projects handled by less organized contractors.
                                </p>
                                <p className="text-neutral-400 text-base leading-relaxed">
                                    Our team reviews building plans, verifies dimensions on site, confirms material specifications, and coordinates with other trades on the project before we ever pick up a tool. This upfront investment in planning is what allows us to deliver consistently clean, code-compliant work on schedule across every project we accept in the Los Angeles area.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
