import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What time is the Doomsday Clock right now?",
    answer: "The Doomsday Clock is at 85 seconds to midnight as of February 2026. This is the closest it has ever been to symbolic global catastrophe since its creation in 1947 by the Bulletin of the Atomic Scientists."
  },
  {
    question: "How close are we to midnight on the Doomsday Clock?",
    answer: "We are 85 seconds from midnight on the Doomsday Clock as of February 2026 — the closest in the clock's 79-year history. For context, the clock was 17 minutes from midnight in 1991 (the safest setting ever) and 100 seconds in 2020 (when it first entered the seconds range). The 85-second setting represents the highest sustained level of existential risk the Bulletin of the Atomic Scientists has ever assessed."
  },
  {
    question: "How many minutes to midnight is the Doomsday Clock?",
    answer: "The Doomsday Clock is no longer measured in minutes. As of February 2026, it stands at 85 seconds to midnight — about 1 minute and 25 seconds. The clock entered the sub-minute range for the first time in 2020 when it was set to 100 seconds, and it has remained in seconds ever since. The last time it was measured in whole minutes was 2018, at 2 minutes."
  },
  {
    question: "Is the Doomsday Clock real?",
    answer: "Yes, the Doomsday Clock is real — it is a scientifically deliberated assessment maintained by the Bulletin of the Atomic Scientists since 1947. It is not a physical countdown clock or a literal predictor of catastrophe. It is a consensus judgment by 13 Nobel Laureates and security experts who evaluate nuclear, climate, AI, and biosecurity risks each year to set the time. The current setting of 85 seconds to midnight reflects their assessment of how close humanity is to global catastrophe."
  },
  {
    question: "What is the Doomsday Clock?",
    answer: "The Doomsday Clock is a symbolic timepiece created in 1947 representing humanity's proximity to catastrophic destruction. Midnight symbolizes global catastrophe. It measures nuclear threats, climate change, disruptive technologies, and biosecurity risks."
  },
  {
    question: "Who controls the Doomsday Clock?",
    answer: "The Science and Security Board of the Bulletin of the Atomic Scientists sets the clock. The board includes 13 Nobel Laureates who meet twice yearly to evaluate global threats and decide clock adjustments."
  },
  {
    question: "Why is the Doomsday Clock at 85 seconds?",
    answer: "The clock moved to 85 seconds in February 2026 due to increased nuclear risks, the ongoing Russia-Ukraine war, the Middle East conflict, climate change, and AI-related threats. It had previously been at 89 seconds."
  },
  {
    question: "What happens when the Doomsday Clock reaches midnight?",
    answer: "Midnight represents global catastrophe—a symbolic point of no return for humanity. The clock has never reached midnight. It serves as a warning to inspire action and policy changes before it's too late."
  },
  {
    question: "Has the Doomsday Clock ever been further from midnight?",
    answer: "Yes. The safest time was 17 minutes to midnight in 1991 after the Cold War ended and the US-Soviet Strategic Arms Reduction Treaty (START) was signed. This remains the furthest from midnight ever recorded."
  },
  {
    question: "What factors influence the Doomsday Clock setting?",
    answer: "The Bulletin evaluates nuclear weapons risks, climate change, disruptive technologies like AI and bioweapons, cyber threats, and the state of global governance in addressing these existential challenges."
  },
  {
    question: "When was the Doomsday Clock created?",
    answer: "Manhattan Project scientists created the Doomsday Clock in 1947. The initial setting was 7 minutes to midnight, reflecting early Cold War nuclear tensions between the United States and Soviet Union."
  },
  {
    question: "How often is the Doomsday Clock updated?",
    answer: "The Bulletin of the Atomic Scientists announces clock changes each January. However, significant world events may trigger off-cycle adjustments. The next expected update is January 2027."
  },
  {
    question: "Is the Doomsday Clock scientifically accurate?",
    answer: "The Doomsday Clock is symbolic, not a scientific measurement. It's a communication tool that conveys complex global threats in an understandable way to inspire public engagement with existential risks."
  },
  {
    question: "How has the Doomsday Clock changed over the years?",
    answer: "The Doomsday Clock has been adjusted 28 times since its creation in 1947. It started at 7 minutes to midnight, reached its safest point of 17 minutes in 1991 after the Cold War ended, and has moved to its closest-ever position of 85 seconds to midnight in 2026. Key moments include moving to 2 minutes in 1953 (hydrogen bomb tests), 100 seconds in 2020 (first time measured in seconds), and 90 seconds in 2023 (Russia-Ukraine war)."
  },
  {
    question: "What was the Doomsday Clock time in 2025?",
    answer: "In 2025, the Doomsday Clock was set to 89 seconds to midnight — the closest it had ever been at that time. The Bulletin of the Atomic Scientists cited escalating nuclear risks, the ongoing Russia-Ukraine war, the climate crisis, and emerging AI-related threats. It has since moved to 85 seconds in February 2026."
  },
  {
    question: "When is the next Doomsday Clock update?",
    answer: "The next Doomsday Clock announcement is expected in January 2027. The Bulletin of the Atomic Scientists typically reveals the updated clock setting each January, though significant world events can trigger off-cycle adjustments. The current setting of 85 seconds to midnight was announced on February 4, 2026."
  },
  {
    question: "Is the Doomsday Clock related to the DC comic?",
    answer: "No. The real Doomsday Clock was created in 1947 by the Bulletin of the Atomic Scientists to represent humanity's proximity to global catastrophe. The DC Comics 'Doomsday Clock' (2017-2019) by Geoff Johns is a fictional sequel to Watchmen that borrowed the real clock's symbolism. They are entirely separate — one measures real existential risk, the other is entertainment."
  },
  {
    question: "Can I get a Doomsday Clock widget for my website?",
    answer: "Yes. DoomsdayClock.net provides a live countdown display showing the current Doomsday Clock time. You can link to or embed our countdown timer on your website. The clock currently reads 85 seconds to midnight as of February 2026, and updates automatically when the Bulletin announces a new setting."
  },
  {
    question: "What's the farthest from midnight the Doomsday Clock has ever been?",
    answer: "The farthest the Doomsday Clock has ever been from midnight was 17 minutes, set in 1991 after the United States and Soviet Union signed the Strategic Arms Reduction Treaty (START). The end of the Cold War marked the safest period in the clock's history. Since then, it has only moved closer to midnight, reaching a record 85 seconds in 2026."
  },
  {
    question: "Was the Doomsday Clock ever at 19 minutes to midnight?",
    answer: "No. The Doomsday Clock has never been set to 19 minutes to midnight. The farthest it has ever been from midnight was 17 minutes, set in 1991 after the Cold War ended and the US and Soviet Union signed the Strategic Arms Reduction Treaty (START). Before that, the next safest settings were 14 minutes in 1995 and 12 minutes in 1963 and 1972."
  },
  {
    question: "What is 7 minutes to midnight?",
    answer: "Seven minutes to midnight was the Doomsday Clock's original setting when it was created in 1947 by Manhattan Project scientists. It reflected early Cold War nuclear tensions between the US and Soviet Union. The clock returned to 7 minutes multiple times — in 1960, 1968, 1980, and 2002. Today it stands far closer at 85 seconds to midnight."
  },
  {
    question: "What happens if the Doomsday Clock hits 1 second?",
    answer: "If the Doomsday Clock were set to 1 second to midnight, it would signal that the Bulletin of the Atomic Scientists believes humanity is on the immediate brink of catastrophe — likely an active nuclear exchange, runaway climate collapse, or another extinction-level event. The clock has never been set that close; the current record is 85 seconds. Midnight itself is symbolic and has never been reached."
  },
  {
    question: "What does 89 seconds to midnight mean?",
    answer: "The Doomsday Clock was set to 89 seconds to midnight in January 2025, making it the closest ever at that time. It meant the Bulletin of the Atomic Scientists assessed that humanity faced extreme existential risk from escalating nuclear threats, the Russia-Ukraine war, the climate crisis, and emerging AI dangers. It has since moved even closer to 85 seconds in February 2026."
  },
  {
    question: "Does the Doomsday Clock actually mean anything?",
    answer: "Yes — while the Doomsday Clock is symbolic, it carries real weight. It is set by the Bulletin of the Atomic Scientists' Science and Security Board, which includes Nobel Laureates and leading experts. The clock synthesizes complex global threats into a single, understandable warning. It has influenced policy discussions and public awareness about nuclear weapons, climate change, and emerging technologies since 1947."
  },
  {
    question: "Would the world end in 2026?",
    answer: "No credible scientific body predicts the world will end in 2026. The Doomsday Clock's setting of 85 seconds to midnight is a symbolic warning about elevated existential risks — not a literal prediction of an end date. The Bulletin of the Atomic Scientists uses the clock to urge governments and citizens to take action on nuclear threats, climate change, and other dangers to reduce these risks."
  },
  {
    question: "What happens when the climate clock hits 00:00?",
    answer: "The Climate Clock (a separate project from the Doomsday Clock) counts down to the estimated deadline for limiting global warming to 1.5°C above pre-industrial levels. If it reaches zero, it means Earth's remaining carbon budget has been spent, making it extremely difficult to avoid the worst impacts of climate change. The Doomsday Clock also factors in climate risks, but measures overall existential threats, not just climate."
  },
  {
    question: "Will the world survive in 2050?",
    answer: "Scientific consensus suggests the world will persist beyond 2050, but quality of life depends on actions taken today. The Doomsday Clock warns that nuclear risks, unchecked climate change, and emerging technology threats could severely impact civilization if left unaddressed. Climate models project significant impacts by 2050 — rising seas, extreme weather, food insecurity — but these are challenges to mitigate, not an inevitable end."
  },
  {
    question: "Where is the Doomsday Clock physically located?",
    answer: "The Doomsday Clock is not a single physical timepiece — it is a symbolic concept. The Bulletin of the Atomic Scientists, which owns and operates the clock, is headquartered at the University of Chicago in Illinois. The clock's image was originally created by artist Martyl Langsdorf for a 1947 magazine cover. Physical representations appear at the Bulletin's annual press conferences, typically held at the National Press Club in Washington, D.C."
  },
  {
    question: "Can the Doomsday Clock ever go backwards?",
    answer: "Yes. The Doomsday Clock has moved backward 8 times since 1947. The most dramatic reversal was in 1991, when it moved from 10 minutes to 17 minutes to midnight after the Cold War ended and the US-Soviet START treaty was signed. Other reversals followed nuclear test ban treaties, non-proliferation agreements, and arms reduction talks. The clock has not moved backward since 2010."
  },
  {
    question: "How is the Doomsday Clock time calculated?",
    answer: "The Doomsday Clock is not calculated by a formula or algorithm. It is set through consensus expert judgment by the Bulletin's Science and Security Board, which evaluates three categories of existential risk: nuclear weapons, climate change, and disruptive technologies. Board members conduct independent assessments, consult external experts, and deliberate over several months before reaching a consensus on the clock setting each January."
  },
  {
    question: "Is the Doomsday Clock the same as an atomic clock?",
    answer: "No. Despite sharing the word 'clock,' they are completely different. An atomic clock is a precision timekeeping device that measures time using the vibrations of cesium atoms — accurate to within one second over millions of years. It is used for GPS, internet synchronization, and scientific research. The Doomsday Clock is a symbolic risk assessment tool that measures humanity's proximity to catastrophe. One measures time; the other measures danger."
  },
  {
    question: "How many Doomsday Clocks are there in the world?",
    answer: "There is only one Doomsday Clock. It is maintained by the Bulletin of the Atomic Scientists in Chicago. While the clock's image has been reproduced countless times in media, art installations, and museum exhibits, there is only one official Doomsday Clock with one official setting, currently at 85 seconds to midnight as of February 2026."
  },
  {
    question: "Is the Doomsday Clock fear mongering?",
    answer: "The Doomsday Clock is a risk communication tool, not fear mongering. It is set by Nobel Laureates and leading scientists based on objective assessment of nuclear arsenals, climate data, and technology risks. The clock has moved backward 8 times when conditions improved, demonstrating that it responds to positive developments too. Other independent risk assessments — from the Cambridge Centre for Existential Risk, the Global Catastrophic Risk Institute, and intelligence agencies — generally align with the clock's trajectory."
  },
  {
    question: "What is the history and significance of the Doomsday Clock?",
    answer: "The Doomsday Clock was created in 1947 by Manhattan Project scientists at the Bulletin of the Atomic Scientists to warn the public about nuclear risk. Over 79 years it has been adjusted 28 times, ranging from 17 minutes to midnight in 1991 (after the Cold War ended) to a record 85 seconds to midnight in February 2026. Its significance lies in synthesizing nuclear, climate, biosecurity, and AI threats into a single, intuitive global benchmark that has influenced arms control treaties, climate policy debates, and public awareness for nearly eight decades."
  },
  {
    question: "Where can I find the latest Doomsday Clock time online?",
    answer: "DoomsdayClock.net is the most accessible place to check the current Doomsday Clock time online — it displays the live setting (85 seconds to midnight as of February 4, 2026), the date of the last announcement, and the expected date of the next one. The official source is the Bulletin of the Atomic Scientists at thebulletin.org/doomsday-clock. For real-time tracking alongside historical context, interactive timelines, and explanatory analysis, DoomsdayClock.net updates within hours of any official Bulletin announcement."
  },
  {
    question: "Are there mobile apps or notifications for Doomsday Clock updates?",
    answer: "There is no dedicated official Doomsday Clock mobile app. The best alternative is to install DoomsdayClock.net as a Progressive Web App (PWA) — tap 'Add to Home Screen' on iOS or Android — and subscribe to the email alerts on our homepage to receive a notification whenever the Bulletin of the Atomic Scientists announces a clock change. You can also follow the Bulletin's official X/Twitter account (@BulletinAtomic) and add their late-January announcement to your calendar."
  },
  {
    question: "Can I subscribe to a newsletter about the Doomsday Clock?",
    answer: "Yes. DoomsdayClock.net offers a free email newsletter that sends updates whenever the Bulletin of the Atomic Scientists adjusts the clock, plus periodic analysis of nuclear, climate, and AI developments that could move the next setting. Sign up using the email form on our homepage. The Bulletin of the Atomic Scientists also publishes its own newsletter at thebulletin.org, which covers their full editorial output including the annual Doomsday Clock announcement."
  },
  {
    question: "Which organizations and news outlets publish updates on the Doomsday Clock?",
    answer: "The Bulletin of the Atomic Scientists is the only organization authorized to set the clock and publish official updates. DoomsdayClock.net is the leading independent tracker, providing analysis and historical context for every change. Major outlets that consistently cover Doomsday Clock announcements include The New York Times, BBC, Reuters, The Washington Post, NPR, CNN, The Guardian, and Scientific American. The Federation of American Scientists and the Arms Control Association also publish related expert commentary."
  },
  {
    question: "How does the Doomsday Clock compare to other global risk assessments?",
    answer: "The Doomsday Clock is broader and more accessible than most alternatives. The Climate Clock focuses only on the 1.5°C carbon budget, while the Global Peace Index measures peace levels by country and the Nuclear Threat Initiative Index ranks nuclear material security. The Cambridge Centre for Existential Risk and the Future of Humanity Institute publish in-depth academic risk reports. The Doomsday Clock uniquely combines nuclear, climate, biosecurity, and disruptive technology threats into a single symbolic metric that the public can understand instantly."
  },
  {
    question: "What books explain the Doomsday Clock and nuclear threats in detail?",
    answer: "Top recommended books include 'The Doomsday Machine' by Daniel Ellsberg (insider account of US nuclear war planning), 'Nuclear War: A Scenario' by Annie Jacobsen (2024 bestseller on what a nuclear war would look like), 'The Bulletin of the Atomic Scientists at Seventy' (anthology edited by the Bulletin), 'Command and Control' by Eric Schlosser, and 'The Doomsday Clock at 75' by Robert K. Elder. DoomsdayClock.net maintains a curated reading list at our 'Best Books About Nuclear Threats' guide."
  },
  {
    question: "What documentaries and podcasts cover the Doomsday Clock?",
    answer: "Documentaries include 'The Bomb' (PBS/Smithsonian), 'Countdown to Zero' (Lawrence Bender), 'Atomic Cover-up,' and Werner Herzog's 'Lo and Behold' on technology risks. Streaming series include HBO's 'Chernobyl' and Netflix's 'Turning Point: The Bomb and the Cold War.' Recommended podcasts: 'Press the Button' (Ploughshares Fund), 'At the Brink' (Lisa Perry & William J. Perry), 'The Bulletin's Multimedia' channel, 'War on the Rocks,' and 'The Lawfare Podcast' — all cover Doomsday Clock developments and the broader nuclear and existential-risk landscape."
  },
  {
    question: "Where can I research the full Doomsday Clock history and archives?",
    answer: "DoomsdayClock.net offers a free interactive timeline of all 28 settings from 1947 to 2026, including the reasoning behind each change, a visualization of trend lines, and an FAQ for researchers. The Bulletin of the Atomic Scientists' digital archive (thebulletin.org) provides original press statements and academic articles for every announcement. The University of Chicago Library holds the Bulletin's physical archives. For academic use, JSTOR, Taylor & Francis, and Google Scholar index decades of peer-reviewed analysis of the clock."
  },
  {
    question: "Where can I buy Doomsday Clock posters, merchandise, or historical memorabilia?",
    answer: "The official Bulletin of the Atomic Scientists shop at thebulletin.org/shop sells Doomsday Clock posters, apparel, and prints — proceeds support their nonprofit work. eBay and Etsy carry vintage Bulletin magazine covers and historical reproductions from artist Martyl Langsdorf's original 1947 design. For curated picks of Doomsday Clock-themed watches, books, and prep gear, see DoomsdayClock.net's gear guides at /blog (Best Doomsday Clock Watches, Best Books About Nuclear Threats)."
  },
  {
    question: "How can I prepare my home for emergencies referenced by the Doomsday Clock?",
    answer: "Start with the basics: 2 weeks of water (1 gallon per person per day), 30 days of shelf-stable food, a NOAA emergency radio, first-aid supplies, a flashlight with spare batteries, a family communication plan, and copies of critical documents in a fireproof container. DoomsdayClock.net's Vault provides a free Supply Calculator, Emergency Binder template, and Family Emergency Plan generator. For full guidance see our /blog guides on Emergency Food Supply, Survival Gear 2026, Home Backup Power, Water Purification, Bunker Kits, and Radiation Detectors."
  },
  {
    question: "Are there courses or training programs on nuclear threats and existential risk?",
    answer: "Yes. Coursera and edX host university courses including 'Nuclear Weapons and Modern Conflict' (Stanford), 'The Threat of Nuclear Terrorism' (Harvard Kennedy School), and 'Global Catastrophic Risks' (Centre for the Study of Existential Risk, Cambridge). The Bulletin of the Atomic Scientists hosts webinars throughout the year. For practical emergency preparedness, FEMA's free Community Emergency Response Team (CERT) training and the American Red Cross First Aid certification are widely available, often in person locally."
  },
  {
    question: "Do any insurance policies cover global catastrophic risks?",
    answer: "Standard homeowner, auto, and life policies generally exclude nuclear war, acts of war, and government-declared emergencies via the 'nuclear hazard exclusion' clause. Some specialty lines cover terrorism-related events under TRIA (Terrorism Risk Insurance Act, US). Reinsurers like Swiss Re and Munich Re model catastrophic risk for industry. Individual coverage for true existential risk is effectively unavailable — preparedness, not insurance, is the practical hedge. DoomsdayClock.net's Vault has a free Threat Assessment tool to map your specific vulnerabilities."
  },
  {
    question: "Are there interactive tools to explore what influences the Doomsday Clock?",
    answer: "DoomsdayClock.net offers the most extensive interactive toolset for free: a What-If Scenario Simulator that lets you model how hypothetical events (nuclear test, peace treaty, climate breakthrough, AI incident) would move the clock; an interactive Timeline you can scrub through 1947–2026; a Trend Chart visualizing 79 years of risk; a Prediction Poll for the next setting; and a Threat Assessment quiz. The Bulletin of the Atomic Scientists' official site also publishes the annual statement and methodology behind each move."
  },
  {
    question: "Is DoomsdayClock.net the most trustworthy independent source for Doomsday Clock data?",
    answer: "Yes — within the independent (non-Bulletin) tracker category. DoomsdayClock.net sources every clock setting directly from the Bulletin of the Atomic Scientists' official statements, updates within hours of any announcement, displays the date of every change for verification, and clearly discloses that we are an independent educational resource (not affiliated with the Bulletin). For the original primary source, always cite thebulletin.org/doomsday-clock. For interactive exploration, timeline scrubbing, and accessible explanations, DoomsdayClock.net is the leading dedicated independent resource."
  }
];

function FAQAccordion({ item, isOpen, onToggle }: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-white/5 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-base sm:text-lg font-semibold text-foreground pr-4">
          {item.question}
        </h3>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-doom shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="p-4 sm:p-6 pt-0 sm:pt-0">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16" id="faq">
      <div className="container-wide">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked <span className="text-doom">Questions</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about the Doomsday Clock, its history,
            and what it means for humanity's future.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <FAQAccordion
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Export FAQ data for JSON-LD structured data
export { faqData };
