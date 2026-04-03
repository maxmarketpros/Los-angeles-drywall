import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://losangelesdrywallandframing.com'

    const routes = [
        '',
        '/about',
        '/contact',
        '/faq',
        '/privacy-policy',
        '/process',
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
        '/areas/beverly-hills',
        '/areas/santa-monica',
        '/areas/pasadena',
        '/areas/glendale',
        '/areas/burbank',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
