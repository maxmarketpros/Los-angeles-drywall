import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { PlusIcon } from "@/components/icons";

export const metadata = {
    title: "FAQ | Los Angeles Drywall & Framing | Drywall & Framing Questions",
    description: "Get answers to common questions about drywall installation, framing services, pricing, timelines, service areas, and licensing from Los Angeles Drywall & Framing.",
};

const faqCategories = [
    {
        title: "Services & Capabilities",
        faqs: [
            {
                question: "What drywall and framing services does Los Angeles Drywall & Framing offer?",
                answer: "We provide a full range of drywall and framing services including wood stud framing, metal stud framing, drywall hanging, taping, mudding, and finishing (all levels from Level 1 through Level 5), ceiling installation, bulkheads and soffits, soundproofing assemblies, fire-rated wall assemblies, and drywall repairs and patching. We handle both residential and commercial projects across the greater Los Angeles metro area."
            },
            {
                question: "Do you handle both residential and commercial projects?",
                answer: "Yes. Los Angeles Drywall & Framing serves homeowners, general contractors, property managers, and commercial developers. Our residential work includes new construction framing, home additions, remodels, and drywall repairs. On the commercial side, we handle tenant improvements, office buildouts, retail spaces, multi-family housing, and light commercial construction. Every project receives the same level of professionalism and attention to quality."
            },
            {
                question: "Can you match existing textures on drywall repairs?",
                answer: "Absolutely. Our experienced finishers are skilled at matching existing wall and ceiling textures including orange peel, knockdown, skip trowel, smooth finish, and popcorn textures. We take great care to blend repair areas seamlessly with the surrounding surfaces so that the finished result is virtually invisible."
            },
            {
                question: "Do you install soundproof or fire-rated walls?",
                answer: "Yes. We are experienced in constructing fire-rated wall and ceiling assemblies as well as sound-rated (STC) partitions. These specialized assemblies are common in multi-family residential buildings, commercial spaces, and certain areas of single-family homes. We install the appropriate framing configurations, insulation, and drywall layers required to meet the specified ratings and pass inspection."
            }
        ]
    },
    {
        title: "Pricing & Estimates",
        faqs: [
            {
                question: "How much does drywall installation cost in Los Angeles?",
                answer: "Drywall installation costs vary depending on the scope of work, the type of drywall being used (standard, moisture-resistant, fire-rated, soundboard), the level of finish required, ceiling heights, and site accessibility. Rather than quoting a generic per-square-foot rate, we provide a detailed written estimate after assessing your specific project. This ensures you get an accurate price based on the actual work involved, not a rough guess."
            },
            {
                question: "Do you offer free estimates?",
                answer: "Yes. We provide free on-site estimates for drywall and framing projects throughout the Los Angeles metro area. One of our project leads will visit your location, review the scope of work, take measurements, and provide a detailed written estimate that covers materials, labor, and a projected timeline. There is no obligation and no pressure."
            },
            {
                question: "Are there any hidden fees or surprise charges?",
                answer: "No. Transparency is a core principle at Los Angeles Drywall & Framing. Our written estimates clearly outline every line item. If the scope of work changes during the project due to unforeseen conditions or client requests, we discuss the impact on cost and timeline with you before proceeding. You will never receive a surprise bill from us."
            }
        ]
    },
    {
        title: "Timelines & Scheduling",
        faqs: [
            {
                question: "How long does a typical drywall or framing project take?",
                answer: "Project timelines depend on the size and complexity of the work. A standard room addition framing job might take a few days, while a full-home drywall installation with Level 5 finishing could take one to two weeks. Larger commercial projects can run several weeks or more. During our estimate process, we provide a clear projected timeline so you know exactly what to expect."
            },
            {
                question: "How quickly can you start a new project?",
                answer: "Our scheduling depends on current project volume, but we typically can begin new projects within one to two weeks of a signed agreement. For urgent jobs or time-sensitive commercial work, we can often accommodate faster start dates. Contact us to discuss your timeline and we will do our best to work within your schedule."
            },
            {
                question: "Do you work on weekends or after hours?",
                answer: "Our standard business hours are Monday through Friday, 8:00 AM to 6:00 PM, and we are also open on Sundays. For commercial projects with specific scheduling requirements such as after-hours or weekend work, we can arrange accommodations. Please discuss your scheduling needs during the consultation and we will provide options."
            }
        ]
    },
    {
        title: "Service Areas & Licensing",
        faqs: [
            {
                question: "What areas do you serve in Los Angeles?",
                answer: "We serve the entire greater Los Angeles metropolitan area including Hollywood, Beverly Hills, Santa Monica, Burbank, Glendale, Pasadena, the San Fernando Valley, West LA, Downtown LA, South Bay, Culver City, Inglewood, Westchester, and all surrounding communities in LA County. If you are unsure whether your location is within our service area, give us a call at (310) 730-9832."
            },
            {
                question: "Are you licensed and insured?",
                answer: "Yes. Los Angeles Drywall & Framing holds California Contractor License #1141917 and carries full general liability insurance and workers compensation coverage. We are fully licensed to perform drywall and framing work across the state of California. You can verify our license status through the California Contractors State License Board (CSLB)."
            },
            {
                question: "Do you pull permits for the work?",
                answer: "When permits are required by local building codes, we handle the permitting process as part of the project. Certain types of framing work, structural modifications, and fire-rated assemblies require permits and inspections. We are familiar with the permitting requirements across LA County municipalities and ensure that all work is performed in compliance with applicable building codes."
            }
        ]
    }
];

