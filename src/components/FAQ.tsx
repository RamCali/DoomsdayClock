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
