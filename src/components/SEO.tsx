import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
}

export default function SEO({
    title,
    description = "Senior Frontend Developer with 10+ years of experience in React, Flutter, and modern web technologies.",
    image = "/images/koushik.jpg",
    url = window.location.href
}: SEOProps) {
    const siteTitle = "Koushik Radhakrishnan";
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
}
