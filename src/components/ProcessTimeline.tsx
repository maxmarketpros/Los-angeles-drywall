import {
    UsersIcon,
    SearchIcon,
    ClipboardIcon,
    HardHatIcon,
    FileCheckIcon,
    CheckCircleIcon,
} from "./icons";

const steps = [
    {
        number: "01",
        icon: UsersIcon,
        title: "Initial Consultation",
        description:
            "Tell us about your project. We discuss the scope of work, your goals, timeline, and budget. Whether it is a small repair or a full-scale installation, we tailor our approach to your needs.",
    },
    {
        number: "02",
        icon: SearchIcon,
        title: "On-Site Assessment",
        description:
            "Our team visits your property to take measurements, evaluate existing conditions, and identify any potential challenges. This ensures an accurate estimate and a smooth project start.",
    },
    {
        number: "03",
        icon: ClipboardIcon,
        title: "Detailed Estimate",
        description:
            "You receive a clear, line-item estimate covering materials, labor, and timeline. No hidden fees, no surprise charges. You approve the scope before any work begins.",
    },
    {
        number: "04",
        icon: HardHatIcon,
        title: "Professional Execution",
        description:
            "Our experienced crew arrives on schedule with the right materials and equipment. We follow industry best practices and California building codes throughout every phase of the project.",
    },
    {
        number: "05",
        icon: CheckCircleIcon,
        title: "Quality Inspection",
        description:
            "Before we consider the job complete, we conduct a thorough quality inspection. We check every seam, joint, and surface to make sure the finished product meets our standards and yours.",
    },
    {
        number: "06",
        icon: FileCheckIcon,
        title: "Final Walkthrough",
        description:
            "We walk through the completed project with you. If anything needs attention, we address it immediately. Your satisfaction is confirmed before we wrap up.",
    },
];

export default function ProcessTimeline() {
    return (
        <section id="process" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            {/* Soft Background Accent */}
            <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[var(--color-primary-light)]/5 to-transparent pointer-events-none"></div>

            <div className="page-container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                        Our Process
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6 mx-auto">
                        How We Work
                    </h2>

                    <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mx-auto max-w-2xl">
                        Every Los Angeles Drywall & Framing project follows a proven six-step process. From the first phone call to the final walkthrough, we maintain clear communication, reliable scheduling, and consistent quality.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Desktop/Tablet Grid View */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                        {steps.map((step, index) => (
                            <div key={step.number} className="relative group p-8 bg-white border border-[var(--color-neutral-100)] rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col items-start overflow-hidden hover:-translate-y-2">

                                {/* Background Number Watermark */}
                                <div className="absolute -top-6 -right-6 text-9xl font-black font-[family-name:var(--font-outfit)] text-[var(--color-neutral-50)] group-hover:text-[var(--color-primary-light)]/5 transition-colors duration-500 pointer-events-none select-none">
                                    {step.number}
                                </div>

                                {/* Header (Icon & Label) */}
                                <div className="flex items-center gap-4 mb-6 relative z-10 w-full">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                                        <step.icon size={22} />
                                    </div>
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-primary-light)] uppercase border border-[var(--color-primary-light)]/30 px-3 py-1 rounded-full">
                                        Step {step.number}
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="relative z-10">
                                    <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3 leading-snug">
                                        {step.title}
                                    </h4>
                                    <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Bottom Accent line on hover */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--color-primary)] group-hover:w-full transition-all duration-700 ease-out"></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16 lg:mt-20">
                    <a href="/contact" className="btn-primary inline-flex items-center gap-2 group shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                        Get Your Free Estimate
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
