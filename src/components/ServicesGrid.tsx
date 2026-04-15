import Image from "next/image";
import {
    HomeIcon,
    BuildingIcon,
    RulerIcon,
    HammerIcon,
    CheckCircleIcon,
    ArrowRightIcon,
    DropletIcon,
    LayersIcon,
    HardHatIcon
} from "./icons";

const services = [
    {
        icon: LayersIcon,
        title: "Drywall Installation",
        description:
            "Complete drywall installation for new construction and renovation projects. Board hanging, fastening, and preparation for residential and commercial spaces across Los Angeles.",
        href: "/services/drywall-installation",
        image: "/images/services/drywall-installation/hero.jpg",
    },
    {
        icon: HammerIcon,
        title: "Drywall Repair",
        description:
            "Expert drywall repair for water damage, holes, cracks, and general wear. Fast turnaround to restore your walls to their original condition throughout the LA area.",
        href: "/services/drywall-repair",
        image: "/images/services/drywall-repair/hero.jpg",
    },
    {
        icon: RulerIcon,
        title: "Drywall Finishing",
        description:
            "Professional taping, mudding, and sanding to achieve smooth, paint-ready surfaces. Multiple finish levels available from standard to high-end Level 5 finishes.",
        href: "/services/drywall-finishing",
        image: "/images/services/drywall-finishing/detail.jpg",
    },
    {
        icon: DropletIcon,
        title: "Drywall Texturing",
        description:
            "Custom wall and ceiling textures including knockdown, orange peel, skip trowel, and smooth finishes. Transform any room with professional texture application.",
        href: "/services/drywall-texturing",
        image: "/images/services/drywall-texturing/hero.jpg",
    },
    {
        icon: CheckCircleIcon,
        title: "Drywall Patching",
        description:
            "Quick and reliable patching for small holes, nail pops, and minor drywall damage. Seamless repairs that blend perfectly with your existing walls.",
        href: "/services/drywall-patching",
        image: "/images/services/drywall-patching/hero.jpg",
    },
    {
        icon: HomeIcon,
        title: "Wall Framing",
        description:
            "Structural wall framing for new builds, additions, and interior remodels. Precise stud layout and load-bearing wall construction built to California code.",
        href: "/services/wall-framing",
        image: "/images/services/wall-framing/hero.jpg",
    },
    {
        icon: BuildingIcon,
        title: "Residential Framing",
        description:
            "Full residential framing services including walls, floors, and roof structures. From single-family homes to multi-unit projects throughout Los Angeles County.",
        href: "/services/residential-framing",
        image: "/images/services/residential-framing/hero.jpg",
    },
    {
        icon: BuildingIcon,
        title: "Commercial Framing",
        description:
            "Commercial framing for offices, retail spaces, restaurants, and tenant improvements. Experienced with large-scale projects and tight commercial timelines.",
        href: "/services/commercial-framing",
        image: "/images/services/commercial-framing/hero.jpg",
    },
    {
        icon: HammerIcon,
        title: "Rough Carpentry",
        description:
            "Structural rough carpentry including blocking, backing, furring, and all support structures required before drywall and finish work begins.",
        href: "/services/rough-carpentry",
        image: "/images/services/rough-carpentry/hero.jpg",
    },
    {
        icon: RulerIcon,
        title: "Custom Framing",
        description:
            "Specialized framing for unique architectural features, soffits, arches, tray ceilings, and custom wall designs that require precision craftsmanship.",
        href: "/services/custom-framing",
        image: "/images/services/custom-framing/hero.jpg",
    },
    {
        icon: DropletIcon,
        title: "Exterior Painting",
        description:
            "Professional exterior painting services for homes and commercial buildings. Surface preparation, priming, and premium paint application for lasting results.",
        href: "/services/exterior-painting",
        image: "/images/services/exterior-painting/hero.jpg",
    },
    {
        icon: LayersIcon,
        title: "Stucco",
        description:
            "Traditional and synthetic stucco application and repair for Los Angeles properties. Weather-resistant finishes that protect and enhance your building exterior.",
        href: "/services/stucco",
        image: "/images/services/stucco/hero.jpg",
    },
    {
        icon: HardHatIcon,
        title: "Metal Framing",
        description:
            "Steel stud framing for commercial and residential projects requiring non-combustible or high-strength structural solutions. Code-compliant metal framing systems.",
        href: "/services/metal-framing",
        image: "/images/services/metal-framing/hero.jpg",
    },
];

export default function ServicesGrid({ hideHeader = false, hideButton = false }: { hideHeader?: boolean, hideButton?: boolean } = {}) {
    return (
        <section id="services" className="py-24 lg:py-32 bg-[var(--color-warm)] relative">
            <div className="page-container relative z-10">
                {!hideHeader && (
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6">
                            Our Expertise
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.1] mb-6 tracking-tight">
                            Professional Drywall and Framing Services in Los Angeles
                        </h2>
                        <p className="text-lg text-[var(--color-neutral-600)] leading-relaxed">
                            Los Angeles Drywall & Framing delivers comprehensive drywall, framing, and specialty services for residential and commercial properties. Every project is completed with licensed craftsmanship and a commitment to quality that our clients throughout Los Angeles have come to rely on.
                        </p>
                    </div>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service) => (
                        <a
                            key={service.title}
                            href={service.href}
                            className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-[var(--color-neutral-100)] flex flex-col group transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image Header */}
                            <div className="relative w-full aspect-[4/3] bg-[var(--color-neutral-100)]">
                                {/* Wrapper to trap the image scaling overlay */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Soft overlay on image bottom to make badge pop */}
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>

                                {/* Floating Icon Badge */}
                                <div className="absolute -bottom-6 right-6 w-14 h-14 bg-white rounded-xl shadow-lg border border-[var(--color-neutral-100)] flex items-center justify-center text-[var(--color-primary-light)] z-20 group-hover:bg-[var(--color-primary-light)] group-hover:text-white transition-colors duration-300">
                                    <service.icon size={26} />
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-8 pt-10 flex flex-col flex-grow">
                                <h4 className="text-2xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] mb-3 group-hover:text-[var(--color-primary-light)] transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                {/* Action Link */}
                                <div className="mt-auto flex items-center gap-2 text-[var(--color-primary-light)] font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                                    Explore Service <ArrowRightIcon size={16} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {!hideButton && (
                    <div className="text-center mt-16">
                        <a href="/services" className="btn-primary group" style={{ padding: "1.25rem 3rem" }}>
                            <span className="flex items-center gap-2">
                                View All Services
                                <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                )}
            </div>

            {/* Subtle background decoration map */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(37,151,203,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        </section>
    );
}
