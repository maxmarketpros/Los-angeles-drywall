import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
    title: "Privacy Policy | Los Angeles Drywall & Framing",
    description: "Privacy policy for Los Angeles Drywall & Framing. We value your privacy and are committed to protecting your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-0">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full pt-48 pb-24 lg:pt-56 lg:pb-32 bg-[var(--color-neutral-900)] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: `linear-gradient(var(--color-primary-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-light) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary-dark)]/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="page-container relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-[var(--color-primary-light)]/20 shadow-sm backdrop-blur-md">
                        Legal Information
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.05] mb-6">
                        Privacy Policy
                    </h1>
                    <p className="text-lg lg:text-xl text-[var(--color-neutral-300)] leading-relaxed max-w-2xl mx-auto font-light">
                        How we collect, use, and protect your information at Los Angeles Drywall & Framing.
                    </p>
                </div>
                {/* Massive Watermark */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none font-[family-name:var(--font-outfit)] leading-none whitespace-nowrap">
                    PRIVACY
                </div>
            </section>

            {/* Content Area */}
            <section className="py-24 lg:py-32 relative bg-white border-b border-[var(--color-neutral-200)]">
                {/* Architectural Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(var(--color-neutral-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral-900) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10 max-w-4xl mx-auto">
                    <article className="prose prose-lg prose-neutral max-w-none font-[family-name:var(--font-inter)]">
                        <div className="mb-12">
                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </p>
                            <p className="text-[var(--color-neutral-600)] leading-relaxed mt-4 font-medium">
                                At Los Angeles Drywall & Framing, accessible from losangelesdrywallandframing.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Los Angeles Drywall & Framing and how we use it.
                            </p>
                            <p className="text-[var(--color-neutral-600)] leading-relaxed mt-4">
                                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                            </p>
                        </div>

                        <div className="space-y-12">
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">01</span>
                                    Log Files
                                </h2>
                                <p className="text-[var(--color-neutral-600)] leading-loose">
                                    Los Angeles Drywall & Framing follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">02</span>
                                    Contact Form Information
                                </h2>
                                <p className="text-[var(--color-neutral-600)] leading-loose">
                                    When you contact us through our website using the contact form, we collect personal information such as your name, email address, phone number, and any details regarding your construction project. This information is used solely to respond to your inquiry and provide our services. We do not sell or share this information with third parties for marketing purposes.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">03</span>
                                    Cookies and Web Beacons
                                </h2>
                                <p className="text-[var(--color-neutral-600)] leading-loose">
                                    Like any other website, Los Angeles Drywall & Framing uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">04</span>
                                    Third Party Privacy Policies
                                </h2>
                                <p className="text-[var(--color-neutral-600)] leading-loose">
                                    Los Angeles Drywall & Framing&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">05</span>
                                    Children&apos;s Information
                                </h2>
                                <p className="text-[var(--color-neutral-600)] leading-loose">
                                    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                                </p>
                                <p className="text-[var(--color-neutral-600)] leading-loose mt-4">
                                    Los Angeles Drywall & Framing does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] mb-4 flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">06</span>
                                    Consent
                                </h2>
                                <p className="text-[var(--color-neutral-600)] leading-loose">
                                    By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
