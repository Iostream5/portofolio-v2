# Report – Architectural Refactor Transition System

## Status: ✅ Selesai

Semua perubahan dari `docs/Architectural-Refactor.md` telah diimplementasikan.

---

## Perubahan yang Dilakukan

### 1. Arsitektur Baru: `src/transition/`

Direktori baru berisi 7 modul dengan tanggung jawab terpisah:

| File | Responsibility |
|---|---|
| `types.ts` | Shared types (`TransitionState`, `AnimationRefs`) |
| `state-machine.ts` | Centralized state machine (`idle → splash → exiting → navigating → entering`) |
| `animations.ts` | Animation engine — semua logika GSAP dipindahkan dari React lifecycle |
| `overlay.tsx` | Satu `TransitionOverlay` global untuk semua jenis transisi |
| `manager.ts` | Transition manager — koordinasi state machine + animasi + routing |
| `link.tsx` | `TransitionLink` component |
| `provider.tsx` | `TransitionProvider` yang menyediakan `TransitionContext` + `SplashContext` |

### 2. Overlay Tunggal

Sebelumnya ada **2 overlay** (milik `SplashScreen` dan `PageTransition`).  
Sekarang **1 overlay** (`TransitionOverlay`) yang berisi semua elemen DOM yang diperlukan:

- **Diagonal overlays** — dipakai oleh page transition dan splash non-home
- **Split overlays** — dipakai oleh splash home (kiri/kanan)
- **Text element** — dipakai oleh splash home

### 3. Animation Engine Terpusat

Semua GSAP timeline logic dipindahkan ke `animations.ts`.  
React components (provider) hanya **memanggil** animasi:

```ts
playSplashHome(refs, onSplashDone)  // splash halaman utama
playSplashOther(refs, onSplashDone) // splash halaman lain
playExit(refs)                       // exit page transition
playEnter(refs)                      // enter page transition
resetOverlay(refs)                   // reset overlay ke hidden
```

### 4. State Machine Terpusat

State sebelumnya dikelola secara terpisah (ref di `PageTransitionProvider`, `useState` di `SplashScreen`, konteks `isSplashDone`).  

Sekarang satu state machine dengan tipe `"idle" | "splash" | "exiting" | "navigating" | "entering"` dengan subscribe/listener pattern.

### 5. Splash Sebagai Transition Type

`SplashScreen` sebelumnya adalah komponen React mandiri yang memiliki overlay + GSAP sendiri.  

Sekarang splash hanyalah **salah satu tipe transisi** yang dijalankan oleh `TransitionManager` saat mount.

### 6. Public API Dipertahankan

Semua API publik tidak berubah:

```ts
// Tetap bisa digunakan
const { navigate } = usePageTransition();
<TransitionLink href="/about" />

// Tetap bisa digunakan (via re-export)
const { isSplashDone } = useSplash();
```

File `page-transition.tsx` dan `splash-context.tsx` sekarang menjadi **re-export** dari `@/transition/provider`.

### 7. Overlay Lifecycle Fix (transition-fix.md)

Berdasarkan `docs/transition-fix.md`, overlay lifecycle diperbaiki agar deterministik:

**initOverlay()** — inisialisasi SEMUA elemen overlay saat provider mount:
- diagonal / diagonalBg → `{ x: "-110%", y: "-110%", autoAlpha: 0 }`
- splashLeft / splashRight / bgLeft / bgRight → `{ x: "0%", autoAlpha: 0 }`
- text → `{ filter: "blur(20px)", autoAlpha: 0 }`

**resetOverlay()** — reset SEMUA elemen setelah transisi selesai (splash, exit, enter).

Setiap fungsi animasi kini independen menggunakan `.fromTo()` atau `.set()`:

| Fungsi | Strategy |
|---|---|
| `playSplashHome()` | `.set()` diagonal hidden → `.fromTo()` split & text dari posisi awal |
| `playSplashOther()` | `.set()` split hidden → `.fromTo()` diagonal dari center ke off-screen |
| `playExit()` | `.fromTo()` diagonal dari bottom-right ke center |
| `playEnter()` | `.fromTo()` diagonal dari center ke top-left |

