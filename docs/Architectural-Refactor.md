# Architectural Refactor – Transition System

The current implementation works, but the architecture can be significantly improved.

Do **not** focus on changing the visual appearance.

The objective is to redesign the internal architecture so it becomes scalable, maintainable, and capable of supporting future transition types without duplicating logic.

The public API should remain unchanged whenever possible.

---

# Current Problems

After reviewing the project, several architectural issues were identified.

## 1. Two independent global transition systems

The application currently has two different systems:

* SplashScreen
* PageTransition

Both own:

* fullscreen overlays
* GSAP timelines
* animation lifecycle
* internal state

These systems are completely independent even though they solve the same problem.

This creates duplicated responsibilities.

---

## 2. Duplicate overlay implementations

SplashScreen creates its own fullscreen overlay.

PageTransition creates another fullscreen overlay.

Only one overlay should exist globally.

Future transition types should reuse the same overlay instead of creating new ones.

---

## 3. Split animation lifecycle

Splash animations are handled inside SplashScreen.

Route transitions are handled inside PageTransition.

The animation lifecycle should be centralized.

Instead of:

```text
SplashScreen
    ↓
own GSAP timeline

PageTransition
    ↓
own GSAP timeline
```

The architecture should become:

```text
Transition Manager
    │
    ├── Splash Controller
    ├── Route Controller
    ├── Animation Engine
    ├── Overlay Manager
    └── State Machine
```

---

# Refactor Goal

Create a centralized transition architecture.

The application should have one global transition manager responsible for every fullscreen transition.

Examples:

* splash animation
* page transition
* future modal transition
* loading transition
* error transition
* any fullscreen animation

All should reuse the same infrastructure.

---

# Desired Architecture

The implementation should be reorganized into something similar to:

```text
TransitionProvider
│
├── TransitionOverlay
│
├── TransitionManager
│
├── TransitionStateMachine
│
├── AnimationController
│
├── SplashController
│
└── RouteTransitionController
```

Responsibilities must be clearly separated.

---

# Overlay

There should be exactly ONE fullscreen overlay.

Do not create separate overlays for:

* SplashScreen
* PageTransition

Instead:

```text
TransitionOverlay

↓

used by

↓

Splash

↓

Route Transition

↓

Future transitions
```

The overlay should simply expose methods for animations.

---

# Animation Engine

Move all GSAP timeline logic into a dedicated animation controller.

Avoid embedding animation code directly inside React lifecycle hooks.

Example responsibilities:

```text
AnimationController

playSplash()

playExit()

playEnter()

reset()

cleanup()
```

React components should only trigger animations.

They should not build timelines themselves.

---

# State Machine

Replace scattered transition state with a centralized state machine.

Example:

```ts
type TransitionState =
  | "idle"
  | "splash"
  | "exiting"
  | "navigating"
  | "entering";
```

Only one state should exist globally.

Prevent impossible states.

---

# Splash Integration

Splash should become another transition type.

Instead of owning:

* overlay
* animation
* lifecycle

it should simply request:

```text
TransitionManager

↓

playSplash()
```

The manager controls everything else.

---

# Route Transition Integration

Route transitions should also become another transition type.

Instead of owning overlay and timeline:

```text
TransitionManager

↓

playExit()

↓

router.push()

↓

playEnter()
```

---

# Remove Responsibility Duplication

React components should not simultaneously manage:

* GSAP
* DOM overlay
* state machine
* routing
* lifecycle

Each concern should live in a dedicated module.

---

# Improve Maintainability

Aim for small modules with one responsibility.

Example:

```text
transition/

├── provider.tsx
├── overlay.tsx
├── manager.ts
├── animations.ts
├── state-machine.ts
├── splash.ts
├── route.ts
└── types.ts
```

Avoid one large provider containing every concern.

---

# Preserve Existing Behavior

Do not change:

* timings
* easing
* visual appearance
* overlay colors
* transition style

Users should not notice visual changes.

Only the architecture should improve.

---

# Public API

Preserve existing usage whenever possible.

Keep:

```ts
const { navigate } = usePageTransition();
```

Keep:

```tsx
<TransitionLink href="/about" />
```

Do not force changes across the application.

---

# Future Extensibility

The new architecture should make it easy to add new transitions such as:

* loading screen
* modal transitions
* page-to-page variants
* error screen
* onboarding animation
* custom transition presets

without modifying existing transition logic.

The system should follow the Open/Closed Principle.

---

# Success Criteria

The final architecture should:

* have exactly one fullscreen overlay
* have one centralized transition manager
* have one animation engine
* have one state machine
* eliminate duplicated transition responsibilities
* separate routing from animation logic
* separate animation from React lifecycle
* preserve the current public API
* preserve all existing visuals
* be scalable for future transition types
* improve readability and long-term maintainability

Do not simply reorganize files.

Perform a true architectural refactor that reduces coupling, increases cohesion, and creates a clean, production-ready transition system.
