import { faqData } from "./FAQ";
import { currentTime, clockHistory, ANNOUNCEMENT_DATE_ISO } from "../data/clockHistory";

export function SEOHead() {
  const title = "Doomsday Clock Today | Current Time & Complete Timeline (2026)";
  const description = `The Doomsday Clock is at ${currentTime.display} to midnight—a new record. View the live countdown, full timeline, and ${currentTime.year} updates.`;
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
        text: `The safest time was 17 minutes (1991, end of Cold War). The closest ever is now at ${currentTime.seconds} seconds, set in ${currentTime.year}.`,
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
    name: `Doomsday Clock History Timeline (1947-${currentTime.year})`,
    description: `Complete history of all ${clockHistory.length} Doomsday Clock settings from 1947 to ${currentTime.year}`,
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
        content="doomsday clock, doomsday clock time, doomsday clock 2026, doomsday clock 2025, doomsday clock 2024, doomsday clock 2023, doomsday clock 2022, doomsday clock 2021, doomsday clock 2020, doomsday clock 2015, what time is the doomsday clock, what is the current doomsday clock, doomsday clock history, bulletin of atomic scientists, nuclear threat, 85 seconds to midnight, 89 seconds to midnight, 90 seconds to midnight, what does 89 seconds to midnight mean, what happens when doomsday clock reaches midnight, farthest from midnight doomsday clock, 7 minutes to midnight, does the doomsday clock actually mean anything, will the world end in 2026, climate clock, will the world survive 2050, doomsday clock meaning, climate change, midnight, doomsday clock 2026 prediction, doomsday clock 2026 date"
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
  const description = `The Doomsday Clock is at ${currentTime.display} to midnight—a new record. View the live countdown, full timeline, and ${currentTime.year} updates.`;
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
    // Article Schema with embedded FAQ mainEntity (optimized for Featured Snippets)
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `Current Doomsday Clock Time: ${currentTime.seconds} Seconds to Midnight`,
      description: description,
      datePublished: "2026-02-04",
      dateModified: new Date().toISOString().split("T")[0],
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
      isBasedOn: "https://thebulletin.org/doomsday-clock/",
      citation: {
        "@type": "CreativeWork",
        name: "Doomsday Clock Statement",
        author: {
          "@type": "Organization",
          name: "Bulletin of the Atomic Scientists",
          url: "https://thebulletin.org",
        },
        url: "https://thebulletin.org/doomsday-clock/",
        datePublished: "2026-02-04",
      },
      about: {
        "@type": "Thing",
        name: "Doomsday Clock",
        description: "A symbolic timepiece representing humanity's proximity to global catastrophe, maintained by the Bulletin of the Atomic Scientists since 1947.",
        sameAs: "https://en.wikipedia.org/wiki/Doomsday_Clock",
      },
      mainEntity: {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What time is the Doomsday Clock right now?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `As of ${currentTime.lastUpdated}, the Doomsday Clock is set to ${currentTime.seconds} seconds to midnight, the closest it has ever been to global catastrophe.`,
            },
          },
          {
            "@type": "Question",
            name: "When does the Doomsday Clock update?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The clock is updated annually in late January by the Bulletin of the Atomic Scientists' Science and Security Board.",
            },
          },
        ],
      },
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
          text: `The safest time was 17 minutes (1991, end of Cold War). The closest ever is now at ${currentTime.seconds} seconds, set in ${currentTime.year}.`,
        },
        {
          "@type": "HowToStep",
          position: 4,
          name: "Track annual updates",
          text: "The Bulletin of the Atomic Scientists announces updates each January. Major world events may trigger off-cycle adjustments.",
        },
      ],
    },
    // Timeline ItemList Schema — all events for comprehensive AI citation
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: `Doomsday Clock History Timeline (1947-${currentTime.year})`,
      description: `Complete history of all ${clockHistory.length} Doomsday Clock settings from 1947 to ${currentTime.year}`,
      numberOfItems: clockHistory.length,
      itemListElement: clockHistory.map((event, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${event.year}: ${event.time} to midnight - ${event.reason}`,
        description: event.details,
        url: `${url}/#history`,
      })),
    },
    // Dataset Schema — makes timeline data machine-ingestible for AI agents
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      name: "Doomsday Clock Historical Timeline Data",
      description: `Complete dataset of all ${clockHistory.length} Doomsday Clock time settings from 1947 to ${currentTime.year}, including dates, times, directions of change, and explanations.`,
      url: `${url}/llms-full.txt`,
      dateModified: new Date().toISOString().split("T")[0],
      license: "https://creativecommons.org/licenses/by/4.0/",
      creator: {
        "@type": "Organization",
        name: "Bulletin of the Atomic Scientists",
        url: "https://thebulletin.org",
      },
      distribution: {
        "@type": "DataDownload",
        contentUrl: `${url}/llms-full.txt`,
        encodingFormat: "text/plain",
      },
      temporalCoverage: `1947/${currentTime.year}`,
      variableMeasured: "Time to midnight (symbolic measure of global existential risk)",
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
    // Event Schema — January 2027 Doomsday Clock announcement
    {
      "@context": "https://schema.org",
      "@type": "Event",
      name: "2027 Doomsday Clock Announcement",
      description: "The Bulletin of the Atomic Scientists will announce the 2027 Doomsday Clock time and updated nuclear threat assessment, revealing how close humanity is to global catastrophe. Watch the live doomsday clock 2027 update.",
      startDate: ANNOUNCEMENT_DATE_ISO,
      endDate: "2027-01-28T11:00:00-06:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
      location: {
        "@type": "VirtualLocation",
        url: "https://thebulletin.org/doomsday-clock/",
      },
      organizer: {
        "@type": "Organization",
        name: "Bulletin of the Atomic Scientists",
        url: "https://thebulletin.org",
      },
      performer: {
        "@type": "Organization",
        name: "Bulletin of the Atomic Scientists Science and Security Board",
      },
      eventSchedule: {
        "@type": "Schedule",
        repeatFrequency: "P1Y",
        byMonth: 1,
      },
      image: `${url}/og-image-2026.png`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: url,
      },
    },
    // Organization Schema — attribute-rich for higher AI citation rate
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "DoomsdayClock.net",
      url: url,
      logo: {
        "@type": "ImageObject",
        url: `${url}/DoomsDayClock.net.png`,
        width: 1200,
        height: 1200,
      },
      description: "Independent educational resource tracking the Doomsday Clock. Provides real-time status, complete historical timeline (1947-present), interactive visualizations, and FAQ about the Bulletin of the Atomic Scientists' symbolic timepiece.",
      foundingDate: "2024",
      knowsAbout: [
        "Doomsday Clock",
        "Nuclear threat assessment",
        "Bulletin of the Atomic Scientists",
        "Existential risk",
        "Climate change",
        "Nuclear weapons",
      ],
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
