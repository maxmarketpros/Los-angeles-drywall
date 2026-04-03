import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    HammerIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    RulerIcon,
    ClipboardIcon,
    ShieldIcon,
    HomeIcon,
    BuildingIcon,
    DropletIcon,
    SearchIcon,
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Drywall Repair in Los Angeles, CA | Los Angeles Drywall & Framing",
    description: "Expert drywall repair in Los Angeles, CA for water damage, holes, cracks, and settling damage. Licensed contractor serving residential and commercial properties. Call (310) 730-9832.",
};

const processSteps = [
    {
        title: "Damage Assessment",
        description: "We begin every repair project with a thorough inspection of the damaged area. Our team evaluates the extent of the drywall damage, checks for underlying issues such as water infiltration or compromised framing, and determines whether the damage is cosmetic or structural in nature."
    },
    {
        title: "Source Identification",
        description: "Before repairing drywall, we identify and address the root cause of the damage. If a leak, settling foundation, or pest issue caused the problem, we ensure those underlying issues are resolved or flagged before any drywall work begins. This prevents the same damage from recurring after the repair is complete."
    },
    {
        title: "Removal & Preparation",
        description: "We carefully remove the damaged section of drywall, cutting back to sound material with clean, straight edges. If framing members are water damaged or compromised, we replace or reinforce them before installing new backing. All surfaces are cleaned and prepped to receive new material."
    },
    {
        title: "Repair & Reconstruction",
        description: "We install new drywall patches or full panel replacements using the same board type and thickness as the surrounding wall. All joints are taped, mudded, and sanded to blend seamlessly with the existing surface. We match the original finish level so the repaired area is indistinguishable from the rest of the wall."
    },
    {
        title: "Final Inspection & Cleanup",
        description: "After the repair is complete, we conduct a quality check under multiple lighting conditions to verify that the repair blends cleanly with the surrounding wall. We clean up all debris, dust, and materials from the work area and leave the surface paint-ready for your finishing contractor or painter."
    },
];

const faqs = [
    {
        question: "What types of drywall damage can you repair in Los Angeles homes?",
        answer: "We repair all types of drywall damage commonly found in Los Angeles properties. This includes water damage from roof leaks and plumbing failures, holes from doorknobs, furniture impacts, and accidental damage, cracks caused by foundation settling or seismic movement, nail pops and screw pops that push through paint over time, sagging or delaminating drywall on ceilings, and damage from termite or pest activity. No matter the cause or severity, we have the tools and experience to restore your walls to like-new condition."
    },
    {
        question: "How do you handle water damaged drywall in LA properties?",
        answer: "Water damage requires careful handling because moisture can lead to mold growth and structural deterioration if left untreated. We first identify and confirm that the water source has been stopped. We then remove all affected drywall back to dry, sound material. If we discover mold during removal, we advise the homeowner on remediation steps before proceeding with drywall replacement. We use moisture-resistant board in areas prone to future moisture exposure and ensure proper ventilation is maintained."
    },
    {
        question: "Can you match the existing texture on my walls after a repair?",
        answer: "Yes. Texture matching is a critical part of any drywall repair, and our crew is experienced in replicating the most common textures found in Los Angeles homes, including orange peel, knockdown, skip trowel, smooth finish, and hand-applied textures. We apply the texture to the repaired area and feather it into the surrounding wall so the repair is invisible once painted."
    },
    {
        question: "Do older Los Angeles homes require special repair techniques?",
        answer: "Many older homes in Los Angeles were built with plaster over lath rather than modern drywall. We are experienced in transitioning between plaster and drywall systems, matching wall thickness at transition points, and creating invisible seams between old and new materials. Older homes may also have lead-based paint, which requires specific handling and containment procedures during repair. We follow all applicable safety guidelines when working in pre-1978 homes."
    },
    {
        question: "How much does drywall repair cost in Los Angeles?",
        answer: "Repair costs depend on the type, size, and location of the damage, as well as whether underlying issues like water damage or framing repairs are involved. A small hole patch may take an hour or two, while repairing an entire water-damaged ceiling requires significantly more time and materials. We provide free on-site estimates so you know the full scope and cost before any work begins. Call us at (310) 730-9832 to schedule your assessment."
    },
];

