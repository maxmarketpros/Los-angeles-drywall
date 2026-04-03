import {
    ShieldIcon,
    HardHatIcon,
    BuildingIcon,
    ClipboardIcon,
    TruckIcon,
    ArrowRightIcon,
} from "./icons";

const conditions = [
    {
        icon: ShieldIcon,
        title: "California Seismic Standards",
        description:
            "All framing and drywall work is completed to meet California seismic building codes. We understand the structural reinforcement requirements specific to earthquake-prone regions.",
    },
    {
        icon: HardHatIcon,
        title: "Fire-Rated Assemblies",
        description:
            "Los Angeles fire codes require specific wall and ceiling assemblies in many applications. We install fire-rated drywall and framing systems that meet or exceed local requirements.",
    },
    {
        icon: BuildingIcon,
        title: "Historic and Older Properties",
        description:
            "Many LA neighborhoods feature older homes and historic structures that need specialized drywall and framing approaches. We work with existing conditions while bringing properties up to current standards.",
    },
    {
        icon: ClipboardIcon,
        title: "LA Permitting and Inspections",
        description:
            "We navigate the City of Los Angeles and county permitting process efficiently. Our work is completed to pass inspections the first time, keeping your project on schedule.",
    },
    {
        icon: TruckIcon,
        title: "Urban Job Site Logistics",
        description:
            "Working in dense Los Angeles neighborhoods requires careful coordination of materials, equipment, and parking. We plan every delivery and stage materials efficiently to minimize disruption.",
    },
];

export default function LocalKnowledge() {
    return (
        <section id="local-knowledge" className="py-24 lg:py-32 bg-[#f8fafc] relative overflow-hidden text-left">
            <div className="page-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Content Side */}
                    <div>
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                            Local Expertise
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            Built for Los Angeles Construction Standards
                        </h2>

                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10">
                            Working on residential and commercial properties in Los Angeles requires a contractor who understands the unique building requirements of Southern California. Los Angeles Drywall & Framing brings deep local knowledge to every project across the metro area.
                        </p>

                        <div className="space-y-6 lg:space-y-8">
                            {conditions.map((item, index) => (
                                <div key={index} className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-[var(--color-neutral-100)] flex items-center justify-center text-[var(--color-primary)] shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Interactive Map Side */}
                    <div className="w-full relative min-h-[500px] lg:min-h-[700px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[var(--color-neutral-100)] flex flex-col overflow-hidden">

                        {/* Internal Header */}
                        <div className="p-8 border-b border-[var(--color-neutral-100)] bg-white relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div>
                                <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)]">
                                    Service Area Map
                                </h4>
                                <p className="text-xs text-[var(--color-neutral-500)] mt-1 font-medium tracking-wide">
                                    LOS ANGELES, CA - SERVING THE GREATER LA METRO
                                </p>
                            </div>
                            <a href="/contact" className="text-xs font-bold text-[var(--color-primary-light)] flex items-center gap-1.5 uppercase tracking-wider group">
                                Verify Location <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Map Iframe */}
                        <div className="flex-1 relative w-full h-full min-h-[400px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d423286.27405745!2d-118.2437!3d34.0522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&zoom=10"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 grayscale contrast-[1.05] brightness-105 opacity-90"
                            ></iframe>

                            {/* Floating Map Overlay Tags */}
                            <div className="absolute bottom-6 left-6 right-6 pointer-events-none flex flex-wrap gap-2">
                                {["Los Angeles", "Beverly Hills", "Santa Monica", "Pasadena", "Glendale", "Burbank"].map(area => (
                                    <span key={area} className="bg-white/90 backdrop-blur text-[var(--color-neutral-800)] text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded shadow-sm border border-white">
                                        {area}
                                    </span>
                                ))}
                            </div>

                            {/* Soft vignette gradient */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.1)_100%)] pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
