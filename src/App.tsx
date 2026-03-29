import { useEffect, useState, useCallback } from "react";
import {
  Header,
  Hero,
  About,
  TechnicalArsenal,
  Projects,
  Timeline,
  Achievements,
  CTA,
  Footer,
  CaseStudy,
  InteractiveParticles,
  BackgroundLights,
  InvertedCursor,
  LoadingScreen,
} from "./components";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showLoading, setShowLoading] = useState(true);
  const [mountSite, setMountSite] = useState(false);
  const [siteVisible, setSiteVisible] = useState(false);

  // Called during "welcome" phase — mount site hidden behind the overlay
  const handleExpanding = useCallback(() => {
    setMountSite(true);
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setShowLoading(false);
    // Small delay so the mounted site has settled before fading in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setSiteVisible(true);
      });
    });
  }, []);

  useEffect(() => {
    const handleLocation = () => {
      const path = window.location.pathname;
      if (path === "/case-study" || path === "/case-study/") {
        setCurrentPage("case-study");
      } else {
        setCurrentPage("home");
      }
    };

    handleLocation();
    window.addEventListener("popstate", handleLocation);
    return () => window.removeEventListener("popstate", handleLocation);
  }, []);

  if (currentPage === "case-study") {
    return (
      <>
        <InvertedCursor />
        <CaseStudy />
      </>
    );
  }

  return (
    <>
      {showLoading && (
        <LoadingScreen
          onComplete={handleLoadingComplete}
          onExpanding={handleExpanding}
        />
      )}
      {mountSite && (
        <div
          className={`min-h-screen bg-surface relative transition-opacity duration-700 ${
            siteVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <InvertedCursor />
          <BackgroundLights />
          <InteractiveParticles />
          <div className="relative z-10">
            <Header />
            <main>
              <Hero />
              <About />
              <TechnicalArsenal />
              <Projects />
              <Timeline />
              <Achievements />
              <CTA />
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
