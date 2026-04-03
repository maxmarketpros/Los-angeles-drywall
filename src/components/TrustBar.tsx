import { MapPinIcon, ClockIcon, PhoneIcon } from "./icons";

export default function TrustBar() {
    return (
        <section className="bg-[var(--color-primary-dark)] text-white border-b border-white/10">
            <div className="page-container py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 max-w-6xl mx-auto">

                    {/* Location */}
                    <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                        <div className="text-[var(--color-primary-light)]">
                            <MapPinIcon size={20} />
                        </div>
                        <div className="text-sm font-medium tracking-wide">
                            Los Angeles, CA
                        </div>
                    </div>

                    {/* Divider (Hidden on mobile) */}
                    <div className="hidden md:block w-px h-6 bg-white/20"></div>

                    {/* Hours */}
                    <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                        <div className="text-[var(--color-primary-light)]">
                            <ClockIcon size={20} />
                        </div>
                        <div className="text-sm font-medium tracking-wide">
                            Mon-Fri: 8AM to 6PM | Sun: Open
                        </div>
                    </div>

                    {/* Divider (Hidden on mobile) */}
                    <div className="hidden md:block w-px h-6 bg-white/20"></div>

                    {/* Phone Container */}
                    <div className="flex flex-row items-center gap-6 w-full md:w-auto justify-center md:justify-start">
                        <a
                            href="tel:3107309832"
                            className="flex items-center gap-2 text-sm font-medium tracking-wide hover:text-[var(--color-primary-light)] transition-colors"
                        >
                            <PhoneIcon size={20} className="text-[var(--color-primary-light)]" />
                            Call (310) 730-9832
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
