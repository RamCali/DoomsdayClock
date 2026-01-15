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
    answer: "The Doomsday Clock is at 90 seconds to midnight as of 2024. This is the closest it has ever been to symbolic global catastrophe since its creation in 1947 by the Bulletin of the Atomic Scientists."
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
    question: "Why is the Doomsday Clock at 90 seconds?",
    answer: "The clock moved to 90 seconds in January 2023 due to Russia's invasion of Ukraine and elevated nuclear escalation risk. Contributing factors include the climate crisis, eroded arms control treaties, and widespread disinformation."
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
    answer: "The Bulletin of the Atomic Scientists announces clock changes each January. However, significant world events may trigger off-cycle adjustments. The next expected update is January 2026."
  },
  {
    question: "Is the Doomsday Clock scientifically accurate?",
    answer: "The Doomsday Clock is symbolic, not a scientific measurement. It's a communication tool that conveys complex global threats in an understandable way to inspire public engagement with existential risks."
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
