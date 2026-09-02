export default function sitemap() {
    const baseUrl = 'https://federazioneitalianatacticon.it'

    const routes = [
        '',
        '/regole',
        '/formazione',
        '/categorie',
        '/contatti',
        '/privacy',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))
}