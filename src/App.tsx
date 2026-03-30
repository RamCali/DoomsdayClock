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
import { InstallPrompt } from "./components/InstallPrompt";
import { ForumPreview } from "./components/forum/ForumPreview";
import "./index.css";

// Lazy-loaded route components (code splitting)
const BlogIndex = lazy(() => import("./components/blog/BlogIndex").then(m => ({ default: m.BlogIndex })));
const USIranCrisis = lazy(() => import("./components/blog/USIranCrisis").then(m => ({ default: m.USIranCrisis })));
const DoomsdayClockHistory = lazy(() => import("./components/blog/DoomsdayClockHistory").then(m => ({ default: m.DoomsdayClockHistory })));
const DoomsdayClock2026 = lazy(() => import("./components/blog/DoomsdayClock2026").then(m => ({ default: m.DoomsdayClock2026 })));
const DoomsdayClock2027Prediction = lazy(() => import("./components/blog/DoomsdayClock2027Prediction").then(m => ({ default: m.DoomsdayClock2027Prediction })));
const DoomsdayClockVsPopCulture = lazy(() => import("./components/blog/DoomsdayClockVsPopCulture").then(m => ({ default: m.DoomsdayClockVsPopCulture })));
const WhatHappensAtMidnight = lazy(() => import("./components/blog/WhatHappensAtMidnight").then(m => ({ default: m.WhatHappensAtMidnight })));
const WhoControlsClock = lazy(() => import("./components/blog/WhoControlsClock").then(m => ({ default: m.WhoControlsClock })));
const WhatDoes89SecondsMean = lazy(() => import("./components/blog/WhatDoes89SecondsMean").then(m => ({ default: m.WhatDoes89SecondsMean })));
const WillTheWorldEnd = lazy(() => import("./components/blog/WillTheWorldEnd").then(m => ({ default: m.WillTheWorldEnd })));
const DoomsdayClockWatches = lazy(() => import("./components/blog/DoomsdayClockWatches").then(m => ({ default: m.DoomsdayClockWatches })));
const EmergencyFoodSupply = lazy(() => import("./components/blog/EmergencyFoodSupply").then(m => ({ default: m.EmergencyFoodSupply })));
const SurvivalGear2026 = lazy(() => import("./components/blog/SurvivalGear2026").then(m => ({ default: m.SurvivalGear2026 })));
const HomeBackupPower = lazy(() => import("./components/blog/HomeBackupPower").then(m => ({ default: m.HomeBackupPower })));
const WhatIsTheDoomsdayClock = lazy(() => import("./components/blog/WhatIsTheDoomsdayClock").then(m => ({ default: m.WhatIsTheDoomsdayClock })));
const DoomsdayClockCurrentTime = lazy(() => import("./components/blog/DoomsdayClockCurrentTime").then(m => ({ default: m.DoomsdayClockCurrentTime })));
const DoomsdayClockTimelineGraph = lazy(() => import("./components/blog/DoomsdayClockTimelineGraph").then(m => ({ default: m.DoomsdayClockTimelineGraph })));
const DoomsdayClock2025 = lazy(() => import("./components/blog/DoomsdayClock2025").then(m => ({ default: m.DoomsdayClock2025 })));
const DoomsdayClockClimateChange = lazy(() => import("./components/blog/DoomsdayClockClimateChange").then(m => ({ default: m.DoomsdayClockClimateChange })));
const DoomsdayClockColdWar = lazy(() => import("./components/blog/DoomsdayClockColdWar").then(m => ({ default: m.DoomsdayClockColdWar })));
const DoomsdayClockLocation = lazy(() => import("./components/blog/WhereDoomsdayClockLocated").then(m => ({ default: m.WhereDoomsdayClockLocated })));
const HowLongIs89Seconds = lazy(() => import("./components/blog/HowLongIs89Seconds").then(m => ({ default: m.HowLongIs89Seconds })));
const CanDoomsdayClockGoBackwards = lazy(() => import("./components/blog/CanDoomsdayClockGoBack").then(m => ({ default: m.CanDoomsdayClockGoBack })));
const HowDoomsdayClockCalculated = lazy(() => import("./components/blog/HowDoomsdayClockCalculated").then(m => ({ default: m.HowDoomsdayClockCalculated })));
const DoomsdayClockVsAtomicClock = lazy(() => import("./components/blog/DoomsdayClockVsAtomicClock").then(m => ({ default: m.DoomsdayClockVsAtomicClock })));
const HowToReadDoomsdayClock = lazy(() => import("./components/blog/HowToReadDoomsdayClock").then(m => ({ default: m.HowToReadDoomsdayClock })));
const IsDoomsdayClockRealOrFake = lazy(() => import("./components/blog/IsDoomsdayClockRealOrFake").then(m => ({ default: m.IsDoomsdayClockRealOrFake })));
const WhoCreatedDoomsdayClock = lazy(() => import("./components/blog/WhoCreatedDoomsdayClock").then(m => ({ default: m.WhoCreatedDoomsdayClock })));
const WhyDoomsdayClockImportant = lazy(() => import("./components/blog/WhyDoomsdayClockImportant").then(m => ({ default: m.WhyDoomsdayClockImportant })));
const DoomsdayClockThroughDecades = lazy(() => import("./components/blog/DoomsdayClockThroughDecades").then(m => ({ default: m.DoomsdayClockThroughDecades })));
const DoomsdayClockWatchmenComic = lazy(() => import("./components/blog/DoomsdayClockWatchmenComic").then(m => ({ default: m.DoomsdayClockWatchmenComic })));
const DoomsdayClockAI = lazy(() => import("./components/blog/DoomsdayClockAI").then(m => ({ default: m.DoomsdayClockAI })));
const DoomsdayClockVsThreatIndices = lazy(() => import("./components/blog/DoomsdayClockVsThreatIndices").then(m => ({ default: m.DoomsdayClockVsThreatIndices })));
const NuclearWeaponsCount = lazy(() => import("./components/blog/NuclearWeaponsCount").then(m => ({ default: m.NuclearWeaponsCount })));
const WhatWouldHappenNuclearWar = lazy(() => import("./components/blog/WhatWouldHappenNuclearWar").then(m => ({ default: m.WhatWouldHappenNuclearWar })));
const SevenMinutesToMidnight = lazy(() => import("./components/blog/SevenMinutesToMidnight").then(m => ({ default: m.SevenMinutesToMidnight })));
const DoomsdayClockNews = lazy(() => import("./components/blog/DoomsdayClockNews").then(m => ({ default: m.DoomsdayClockNews })));
const DoomsdayClockFAQ = lazy(() => import("./components/blog/DoomsdayClockFAQ").then(m => ({ default: m.DoomsdayClockFAQ })));
const WhenWillDoomsdayClockHitMidnight = lazy(() => import("./components/blog/WhenWillDoomsdayClockHitMidnight").then(m => ({ default: m.WhenWillDoomsdayClockHitMidnight })));
const BestBunkerKits = lazy(() => import("./components/blog/BestBunkerKits").then(m => ({ default: m.BestBunkerKits })));
const BestRadiationDetectors = lazy(() => import("./components/blog/BestRadiationDetectors").then(m => ({ default: m.BestRadiationDetectors })));
const BestEmergencyRadios = lazy(() => import("./components/blog/BestEmergencyRadios").then(m => ({ default: m.BestEmergencyRadios })));
const DoomsdayClockBooks = lazy(() => import("./components/blog/DoomsdayClockBooks").then(m => ({ default: m.DoomsdayClockBooks })));
const WaterPurificationSystems = lazy(() => import("./components/blog/WaterPurificationSystems").then(m => ({ default: m.WaterPurificationSystems })));
const EmbedCodeGenerator = lazy(() => import("./components/EmbedCodeGenerator").then(m => ({ default: m.EmbedCodeGenerator })));
const ForumPage = lazy(() => import("./components/forum/ForumPage").then(m => ({ default: m.ForumPage })));
const PostDetail = lazy(() => import("./components/forum/PostDetail").then(m => ({ default: m.PostDetail })));
const VerifyEmail = lazy(() => import("./components/auth/VerifyEmail").then(m => ({ default: m.VerifyEmail })));
const ResetPassword = lazy(() => import("./components/auth/ResetPassword").then(m => ({ default: m.ResetPassword })));
const OGImagePreview = lazy(() => import("./components/OGImagePreview").then(m => ({ default: m.OGImagePreview })));
const YearPage = lazy(() => import("./components/YearPage").then(m => ({ default: m.YearPage })));
const StorePage = lazy(() => import("./components/store/StorePage").then(m => ({ default: m.StorePage })));
const Advertise = lazy(() => import("./components/Advertise").then(m => ({ default: m.Advertise })));
const NuclearSurvivalGuide = lazy(() => import("./components/products/NuclearSurvivalGuide").then(m => ({ default: m.NuclearSurvivalGuide })));
const FamilyEmergencyPlan = lazy(() => import("./components/products/FamilyEmergencyPlan").then(m => ({ default: m.FamilyEmergencyPlan })));
const FoodPlanningGuide = lazy(() => import("./components/products/FoodPlanningGuide").then(m => ({ default: m.FoodPlanningGuide })));
const VaultLanding = lazy(() => import("./components/vault/VaultLanding").then(m => ({ default: m.VaultLanding })));
const SupplyCalculator = lazy(() => import("./components/vault/SupplyCalculator").then(m => ({ default: m.SupplyCalculator })));
const WaterPurificationTool = lazy(() => import("./components/vault/WaterPurificationTool").then(m => ({ default: m.WaterPurificationTool })));
const FrequencyReference = lazy(() => import("./components/vault/FrequencyReference").then(m => ({ default: m.FrequencyReference })));
const EmergencyBinder = lazy(() => import("./components/vault/EmergencyBinder").then(m => ({ default: m.EmergencyBinder })));
const ThreatAssessment = lazy(() => import("./components/vault/ThreatAssessment").then(m => ({ default: m.ThreatAssessment })));

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
                  <Route path="/blog/doomsday-clock-history-timeline" element={<DoomsdayClockHistory />} />
                  <Route path="/blog/doomsday-clock-2026" element={<DoomsdayClock2026 />} />
                  <Route path="/blog/doomsday-clock-2027-prediction" element={<DoomsdayClock2027Prediction />} />
                  <Route path="/blog/doomsday-clock-comic-vs-real" element={<DoomsdayClockVsPopCulture />} />
                  <Route path="/blog/what-happens-doomsday-clock-midnight" element={<WhatHappensAtMidnight />} />
                  <Route path="/blog/who-controls-doomsday-clock" element={<WhoControlsClock />} />
                  <Route path="/blog/what-does-89-seconds-to-midnight-mean" element={<WhatDoes89SecondsMean />} />
                  <Route path="/blog/will-the-world-end-doomsday-clock" element={<WillTheWorldEnd />} />
                  <Route path="/blog/best-doomsday-clock-watches" element={<DoomsdayClockWatches />} />
                  <Route path="/blog/emergency-food-supply-guide" element={<EmergencyFoodSupply />} />
                  <Route path="/blog/essential-survival-gear-2026" element={<SurvivalGear2026 />} />
                  <Route path="/blog/best-home-backup-power-systems" element={<HomeBackupPower />} />
                  <Route path="/blog/what-is-the-doomsday-clock" element={<WhatIsTheDoomsdayClock />} />
                  <Route path="/blog/doomsday-clock-current-time-today" element={<DoomsdayClockCurrentTime />} />
                  <Route path="/blog/doomsday-clock-timeline-graph" element={<DoomsdayClockTimelineGraph />} />
                  <Route path="/blog/doomsday-clock-2025" element={<DoomsdayClock2025 />} />
                  <Route path="/blog/doomsday-clock-climate-change" element={<DoomsdayClockClimateChange />} />
                  <Route path="/blog/doomsday-clock-cold-war" element={<DoomsdayClockColdWar />} />
                  <Route path="/blog/where-is-doomsday-clock-located" element={<DoomsdayClockLocation />} />
                  <Route path="/blog/how-long-is-89-seconds-doomsday-clock" element={<HowLongIs89Seconds />} />
                  <Route path="/blog/can-doomsday-clock-go-back" element={<CanDoomsdayClockGoBackwards />} />
                  <Route path="/blog/how-is-doomsday-clock-calculated" element={<HowDoomsdayClockCalculated />} />
                  <Route path="/blog/doomsday-clock-vs-atomic-clock" element={<DoomsdayClockVsAtomicClock />} />
                  <Route path="/blog/how-to-read-doomsday-clock" element={<HowToReadDoomsdayClock />} />
                  <Route path="/blog/is-doomsday-clock-real-or-fake" element={<IsDoomsdayClockRealOrFake />} />
                  <Route path="/blog/who-created-doomsday-clock" element={<WhoCreatedDoomsdayClock />} />
                  <Route path="/blog/why-is-doomsday-clock-important" element={<WhyDoomsdayClockImportant />} />
                  <Route path="/blog/doomsday-clock-through-decades" element={<DoomsdayClockThroughDecades />} />
                  <Route path="/blog/doomsday-clock-watchmen-comic" element={<DoomsdayClockWatchmenComic />} />
                  <Route path="/blog/doomsday-clock-and-artificial-intelligence" element={<DoomsdayClockAI />} />
                  <Route path="/blog/doomsday-clock-vs-other-threat-indices" element={<DoomsdayClockVsThreatIndices />} />
                  <Route path="/blog/how-many-nuclear-weapons-exist-2026" element={<NuclearWeaponsCount />} />
                  <Route path="/blog/what-would-happen-in-a-nuclear-war" element={<WhatWouldHappenNuclearWar />} />
                  <Route path="/blog/seven-minutes-to-midnight-doomsday-clock" element={<SevenMinutesToMidnight />} />
                  <Route path="/blog/doomsday-clock-news-updates" element={<DoomsdayClockNews />} />
                  <Route path="/blog/doomsday-clock-faq" element={<DoomsdayClockFAQ />} />
                  <Route path="/blog/when-will-doomsday-clock-hit-midnight" element={<WhenWillDoomsdayClockHitMidnight />} />
                  <Route path="/blog/best-underground-bunker-kits" element={<BestBunkerKits />} />
                  <Route path="/blog/best-radiation-detectors-geiger-counters" element={<BestRadiationDetectors />} />
                  <Route path="/blog/best-emergency-radios" element={<BestEmergencyRadios />} />
                  <Route path="/blog/best-doomsday-clock-books-nuclear-threats" element={<DoomsdayClockBooks />} />
                  <Route path="/blog/best-water-purification-systems-emergency" element={<WaterPurificationSystems />} />
                  <Route path="/doomsday-clock-:year" element={<YearPage />} />
                  <Route path="/store" element={<StorePage />} />
                  <Route path="/store/nuclear-survival-guide" element={<NuclearSurvivalGuide />} />
                  <Route path="/store/family-emergency-plan" element={<FamilyEmergencyPlan />} />
                  <Route path="/store/food-planning-guide" element={<FoodPlanningGuide />} />
                  <Route path="/vault" element={<VaultLanding />} />
                  <Route path="/vault/supply-calculator" element={<SupplyCalculator />} />
                  <Route path="/vault/water-purification" element={<WaterPurificationTool />} />
                  <Route path="/vault/frequency-reference" element={<FrequencyReference />} />
                  <Route path="/vault/emergency-binder" element={<EmergencyBinder />} />
                  <Route path="/vault/threat-assessment" element={<ThreatAssessment />} />
                  <Route path="/advertise" element={<Advertise />} />
                  <Route path="/embed" element={<EmbedCodeGenerator />} />
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
            <InstallPrompt />
          </div>
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