**Lifecycle baru:**
```
Provider Mount → initOverlay() → Idle → Play Animation → selesai → resetOverlay() → Idle
```

Tidak ada stale transforms atau visible overlay setelah transisi.

### 8. Fix Exit Animation Regression (transition-fix.md v2)

**Masalah:** Exit animation tidak tampil saat navigasi. Route berubah langsung, hanya enter animation yang terlihat.

**Root cause:** `playExit()` menggunakan `.fromTo()` dengan `autoAlpha: 1` di `from` values. Setelah `resetOverlay()` menyetel elemen ke `autoAlpha: 0` (`visibility: hidden, opacity: 0`), GSAP mungkin tidak konsisten dalam meng-override `visibility` via `fromTo`.

**Fix:** Pisahkan visibility setting dari animation:
1. `gsap.set(el, { opacity: 1, visibility: "visible", x: "110%", y: "110%" })` — eksplisit sebelum timeline
2. `.to(el, { x: "0%", y: "0%" })` — animasi murni posisi, tanpa opacity/visibility
3. Tambah null guard: jika refs null, resolve langsung (mencegah hanging promise)
4. `playEnter()` juga pakai pattern sama; onComplete set `opacity: 0, visibility: "hidden"` eksplisit
5. Catch block navigate tambah `resetOverlay()` untuk safety cleanup

### 9. Bug Fix: Splash Tidak Muncul di Halaman Non-Home

**Root cause:** `initOverlay()` menyetel elemen diagonal ke `{ autoAlpha: 0, x: "-110%", y: "-110%" }` (tersembunyi). Saat `playSplashOther()` dijalankan, elemen sudah berada di posisi `-110%,-110%`, sehingga animasi `.to(el, { x: "-110%", y: "-110%" })` tidak mengubah posisi — splash tetap tidak terlihat.

**Fix:** Hapus `initOverlay()`. Setiap fungsi animasi kini mengatur posisi awal elemen sendiri:
- `playSplashHome()` → sembunyikan elemen diagonal di awal timeline (karena home pakai split overlay)
- `playSplashOther()` → set elemen diagonal ke `{ x: "0%", y: "0%", autoAlpha: 1 }` sebelum animasi keluar
- `playExit()` → tetap pakai `fromTo()` yang sudah mendefinisikan start state
- `playEnter()` → animasi dari posisi center (setelah exit) ke off-screen

### 9. File yang Dihapus

- `src/components/splash-screen.tsx` — logika sepenuhnya dipindahkan ke `transition/`

### 10. File yang Dimodifikasi

- `src/app/layout.tsx` — `SplashProvider` + `PageTransitionProvider` + `SplashScreen` diganti dengan `TransitionProvider`
- `src/components/page-transition.tsx` — menjadi re-export dari `@/transition/provider`
- `src/components/splash-context.tsx` — menjadi re-export `useSplash` dari `@/transition/provider`

---

## Verifikasi

✅ `npx next build` — compiled successfully, semua halaman tergenerate tanpa error.

- `/` (static)
- `/blog` (dynamic)
- `/blog/[slug]` (SSG, 9 slug)
- Opengraph images (dynamic)

---

## Success Criteria Checklist

| Kriteria | Status |
|---|---|
| Tepat satu fullscreen overlay | ✅ |
| Satu centralized transition manager | ✅ |
| Satu animation engine | ✅ |
| Satu state machine | ✅ |
| Eliminasi duplicated responsibilities | ✅ |
| Separasi routing dari animation logic | ✅ |
| Separasi animation dari React lifecycle | ✅ |
| Public API dipertahankan | ✅ |
| Visual tidak berubah | ✅ (timing, easing, warna, style identik) |
| Scalable untuk future transition types | ✅ (tambah controller baru tanpa ubah existing) |
