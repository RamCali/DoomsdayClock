import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InteractiveTimeline } from "./components/InteractiveTimeline";
import { WhatIfScenarios } from "./components/WhatIfScenarios";
import { TimelineChart } from "./components/TimelineChart";
import { Timeline } from "./components/Timeline";
import { FAQ } from "./components/FAQ";
import { UpcomingUpdate } from "./components/UpcomingUpdate";
import { Footer } from "./components/Footer";
import { injectSEO } from "./components/SEO";
import { ErrorBoundary, NotFound } from "./components/errors";
import { OGImagePreview } from "./components/OGImagePreview";
import { PredictionPoll } from "./components/PredictionPoll";
import { EmailCapture } from "./components/EmailCapture";
import { Gamification } from "./components/Gamification";
import { CountdownTimer } from "./components/CountdownTimer";
import { SocialProof } from "./components/SocialProof";
import { TimeCapsule } from "./components/TimeCapsule";
import "./index.css";

function HomePage() {
  return (
    <>
      <Hero />
      <CountdownTimer />
      <InteractiveTimeline />
      <PredictionPoll />
      <TimeCapsule />
      <WhatIfScenarios />
      <TimelineChart />
      <Timeline />
      <Gamification />
      <FAQ />
      <EmailCapture />
      <UpcomingUpdate />
      <SocialProof />
    </>
  );
}

// Disambiguation banner for DC Comic/Watchmen searchers (reduces bounce rate)
function ComicDisambiguation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-zinc-900/95 border-b border-white/5 py-1.5 text-center text-xs text-muted-foreground">
      <span>Looking for the </span>
      <a
        href="https://en.wikipedia.org/wiki/Doomsday_Clock_(comics)"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
      >
        DC Watchmen Graphic Novel
      </a>
      <span>? This is the nuclear threat clock.</span>
    </div>
  );
}

function App() {
  useEffect(() => {
    injectSEO();
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <ComicDisambiguation />
          <Header />
          <main className="pt-[calc(4rem+1.75rem)]">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/og-preview" element={<OGImagePreview />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