export default function FAQPage() {
    const allFaqs = faqCategories.flatMap(category => category.faqs);

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
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
                        Common Questions
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.05] mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg lg:text-xl text-[var(--color-neutral-300)] leading-relaxed max-w-2xl mx-auto font-light">
                        Straightforward answers about our drywall and framing services, pricing, timelines, licensing, and the areas we serve across Los Angeles.
                    </p>
                </div>
                {/* Massive Watermark */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none font-[family-name:var(--font-outfit)] leading-none whitespace-nowrap">
                    FAQ
                </div>
            </section>

            {/* Categorized FAQs Area */}
            <section className="py-24 lg:py-32 relative bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]">
                {/* Architectural Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(var(--color-neutral-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral-900) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10 max-w-7xl mx-auto">

                    <div className="grid lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-16 lg:gap-y-24 items-start">
                        {faqCategories.map((category, catIdx) => (
                            <div key={catIdx} className="w-full">
                                <div className="mb-8 border-b border-[var(--color-neutral-200)] pb-4 flex items-center gap-4">
                                    <span className="text-[var(--color-primary)] font-bold text-lg font-[family-name:var(--font-outfit)]">0{catIdx + 1} //</span>
                                    <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)]">
                                        {category.title}
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    {category.faqs.map((faq, index) => (
                                        <details key={index} className="group bg-white border border-[var(--color-neutral-200)] hover:border-[var(--color-primary)] transition-colors duration-300 rounded-2xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] cursor-pointer">
                                            <summary className="flex items-center justify-between gap-6 p-6 md:p-8 list-none text-left focus:outline-none">
                                                <span className="text-[17px] font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] group-open:text-[var(--color-primary)] transition-colors duration-300 leading-snug">
                                                    {faq.question}
                                                </span>
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-[var(--color-neutral-100)] bg-[#f8fafc] text-[var(--color-primary)] group-open:bg-[var(--color-primary)] group-open:border-[var(--color-primary)] group-open:text-white transition-all duration-300">
                                                    <PlusIcon
                                                        size={20}
                                                        className="transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-open:rotate-[135deg]"
                                                    />
                                                </div>
                                            </summary>
                                            <div className="bg-[#fafafa] overflow-hidden">
                                                <div className="p-6 md:p-8 pt-2 border-t border-[var(--color-neutral-100)]">
                                                    <p className="text-sm text-[var(--color-neutral-600)] leading-loose font-[family-name:var(--font-inter)]">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
