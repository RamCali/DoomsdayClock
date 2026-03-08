import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
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
import { PredictionPoll } from "./components/PredictionPoll";
import { EmailCapture } from "./components/EmailCapture";
import { Gamification } from "./components/Gamification";
import { CountdownTimer } from "./components/CountdownTimer";
import { SocialProof } from "./components/SocialProof";
import { TimeCapsule } from "./components/TimeCapsule";
import { EmailPopup } from "./components/EmailPopup";
import { ForumPreview } from "./components/forum/ForumPreview";
import "./index.css";

// Lazy-loaded route components (code splitting)
const BlogIndex = lazy(() => import("./components/blog/BlogIndex").then(m => ({ default: m.BlogIndex })));
const USIranCrisis = lazy(() => import("./components/blog/USIranCrisis").then(m => ({ default: m.USIranCrisis })));
const ForumPage = lazy(() => import("./components/forum/ForumPage").then(m => ({ default: m.ForumPage })));
const PostDetail = lazy(() => import("./components/forum/PostDetail").then(m => ({ default: m.PostDetail })));
const VerifyEmail = lazy(() => import("./components/auth/VerifyEmail").then(m => ({ default: m.VerifyEmail })));
const ResetPassword = lazy(() => import("./components/auth/ResetPassword").then(m => ({ default: m.ResetPassword })));
const OGImagePreview = lazy(() => import("./components/OGImagePreview").then(m => ({ default: m.OGImagePreview })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <CountdownTimer />
      <InteractiveTimeline />
      <PredictionPoll />
      <ForumPreview />
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
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen bg-background text-foreground">
            <ComicDisambiguation />
            <Header />
            <main className="pt-[calc(4rem+1.75rem)]">
              <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin" /></div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/og-preview" element={<OGImagePreview />} />
                  <Route path="/blog" element={<BlogIndex />} />
                  <Route path="/blog/us-iran-crisis-doomsday-clock" element={<USIranCrisis />} />
                  <Route path="/forum" element={<ForumPage />} />
                  <Route path="/forum/post/:id" element={<PostDetail />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />
                  <Route path="/reset-password" element={<ResetPassword />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <EmailPopup />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
