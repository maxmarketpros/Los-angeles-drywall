import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { MapPinIcon, ClockIcon, PhoneIcon, EmailIcon } from "@/components/icons";

export const metadata = {
    title: "Contact Los Angeles Drywall & Framing | Free Estimates in Los Angeles, CA",
    description: "Contact Los Angeles Drywall & Framing for free drywall and framing estimates across the LA metro. Call (310) 730-9832 or fill out our contact form to get started.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white">
            <BreadcrumbSchema items={[
                { name: "Home", href: "/" },
                { name: "Contact", href: "/contact" },
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
                        Get In Touch
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.05] mb-6">
                        Contact Us
                    </h1>
                    <p className="text-lg lg:text-xl text-[var(--color-neutral-300)] leading-relaxed max-w-2xl mx-auto font-light">
                        Ready to start your drywall or framing project? Fill out the form below or contact us directly. We provide free estimates across the entire Los Angeles metro area.
                    </p>
                </div>
                {/* Massive Watermark */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none font-[family-name:var(--font-outfit)] leading-none whitespace-nowrap">
                    CONTACT
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-24 lg:py-32 relative bg-white overflow-hidden border-b border-[var(--color-neutral-200)]">
                {/* Architectural Grid Background */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(var(--color-neutral-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral-900) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Form Intake Column */}
                        <div className="lg:col-span-7 flex flex-col">
                            <h2 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-8 flex items-center gap-4">
                                <span className="w-8 h-8 rounded bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] text-sm">01</span>
                                Request a Free Estimate
                            </h2>
                            <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-2 lg:p-4 w-full rounded-lg shadow-sm">
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/form/sereKGCghy5WXVMS60mT"
                                    style={{ width: "100%", height: "669px", border: "none", borderRadius: "3px" }}
                                    id="contact-form-sereKGCghy5WXVMS60mT"
                                    title="WebSite Form Template"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Info Column */}
                        <div className="lg:col-span-5 flex flex-col pt-2 lg:pt-0">
                            <h2 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-8 flex items-center gap-4">
                                <span className="w-8 h-8 rounded bg-[var(--color-neutral-800)] flex items-center justify-center text-white text-sm">02</span>
                                Contact Info
                            </h2>

                            <div className="space-y-6">
                                {/* Contact Cards */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-white border border-[var(--color-neutral-200)] p-6 rounded-lg hover:border-[var(--color-primary)] transition-colors group">
                                        <div className="w-10 h-10 bg-[var(--color-neutral-50)] flex items-center justify-center text-[var(--color-primary)] mb-4 group-hover:-translate-y-1 transition-transform">
                                            <PhoneIcon size={18} />
                                        </div>
                                        <div className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-1">Call Us</div>
                                        <a href="tel:3107309832" className="text-sm font-bold text-[var(--color-neutral-900)] hover:text-[var(--color-primary)] transition-colors">(310) 730-9832</a>
                                    </div>
                                    <div className="bg-white border border-[var(--color-neutral-200)] p-6 rounded-lg hover:border-[var(--color-primary)] transition-colors group">
                                        <div className="w-10 h-10 bg-[var(--color-neutral-50)] flex items-center justify-center text-[var(--color-primary)] mb-4 group-hover:-translate-y-1 transition-transform">
                                            <EmailIcon size={18} />
                                        </div>
                                        <div className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-1">Email Us</div>
                                        <a href="mailto:sales@losangelesdrywallandframing.com" className="text-sm font-bold text-[var(--color-neutral-900)] hover:text-[var(--color-primary)] transition-colors break-words">sales@losangeles<br />drywallandframing.com</a>
                                    </div>
                                </div>

                                <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-6 rounded-lg flex gap-4">
                                    <div className="mt-1 text-[var(--color-primary)] shrink-0"><ClockIcon size={20} /></div>
                                    <div>
                                        <div className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-1">Business Hours</div>
                                        <div className="text-sm font-medium text-[var(--color-neutral-900)]">Monday &ndash; Friday: 8:00 AM &mdash; 6:00 PM</div>
                                        <div className="text-sm font-medium text-[var(--color-neutral-900)]">Sunday: Open</div>
                                        <div className="text-sm font-medium text-[var(--color-neutral-500)]">Saturday: Closed</div>
                                    </div>
                                </div>

                                <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-6 rounded-lg flex flex-col gap-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 text-[var(--color-primary)] shrink-0"><MapPinIcon size={20} /></div>
                                        <div>
                                            <div className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-1">Service Area</div>
                                            <div className="text-sm font-medium text-[var(--color-neutral-900)]">Los Angeles, CA<br />Greater LA Metro Area</div>
                                        </div>
                                    </div>

                                    {/* Map Embed */}
                                    <div className="w-full aspect-[4/3] rounded border border-[var(--color-neutral-200)] overflow-hidden shadow-inner relative group">
                                        <div className="absolute inset-0 bg-[var(--color-primary)]/10 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <iframe
                                            src="https://maps.google.com/maps?q=34.0522,-118.2437&t=&z=11&ie=UTF8&iwloc=&output=embed"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="absolute inset-0 transition-all duration-500 group-hover:filter-none"
                                        ></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