export default function DrywallRepairPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/drywall-repair/hero.jpg"
                    alt="Drywall repair work being performed in a Los Angeles home"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Expert Drywall Repair
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Drywall Repair in<br className="hidden md:block" />
                            <span className="text-[var(--color-primary-light)]">Los Angeles, CA</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Drywall repair is the process of restoring damaged gypsum wallboard to its original condition, addressing everything from small holes and hairline cracks to major water damage and structural deterioration. Los Angeles Drywall & Framing provides comprehensive drywall repair services for homeowners and property managers across the greater Los Angeles area. Whether your walls were damaged by a plumbing leak in a 1940s Craftsman bungalow or an accidental impact in a modern apartment building, our licensed team delivers seamless, long-lasting repairs that blend invisibly with the surrounding surface.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Get Your Repair Estimate
                            <ArrowRightIcon className="inline-block ml-2" size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. WHEN YOU NEED DRYWALL REPAIR */}
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
                                    src="/images/services/drywall-repair/detail.jpg"
                                    alt="Close-up of drywall repair work on a water-damaged wall in Los Angeles"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Seamless Repairs</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Los Angeles, CA</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Common Damage Types
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                When Los Angeles Properties Need Drywall Repair
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Los Angeles homes and commercial buildings face a unique combination of conditions that contribute to drywall damage over time. The region&apos;s seismic activity causes settling cracks and joint separations, particularly in older homes built before modern building codes were established. Seasonal temperature shifts and occasional heavy rains create moisture conditions that can lead to water damage, staining, and mold growth behind walls and above ceilings.
                                </p>
                                <p>
                                    Many Los Angeles properties, especially those built between the 1920s and 1960s, have aging plumbing systems that are prone to leaks. When a supply line or drain pipe fails inside a wall cavity, the resulting water damage can saturate drywall, cause it to swell and delaminate, and compromise the framing behind it. These repairs require more than just patching over the stain. The damaged material must be removed, the area dried and treated, and new drywall installed to restore structural integrity and a clean finish.
                                </p>
                                <p>
                                    Beyond water and seismic damage, everyday wear and tear takes a toll on drywall surfaces. Doorknob impacts, furniture scratches, nail holes from hung artwork, and damage from moving furniture or appliances all create imperfections that detract from the appearance of your interior. Rental properties, in particular, often accumulate drywall damage between tenants that needs to be addressed before the next occupant moves in. Our team handles repairs of all sizes, from a single patched hole to full room restorations after major damage events.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SPECIALIZED REPAIR SERVICES */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative overflow-hidden text-left border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                                Specialized Solutions
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Restoring Walls and Ceilings to Like-New Condition
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium mb-10">
                                Whether the damage is cosmetic or structural, our approach is the same: identify the root cause, repair the underlying issue, and restore the drywall surface so it looks and performs as if the damage never happened.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white border border-[var(--color-neutral-200)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <DropletIcon size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Water Damage and Ceiling Repair in LA
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            Water damaged drywall requires complete removal of all compromised material before new board can be installed. We cut back to sound, dry drywall, verify that the moisture source has been addressed, and replace the affected sections with new panels that are taped, finished, and textured to match the existing surface seamlessly.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white border border-[var(--color-neutral-200)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <HammerIcon size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Impact Damage and Plumbing Access Repairs
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            When plumbers or electricians cut into drywall to access pipes or wiring, the resulting holes and openings need to be properly closed and finished. We handle all post-trade repairs, ensuring that access openings are patched with the correct board thickness, properly supported with backing, and finished to match the surrounding wall texture and finish level.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)]">
                                <Image
                                    src="/images/services/drywall-repair/detail.jpg"
                                    alt="Water damaged drywall being repaired in a Los Angeles property"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)] mt-8">
                                <Image
                                    src="/images/services/drywall-repair/result.jpg"
                                    alt="Completed drywall repair showing seamless finish in Los Angeles home"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DARK SECTION - QUALITY & SAFETY */}
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
                            Safety & Quality
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-6">
                            Repair Standards That Protect Your Property
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed font-[family-name:var(--font-inter)]">
                            As a California Licensed Contractor (License #1141917), we approach every repair with the same level of professionalism and attention to code compliance that we bring to new construction projects.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>
                            <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                <SearchIcon size={30} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                Hazardous Material Awareness
                            </h3>
                            <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                Many homes in Los Angeles were built before 1978, which means they may contain lead-based paint or asbestos-containing joint compound. Our team is trained to identify these conditions and follows all EPA and Cal/OSHA guidelines for safe handling. When hazardous materials are suspected, we recommend appropriate testing before proceeding and take the necessary containment measures to protect occupants and workers.
                            </p>
                        </div>
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>
                            <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                <ShieldIcon size={30} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                Mold Prevention Protocols
                            </h3>
                            <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                Southern California&apos;s mild climate can mask moisture problems that lead to hidden mold growth behind drywall. When we perform water damage repairs, we verify that all affected areas are completely dry before installing new board. We use moisture meters to confirm readings are within safe ranges and recommend moisture-resistant drywall products for areas with ongoing exposure risk, such as bathrooms, kitchens, and laundry rooms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. OUR REPAIR PROCESS */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-[var(--color-neutral-100)]">
                <div className="page-container relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                            Our Process
                        </div>
                        <h3 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            Our Drywall Repair Process in Los Angeles
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                            Every repair starts with understanding the damage and ends with a surface that looks like it was never touched. Here is how we approach drywall repair across the LA metro.
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
                                Drywall Repair FAQs
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
