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
    DollarIcon,
    UsersIcon,
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Drywall Patching in Los Angeles, CA | Los Angeles Drywall & Framing",
    description: "Quick drywall patching in Los Angeles, CA for small holes, nail pops, and minor wall damage. Fast turnaround with seamless blending. Call (310) 730-9832 for a free estimate.",
};

const processSteps = [
    {
        title: "Damage Evaluation",
        description: "We start by examining the damaged area to determine the best patching method. Small nail holes, screw pops, and minor dents require a simple fill and sand approach. Larger holes from doorknobs, anchors, or accidental impacts may need a patch plate or a cut-in drywall section with proper backing. We assess the size, location, and surrounding wall condition before selecting our approach."
    },
    {
        title: "Preparation and Cleaning",
        description: "We clean loose debris, crumbling compound, and any protruding fasteners from the damaged area. For holes that require a patch, we square off the opening with clean cuts to create a solid edge for the new material. All surrounding paint and loose material is scraped back to sound drywall to ensure the patch compound bonds properly."
    },
    {
        title: "Patch Application",
        description: "Depending on the size of the damage, we apply the appropriate patching method. Small holes receive direct compound fill. Medium holes use a self-adhesive mesh patch or aluminum patch plate for reinforcement. Larger holes get a custom-cut drywall piece secured to wood or metal backing installed inside the wall cavity. Every patch is applied to create a structurally sound repair."
    },
    {
        title: "Compound and Sanding",
        description: "We apply multiple thin coats of joint compound over the patched area, feathering each coat wider than the last to create a gradual transition into the surrounding wall. Each coat is allowed to dry fully before sanding. The goal is to build a surface that is flush with the existing wall and free of any visible edges, ridges, or depressions."
    },
    {
        title: "Texture Matching and Cleanup",
        description: "After the patch is sanded smooth, we replicate the existing wall texture over the repaired area. Whether your walls have orange peel, knockdown, or a smooth finish, we match the texture so the patch disappears once painted. We clean up all dust and debris from the work area and leave the patched surface ready for primer and paint."
    },
];

const faqs = [
    {
        question: "What is the difference between drywall patching and drywall repair?",
        answer: "Drywall patching refers to fixing smaller, localized damage such as nail holes, screw pops, small punctures, doorknob holes, and anchor holes. Drywall repair typically involves larger areas of damage caused by water intrusion, structural settling, or major impacts that require removing and replacing entire sections of drywall board. Los Angeles Drywall & Framing handles both services. If you are unsure whether your damage requires patching or a full repair, we can assess it during a free on-site evaluation."
    },
    {
        question: "How long does it take to patch drywall in a Los Angeles home?",
        answer: "Most drywall patching projects can be completed in a single visit for the patching and compound application, with a follow-up visit for final sanding and texture matching once the compound has dried. Small jobs with just a few holes can often be completed start to finish in one day. The exact timeline depends on the number of patches, their size, and the drying time needed between compound coats. We schedule efficiently to minimize disruption to your household."
    },
    {
        question: "Can you fix nail pops and screw pops in my drywall?",
        answer: "Yes. Nail pops and screw pops are one of the most common drywall issues we address in Los Angeles homes. These occur when fasteners push through the surface of the drywall over time due to lumber shrinkage, settling, or improper fastening during initial installation. We re-secure the drywall to the framing with new screws placed adjacent to the popped fastener, then patch and finish the area so the repair is invisible. If you have nail pops throughout your home, we can address all of them in a single visit."
    },
    {
        question: "Will the patched area be visible after painting?",
        answer: "When done correctly, a drywall patch is invisible after painting. The key is proper compound application, careful sanding to create a flush surface, and accurate texture matching. Rushing any of these steps can leave visible edges or texture inconsistencies. Our team takes the time to do each step properly so the finished patch blends seamlessly with the rest of the wall. We recommend priming the patched area before applying finish paint to ensure uniform color and sheen across the surface."
    },
    {
        question: "Do you offer drywall patching for rental properties and property managers in LA?",
        answer: "Yes. We work regularly with property managers and landlords across Los Angeles who need drywall patching completed between tenants. Rental units commonly accumulate damage from picture hanging, furniture impacts, door handle strikes, and general wear and tear. We can patch multiple rooms in a single visit and have them ready for painting within 24 to 48 hours, helping you turn units faster and maintain a professional appearance for prospective tenants."
    },
];

