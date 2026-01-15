import { useEffect } from "react";
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
import "./index.css";

function App() {
  useEffect(() => {
    injectSEO();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <InteractiveTimeline />
        <WhatIfScenarios />
        <TimelineChart />
        <Timeline />
        <FAQ />
        <UpcomingUpdate />
      </main>
      <Footer />
    </div>
  );
}

export default App;
