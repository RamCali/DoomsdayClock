import { faqData } from "./FAQ";
import { currentTime, clockHistory } from "../data/clockHistory";

export function SEOHead() {
  const title = "Doomsday Clock Today | Current Time & Complete Timeline (2026)";
  const description = `Is it midnight yet? The official Doomsday Clock is now set to ${currentTime.display.charAt(0).toUpperCase() + currentTime.display.slice(1)} to Midnight. View the live countdown, historical timeline, and 2026 updates here.`;
  const url = "https://doomsdayclock.net";

  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Doomsday Clock",
    url: url,
    description: description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // Article Schema for the main content
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    datePublished: "2024-01-01",
    dateModified: currentTime.lastUpdated,
    author: {
      "@type": "Organization",
      name: "Doomsday Clock",
    },
    publisher: {
      "@type": "Organization",
      name: "Doomsday Clock",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  // Speakable Schema for voice search optimization (AEO)
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-current-time", ".speakable-quick-answer"],
    },
    url: url,
  };

  // HowTo Schema for "How to read the Doomsday Clock"
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Read the Doomsday Clock",
    description: "Understanding what the Doomsday Clock time means for global security",
    step: [
      {
        "@type": "HowToStep",
        name: "Check the current time",
        text: `The Doomsday Clock is currently at ${currentTime.display} to midnight. The closer to midnight, the greater the existential threat.`,
      },
      {
        "@type": "HowToStep",
        name: "Understand midnight",
        text: "Midnight represents global catastrophe - nuclear war, climate collapse, or other existential disasters. The clock has never reached midnight.",
      },
      {
        "@type": "HowToStep",
        name: "Compare to history",
        text: "The safest time was 17 minutes (1991, end of Cold War). The closest ever is now at 90 seconds, set in 2023.",
      },
      {
        "@type": "HowToStep",
        name: "Track annual updates",
        text: "The Bulletin of the Atomic Scientists announces updates each January. Major world events may trigger off-cycle adjustments.",
      },
    ],
  };

  // Timeline ItemList Schema
  const timelineSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Doomsday Clock History Timeline",
    description: "Complete history of Doomsday Clock settings from 1947 to present",
    numberOfItems: clockHistory.length,
    itemListElement: clockHistory.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Event",
        name: `${event.year}: ${event.reason}`,
        description: event.details,
        startDate: `${event.year}-01-01`,
      },
    })),
  };

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="doomsday clock, doomsday clock time, doomsday clock 2024, what time is the doomsday clock, doomsday clock history, bulletin of atomic scientists, nuclear threat, climate change, midnight"
      />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Doomsday Clock" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${url}/og-image.png`} />
      <meta property="og:site_name" content="Doomsday Clock" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${url}/og-image.png`} />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(timelineSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
    </>
  );
}

// Component to inject SEO into head
export function injectSEO() {
  const title = "Doomsday Clock Today | Current Time & Complete Timeline (2026)";
  const description = `Is it midnight yet? The official Doomsday Clock is now set to ${currentTime.display.charAt(0).toUpperCase() + currentTime.display.slice(1)} to Midnight. View the live countdown, historical timeline, and 2026 updates here.`;
  const url = "https://doomsdayclock.net";

  document.title = title;

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute("content", description);

  // All structured data schemas
  const schemas = [
    // FAQ Schema
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    // WebSite Schema with SearchAction
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Doomsday Clock",
      alternateName: ["DoomsdayClock.net", "Doomsday Clock Timer"],
      url: url,
      description: description,
      inLanguage: "en-US",
    },
    // Article Schema
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: description,
      datePublished: "2024-01-01",
      dateModified: currentTime.lastUpdated,
      author: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        url: url,
      },
      publisher: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        url: url,
        logo: {
          "@type": "ImageObject",
          url: `${url}/DoomsDayClock.net.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      image: `${url}/DoomsDayClock.net.png`,
    },
    // Speakable Schema for AEO/Voice Search
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".speakable-current-time", ".speakable-quick-answer"],
      },
      url: url,
    },
    // HowTo Schema
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Read the Doomsday Clock",
      description: "Understanding what the Doomsday Clock time means for global security",
      totalTime: "PT2M",
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Check the current time",
          text: `The Doomsday Clock is currently at ${currentTime.display} to midnight. The closer to midnight, the greater the existential threat.`,
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Understand midnight",
          text: "Midnight represents global catastrophe - nuclear war, climate collapse, or other existential disasters. The clock has never reached midnight.",
        },
        {
          "@type": "HowToStep",
          position: 3,
          name: "Compare to history",
          text: "The safest time was 17 minutes (1991, end of Cold War). The closest ever is now at 90 seconds, set in 2023.",
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Track annual updates",
          text: "The Bulletin of the Atomic Scientists announces updates each January. Major world events may trigger off-cycle adjustments.",
        },
      ],
    },
    // Timeline ItemList Schema
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Doomsday Clock History Timeline (1947-2024)",
      description: "Complete history of Doomsday Clock settings from 1947 to present",
      numberOfItems: clockHistory.length,
      itemListElement: clockHistory.slice(0, 10).map((event, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${event.year}: ${event.time} - ${event.reason}`,
        description: event.details,
      })),
    },
    // BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Doomsday Clock",
          item: `${url}/#clock`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "History",
          item: `${url}/#history`,
        },
      ],
    },
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DoomsdayClock.net",
      url: url,
      logo: `${url}/DoomsDayClock.net.png`,
      sameAs: [],
      description: "Educational resource tracking the Doomsday Clock, maintained by the Bulletin of the Atomic Scientists.",
    },
  ];

  // Inject all schemas
  schemas.forEach((schema, index) => {
    const existingScript = document.querySelector(`script[data-schema-index="${index}"]`);
    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema-index", index.toString());
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  });
}
