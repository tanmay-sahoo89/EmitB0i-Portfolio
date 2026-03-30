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
  ScrollRevealWrapper,
  DualLaneDivider,
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
              {/* Hero - once=true means stays visible after first reveal */}
              <ScrollRevealWrapper direction="up" distance={40} once>
                <Hero />
              </ScrollRevealWrapper>

              {/* Dual Lane Divider: ABOUT */}
              <DualLaneDivider sectionName="ABOUT ME" />

              {/* About - Fades in/out with scroll */}
              <ScrollRevealWrapper direction="up" distance={50}>
                <About />
              </ScrollRevealWrapper>

              {/* Dual Lane Divider: SKILLS */}
              <DualLaneDivider sectionName="TECHNICAL ARSENAL" />

              {/* Technical Arsenal - Slide from right */}
              <ScrollRevealWrapper direction="right" distance={50}>
                <TechnicalArsenal />
              </ScrollRevealWrapper>

              {/* Dual Lane Divider: PROJECTS */}
              <DualLaneDivider sectionName="FEATURED PROJECTS" />

              {/* Projects - Slide up */}
              <ScrollRevealWrapper direction="up" distance={60}>
                <Projects />
              </ScrollRevealWrapper>

              {/* Dual Lane Divider: TIMELINE */}
              <DualLaneDivider sectionName="CAREER TIMELINE" />

              {/* Timeline - Slide from left */}
              <ScrollRevealWrapper direction="left" distance={50}>
                <Timeline />
              </ScrollRevealWrapper>

              {/* Dual Lane Divider: ACHIEVEMENTS */}
              <DualLaneDivider sectionName="ACHIEVEMENTS" />

              {/* Achievements - Slide up */}
              <ScrollRevealWrapper direction="up" distance={50}>
                <Achievements />
              </ScrollRevealWrapper>

              {/* Dual Lane Divider: CONTACT */}
              <DualLaneDivider sectionName="LET'S CONNECT" />

              {/* CTA - Slide up */}
              <ScrollRevealWrapper direction="up" distance={40}>
                <CTA />
              </ScrollRevealWrapper>
            </main>

            {/* Footer - Fade up */}
            <ScrollRevealWrapper direction="up" distance={30}>
              <Footer />
            </ScrollRevealWrapper>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
