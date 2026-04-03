import { PhoneIcon, ClockIcon, MapPinIcon } from "./icons";

export default function AnnouncementBar() {
    return (
        <div className="bg-[var(--color-primary-dark)] text-white text-sm py-2">
            <div className="page-container flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4">
                <div className="flex items-center gap-4 flex-wrap justify-center">
                    <a
                        href="tel:3107309832"
                        className="flex items-center gap-1.5 hover:text-[var(--color-primary-light)] transition-colors"
                    >
                        <PhoneIcon size={14} />
                        <span>(310) 730-9832</span>
                    </a>
                    <span className="hidden sm:flex items-center gap-1.5 text-neutral-300">
                        <ClockIcon size={14} />
                        <span>Mon to Fri: 8AM to 6PM</span>
                    </span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-300 text-xs sm:text-sm">
                    <MapPinIcon size={14} />
                    <span>Serving Los Angeles, Beverly Hills, Santa Monica &amp; Surrounding Areas</span>
                </div>
            </div>
        </div>
    );
}
