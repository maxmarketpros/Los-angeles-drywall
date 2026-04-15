import Image from "next/image";
import { ArrowRightIcon, PhoneIcon, ChevronDownIcon } from "./icons";

export default function HeroImage() {
    return (
        <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-primary-dark)]">
            <Image
                src="/images/hero/hero.jpg"
                alt="Professional drywall and framing services in Los Angeles"
                fill
                sizes="100vw"
                className="object-cover scale-105"
                style={{ transformOrigin: "center" }}
                priority
            />

            {/* Modern, deep vignette gradient overlay for text readability without being too muddy */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)",
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)",
                }}
            />

            <div className="relative w-full page-container pt-28 pb-16 lg:pt-36 lg:pb-32 my-auto">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                    <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[13px] tracking-[0.2em] font-semibold uppercase rounded-full">
                        Licensed Drywall Contractor in Los Angeles
                    </div>

                    <h1
                        className="mb-8 font-bold leading-tight"
                        style={{
                            color: "#ffffff",
                            textShadow: "0 4px 30px rgba(0,0,0,0.6)",
                            fontFamily: "var(--font-outfit), system-ui, sans-serif",
                        }}
                    >
                        Dry Wall Contractor in <span className="whitespace-nowrap">Los Angeles, CA</span>
                    </h1>

                    <p
                        className="text-lg flex flex-col sm:text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl font-light"
                        style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
                    >
                        Professional drywall installation, repair, finishing, framing, stucco, and exterior painting services for residential and commercial properties throughout the Los Angeles metro area.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
                        <a
                            href="#contact"
                            className="btn-primary text-base sm:w-auto w-full group overflow-hidden relative"
                            style={{ padding: "1rem 2.5rem" }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Free Estimate
                                <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                        <a
                            href="tel:3107309832"
                            className="btn-secondary text-base sm:w-auto w-full group bg-white/5 backdrop-blur-sm"
                            style={{ padding: "1rem 2.5rem" }}
                        >
                            <PhoneIcon size={18} className="group-hover:-rotate-12 transition-transform" />
                            Call (310) 730-9832
                        </a>
                    </div>

                    <div className="mt-10 md:mt-12 w-full grid grid-cols-3 gap-2 md:gap-8 opacity-90 mx-auto max-w-2xl" style={{ color: "#ffffff" }}>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-outfit)]">Licensed</span>
                            <span className="text-[9px] md:text-xs uppercase tracking-wider mt-1 opacity-80">CA<br className="md:hidden" /> Contractor</span>
                        </div>
                        <div className="flex flex-col items-center text-center relative">
                            {/* Left Divider */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 md:h-12 bg-white/20"></div>
                            <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-outfit)]">Insured</span>
                            <span className="text-[9px] md:text-xs uppercase tracking-wider mt-1 opacity-80">Full<br className="md:hidden" /> Coverage</span>
                            {/* Right Divider */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 md:h-12 bg-white/20"></div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-outfit)]">Free</span>
                            <span className="text-[9px] md:text-xs uppercase tracking-wider mt-1 opacity-80">Project<br className="md:hidden" /> Estimates</span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce"
                style={{ color: "rgba(255,255,255,0.7)" }}
            >
                <span className="text-[10px] tracking-[0.2em] font-medium uppercase absolute -top-5">Explore</span>
                <ChevronDownIcon size={24} />
            </div>
        </section>
    );
}
