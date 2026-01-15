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
import "./index.css";

function HomePage() {
  return (
    <>
      <Hero />
      <InteractiveTimeline />
      <WhatIfScenarios />
      <TimelineChart />
      <Timeline />
      <FAQ />
      <UpcomingUpdate />
    </>
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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <main>
                    <HomePage />
                  </main>
                  <Footer />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
