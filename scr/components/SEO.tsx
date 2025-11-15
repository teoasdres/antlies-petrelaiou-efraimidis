import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  url?: string;
}

const SEO = ({ 
  title = "ΕΦΡΑΙΜΙΔΗΣ - Αντλίες Πετρελαίου Φορτηγών",
  description = "Η κορυφαία εταιρεία αντλιών πετρελαίου φορτηγών. Προϊόντα Bosch, Delphi, Denso, Siemens. Πώληση, έλεγχος και συντήρηση με εγγύηση.",
  keywords = "Αντλίες πετρελαίου, φορτηγά, diesel pump, Bosch, Delphi, Denso, Siemens, MPEK PETRELAIOU, ANTLIES PETRELAIOU, diesel injectors, diesel pumps",
  image = "/hero-bg.jpg",
  type = "website",
  url
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = "https://efraimidis.gr"; // TODO: Update with actual domain
  const currentUrl = url || `${baseUrl}${location.pathname}`;
  const fullTitle = title.includes("ΕΦΡΑΙΜΙΔΗΣ") ? title : `ΕΦΡΑΙΜΙΔΗΣ - ${title}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "ΕΦΡΑΙΜΙΔΗΣ");

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:image", `${baseUrl}${image}`, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:locale", "el_GR", true);
    updateMetaTag("og:site_name", "ΕΦΡΑΙΜΙΔΗΣ", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", `${baseUrl}${image}`);

    // Canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    // Language alternates
    let langAlternate = document.querySelector("link[rel='alternate'][hreflang='x-default']") as HTMLLinkElement;
    if (!langAlternate) {
      langAlternate = document.createElement("link");
      langAlternate.setAttribute("rel", "alternate");
      langAlternate.setAttribute("hreflang", "x-default");
      document.head.appendChild(langAlternate);
    }
    langAlternate.setAttribute("href", currentUrl);
  }, [fullTitle, description, keywords, image, type, currentUrl, baseUrl]);

  // Structured Data (JSON-LD)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    "name": "ΕΦΡΑΙΜΙΔΗΣ",
    "alternateName": "EFRAIMIDIS",
    "description": description,
    "url": baseUrl,
    "logo": `${baseUrl}/favicon.png`,
    "image": `${baseUrl}${image}`,
    "telephone": "+306937184549",
    "email": "info@efraimidis.gr", // TODO: Update with actual email
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GR",
      "addressLocality": "Αθήνα", // TODO: Update with actual city
      "addressRegion": "Αττική" // TODO: Update with actual region
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-17:00", // TODO: Update with actual hours
    "sameAs": [
      // TODO: Add social media links if available
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Greece"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Αντλίες Πετρελαίου",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "ΜΠΕΚ ΠΕΤΡΕΛΑΙΟΥ / Diesel Injectors"
        },
        {
          "@type": "OfferCatalog",
          "name": "ΑΝΤΛΙΕΣ ΠΕΤΡΕΛΑΙΟΥ / Diesel Pumps"
        },
        {
          "@type": "OfferCatalog",
          "name": "ΑΝΤΛΙΕΣ ΜΕ ΜΠΕΚ / Pumps with Injectors"
        },
        {
          "@type": "OfferCatalog",
          "name": "ΑΝΤΛΙΕΣ ΥΨΗΛΗΣ ΠΙΕΣΗΣ / High Pressure Pumps"
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    "url": baseUrl,
    "name": "ΕΦΡΑΙΜΙΔΗΣ - Αντλίες Πετρελαίου Φορτηγών",
    "description": description,
    "publisher": {
      "@id": `${baseUrl}#organization`
    },
    "inLanguage": "el-GR",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/products?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Αρχική",
        "item": baseUrl
      },
      ...(location.pathname !== "/" ? [{
        "@type": "ListItem",
        "position": 2,
        "name": location.pathname === "/products" ? "Προϊόντα" : location.pathname === "/contact" ? "Επικοινωνία" : title,
        "item": currentUrl
      }] : [])
    ]
  };

  return (
    <>
      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      {/* Structured Data - Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      
      {/* Structured Data - Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default SEO;

