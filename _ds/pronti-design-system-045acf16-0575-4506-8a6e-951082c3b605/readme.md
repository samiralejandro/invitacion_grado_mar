# Pronti Design System

Pronti is a small Colombian consultancy (Bogotá) selling an "operating layer" of
AI agents, marketing websites, data/BI, and internal software to SMBs — the pitch
is turning "comercial chaos into a system that responds." The one product asset
available for this design system is the public marketing site, `pronti.com.co`,
which sells three productized tiers: **Pronti Lite** (a digital menu/landing
page), **Pronti Expert** (a WhatsApp ordering agent), and a custom/a-medida
architecture tier.

**Source:** [github.com/samiralejandro/pronti](https://github.com/samiralejandro/pronti)
— a single static site (`index.html` + `styles.css` + `script.js`), no component
framework, no Figma file attached. Explore that repo directly for the full
scroll interactions (intro takeover, theme-transition scrubbing, mobile nav)
that this design system's static specimens can't fully capture.

This is a **from-scratch component build**: the source repo is plain HTML/CSS,
not a component library, so there is no existing inventory of primitives to
enumerate. The components here (`Button`, `Kicker`, `Card`, `Chip`,
`NumberedTile`) are a small set sized to what the real site actually uses —
not a generic UI-kit checklist. See "Intentional additions" below.

---

## Content fundamentals

- **Language:** Spanish (Colombia), formal-informal blend — "tú" implicitly via
  imperative/infinitive constructions ("Explorar sistema", "Elegir Lite"),
  never "usted." Copy speaks directly to the owner of a business, not a
  consumer.
- **Voice:** confident, systems-minded, anti-fluff. Copy constantly frames the
  product as infrastructure, not a feature: "No solo creamos sistemas bonitos.
  Creamos sistemas que sostienen la operación." It rejects trend-chasing:
  "Diseñamos alrededor del cuello de botella real, no de una moda técnica."
- **Structure:** headlines are short and declarative; body copy runs one
  sentence, rarely two. Sections open with a 1–3 word uppercase kicker
  ("Sistema Pronti", "Qué Construimos", "Equipo Pronti"), then a large
  compound-noun headline, then one supporting sentence.
  cost/benefit framing throughout ("La captación deja de traer ruido y empieza
  a traer demanda más clara").
- **Numbers as narrative:** steps and pillars are always numbered "01/02/03"
  rather than bulleted — reinforces the "system/pipeline" mental model.
  Pricing is stated plainly in COP with a "/mes" suffix — no false discounts,
  no "starting at."
- **Casing:** sentence case for body copy; headline case is naturally
  capitalized (not full caps) except kickers, which are always uppercase with
  wide tracking.
- **Emoji:** never. Iconography carries all illustrative weight (see below).
- **CTAs:** almost every CTA routes to a pre-filled WhatsApp deep link
  (`wa.me/...?text=...`) rather than a form — the whole funnel assumes
  WhatsApp-first commerce, typical of the Latin American SMB market.

## Visual foundations

- **Two-surface scroll system:** the page opens on a **light surface**
  (`#f7f9ff`, ink text) for hero + "Sistema" sections, then scroll-scrubs into
  a **dark surface** (`#05070b`, off-white text) for "Qué construimos",
  "Equipo" and "Productos" — driven by a dedicated theme-transition section
  with a traveling gradient orb. Treat light/dark as two first-class themes,
  not light-mode/dark-mode toggle — they coexist on one page.
- **Color:** neutral ink/off-white bases carry the reading surfaces; three
  brand accents — cyan `#6ee7ff`, fuchsia `#ff5ec4`, violet `#8a73ff` — do all
  the accenting, always as a diagonal gradient (`135deg`, fuchsia→violet is
  the primary-button gradient; cyan→violet→fuchsia is the wide "brand" gradient
  used in progress bars and the theme-transition orb). Never used as flat
  large fills — always gradient, glow (blurred radial), or small dots/pills.
- **Type:** **Syne** (display, weight 700–800, tight `-0.05em` tracking,
  ~0.98 line-height) for every heading — reads geometric, condensed, a little
  brash. **Instrument Sans** for everything else. Kickers are Instrument Sans
  too, just uppercase/wide-tracked/violet-or-cyan/bold.
- **Spacing & radius:** extremely round — nothing under 18px radius; panels
  and hero stages run 30–50px; buttons and chips are full pills. Section
  vertical rhythm is generous (~94px between major sections).
  Padding/gaps cluster around 12/14/18/20/22px rather than a strict 8pt grid —
  copy exact values from `styles.css`, don't snap to a grid.
- **Backgrounds:** no photography-as-background; instead soft radial-gradient
  "glows" (blurred 28–34px) in the brand accents sit behind panels, plus a
  faint 120×120px grid-line texture across the whole page (opacity ~0.03–0.04).
  No hand-drawn illustration, no repeating pattern beyond that grid.
- **Imagery:** a recurring 3D-rendered **hummingbird mascot** (magenta/violet
  body, cyan tail feathers) appears in a bright white studio setting, often at
  a desk/laptop, one prop per shot (glasses, mug, plant). Team photography is
  real, candid, warm-toned office photos. Product screenshot mockups
  (`Pronti_lite.webp` etc.) are flat-colored UI panels on white.
- **Animation:** slow, eased entrances only — `.reveal` fades+translates up
  28px on scroll-into-view (`0.8s`, `cubic-bezier(0.22,1,0.36,1)`). No bounce,
  no spring, no infinite decorative loops except two subtle continuous ones
  (a floating logo, a pulsing scroll-cue). The theme transition and hero
  "activation" states are scroll-position-driven, not time-driven.
- **Hover / press:** buttons lift `translateY(-2px)` and deepen their shadow
  on hover; cards lift `-4px` to `-8px` with a border-color shift toward
  violet/cyan; press (`:active`) shrinks buttons to `scale(0.98)`. No color
  darkening — lift + shadow + border-tint is the whole vocabulary.
  Focus rings are a 3px violet (light surface) or cyan (dark surface) glow,
  never a browser-default outline.
- **Borders:** hairline, 1px, always a translucent tint of ink (light
  surface, `rgba(8,17,31,0.06–0.08)`) or white (dark surface,
  `rgba(255,255,255,0.06–0.09)`) — never a solid brand-color border at rest;
  accent borders only appear on hover.
- **Shadows:** soft and diffuse only — 28–34px blur, 70–90px spread, low
  opacity (8–34%), tinted toward navy on light surfaces and pure black on
  dark. No hard/tight shadows anywhere.
- **Glass / blur:** the floating nav pill and the theme-transition shell use
  `backdrop-filter: blur(18px)` over translucent white/near-black — the only
  places blur appears; it signals "this floats above the page."
- **Cards:** large radius (30–34px), hairline border, soft shadow, no colored
  left-border accent, no drop-cap icon-in-a-box top-left corner motif. Content
  padding is generous (18–34px).
- **Corner radii:** sm 18px / md 30px / lg 44px / pill 999px — see the Radius
  Scale specimen.

## Iconography

No icon font, no Lucide/Heroicons/CDN icon set, and no emoji. Pronti's
"iconography" is entirely **bespoke flat-illustration SVGs** — one-off pieces
per service line (`service-web.svg`, `service-agents-ai.svg`, `service-data.svg`,
`service-intranet.svg`, `service-ops-data.svg`, plus lighter "-plain" variants
and product-tier illustrations like `product-lite-panel.svg`). They're detailed
neon/gradient scene illustrations (browser windows, chat bubbles, dashboards),
not simple glyphs — treat them as small hero art, not UI icons, and reach for
them at the size they were drawn (roughly square, ~1200×900 viewBox), never
scaled down to 16–24px. All were copied verbatim into `assets/` — do not
redraw or simplify them. If a future screen needs a true small UI glyph
(checkmarks, chevrons, etc. at 16–24px) that this repo doesn't provide, the
closest CDN match is **Phosphor Icons** (rounded terminals, similar warmth to
Syne's geometry) — flag any such substitution in your work.

## Assets copied

- `assets/pronti-logo.png` — the only real logo file (hummingbird mark + "Pronti" wordmark).
- `assets/pronti-mascot.png`, `assets/pronti-hero-mascot.png` — mascot renders.
- `assets/service-*-pronti-panel.png` — mascot-in-scene marketing panels (web/agents/ops).
- `assets/service-*.svg`, `assets/product-*.svg`, `assets/pronti-p-*.svg` — bespoke illustration set.
- `assets/equipo-*.jpeg/.jpg` — real team photography.
- `images/Pronti_lite.webp`, `Pronti_expert.webp`, `Pronti_escala.webp` — product-tier screenshot mockups.
- `assets/favicon-32.png`, `assets/apple-touch-icon.png` — favicons.

## Intentional additions

The source repo defines no component library (it's a hand-written static
page), so per the "from-scratch" rule this system authors a small standard
set instead of enumerating an existing one:

- **Button** — generalizes `.btn-primary`/`.btn-secondary`.
- **Kicker** — generalizes the repeated uppercase-eyebrow pattern.
- **Card** — generalizes the repeated rounded-panel shape (hero screens, service panels, rail cards, product cards all share one visual base).
- **Chip** — generalizes the ticker/cta-chip pill pattern.
- **NumberedTile** — generalizes the "01/02/03" step/pillar pattern.

These are deliberately few — the site doesn't use forms, tabs, dialogs, toasts,
or any other typical app chrome, so none were invented.

## Index

- `tokens/` — `colors.css`, `typography.css`, `effects.css` (spacing/radius/shadow/motion), `fonts.css` — all imported by root `styles.css`.
- `components/core/` — `Button`, `Kicker`, `Card`, `Chip`, `NumberedTile` (`.jsx` + `.d.ts` + `.prompt.md` each), plus `core.card.html` for the Design System tab.
- `ui_kits/marketing-site/` — click-through recreation of the pronti.com.co homepage (nav, hero, systems grid, service rail, team, products, CTA, footer).
- `ui_kits/marketing-site-v2/` — improved version with 3D animations: Three.js particle-wave intro takeover (replacing the Spline scene), 3D tilt on cards, scroll-driven theme-transition orb, scroll reveals, and a particle backdrop in the CTA panel.
- `guidelines/` — foundation specimen cards (colors, type, spacing, brand/logo/mascot/buttons/iconography) shown in the Design System tab.
- `assets/`, `images/` — real logo, mascot renders, service illustrations, team photos, product mockups.
- `SKILL.md` — portable skill file for using this system in Claude Code.

Explore [github.com/samiralejandro/pronti](https://github.com/samiralejandro/pronti) directly for the live scroll-interaction code (intro takeover, theme-transition scrubbing, mobile nav toggle) this static system doesn't reproduce.
