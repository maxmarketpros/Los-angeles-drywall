"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";

const faqs = [
    {
        question:
            "What areas does Los Angeles Drywall & Framing serve?",
        answer:
            "We serve the greater Los Angeles metro area including Beverly Hills, Santa Monica, Pasadena, Glendale, Burbank, and surrounding communities. If you have a project in the LA area, contact us to confirm availability.",
    },
    {
        question:
            "Are you licensed and insured?",
        answer:
            "Yes. We hold California Contractor License #1141917 and carry full liability insurance and workers compensation coverage. We are happy to provide proof of licensing and insurance upon request.",
    },
    {
        question:
            "Do you provide free estimates?",
        answer:
            "Yes. We provide detailed, no-obligation estimates for all drywall, framing, and specialty projects. Contact us by phone or through our online form to schedule an estimate at your convenience.",
    },
    {
        question:
            "What types of properties do you work on?",
        answer:
            "We work on residential and commercial properties of all sizes. This includes single-family homes, apartments, condos, offices, retail spaces, and tenant improvements throughout Los Angeles.",
    },
    {
        question:
            "How long does a typical drywall project take?",
        answer:
            "Project timelines vary depending on scope. A single room repair may take one to two days, while a full home installation can take one to two weeks. We provide a clear timeline with every estimate so you know what to expect.",
    },
    {
        question:
            "Do you handle both drywall and framing?",
        answer:
            "Yes. We offer both drywall services (installation, repair, finishing, texturing, patching) and framing services (wall framing, residential framing, commercial framing, rough carpentry, custom framing, metal framing) along with stucco and exterior painting.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <section id="faq" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <div className="page-container relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 lg:mb-24">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                            Frequently Asked
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            Frequently Asked Questions
                        </h2>

                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                            Direct answers to common questions about our drywall and framing services across the Los Angeles metro area.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-[var(--color-primary)] shadow-md' : 'border-[var(--color-neutral-100)] hover:border-[var(--color-neutral-200)] hover:shadow-sm'}`}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left transition-colors"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className={`text-lg font-bold font-[family-name:var(--font-outfit)] transition-colors duration-300 leading-snug ${openIndex === index ? 'text-[var(--color-primary)]' : 'text-[var(--color-neutral-900)]'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${openIndex === index ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white' : 'bg-[#f8fafc] border-[var(--color-neutral-100)] text-[var(--color-primary)]'}`}>
                                        <PlusIcon
                                            size={20}
                                            className={`transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${openIndex === index ? "rotate-[135deg]" : ""}`}
                                        />
                                    </div>
                                </button>

                                <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                    <div className="overflow-hidden">
                                        <div className="p-6 md:p-8 pt-0 border-t border-[var(--color-neutral-100)] mt-2">
                                            <p className="text-base text-[var(--color-neutral-600)] leading-loose mt-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