export default function DrywallPatchingPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/drywall-patching/hero.jpg"
                    alt="Drywall patching in progress at a Los Angeles property"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Quick Drywall Patching
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Drywall Patching in<br className="hidden md:block" />
                            <span className="text-[var(--color-primary-light)]">Los Angeles, CA</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Drywall patching is the process of repairing small holes, nail pops, dents, and minor surface damage in gypsum wallboard to restore a clean, smooth appearance. Los Angeles Drywall & Framing provides fast, professional drywall patching services for homeowners, tenants, landlords, and property managers throughout the greater Los Angeles area. Whether you need a single doorknob hole fixed in your Silver Lake bungalow or dozens of nail pops addressed across a multi-unit rental property in Mar Vista, our crew delivers seamless results with quick turnaround times. Every patch we apply is compound-filled, sanded flush, and texture-matched so the repair disappears completely once painted.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Schedule a Patch Repair
                            <ArrowRightIcon className="inline-block ml-2" size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. WHEN YOU NEED PATCHING */}
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
                                    src="/images/services/drywall-patching/detail.jpg"
                                    alt="Close-up of a drywall patch being applied in a Los Angeles home"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Seamless Patches</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Los Angeles, CA</p>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                Common Situations
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                When Your Los Angeles Property Needs Drywall Patching
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Drywall patching needs arise from everyday life. Hanging pictures and shelves leaves nail and anchor holes when decor changes. Moving furniture through hallways and doorways results in scuffs, dents, and punctures. Children, pets, and daily activity create minor damage that accumulates over time. In Los Angeles, where many homes have open floor plans and abundant natural light, even small imperfections are highly visible and can detract from the overall appearance of a well-maintained interior.
                                </p>
                                <p>
                                    Nail pops are another extremely common issue in Los Angeles homes, particularly those built with dimensional lumber framing. As wood studs dry and shrink over time, the nails originally driven to secure the drywall push outward through the surface, creating small bumps that crack through the paint. Homes that are five to fifteen years old in the LA area frequently develop nail pops in multiple rooms. This is not a sign of structural failure, but it does need to be corrected to maintain a clean interior appearance.
                                </p>
                                <p>
                                    Property managers and landlords in the Los Angeles rental market regularly need drywall patching to prepare units between tenants. Wear and tear from previous occupants, including holes from wall-mounted televisions, shelving systems, picture frames, and general surface damage, needs to be addressed before showing the unit or beginning a new lease. Our team is experienced in high-volume patching for multi-unit properties and can complete turnover work efficiently to help minimize vacancy time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SERVICE SCOPE */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative overflow-hidden text-left border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                                Who We Serve
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Fast Turnaround Wall Patching for Homes and Rentals
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium mb-10">
                                Whether you own a single-family home or manage a portfolio of rental units across Los Angeles, we provide the same quality of workmanship and attention to detail on every patching project. Our goal is always a repair that is invisible once painted.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white border border-[var(--color-neutral-200)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <HomeIcon size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Homeowner Drywall Patching in Los Angeles
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            For homeowners preparing to sell, redecorating, or simply wanting to refresh their interior, we patch all visible damage quickly and cleanly. We work respectfully in occupied homes, protect your flooring and furnishings, and leave no mess behind. Common homeowner requests include patching holes from old wall mounts, fixing doorknob holes in hallways, and addressing nail pops throughout living areas and bedrooms.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-white border border-[var(--color-neutral-200)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <UsersIcon size={26} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">
                                            Property Management and Tenant Turnover
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                            We partner with property managers across Los Angeles to provide reliable, on-schedule patching services for tenant turnovers. We understand that vacancy costs money, and our team works efficiently to complete all patching in the shortest possible timeframe. We can coordinate directly with your painting crew so the unit is move-in ready as quickly as possible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)]">
                                <Image
                                    src="/images/services/drywall-patching/detail.jpg"
                                    alt="Small hole being patched in a Los Angeles rental property"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-[var(--color-neutral-200)] mt-8">
                                <Image
                                    src="/images/services/drywall-patching/result.jpg"
                                    alt="Finished drywall patch blending seamlessly with surrounding wall"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. DARK SECTION - QUALITY STANDARDS */}
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
                            Quality Standards
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-6">
                            Professional Patching That Lasts
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed font-[family-name:var(--font-inter)]">
                            A drywall patch is only as good as the materials and techniques used to apply it. We use professional-grade compounds, proper backing methods, and proven finishing techniques to ensure every patch is durable and invisible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>
                            <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                <RulerIcon size={30} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                Proper Backing and Reinforcement
                            </h3>
                            <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                Many DIY patching attempts fail because compound is applied directly over an unsupported hole. Without proper backing, the patch cracks, sinks, or falls out entirely. We install appropriate backing for every hole size, whether it is a self-adhesive mesh for small holes, an aluminum patch plate for medium damage, or a wood cleat and cut-in drywall section for larger openings. This structural support ensures the patch holds up over time.
                            </p>
                        </div>
                        <div className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>
                            <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                <ShieldIcon size={30} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                Seamless Texture Blending
                            </h3>
                            <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                The most technically demanding part of any patching job is matching the existing wall texture over the repaired area. A patch that is smooth on a textured wall is immediately visible, regardless of how well the underlying compound work was done. Our crew replicates your existing texture using the same application method and material consistency as the original, feathering the new texture into the surrounding surface so there is no visible boundary between the patch and the existing wall.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. OUR PATCHING PROCESS */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-[var(--color-neutral-100)]">
                <div className="page-container relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                            Our Process
                        </div>
                        <h3 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            How We Patch Drywall in Los Angeles
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                            Our patching process is straightforward and efficient, designed to deliver professional results with minimal disruption to your home or rental property.
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
                                Drywall Patching FAQs
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
