# Fix Missing Exit Transition Animation

After the architectural refactor, the overlay lifecycle is working correctly.

However, a new regression has appeared.

The exit animation no longer plays when navigating between pages.

Instead, the application immediately changes route and only the enter animation is visible.

This is **not** a visual issue.

It is a transition lifecycle issue.

---

# Goal

Restore the original navigation flow.

The lifecycle must always be:

```text
User clicks link
        │
        ▼
Lock transition
        │
        ▼
Play EXIT animation
        │
        ▼
Wait until EXIT animation is COMPLETELY finished
        │
        ▼
router.push()
        │
        ▼
Wait until destination page mounts
        │
        ▼
Play ENTER animation
        │
        ▼
Reset overlay
        │
        ▼
Unlock transition
```

The route must never change before the exit animation finishes.

---

# Investigate the Transition Manager

Review the navigation lifecycle inside the transition manager.

Verify:

* Is `playExit()` actually executed?
* Is it awaited correctly?
* Does `router.push()` execute only after `playExit()` resolves?
* Does any state transition bypass the exit animation?

There should never be a code path like:

```ts
router.push(...)
playExit(...)
```

or

```ts
playExit()
router.push()
```

without awaiting completion.

The correct sequence is:

```ts
await playExit(...)

router.push(...)
```

---

# Verify GSAP Timeline Completion

Inspect `playExit()`.

Ensure the returned Promise resolves only after the GSAP timeline has completely finished.

Do not resolve early.

Verify that:

* timeline onComplete fires correctly
* Promise resolves exactly once
* no race condition exists

---

# Verify Overlay Visibility

Ensure the exit animation starts from a visible overlay.

Before playing exit:

* overlay must be visible
* correct initial transform must be applied
* autoAlpha / visibility must allow rendering

The animation should not start from a hidden overlay.

---

# Verify State Machine

Confirm the transition state sequence:

```text
idle
    ↓
exiting
    ↓
navigating
    ↓
entering
    ↓
idle
```

No transition should skip the `exiting` state.

---

# Verify React Lifecycle

Ensure that no React effect immediately resets or hides the overlay while the exit animation is still running.

Check for:

* resetOverlay()
* initOverlay()
* playEnter()

Make sure none of them interrupt the exit animation.

---

# Verify Route Change Timing

The destination page should not render until the exit animation completes.

If necessary, move `router.push()` later in the lifecycle.

The router should wait for the animation, not the opposite.

---

# Debug the Actual Execution Order

Temporarily add logs to verify the exact order:

```text
Click

↓

playExit() started

↓

playExit() completed

↓

router.push()

↓

pathname changed

↓

playEnter() started

↓

playEnter() completed

↓

resetOverlay()

↓

idle
```

If the actual order differs, identify why.

---

# Success Criteria

The final behavior must be:

* Exit animation is always visible.
* Exit animation always completes before navigation.
* Route changes only after exit finishes.
* Enter animation plays after the destination page mounts.
* No flicker.
* No skipped animations.
* No race conditions.
* The centralized architecture remains unchanged.

Do not redesign the architecture.

Only restore the correct transition lifecycle while preserving the new Transition Manager structure.
