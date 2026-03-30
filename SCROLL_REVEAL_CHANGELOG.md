# Scroll Reveal Animation - Implementation Changelog

## Date: March 30, 2026

## Goal

Add scroll-triggered reveal animations to the portfolio website where:

- Sections fade in with slide animation when scrolling DOWN
- Sections fade out when scrolling UP (leaving them behind)
- Hero section stays visible always

---

## Files Created

### 1. `src/components/ScrollRevealWrapper.tsx` (NEW)

A reusable wrapper component that adds scroll-triggered reveal animations.

**Features:**

- Bidirectional animations using Framer Motion's `useInView` hook
- Multiple direction options: `up`, `down`, `left`, `right`
- `once` prop for elements that should stay visible (like Hero)
- Respects `prefers-reduced-motion` accessibility preference
- GPU-accelerated using `will-change: opacity, transform`
- Memoized with `React.memo` for performance

**Props:**

```typescript
interface ScrollRevealWrapperProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right"; // Default: "up"
  duration?: number; // Animation duration in seconds. Default: 0.6
  distance?: number; // Slide distance in pixels. Default: 50
  className?: string;
  style?: React.CSSProperties;
  once?: boolean; // If true, stays visible after first reveal. Default: false
  delay?: number; // Animation delay in seconds. Default: 0
}
```

**Usage:**

```tsx
// Hero - stays visible always
<ScrollRevealWrapper direction="up" once>
  <Hero />
</ScrollRevealWrapper>

// Other sections - fade in/out with scroll
<ScrollRevealWrapper direction="up" distance={50}>
  <About />
</ScrollRevealWrapper>
```

---

## Files Modified

### 1. `src/components/index.ts`

Added exports for the new ScrollRevealWrapper component:

```typescript
// Added:
export { ScrollRevealWrapper, ScrollRevealItem } from "./ScrollRevealWrapper";
export type {
  ScrollRevealWrapperProps,
  ScrollRevealItemProps,
  RevealDirection,
} from "./ScrollRevealWrapper";
```

### 2. `src/App.tsx`

Wrapped all major sections with ScrollRevealWrapper:

**Before:**

```tsx
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
```

**After:**

```tsx
<main>
  {/* Hero - once=true means stays visible */}
  <ScrollRevealWrapper direction="up" distance={40} once>
    <Hero />
  </ScrollRevealWrapper>

  {/* About - Fades in/out with scroll */}
  <ScrollRevealWrapper direction="up" distance={50}>
    <About />
  </ScrollRevealWrapper>

  {/* Technical Arsenal - Slide from right */}
  <ScrollRevealWrapper direction="right" distance={50}>
    <TechnicalArsenal />
  </ScrollRevealWrapper>

  {/* Projects - Slide up */}
  <ScrollRevealWrapper direction="up" distance={60}>
    <Projects />
  </ScrollRevealWrapper>

  {/* Timeline - Slide from left */}
  <ScrollRevealWrapper direction="left" distance={50}>
    <Timeline />
  </ScrollRevealWrapper>

  {/* Achievements - Slide up */}
  <ScrollRevealWrapper direction="up" distance={50}>
    <Achievements />
  </ScrollRevealWrapper>

  {/* CTA - Slide up */}
  <ScrollRevealWrapper direction="up" distance={40}>
    <CTA />
  </ScrollRevealWrapper>
</main>;

{
  /* Footer - Fade up */
}
<ScrollRevealWrapper direction="up" distance={30}>
  <Footer />
</ScrollRevealWrapper>;
```

---

## Files Deleted

### 1. `src/hooks/` directory

Initially created a hooks folder with `useScrollReveal.ts` but later removed it since all logic was consolidated into the `ScrollRevealWrapper` component for simplicity.

---

## Technical Implementation Details

### Animation Behavior:

1. **Scrolling DOWN:** Sections fade in (opacity 0→1) and slide into position when they enter the viewport from below
2. **Scrolling UP:** Sections fade out when they leave the viewport (once prop controls this)
3. **Hero section:** Has `once` prop, so it fades in once and stays visible forever

### Core Implementation (Current - Using Framer Motion's useInView):

```typescript
const isInView = useInView(ref, { 
  once: once, 
  amount: 0.15,       // Trigger at 15% visibility
  margin: "-30px 0px -30px 0px"  // Trigger 30px before viewport edge
});

// Animate based on visibility
animate={isInView ? visibleState : hiddenState}
```

### Dependencies Used:

- `framer-motion` (already in project) - For smooth animations via `motion.div` and `useInView`
- `useReducedMotion` from Framer Motion - Accessibility support

---

## Iterations & Attempts

### Attempt 1: Basic useInView
Used Framer Motion's `useInView` hook with `once: false`.
**Issue:** Elements would disappear when scrolling up past them (leaving viewport at top), not when scrolling up away from them.

### Attempt 2: useScroll + useTransform
Tried using Framer Motion's `useScroll` and `useTransform` for scroll-progress based animations.
**Issue:** Required container with `position: relative`, caused errors with the existing layout.

### Attempt 3: Custom scroll direction hook
Created custom `useScrollDirectionReveal` hook that tracks scroll direction.
**Issue:** Logic was inverted - elements were appearing when scrolling up instead of disappearing.

### Attempt 4: Simplified useInView approach (CURRENT FIX)
Reverted to using Framer Motion's `useInView` directly with proper configuration:
- `once: boolean` passed from props to control bidirectional vs one-time animation
- `amount: 0.15` for earlier trigger (15% visibility)
- `margin: "-30px 0px -30px 0px"` for viewport margin adjustment
- Removed custom scroll direction logic that was causing issues
- Simple state-based animation: `isInView ? visible : hidden`

**Key insight:** The original custom scroll direction logic was overcomplicating the solution. Framer Motion's `useInView` with `once: false` already handles bidirectional animations correctly - elements animate in when entering viewport and animate out when leaving.

---

## Known Issues / Warnings

1. **Spline component warning:** "Missing property" warnings from @splinetool/react-spline - This is unrelated to the scroll animation and existed before.

2. **Backend API error:** "Failed to load resource: net::ERR_NAME_NOT_RESOLVED" for backend.spendforcalculator.xyz - This is an external API issue, not related to scroll animations.

---

## How to Test

1. Run `npm run dev`
2. Scroll down slowly - sections should fade in with slide animation
3. Scroll back up - sections should fade out when they leave viewport
4. Verify Hero stays visible at all times (once=true)
5. Check browser DevTools console for any new errors

---

## Deployment Notes

No additional configuration needed for Vercel deployment. The changes are:

- Pure React/TypeScript code
- Uses existing Framer Motion dependency
- No new npm packages required
- No environment variables needed

---

## Future Improvements (Optional)

1. Add stagger animations for child elements within sections
2. Add different animation patterns (scale, rotate, blur)
3. Add smooth scroll snapping between sections
4. Consider throttling scroll event listener for better performance on low-end devices
