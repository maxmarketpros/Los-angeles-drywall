import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://losangelesdrywallandframing.com'

    const pages: { url: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
        { url: '', priority: 1.0, changeFrequency: 'weekly' },
        { url: '/services', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/areas', priority: 0.9, changeFrequency: 'monthly' },
        { url: '/contact', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
        { url: '/process', priority: 0.7, changeFrequency: 'monthly' },
        { url: '/faq', priority: 0.6, changeFrequency: 'monthly' },
        { url: '/privacy-policy', priority: 0.3, changeFrequency: 'monthly' },
        // Service pages
        ...[
            '/services/drywall-installation',
            '/services/drywall-repair',
            '/services/drywall-finishing',
            '/services/drywall-texturing',
            '/services/drywall-patching',
            '/services/wall-framing',
            '/services/residential-framing',
            '/services/commercial-framing',
            '/services/rough-carpentry',
            '/services/custom-framing',
            '/services/exterior-painting',
            '/services/stucco',
            '/services/metal-framing',
        ].map(url => ({ url, priority: 0.8, changeFrequency: 'monthly' as const })),
        // Area pages
        ...[
            '/areas/beverly-hills',
            '/areas/santa-monica',
            '/areas/pasadena',
            '/areas/glendale',
            '/areas/burbank',
        ].map(url => ({ url, priority: 0.8, changeFrequency: 'monthly' as const })),
    ]

    return pages.map(({ url, priority, changeFrequency }) => ({
        url: `${baseUrl}${url}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
    }))
}
