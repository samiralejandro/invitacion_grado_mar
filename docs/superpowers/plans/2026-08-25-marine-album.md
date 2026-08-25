# Marine Album and Constellations Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mostrar las fotos completas, añadir constelaciones marinas reconocibles y actualizar el evento a las 6:00 p. m.

**Architecture:** Mantener la invitación como un único componente HTML y modificar solamente sus estilos y SVG declarativos. Las pruebas de aceptación se ejecutan contra la página real en el navegador local, no contra copias simuladas del DOM.

**Tech Stack:** HTML, CSS en línea, SVG, JavaScript y navegador integrado.

**Spec:** `docs/superpowers/specs/2026-08-25-marine-album-design.md`

## Global Constraints

- Las fotos deben mostrarse completas en todos los tamaños de pantalla.
- Deben existir exactamente tres constelaciones identificadas como `wave`, `seahorse` y `star`.
- La hora visible y la fecha interna del evento deben ser las 6:00 p. m.
- `index.html` e `Invitacion Valentina.dc.html` deben permanecer idénticos.

---

### Task 1: Album photos without cropping

**Files:**
- Modify: `index.html`
- Test: página real servida desde `http://127.0.0.1:4173/`

**Interfaces:**
- Consumes: objetos `mkFotos`, `mkGrid` y `libroStyle` existentes.
- Produces: imágenes renderizadas con `object-fit: contain` dentro de un libro con proporción `10 / 8.4`.

- [ ] **Step 1: Run the failing browser test**

```js
const photos = [...document.querySelectorAll('img[src^="fotos/"]')];
if (!photos.length || photos.some((img) => getComputedStyle(img).objectFit !== 'contain')) throw new Error('Album photos are cropped');
const book = photos[0].closest('[style*="aspect-ratio"]');
if (!book || book.getBoundingClientRect().height / book.getBoundingClientRect().width < 0.8) throw new Error('Album is too short');
```

Expected: FAIL because the current photos use `cover` and the book ratio is `0.7`.

- [ ] **Step 2: Implement the minimal album fix**

Set each memory photo to `objectFit: 'contain'`, give its image box a warm ivory background, and change `libroStyle.aspectRatio` to `10 / 8.4`.

- [ ] **Step 3: Re-run the test**

Expected: PASS at 320 px, 390 px, and desktop, with no horizontal overflow.

### Task 2: Marine constellations

**Files:**
- Modify: `index.html`
- Test: página real servida desde `http://127.0.0.1:4173/`

**Interfaces:**
- Consumes: night-sky layer and `twinkle` animation.
- Produces: three responsive SVGs with `data-constellation="wave"`, `data-constellation="seahorse"`, and `data-constellation="star"`.

- [ ] **Step 1: Run the failing browser test**

```js
const marine = [...document.querySelectorAll('[data-constellation]')];
const names = marine.map((node) => node.dataset.constellation).sort();
if (JSON.stringify(names) !== JSON.stringify(['seahorse', 'star', 'wave'])) throw new Error('Marine constellations are missing');
if (marine.some((node) => !node.getBoundingClientRect().width || !node.getBoundingClientRect().height)) throw new Error('A constellation is not visible');
```

Expected: FAIL because the current abstract SVG has no marine constellation identities.

- [ ] **Step 2: Implement the three responsive SVGs**

Draw a double-crest wave, a curved seahorse with spiral tail, and a five-point star. Keep each SVG in its own responsive container so one figure cannot be cropped by another.

- [ ] **Step 3: Re-run the test and visually inspect**

Expected: PASS with all three figures recognizable on mobile and desktop and no overlap with the moon.

### Task 3: Event time and mirrored source

**Files:**
- Modify: `index.html`
- Modify: `Invitacion Valentina.dc.html`
- Test: página real servida desde `http://127.0.0.1:4173/`

**Interfaces:**
- Consumes: event-card time text and `_vals()` countdown date.
- Produces: invitation copy and countdown consistently set to 18:00 on 12 September 2026.

- [ ] **Step 1: Run the failing browser test**

```js
const text = document.body.innerText;
if (!text.includes('6:00 p. m.') || text.includes('5:00 p. m.')) throw new Error('Event time is not 6:00 p. m.');
```

Expected: FAIL because the rendered invitation still shows 5:00 p. m.

- [ ] **Step 2: Implement the minimal time change**

Change the displayed time to `6:00 p. m.` and the event `Date` hour from `17` to `18`.

- [ ] **Step 3: Mirror and verify**

Copy the completed `index.html` to `Invitacion Valentina.dc.html`, confirm identical hashes, run `git diff --check`, inspect every album page at 320 px and 390 px, then publish the verified commit.
