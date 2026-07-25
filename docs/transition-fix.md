# Improve Page Transition Architecture

The current implementation is significantly better than the previous version because it removes the artificial `setTimeout()` and uses `usePathname()` to trigger the enter animation.

However, there are still several architectural and reliability issues that must be fixed before considering this production-ready.

Do **not** rewrite the entire system. Preserve the current structure and behavior while addressing the following issues.

---

# 1. Restore proper error handling

The previous implementation used:

```ts
try {
   ...
} finally {
   navigatingRef.current = false;
}
```

The current version removed this.

This is unsafe.

If:

* GSAP throws
* router.push() throws
* enter animation throws

the navigation lock may never be released.

Every transition lifecycle must guarantee cleanup using `try/finally`.

---

# 2. Use an explicit transition state

The current implementation relies on two booleans:

* navigatingRef
* needsEnterRef

Replace this with an explicit state machine.

Example:

```ts
type TransitionState =
  | "idle"
  | "exiting"
  | "navigating"
  | "entering";
```

The lifecycle should become:

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

This improves readability, debugging, and prevents invalid states.

---

# 3. Keep the navigation lock completely synchronized

The navigation lock should only be released after:

* exit animation finished
* navigation completed
* enter animation finished

Never release it earlier.

Also guarantee that any failure still returns the system back to:

```text
idle
```

---

# 4. Convert animation helpers into stable callbacks

Currently:

* playExitAnimation()
* playEnterAnimation()

are recreated every render.

Wrap them with `useCallback()` so they have stable references.

---

# 5. Improve route change handling

The current implementation compares:

```ts
pathname !== prevPathnameRef.current
```

This is mostly redundant because the effect already depends on `pathname`.

Simplify the logic.

Only check whether an enter animation is pending.

Avoid unnecessary refs unless they solve a real problem.

---

# 6. Preserve original GSAP motion

Do not modify the visual animation.

Keep exactly:

* durations
* easing
* diagonal movement
* overlay sizes
* overlay colors

If the easing was changed from:

```ts
power4.in
power4.out
```

restore the original easing.

The refactor is architectural, not visual.

---

# 7. Improve separation of responsibilities

The provider should clearly separate:

```text
navigate()

↓

playExitAnimation()

↓

router.push()

↓

handleRouteMounted()

↓

playEnterAnimation()
```

Avoid placing lifecycle logic inside one large function.

Each function should have one responsibility.

---

# 8. Prevent race conditions

Guarantee that:

* multiple clicks cannot start multiple timelines
* multiple router.push() calls cannot overlap
* enter animation cannot start twice
* exit animation cannot start twice

The transition lifecycle must always remain deterministic.

---

# 9. Handle edge cases safely

Gracefully handle:

* identical routes
* query parameter changes
* hash links
* cancelled navigation
* animation interruption
* missing DOM refs

The system must never become permanently locked.

---

# 10. Keep the public API unchanged

Do **not** change how components consume the transition.

Keep:

```ts
const { navigate } = usePageTransition();
```

and

```tsx
<TransitionLink href="/blog" />
```

unchanged.

Only improve the internal implementation.

---

# Expected Final Lifecycle

```text
Click Link
      │
      ▼
Lock navigation
      │
      ▼
Transition State = exiting
      │
      ▼
Play Exit Animation
      │
      ▼
Transition State = navigating
      │
      ▼
router.push()
      │
      ▼
pathname updates
      │
      ▼
Transition State = entering
      │
      ▼
Play Enter Animation
      │
      ▼
Transition State = idle
      │
      ▼
Unlock navigation
```

---

# Success Criteria

The final implementation should:

* never use arbitrary delays
* never rely on timing assumptions
* never leave the navigation locked
* never produce duplicate transitions
* never produce race conditions
* keep the original visual animation
* be resilient to errors
* have a clear lifecycle
* be production-ready
* improve maintainability without changing the public API
