/* @ds-bundle: {"format":4,"namespace":"ProntiDesignSystem_045acf","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"NumberedTile","sourcePath":"components/core/NumberedTile.jsx"}],"sourceHashes":{"components/core/Button.jsx":"679ac2e5cdb7","components/core/Card.jsx":"b771648d827a","components/core/Chip.jsx":"89dc31694699","components/core/Kicker.jsx":"a38e5765e346","components/core/NumberedTile.jsx":"6d5beb4bbb38","ui_kits/marketing-site-v2/cta-footer-section.jsx":"269bb6b4309f","ui_kits/marketing-site-v2/effects.js":"fa52c0aa25c1","ui_kits/marketing-site-v2/explainer-section.jsx":"784302becad9","ui_kits/marketing-site-v2/hero-section.jsx":"db9d0f29de89","ui_kits/marketing-site-v2/intro-section.jsx":"66672bd6ce1e","ui_kits/marketing-site-v2/nav-section.jsx":"6740f305c84d","ui_kits/marketing-site-v2/products-section.jsx":"d0f69a9173d3","ui_kits/marketing-site-v2/service-rail-section.jsx":"770a55ec2fdb","ui_kits/marketing-site-v2/systems-section.jsx":"593db090c93f","ui_kits/marketing-site-v2/team-section.jsx":"b7970b17ca2d","ui_kits/marketing-site-v2/theme-transition-section.jsx":"2d25ac99d271","ui_kits/marketing-site-v2/three-scene.js":"9bd31b18fd0b","ui_kits/marketing-site-v2/whatsapp-demo-section.jsx":"d88d178f70a4","ui_kits/marketing-site/cta-footer-section.jsx":"b9a7f9fa3e54","ui_kits/marketing-site/hero-section.jsx":"7f186dccc178","ui_kits/marketing-site/nav-section.jsx":"89be62ef5653","ui_kits/marketing-site/products-section.jsx":"07ae74ac96fd","ui_kits/marketing-site/service-rail-section.jsx":"20090331bfec","ui_kits/marketing-site/systems-section.jsx":"d6c0c0141f23","ui_kits/marketing-site/team-section.jsx":"dfe4ccce3e1b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ProntiDesignSystem_045acf = window.ProntiDesignSystem_045acf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pronti pill button. Two visual variants matching the live site's
 * `.btn-primary` (gradient) and `.btn-secondary` (translucent) treatments.
 */
function Button({
  variant = "primary",
  size = "base",
  onDark = false,
  as: Tag = "button",
  children,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    minHeight: size === "large" ? 58 : 52,
    padding: size === "large" ? "14px 28px" : "14px 24px",
    borderRadius: "var(--radius-pill)",
    border: "1px solid transparent",
    fontFamily: "var(--font-body)",
    fontSize: size === "large" ? "1rem" : "0.98rem",
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "none",
    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease"
  };
  const variants = {
    primary: {
      color: "#ffffff",
      background: "var(--gradient-brand)",
      boxShadow: "var(--shadow-btn-primary)"
    },
    secondary: onDark ? {
      color: "var(--color-text-onDark)",
      background: "rgba(255, 255, 255, 0.04)",
      borderColor: "rgba(255, 255, 255, 0.09)"
    } : {
      color: "var(--color-text-onLight)",
      background: "rgba(255, 255, 255, 0.7)",
      borderColor: "var(--border-default)",
      boxShadow: "var(--shadow-btn-secondary)"
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * General-purpose rounded panel. Mirrors the card look used for hero
 * screens, service panels, rail cards and product cards — a soft-white or
 * near-black gradient fill with a large radius and a diffuse shadow.
 */
function Card({
  tone = "light",
  padding = 22,
  style,
  children,
  ...rest
}) {
  const tones = {
    light: {
      background: "linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(248,250,255,0.9) 100%)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-light)",
      color: "var(--text-primary)"
    },
    dark: {
      background: "linear-gradient(180deg, rgba(10,16,24,0.96) 0%, rgba(12,18,28,0.88) 100%)",
      border: "1px solid var(--border-default-dark)",
      boxShadow: "var(--shadow-dark)",
      color: "var(--text-primary-dark)"
    }
  };
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      margin: 0,
      borderRadius: "var(--radius-md)",
      padding,
      overflow: "hidden",
      fontFamily: "var(--font-body)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small rounded pill used for capability tickers and CTA chip rows. */
function Chip({
  onDark = false,
  children,
  style,
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    padding: "10px 14px",
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-body)",
    fontSize: "0.84rem"
  };
  const tone = onDark ? {
    border: "1px solid rgba(255,255,255,0.07)",
    background: "rgba(255,255,255,0.03)",
    color: "#d8e1ef"
  } : {
    border: "1px solid var(--border-default)",
    background: "rgba(255,255,255,0.64)",
    color: "var(--text-secondary)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      ...base,
      ...tone,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small uppercase eyebrow label — used above every heading in the site. */
function Kicker({
  onDark = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-kicker-size)",
      fontWeight: "var(--text-kicker-weight)",
      letterSpacing: "var(--text-kicker-tracking)",
      textTransform: "uppercase",
      color: onDark ? "var(--text-kicker-dark)" : "var(--text-kicker)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/NumberedTile.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Numbered index tile — the "01 / 02 / 03" pattern used for hero pillars
 * and manifesto steps.
 */
function NumberedTile({
  index,
  title,
  children,
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      padding: 18,
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${onDark ? "var(--border-default-dark)" : "rgba(8,17,31,0.06)"}`,
      background: onDark ? "rgba(255,255,255,0.03)" : "rgba(247,249,255,0.9)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-fuchsia)"
    }
  }, index), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 10,
      fontFamily: "var(--font-display)",
      fontSize: "1.08rem",
      lineHeight: 1.1,
      color: onDark ? "var(--text-primary-dark)" : "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: "0.94rem",
      color: onDark ? "var(--text-secondary-dark)" : "var(--text-secondary)"
    }
  }, children));
}
Object.assign(__ds_scope, { NumberedTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NumberedTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/cta-footer-section.jsx
try { (() => {
function CtaFooter() {
  const bgRef = React.useRef(null);
  React.useEffect(() => {
    let cleanup = () => {};
    if (window.ProntiScene && bgRef.current) {
      cleanup = window.ProntiScene.mount(bgRef.current, {
        orb: false,
        pointSize: 0.16,
        opacity: 0.45
      });
    }
    return cleanup;
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg-dark)",
      color: "var(--text-primary-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 var(--page-gutter) 36px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.08fr 0.92fr",
      gap: 22,
      padding: "clamp(30px,4vw,52px)",
      borderRadius: 44,
      border: "1px solid var(--border-default-dark)",
      background: "linear-gradient(145deg, rgba(10,17,27,0.98) 0%, rgba(22,12,34,0.96) 100%)",
      overflow: "hidden",
      boxShadow: "var(--shadow-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: bgRef,
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.7,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      margin: 0
    }
  }, "Diagn\xF3stico estrat\xE9gico"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      marginTop: 16,
      maxWidth: "10ch",
      fontSize: "clamp(2rem,3.6vw,3.4rem)"
    }
  }, "Dinos d\xF3nde hoy se atasca tu operaci\xF3n."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      maxWidth: "54ch",
      color: "var(--text-secondary-dark)",
      fontSize: "1.06rem"
    }
  }, "Si el problema est\xE1 en captar, responder, validar o coordinar al equipo, dise\xF1amos la capa correcta para empezar sin sobredimensionar el sistema."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 24
    }
  }, ["Ventas", "Pedidos", "Datos", "Operación interna"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      padding: "10px 14px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(255,255,255,0.03)",
      fontSize: "0.84rem",
      color: "#d8e1ef"
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "p-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 58,
      padding: "14px 28px",
      borderRadius: 999,
      color: "#fff",
      background: "var(--gradient-brand)",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, "Quiero mi diagn\xF3stico"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "p-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 58,
      padding: "14px 28px",
      borderRadius: 999,
      color: "var(--text-primary-dark)",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.09)",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, "Hablar con Pronti"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "28ch",
      color: "var(--text-secondary-dark)",
      fontSize: "0.94rem"
    }
  }, "Llamada para detectar el cuello de botella y definir por d\xF3nde conviene arrancar."))), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 22,
      padding: "26px 0 10px",
      color: "var(--text-secondary-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 14,
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pronti-logo.png",
    alt: "Pronti",
    style: {
      width: 40,
      height: 40,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("p", null, "Agentes, web, datos y software operativo conectados en una sola capa digital.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#soluciones",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Sistema"), /*#__PURE__*/React.createElement("a", {
    href: "#equipo",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Equipo"), /*#__PURE__*/React.createElement("a", {
    href: "#productos",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Productos"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Contacto")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/cta-footer-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/effects.js
try { (() => {
/* Pronti v2 — scroll reveals, 3D tilt, theme-transition progress.
   Call window.ProntiEffects.init() after React renders. */
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function initReveals() {
    const els = document.querySelectorAll("[data-reveal]");
    if (reduced) {
      els.forEach(function (el) {
        el.classList.add("is-revealed");
      });
      return;
    }
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12
    });
    els.forEach(function (el) {
      obs.observe(el);
    });
  }
  function initTilt() {
    if (reduced) return;
    document.querySelectorAll("[data-tilt]").forEach(function (el) {
      el.style.transformStyle = "preserve-3d";
      el.style.willChange = "transform";
      var raf = 0;
      el.addEventListener("pointermove", function (e) {
        var rect = el.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width - 0.5;
        var py = (e.clientY - rect.top) / rect.height - 0.5;
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function () {
          el.style.transform = "perspective(900px) rotateY(" + (px * 7).toFixed(2) + "deg) rotateX(" + (-py * 7).toFixed(2) + "deg) translateY(-4px)";
        });
      });
      el.addEventListener("pointerleave", function () {
        cancelAnimationFrame(raf);
        el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)";
      });
      el.style.transition = "transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.8s ease";
    });
  }
  function initThemeProgress() {
    var section = document.querySelector("[data-theme-transition]");
    if (!section) return;
    var ticking = false;
    function sync() {
      ticking = false;
      var rect = section.getBoundingClientRect();
      var vh = window.innerHeight;
      var start = vh * 0.78,
        end = vh * 0.12;
      var travel = rect.height + start - end;
      var p = (start - rect.top) / travel;
      p = Math.min(1, Math.max(0, p));
      if (reduced) p = rect.top < vh * 0.4 ? 1 : 0;
      document.body.style.setProperty("--theme-progress", p.toFixed(4));
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(sync);
    }
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    window.addEventListener("resize", onScroll);
    sync();
  }
  window.ProntiEffects = {
    init: function () {
      initReveals();
      initTilt();
      initThemeProgress();
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/effects.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/explainer-section.jsx
try { (() => {
const explainerServices = [{
  n: "01",
  title: "Sitios web",
  copy: "Páginas y menús digitales hechos para captar clientes, no solo para verse bien."
}, {
  n: "02",
  title: "Agente en WhatsApp",
  copy: "Un asistente que atiende 24/7, toma pedidos y responde como tu mejor vendedor."
}, {
  n: "03",
  title: "Datos y tableros",
  copy: "Cada venta queda registrada y ordenada: sabes qué se vende, cuándo y a quién."
}, {
  n: "04",
  title: "Software operativo",
  copy: "Tu equipo ve los pedidos en un tablero claro y solo se concentra en despachar."
}];
function Explainer() {
  return /*#__PURE__*/React.createElement("section", {
    id: "que-es",
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "94px var(--page-gutter) 0",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      maxWidth: 860,
      margin: "0 auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-violet)",
      margin: 0
    }
  }, "Qu\xE9 es Pronti"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 1.1,
      fontSize: "clamp(1.9rem,3.4vw,3rem)",
      margin: "16px auto 0"
    }
  }, "Pronti es el equipo digital que atiende, vende y organiza tu negocio."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "62ch",
      margin: "18px auto 0",
      color: "var(--text-secondary)",
      fontSize: "1.1rem",
      lineHeight: 1.55
    }
  }, "En vez de perder ventas por no contestar a tiempo, o anotar pedidos en papelitos y chats sueltos, Pronti conecta cuatro piezas que trabajan juntas:")), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16,
      marginTop: 44
    }
  }, explainerServices.map(s => /*#__PURE__*/React.createElement("article", {
    key: s.title,
    style: {
      position: "relative",
      padding: "28px 22px 26px",
      borderRadius: 30,
      border: "1px solid var(--border-default)",
      background: "rgba(255,255,255,0.8)",
      boxShadow: "var(--shadow-btn-secondary)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 22,
      right: 22,
      height: 3,
      borderRadius: "0 0 3px 3px",
      background: "var(--gradient-brand-wide)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "0.82rem",
      fontWeight: 700,
      letterSpacing: "0.16em",
      color: "var(--color-violet)"
    }
  }, s.n), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 10,
      fontFamily: "var(--font-display)",
      fontSize: "1.18rem",
      letterSpacing: "-0.02em",
      color: "var(--text-primary)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "10px 0 0",
      fontSize: "0.94rem",
      lineHeight: 1.5,
      color: "var(--text-secondary)"
    }
  }, s.copy)))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/explainer-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/hero-section.jsx
try { (() => {
function NumberedTile({
  index,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "0 12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-violet)"
    }
  }, index), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 8,
      fontFamily: "var(--font-display)",
      fontSize: "1.12rem",
      lineHeight: 1.1,
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px auto 0",
      maxWidth: "30ch",
      fontSize: "0.94rem",
      color: "var(--text-secondary)"
    }
  }, children));
}
function Chip({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "10px 14px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: "0.84rem",
      border: "1px solid var(--border-default)",
      background: "rgba(255,255,255,0.64)",
      color: "var(--text-secondary)"
    }
  }, children);
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "clamp(72px,9vh,130px) var(--page-gutter) 0",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero-stagger",
    style: {
      "--d": "0.05s",
      fontSize: "0.8rem",
      fontWeight: 600,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      margin: 0
    }
  }, "Pronti Operating Layer"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-stagger",
    style: {
      "--d": "0.15s",
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      lineHeight: 1.0,
      letterSpacing: "-0.05em",
      fontSize: "clamp(2.9rem,6.6vw,6rem)",
      maxWidth: "16ch",
      margin: "26px 0 0",
      color: "var(--text-primary)"
    }
  }, "El caos comercial, convertido en un", " ", /*#__PURE__*/React.createElement("span", {
    className: "hero-gradient-text"
  }, "sistema que responde.")), /*#__PURE__*/React.createElement("p", {
    className: "hero-stagger",
    style: {
      "--d": "0.3s",
      maxWidth: "44ch",
      marginTop: 28,
      fontSize: "clamp(1.1rem,1.8vw,1.4rem)",
      lineHeight: 1.4,
      color: "var(--text-secondary)",
      fontWeight: 500
    }
  }, "Agentes, sitios, datos y software operativo. La demanda entra clara, se procesa bien y llega a ejecuci\xF3n sin ruido."), /*#__PURE__*/React.createElement("div", {
    className: "hero-stagger",
    style: {
      "--d": "0.45s",
      display: "flex",
      gap: 22,
      marginTop: 34,
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#soluciones",
    className: "p-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 54,
      padding: "14px 30px",
      borderRadius: 999,
      color: "#fff",
      background: "var(--gradient-brand)",
      fontWeight: 700,
      fontSize: "1.02rem",
      textDecoration: "none",
      boxShadow: "var(--shadow-btn-primary)"
    }
  }, "Explorar sistema"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "var(--color-violet)",
      fontWeight: 600,
      fontSize: "1.02rem",
      textDecoration: "none"
    }
  }, "Hablar con Pronti ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: "1.1em"
    }
  }, "\u203A"))), /*#__PURE__*/React.createElement("figure", {
    className: "hero-stagger",
    "data-tilt": true,
    style: {
      "--d": "0.6s",
      margin: "clamp(48px,7vh,84px) 0 0",
      width: "min(880px, 100%)",
      overflow: "hidden",
      borderRadius: 44,
      border: "1px solid var(--border-default)",
      background: "#fff",
      boxShadow: "0 40px 110px rgba(19,33,61,0.16)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pronti-hero-mascot.png",
    alt: "Pronti \u2014 agente que toma pedidos, atiende clientes 24/7 y organiza la informaci\xF3n",
    style: {
      width: "100%",
      height: "clamp(300px,44vw,460px)",
      objectFit: "cover",
      objectPosition: "center 22%",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-stagger",
    style: {
      "--d": "0.75s",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 8,
      marginTop: "clamp(44px,6vh,72px)",
      width: "100%",
      maxWidth: 980
    }
  }, /*#__PURE__*/React.createElement(NumberedTile, {
    index: "01",
    title: "Entrada"
  }, "La captaci\xF3n deja de traer ruido y empieza a traer demanda m\xE1s clara."), /*#__PURE__*/React.createElement(NumberedTile, {
    index: "02",
    title: "Criterio"
  }, "La conversaci\xF3n valida, ordena y devuelve estructura antes de operaci\xF3n."), /*#__PURE__*/React.createElement(NumberedTile, {
    index: "03",
    title: "Control"
  }, "Datos, estados y equipo trabajando sobre la misma realidad operativa.")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stagger",
    style: {
      "--d": "0.9s",
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 40,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Chip, null, "Sitios que convierten"), /*#__PURE__*/React.createElement(Chip, null, "Agentes que ordenan"), /*#__PURE__*/React.createElement(Chip, null, "Tableros que muestran la verdad"))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/hero-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/intro-section.jsx
try { (() => {
function Intro({
  onDismiss
}) {
  const containerRef = React.useRef(null);
  const [leaving, setLeaving] = React.useState(false);
  React.useEffect(() => {
    let cleanup = () => {};
    if (window.ProntiScene && containerRef.current) {
      cleanup = window.ProntiScene.mount(containerRef.current, {
        orb: true,
        pointSize: 0.24,
        opacity: 0.9
      });
    }
    const onWheel = e => {
      if (Math.abs(e.deltaY) > 2) dismiss();
    };
    const onKey = e => {
      if (["ArrowDown", "PageDown", " ", "Space"].includes(e.key)) dismiss();
    };
    window.addEventListener("wheel", onWheel, {
      passive: true
    });
    window.addEventListener("keydown", onKey);
    return () => {
      cleanup();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  const dismiss = () => {
    setLeaving(true);
    setTimeout(onDismiss, 950);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 130,
      overflow: "hidden",
      background: "#0d0a17",
      transform: leaving ? "translateY(-100%)" : "translateY(0)",
      opacity: leaving ? 0 : 1,
      transition: "transform 0.95s cubic-bezier(0.76,0,0.24,1), opacity 0.75s ease",
      fontFamily: "var(--font-body)"
    },
    "data-screen-label": "Intro 3D"
  }, /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    style: {
      position: "absolute",
      inset: 0
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(circle at center, rgba(110,231,255,0.1), transparent 32%), radial-gradient(circle at 60% 45%, rgba(255,94,196,0.12), transparent 36%), linear-gradient(180deg, rgba(6,5,10,0.82) 0%, rgba(6,5,10,0.2) 38%, rgba(6,5,10,0.8) 100%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      gap: 16,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pronti-logo.png",
    alt: "Pronti",
    style: {
      width: "clamp(124px,14vw,176px)",
      filter: "drop-shadow(0 24px 48px rgba(5,4,12,0.36))",
      animation: "prontiFloat 6s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.84rem",
      fontWeight: 700,
      letterSpacing: "0.34em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.72)"
    }
  }, "Bienvenido"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      letterSpacing: "-0.05em",
      fontSize: "clamp(3.8rem,10vw,7.8rem)",
      lineHeight: 0.9,
      color: "#fff",
      textShadow: "0 18px 46px rgba(0,0,0,0.34)"
    }
  }, "Pronti"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 640,
      fontSize: "clamp(1rem,1.8vw,1.3rem)",
      color: "rgba(241,243,249,0.86)"
    }
  }, "Sistemas para vender, ordenar y escalar tu operaci\xF3n.")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: dismiss,
    style: {
      position: "absolute",
      left: "50%",
      bottom: 34,
      zIndex: 3,
      transform: "translateX(-50%)",
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 20px",
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: 999,
      background: "rgba(255,255,255,0.08)",
      color: "rgba(255,255,255,0.92)",
      fontFamily: "var(--font-body)",
      fontSize: "0.88rem",
      fontWeight: 700,
      cursor: "pointer",
      backdropFilter: "blur(8px)",
      animation: "prontiCue 1.9s ease-in-out infinite"
    }
  }, "Entrar ", /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2193")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/intro-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/nav-section.jsx
try { (() => {
const links = [{
  id: "que-es",
  label: "Qué es"
}, {
  id: "demo",
  label: "Demo"
}, {
  id: "soluciones",
  label: "Sistema"
}, {
  id: "equipo",
  label: "Equipo"
}, {
  id: "productos",
  label: "Productos"
}];
function Nav({
  activeSection,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 14,
      zIndex: 50,
      padding: "0 var(--page-gutter)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20,
      padding: "10px 14px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-default)",
      background: "var(--surface-nav)",
      backdropFilter: "blur(18px)",
      boxShadow: "0 14px 42px rgba(18,31,61,0.1)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNavigate("top");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pronti-logo.png",
    alt: "Pronti",
    style: {
      width: 36,
      height: 36,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1rem",
      color: "var(--text-primary)"
    }
  }, "Pronti"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.62rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--color-violet)"
    }
  }, "Operating layer"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      padding: "8px 12px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(8,17,31,0.03)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: e => {
      e.preventDefault();
      onNavigate(l.id);
    },
    style: {
      fontSize: "0.9rem",
      textDecoration: "none",
      color: activeSection === l.id ? "var(--color-violet)" : "var(--text-secondary)",
      fontWeight: activeSection === l.id ? 600 : 400
    }
  }, l.label))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    className: "p-btn",
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 42,
      padding: "10px 18px",
      borderRadius: "var(--radius-pill)",
      color: "#fff",
      background: "var(--gradient-brand)",
      fontWeight: 700,
      fontSize: "0.86rem",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, "Agendar diagn\xF3stico")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/nav-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/products-section.jsx
try { (() => {
const products = [{
  tier: "Lite",
  img: "Pronti_lite.webp",
  title: "Pronti Lite",
  summary: "Landing o menú digital listo para captar y derivar mejor la demanda desde hoy.",
  price: "$70.000",
  priceUnit: "COP/mes",
  list: ["Presencia lista para compartir", "Salida directa al canal comercial", "Implementación rápida para empezar ya"],
  featured: false,
  actions: ["Ver demo", "Elegir Lite"]
}, {
  tier: "Expert",
  img: "Pronti_expert.webp",
  title: "Pronti Expert",
  summary: "Flujo comercial que valida pedido, dirección, total y estado antes de pasarlo a operación.",
  price: "$150.000",
  priceUnit: "COP/mes",
  list: ["Automatización comercial completa", "Pedido estructurado y trazable", "Demo lista para probar antes de entrar"],
  featured: true,
  actions: ["Probar flujo", "Elegir Expert"]
}, {
  tier: "A medida",
  img: "Pronti_escala.webp",
  title: "Arquitectura personalizada",
  summary: "Una capa hecha para conectar captación, operación, datos y los sistemas que ya usa tu equipo.",
  price: "Gratis",
  priceUnit: "primera cita de diagnóstico",
  list: ["Definición del flujo contigo", "Ruta de implementación posterior al diagnóstico", "Sistema pensado para crecer sin rehacer todo"],
  featured: false,
  actions: ["Agendar diagnóstico"]
}];
function Products() {
  const [chosen, setChosen] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    id: "productos",
    style: {
      background: "radial-gradient(1000px 560px at 84% 8%, rgba(255,94,196,0.06), transparent 60%), radial-gradient(900px 500px at 10% 70%, rgba(110,231,255,0.05), transparent 60%), var(--color-bg-dark)",
      color: "var(--text-primary-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 var(--page-gutter) 80px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      maxWidth: 900,
      margin: "0 auto 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      margin: 0
    }
  }, "Productos Pronti"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 1.15,
      fontSize: "clamp(2.2rem,4vw,3.6rem)",
      maxWidth: "10ch",
      margin: "16px auto 0"
    }
  }, "Tres formas de entrar al sistema."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "58ch",
      margin: "18px auto 0",
      color: "var(--text-secondary-dark)",
      fontSize: "1.06rem"
    }
  }, "Puedes empezar por una pieza puntual o por una arquitectura m\xE1s completa, seg\xFAn el momento de tu operaci\xF3n y el cuello de botella m\xE1s costoso.")), chosen && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto 28px",
      padding: "14px 20px",
      borderRadius: 20,
      border: "1px solid rgba(110,231,255,0.24)",
      background: "rgba(110,231,255,0.06)",
      textAlign: "center",
      fontSize: "0.94rem"
    }
  }, "Elegiste ", /*#__PURE__*/React.createElement("strong", null, chosen), " \u2014 en el sitio real esto abre WhatsApp con un mensaje prellenado."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      alignItems: "stretch"
    }
  }, products.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.tier,
    "data-tilt": true,
    "data-reveal": true,
    style: {
      display: "flex",
      flexDirection: "column",
      padding: 22,
      borderRadius: 34,
      border: p.featured ? "1px solid rgba(110,231,255,0.16)" : "1px solid var(--border-default-dark)",
      background: p.featured ? "linear-gradient(180deg, rgba(13,18,29,0.99) 0%, rgba(19,11,31,0.94) 100%)" : "linear-gradient(180deg, rgba(9,14,22,0.98) 0%, rgba(11,17,27,0.9) 100%)",
      transform: p.featured ? "translateY(-14px)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, p.tier), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: "18px 0 0",
      overflow: "hidden",
      borderRadius: 28,
      border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(255,255,255,0.03)",
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../images/${p.img}`,
    alt: p.title,
    style: {
      width: "100%",
      borderRadius: 22,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      marginTop: 20,
      fontSize: "2rem"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      color: "var(--text-secondary-dark)"
    }
  }, p.summary), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontFamily: "var(--font-display)",
      fontSize: "clamp(1.8rem,3vw,2.4rem)",
      lineHeight: 0.95
    }
  }, p.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 8,
      fontFamily: "var(--font-body)",
      fontSize: "0.94rem",
      color: "var(--text-secondary-dark)"
    }
  }, p.priceUnit)), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "grid",
      gap: 12,
      marginTop: 22,
      listStyle: "none",
      padding: 0
    }
  }, p.list.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      position: "relative",
      paddingLeft: 18,
      color: "#dce6f7"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: "0.6em",
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "linear-gradient(135deg, var(--color-cyan) 0%, var(--color-fuchsia) 100%)"
    }
  }), item))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12,
      marginTop: "auto",
      paddingTop: 24
    }
  }, p.actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: a,
    className: "p-btn",
    onClick: () => setChosen(`${p.title} — ${a}`),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 52,
      padding: "14px 24px",
      borderRadius: 999,
      fontWeight: 700,
      fontFamily: "var(--font-body)",
      fontSize: "0.98rem",
      cursor: "pointer",
      border: "1px solid transparent",
      color: i === p.actions.length - 1 ? "#fff" : "var(--text-primary-dark)",
      background: i === p.actions.length - 1 ? "var(--gradient-brand)" : "rgba(255,255,255,0.04)",
      borderColor: i === p.actions.length - 1 ? "transparent" : "rgba(255,255,255,0.09)"
    }
  }, a))))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/products-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/service-rail-section.jsx
try { (() => {
const railItems = [{
  n: "01",
  kicker: "Captación web",
  title: "Una entrada más inteligente.",
  copy: "La primera impresión deja de ser decorativa y empieza a clasificar mejor la intención comercial.",
  list: ["Landing pages con mensaje más claro", "Formularios y CTA conectados al flujo", "Mejor lectura de qué canal sí funciona"]
}, {
  n: "02",
  kicker: "Agentes + automatización",
  title: "Menos improvisación al vender.",
  copy: "La atención deja de depender de memoria, capturas o mensajes largos reenviados entre personas.",
  list: ["Validación de pedido y datos clave", "Respuesta consistente y trazable", "Escalamiento limpio hacia operación"]
}, {
  n: "03",
  kicker: "Datos + software",
  title: "El negocio se vuelve legible.",
  copy: "Dashboards, intranet y software operativo para decidir sin perseguir hojas sueltas o reportes atrasados.",
  list: ["Indicadores conectados al flujo real", "Roles, estados y seguimiento interno", "Base lista para crecer sin rehacer todo"]
}];
function ServiceRail() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "radial-gradient(1100px 520px at 12% 0%, rgba(110,231,255,0.07), transparent 60%), radial-gradient(1000px 540px at 88% 34%, rgba(138,115,255,0.08), transparent 60%), var(--color-bg-dark)",
      color: "var(--text-primary-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "94px var(--page-gutter) 80px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      maxWidth: 900,
      margin: "0 auto 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      margin: 0
    }
  }, "Qu\xE9 Construimos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 1.15,
      fontSize: "clamp(2.2rem,4vw,3.6rem)",
      maxWidth: "13ch",
      margin: "16px auto 0"
    }
  }, "Elegimos la pieza correcta y la dejamos dialogando con el resto."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "58ch",
      margin: "18px auto 0",
      color: "var(--text-secondary-dark)",
      fontSize: "1.06rem"
    }
  }, "Pronti puede empezar por una sola necesidad cr\xEDtica, pero la arquitectura queda lista para conectar el siguiente frente cuando haga sentido.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18
    }
  }, railItems.map(r => /*#__PURE__*/React.createElement("article", {
    key: r.n,
    "data-tilt": true,
    "data-reveal": true,
    style: {
      padding: 28,
      borderRadius: 34,
      border: "1px solid var(--border-default-dark)",
      background: "linear-gradient(180deg, rgba(10,16,24,0.96) 0%, rgba(12,18,28,0.88) 100%)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: "50%",
      border: "1px solid var(--border-default-dark)",
      background: "rgba(255,255,255,0.03)",
      fontFamily: "var(--font-display)",
      fontSize: "1rem"
    }
  }, r.n), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, r.kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      marginTop: 16,
      fontSize: "2rem"
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      color: "var(--text-secondary-dark)"
    }
  }, r.copy), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "grid",
      gap: 10,
      marginTop: 22,
      listStyle: "none",
      padding: 0
    }
  }, r.list.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      position: "relative",
      paddingLeft: 18,
      color: "#dce6f7"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: "0.5em",
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "linear-gradient(135deg, var(--color-cyan) 0%, var(--color-fuchsia) 100%)"
    }
  }), item))))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/service-rail-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/systems-section.jsx
try { (() => {
const services = [{
  img: "service-web-pronti-panel.png",
  tag: "Tu Equipo 24/7",
  title: "Pronti atiende y toma pedidos sin pausas.",
  copy: "Olvídate de perder ventas en la noche o en horas pico. Tu agente IA siempre está respondiendo y capturando clientes."
}, {
  img: "service-agents-pronti-panel.png",
  tag: "Flexibilidad Total",
  title: "Planes listos o un agente cien por ciento a tu medida.",
  copy: "Tenemos opciones listas para usar inmediatamente y también desarrollamos agentes personalizados con las reglas únicas de tu operación."
}, {
  img: "service-ops-pronti-panel.png",
  tag: "Order en Casa",
  title: "El agente atiende, el equipo ejecuta.",
  copy: "Lo que Pronti captura y valida entra directamente ordenado a tus tableros para que tu equipo se concentre solo en despachar."
}];
function Systems() {
  return /*#__PURE__*/React.createElement("section", {
    id: "soluciones",
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "94px var(--page-gutter) 0",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      maxWidth: 900,
      margin: "0 auto 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-violet)",
      margin: 0
    }
  }, "Sistema Pronti"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 1.15,
      fontSize: "clamp(2.2rem,4vw,3.6rem)",
      maxWidth: "14ch",
      margin: "16px auto 0",
      color: "var(--text-primary)"
    }
  }, "No solo creamos sistemas bonitos. Creamos sistemas que sostienen la operaci\xF3n."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "58ch",
      margin: "18px auto 0",
      color: "var(--text-secondary)",
      fontSize: "1.06rem"
    }
  }, "Cada frente resuelve una parte del negocio, pero el valor real aparece cuando captaci\xF3n, atenci\xF3n, datos y operaci\xF3n quedan conectados en una sola secuencia.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.02fr 0.98fr",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("article", {
    "data-reveal": true,
    style: {
      position: "relative",
      overflow: "hidden",
      padding: 34,
      borderRadius: 40,
      border: "1px solid var(--border-default)",
      background: "linear-gradient(160deg, rgba(255,255,255,0.96) 0%, rgba(243,247,255,0.92) 100%)",
      boxShadow: "var(--shadow-light)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "auto -10% -20% 52%",
      height: "60%",
      background: "radial-gradient(circle, rgba(138,115,255,0.2), transparent 60%)",
      filter: "blur(28px)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-violet)",
      margin: 0
    }
  }, "De punta a punta"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      marginTop: 16,
      maxWidth: "12ch",
      fontSize: "clamp(1.7rem,2.6vw,2.6rem)",
      color: "var(--text-primary)"
    }
  }, "Captas, validas, lees y ejecutas dentro del mismo mapa operativo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 14,
      marginTop: 30
    }
  }, [["01", "Web", "Mensajes, formularios, demos y páginas hechas para convertir mejor."], ["02", "Agente", "Atención comercial que filtra, responde y arma la demanda con criterio."], ["03", "Data", "Lectura del negocio con métricas útiles, no con reportes muertos."], ["04", "Operación", "Equipo, estados y ejecución dentro de una capa propia para crecer mejor."]].map(([n, t, c]) => /*#__PURE__*/React.createElement("article", {
    key: n,
    style: {
      padding: 18,
      borderRadius: 24,
      border: "1px solid rgba(8,17,31,0.06)",
      background: "rgba(247,249,255,0.9)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-fuchsia)"
    }
  }, n), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 10,
      fontSize: "1.08rem",
      color: "var(--text-primary)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: "0.94rem",
      color: "var(--text-secondary)"
    }
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 22
    }
  }, services.map(s => /*#__PURE__*/React.createElement("figure", {
    key: s.img,
    "data-tilt": true,
    "data-reveal": true,
    style: {
      margin: 0,
      overflow: "hidden",
      borderRadius: 34,
      border: "1px solid var(--border-default)",
      background: "#fff",
      boxShadow: "var(--shadow-light)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/${s.img}`,
    alt: s.title,
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "18px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-violet)"
    }
  }, s.tag), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 8,
      fontSize: "1.04rem",
      lineHeight: 1.36,
      color: "var(--text-primary)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      color: "var(--text-secondary)",
      fontSize: "0.96rem"
    }
  }, s.copy)))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/systems-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/team-section.jsx
try { (() => {
const roles = [["Dirección", "Oscar Sánchez", "Lectura del negocio y definición de la arquitectura que conviene construir."], ["Producto", "Julieth Sánchez", "Ordena la experiencia y la convierte en flujos usables y sostenibles."], ["Datos", "Carolina Sánchez", "Hace legible la operación para que las decisiones salgan de datos útiles."], ["Marketing", "Valentina Parra", "Afina mensaje, captación y criterio comercial dentro del sistema."], ["Desarrollo", "Samir Sánchez", "Conecta la lógica operativa con implementación real, estable y escalable."]];
function Team() {
  return /*#__PURE__*/React.createElement("section", {
    id: "equipo",
    style: {
      background: "var(--color-bg-dark)",
      color: "var(--text-primary-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 var(--page-gutter) 80px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      maxWidth: 900,
      margin: "0 auto 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      margin: 0
    }
  }, "Equipo Pronti"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 1.15,
      fontSize: "clamp(2.2rem,4vw,3.6rem)",
      maxWidth: "16ch",
      margin: "16px auto 0"
    }
  }, "Negocio, producto, datos y desarrollo en la misma mesa."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "58ch",
      margin: "18px auto 0",
      color: "var(--text-secondary-dark)",
      fontSize: "1.06rem"
    }
  }, "La diferencia de Pronti no es una herramienta aislada. Es la forma en que estrategia, experiencia, anal\xEDtica e implementaci\xF3n se dise\xF1an juntas.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.82fr 0.62fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      overflow: "hidden",
      borderRadius: 34,
      border: "1px solid var(--border-default-dark)",
      background: "var(--color-panel-dark-strong)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/equipo-pronti.jpeg",
    alt: "Equipo Pronti",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "18px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, "Equipo base"), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 8,
      fontSize: "1.04rem",
      lineHeight: 1.36
    }
  }, "La estrategia y la ejecuci\xF3n no se separan en compartimentos."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 30,
      borderRadius: 34,
      border: "1px solid var(--border-default-dark)",
      background: "linear-gradient(150deg, rgba(12,18,28,0.98) 0%, rgba(20,11,32,0.92) 100%)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.74rem",
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      margin: 0
    }
  }, "C\xF3mo trabajamos"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      marginTop: 16,
      fontSize: "clamp(1.5rem,2.2vw,2.2rem)"
    }
  }, "Primero entendemos la fricci\xF3n real. Despu\xE9s construimos la capa correcta."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12,
      marginTop: 24
    }
  }, ["Diseñamos alrededor del cuello de botella real, no de una moda técnica.", "Preferimos sistemas claros que el equipo pueda operar desde el día uno.", "Conectamos mensaje, datos y ejecución para que la solución no se parta en cuatro."].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: "16px 18px",
      borderRadius: 22,
      border: "1px solid var(--border-default-dark)",
      background: "rgba(255,255,255,0.03)",
      color: "#dbe6f7"
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, roles.map(([role, name, copy]) => /*#__PURE__*/React.createElement("article", {
    key: name,
    style: {
      padding: "18px 20px",
      borderRadius: 24,
      border: "1px solid var(--border-default-dark)",
      background: "rgba(255,255,255,0.03)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.74rem",
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, role), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 10,
      fontSize: "1.06rem"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: "0.94rem",
      color: "var(--text-secondary-dark)"
    }
  }, copy))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      overflow: "hidden",
      borderRadius: 34,
      border: "1px solid var(--border-default-dark)",
      background: "var(--color-panel-dark-strong)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/equipo-pronti-caro-oscar.jpeg",
    alt: "Carolina y Oscar",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "18px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, "Estrategia + anal\xEDtica"), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 8,
      fontSize: "1.04rem",
      lineHeight: 1.36
    }
  }, "La lectura del negocio y los n\xFAmeros salen conectadas."))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      overflow: "hidden",
      borderRadius: 34,
      border: "1px solid var(--border-default-dark)",
      background: "var(--color-panel-dark-strong)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/equipo-pronti-vale-sami.jpg",
    alt: "Valentina y Samir",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "18px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, "Marketing + desarrollo"), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 8,
      fontSize: "1.04rem",
      lineHeight: 1.36
    }
  }, "Mensaje, experiencia e implementaci\xF3n dentro de la misma ruta.")))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/team-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/theme-transition-section.jsx
try { (() => {
function ThemeTransition() {
  return /*#__PURE__*/React.createElement("section", {
    "data-theme-transition": true,
    style: {
      position: "relative",
      minHeight: "130vh",
      marginTop: "clamp(34px,6vw,72px)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: "14vh",
      minHeight: "68vh",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "min(920px, calc(100vw - 60px))",
      padding: "clamp(28px,4vw,44px)",
      borderRadius: 42,
      border: "1px solid var(--border-default)",
      background: "linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(246,249,255,0.64) 100%)",
      boxShadow: "0 30px 84px rgba(18,31,61,0.14)",
      backdropFilter: "blur(18px)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--color-violet)"
    }
  }, "Conexi\xF3n Total"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 1.05,
      marginTop: 14,
      maxWidth: "13ch",
      fontSize: "clamp(2.2rem,4.4vw,4.2rem)",
      color: "var(--text-primary)"
    }
  }, "De las ventas al control operativo sin un solo corte."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "54ch",
      marginTop: 16,
      color: "var(--text-secondary)",
      fontSize: "1.02rem"
    }
  }, "Tener clientes entrando no sirve si la operaci\xF3n estalla. Ahora tu marketing y tus procesos internos viven en el mismo ecosistema digital."), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "relative",
      marginTop: 30,
      height: 18,
      borderRadius: 999,
      background: "rgba(8,17,31,0.08)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 999,
      background: "linear-gradient(90deg, rgba(110,231,255,0.18) 0%, rgba(138,115,255,0.16) 52%, rgba(255,94,196,0.18) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 999,
      width: "calc(var(--theme-progress, 0) * 100%)",
      background: "linear-gradient(90deg, var(--color-cyan) 0%, var(--color-violet) 52%, var(--color-fuchsia) 100%)",
      boxShadow: "0 0 18px rgba(138,115,255,0.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "calc(34px + ((100% - 68px) * var(--theme-progress, 0)))",
      width: "clamp(72px,8vw,96px)",
      height: "clamp(72px,8vw,96px)",
      borderRadius: "50%",
      transform: "translate(-50%,-50%) rotateY(calc(var(--theme-progress, 0) * 360deg))",
      transformStyle: "preserve-3d",
      background: "radial-gradient(circle at 34% 34%, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.96) 12%, rgba(255,255,255,0) 16%), linear-gradient(135deg, rgba(110,231,255,0.96) 0%, rgba(138,115,255,0.96) 52%, rgba(255,94,196,0.96) 100%)",
      boxShadow: "0 0 0 10px rgba(255,255,255,0.32), 0 16px 38px rgba(18,31,61,0.18)"
    }
  })))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/theme-transition-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/three-scene.js
try { (() => {
/* Pronti v2 — Three.js particle-wave scene in brand colors.
   window.ProntiScene.mount(container, opts) -> cleanup fn */
(function () {
  const BRAND = [[0x6e / 0xff, 0xe7 / 0xff, 1.0],
  // cyan  #6ee7ff
  [0x8a / 0xff, 0x73 / 0xff, 1.0],
  // violet #8a73ff
  [1.0, 0x5e / 0xff, 0xc4 / 0xff] // fuchsia #ff5ec4
  ];
  function lerp3(a, b, t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  }
  function brandColor(t) {
    if (t < 0.5) return lerp3(BRAND[0], BRAND[1], t * 2);
    return lerp3(BRAND[1], BRAND[2], (t - 0.5) * 2);
  }
  function mount(container, opts) {
    opts = opts || {};
    if (!window.THREE) return function () {};
    const THREE = window.THREE;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 200);
    camera.position.set(0, 7, 26);
    camera.lookAt(0, 0, 0);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.inset = "0";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    // ---- particle wave grid ----
    const COLS = 130,
      ROWS = 60,
      W = 70,
      D = 34;
    const count = COLS * ROWS;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    let i = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const x = (c / (COLS - 1) - 0.5) * W;
        const z = (r / (ROWS - 1) - 0.5) * D;
        positions[i * 3] = x;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = z;
        const col = brandColor(c / (COLS - 1));
        colors[i * 3] = col[0];
        colors[i * 3 + 1] = col[1];
        colors[i * 3 + 2] = col[2];
        i++;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({
      size: opts.pointSize || 0.22,
      vertexColors: true,
      transparent: true,
      opacity: opts.opacity != null ? opts.opacity : 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // ---- floating gradient orb (icosahedron wireframe) ----
    let orb = null;
    if (opts.orb !== false) {
      const orbGeo = new THREE.IcosahedronGeometry(3.4, 1);
      const orbMat = new THREE.MeshBasicMaterial({
        color: 0x8a73ff,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      });
      orb = new THREE.Mesh(orbGeo, orbMat);
      orb.position.set(0, 5.4, -2);
      scene.add(orb);
      const coreGeo = new THREE.IcosahedronGeometry(1.7, 2);
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xff5ec4,
        transparent: true,
        opacity: 0.32
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      orb.add(core);
    }

    // ---- mouse parallax ----
    let mx = 0,
      my = 0,
      tmx = 0,
      tmy = 0;
    function onMouse(e) {
      const rect = container.getBoundingClientRect();
      tmx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      tmy = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    }
    window.addEventListener("pointermove", onMouse, {
      passive: true
    });
    function resize() {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    let raf = 0;
    let t0 = performance.now();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function frame(now) {
      const t = (now - t0) / 1000;
      const pos = geo.attributes.position.array;
      let k = 0;
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = pos[k * 3];
          const z = pos[k * 3 + 2];
          pos[k * 3 + 1] = Math.sin(x * 0.32 + t * 1.1) * 1.15 + Math.cos(z * 0.5 + t * 0.8) * 0.85 + Math.sin((x + z) * 0.18 + t * 0.5) * 0.6;
          k++;
        }
      }
      geo.attributes.position.needsUpdate = true;
      if (orb) {
        orb.rotation.y = t * 0.35;
        orb.rotation.x = Math.sin(t * 0.4) * 0.25;
        orb.position.y = 5.4 + Math.sin(t * 0.9) * 0.5;
      }
      mx += (tmx - mx) * 0.04;
      my += (tmy - my) * 0.04;
      camera.position.x = mx * 2.4;
      camera.position.y = 7 - my * 1.4;
      camera.lookAt(0, 1, 0);
      renderer.render(scene, camera);
      raf = requestAnimationFrame(frame);
    }
    if (reduced) {
      renderer.render(scene, camera); // single static frame
    } else {
      raf = requestAnimationFrame(frame);
    }
    return function cleanup() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("pointermove", onMouse);
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  }
  window.ProntiScene = {
    mount: mount
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/three-scene.js", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site-v2/whatsapp-demo-section.jsx
try { (() => {
/* Demo en vivo: chat estilo WhatsApp donde el visitante hace un pedido y ve,
   al lado, cómo Pronti lo convierte en un pedido estructurado en el tablero. */

const waScript = {
  start: {
    bot: ["Hola, soy Pronti, el asistente de Delicias La 70. Tomo tu pedido y te confirmo todo por aquí."],
    replies: [{
      label: "Ver menú",
      next: "menu"
    }],
    op: {
      estado: "Atendiendo"
    }
  },
  menu: {
    bot: ["Este es el menú de hoy:\n\n1. Ajiaco santafereño — $24.000\n2. Bandeja paisa — $28.000\n3. Hamburguesa artesanal — $22.000\n\n¿Qué te provoca?"],
    replies: [{
      label: "Ajiaco — $24.000",
      next: "qty",
      set: {
        producto: "Ajiaco santafereño",
        precio: 24000
      }
    }, {
      label: "Bandeja paisa — $28.000",
      next: "qty",
      set: {
        producto: "Bandeja paisa",
        precio: 28000
      }
    }, {
      label: "Hamburguesa — $22.000",
      next: "qty",
      set: {
        producto: "Hamburguesa artesanal",
        precio: 22000
      }
    }],
    op: {
      estado: "Mostrando menú"
    }
  },
  qty: {
    bot: ["Buena elección. ¿Cuántas unidades quieres?"],
    replies: [{
      label: "1",
      next: "delivery",
      set: {
        cantidad: 1
      }
    }, {
      label: "2",
      next: "delivery",
      set: {
        cantidad: 2
      }
    }, {
      label: "3",
      next: "delivery",
      set: {
        cantidad: 3
      }
    }],
    op: {
      estado: "Validando pedido"
    }
  },
  delivery: {
    bot: ["¿Lo quieres a domicilio o pasas a recoger?"],
    replies: [{
      label: "Domicilio",
      next: "address",
      set: {
        entrega: "Domicilio"
      }
    }, {
      label: "Paso a recoger",
      next: "confirm",
      set: {
        entrega: "Recoger en local",
        direccion: "Recoge en Cra 70 #44-21"
      }
    }],
    op: {
      estado: "Validando entrega"
    }
  },
  address: {
    bot: ["Perfecto. ¿A qué dirección te lo llevamos?"],
    replies: [{
      label: "Cra 70 #45-12, apto 301",
      next: "confirm",
      set: {
        direccion: "Cra 70 #45-12, apto 301",
        domicilio: 5000
      }
    }],
    op: {
      estado: "Validando dirección"
    }
  },
  confirm: {
    bot: [o => {
      const sub = o.precio * o.cantidad;
      const dom = o.domicilio || 0;
      return `Te confirmo tu pedido:\n\n${o.cantidad} × ${o.producto} — $${sub.toLocaleString("es-CO")}` + (dom ? `\nDomicilio — $${dom.toLocaleString("es-CO")}` : "") + `\nTotal — $${(sub + dom).toLocaleString("es-CO")}\n${o.entrega === "Domicilio" ? `Entrega en ${o.direccion}` : "Recoges en Cra 70 #44-21"}\n\n¿Confirmas?`;
    }],
    replies: [{
      label: "Confirmar pedido",
      next: "done"
    }, {
      label: "Cambiar algo",
      next: "menu",
      reset: true
    }],
    op: {
      estado: "Esperando confirmación"
    }
  },
  done: {
    bot: ["Listo, pedido #1042 confirmado. Te aviso cuando salga en camino.", "Tu pedido ya está en el tablero del equipo, con dirección, total y estado. Nadie tuvo que copiarlo a mano."],
    replies: [{
      label: "Reiniciar demo",
      next: "start",
      reset: true
    }],
    op: {
      estado: "Confirmado · En cocina"
    }
  }
};
function WaBubble({
  from,
  children,
  time
}) {
  const isBot = from === "bot";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: isBot ? "flex-start" : "flex-end",
      padding: "2px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "78%",
      padding: "8px 12px",
      borderRadius: 10,
      borderTopLeftRadius: isBot ? 2 : 10,
      borderTopRightRadius: isBot ? 10 : 2,
      background: isBot ? "#ffffff" : "#d9fdd3",
      color: "#111b21",
      fontSize: "0.86rem",
      lineHeight: 1.42,
      whiteSpace: "pre-line",
      boxShadow: "0 1px 1px rgba(11,20,26,0.13)"
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      textAlign: "right",
      fontSize: "0.64rem",
      color: "#667781",
      marginTop: 4
    }
  }, time, !isBot && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#53bdeb"
    }
  }, " \u2713\u2713"))));
}
function WaTyping() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-start",
      padding: "2px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderRadius: 10,
      borderTopLeftRadius: 2,
      background: "#fff",
      boxShadow: "0 1px 1px rgba(11,20,26,0.13)",
      display: "flex",
      gap: 4
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: "#8696a0",
      animation: `waDot 1.2s ${i * 0.18}s infinite ease-in-out`
    }
  }))));
}
function OpRow({
  label,
  value,
  done
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 12,
      padding: "11px 2px",
      borderBottom: "1px dashed rgba(8,17,31,0.12)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.78rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "0.95rem",
      color: done ? "var(--text-primary)" : "rgba(8,17,31,0.25)",
      textAlign: "right",
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, done && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      borderRadius: "50%",
      background: "var(--gradient-brand)",
      color: "#fff",
      fontSize: "0.6rem",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700
    }
  }, "\u2713"), value || "Pendiente"));
}
function WhatsAppDemo() {
  const [stepId, setStepId] = React.useState("start");
  const [messages, setMessages] = React.useState([]);
  const [order, setOrder] = React.useState({});
  const [typing, setTyping] = React.useState(false);
  const [replies, setReplies] = React.useState([]);
  const chatRef = React.useRef(null);
  const timers = React.useRef([]);
  const now = () => new Date().toLocaleTimeString("es-CO", {
    hour: "2-digit",
    minute: "2-digit"
  });
  const playStep = (id, currentOrder) => {
    const step = waScript[id];
    setReplies([]);
    setTyping(true);
    step.bot.forEach((msg, i) => {
      timers.current.push(setTimeout(() => {
        const text = typeof msg === "function" ? msg(currentOrder) : msg;
        setMessages(m => [...m, {
          from: "bot",
          text,
          time: now()
        }]);
        if (i === step.bot.length - 1) {
          setTyping(false);
          setReplies(step.replies);
        } else {
          setTyping(true);
        }
      }, 900 + i * 1400));
    });
  };
  React.useEffect(() => {
    playStep("start", {});
    return () => timers.current.forEach(clearTimeout);
  }, []);
  React.useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, typing, replies]);
  const choose = reply => {
    const nextOrder = reply.reset ? reply.set || {} : {
      ...order,
      ...(reply.set || {})
    };
    if (reply.reset) setMessages([]);else setMessages(m => [...m, {
      from: "user",
      text: reply.label,
      time: now()
    }]);
    setOrder(nextOrder);
    setStepId(reply.next);
    playStep(reply.next, nextOrder);
  };
  const estado = waScript[stepId].op.estado;
  const sub = order.precio && order.cantidad ? order.precio * order.cantidad : null;
  const total = sub != null ? sub + (order.domicilio || 0) : null;
  return /*#__PURE__*/React.createElement("section", {
    id: "demo",
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "94px var(--page-gutter) 0",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      maxWidth: 860,
      margin: "0 auto 44px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-violet)",
      margin: 0
    }
  }, "Demo en vivo"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 1.1,
      fontSize: "clamp(1.9rem,3.4vw,3rem)",
      margin: "16px auto 0"
    }
  }, "Pide algo. As\xED se siente comprarle a un negocio con Pronti."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "56ch",
      margin: "18px auto 0",
      color: "var(--text-secondary)",
      fontSize: "1.06rem"
    }
  }, "T\xFA juegas el papel del cliente en WhatsApp. A la derecha ves lo que recibe el negocio: un pedido completo, validado y listo para despachar.")), /*#__PURE__*/React.createElement("div", {
    "data-reveal": true,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(320px, 400px) 1fr",
      gap: 24,
      alignItems: "start",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 36,
      border: "1px solid var(--border-default)",
      background: "#fff",
      boxShadow: "0 40px 110px rgba(19,33,61,0.16)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px",
      background: "#008069",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pronti-logo.png",
    alt: "Pronti",
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      background: "#fff",
      objectFit: "contain",
      padding: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "0.95rem",
      display: "block"
    }
  }, "Delicias La 70"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.74rem",
      opacity: 0.85
    }
  }, typing ? "escribiendo…" : "Pronti · en línea"))), /*#__PURE__*/React.createElement("div", {
    ref: chatRef,
    style: {
      height: 420,
      overflowY: "auto",
      padding: "12px 0",
      background: "#efe7dd",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: "center",
      padding: "4px 12px",
      borderRadius: 8,
      background: "rgba(255,255,255,0.9)",
      fontSize: "0.68rem",
      color: "#667781",
      margin: "4px 0 8px"
    }
  }, "Hoy"), messages.map((m, i) => /*#__PURE__*/React.createElement(WaBubble, {
    key: i,
    from: m.from,
    time: m.time
  }, m.text)), typing && /*#__PURE__*/React.createElement(WaTyping, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      padding: "12px 14px",
      background: "#f0f2f5",
      minHeight: 62,
      alignItems: "center"
    }
  }, replies.length > 0 ? replies.map(r => /*#__PURE__*/React.createElement("button", {
    key: r.label,
    className: "p-btn",
    onClick: () => choose(r),
    style: {
      padding: "10px 16px",
      borderRadius: 999,
      border: "1px solid #008069",
      background: "#fff",
      color: "#008069",
      fontWeight: 600,
      fontSize: "0.86rem",
      cursor: "pointer",
      fontFamily: "var(--font-body)"
    }
  }, r.label)) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.8rem",
      color: "#8696a0"
    }
  }, "Pronti est\xE1 escribiendo\u2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      alignSelf: "stretch",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 30,
      border: "1px solid var(--border-default)",
      background: "linear-gradient(180deg, #ffffff 0%, #fbfcff 100%)",
      boxShadow: "var(--shadow-light)",
      padding: "26px 28px 22px",
      flex: 1,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pronti-logo.png",
    alt: "Pronti",
    style: {
      width: 30,
      height: 30,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.74rem",
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--color-violet)",
      margin: 0
    }
  }, "Lo que ve el negocio")), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "6px 12px",
      borderRadius: 999,
      border: "1px solid var(--border-accent)",
      background: "rgba(138,115,255,0.07)",
      fontSize: "0.76rem",
      fontWeight: 600,
      color: "var(--color-violet)"
    }
  }, estado)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.04em",
      fontSize: "1.5rem",
      margin: 0,
      color: "var(--text-primary)"
    }
  }, "Pedido #1042"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.8rem",
      color: "var(--text-secondary)"
    }
  }, "Delicias La 70 \xB7 WhatsApp")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(OpRow, {
    label: "Producto",
    value: order.producto,
    done: !!order.producto
  }), /*#__PURE__*/React.createElement(OpRow, {
    label: "Cantidad",
    value: order.cantidad && `${order.cantidad} und`,
    done: !!order.cantidad
  }), /*#__PURE__*/React.createElement(OpRow, {
    label: "Entrega",
    value: order.entrega,
    done: !!order.entrega
  }), /*#__PURE__*/React.createElement(OpRow, {
    label: "Direcci\xF3n",
    value: order.direccion,
    done: !!order.direccion
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 16,
      padding: "14px 16px",
      borderRadius: 18,
      background: "var(--color-bg-light-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.8rem",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      fontWeight: 600
    }
  }, "Total"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1.4rem",
      letterSpacing: "-0.03em",
      color: total != null ? "var(--text-primary)" : "rgba(8,17,31,0.25)"
    }
  }, total != null ? `$${total.toLocaleString("es-CO")}` : "$ —")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "16px 0 0",
      fontSize: "0.9rem",
      lineHeight: 1.5,
      color: "var(--text-secondary)"
    }
  }, "Cada respuesta del cliente llena el pedido autom\xE1ticamente. Sin capturas de pantalla, sin re-escribir en Excel, sin pedidos incompletos.")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site-v2/whatsapp-demo-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/cta-footer-section.jsx
try { (() => {
function CtaFooter() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg-dark)",
      color: "var(--text-primary-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 var(--page-gutter) 36px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "1.08fr 0.92fr",
      gap: 22,
      padding: "clamp(30px,4vw,52px)",
      borderRadius: 44,
      border: "1px solid var(--border-default-dark)",
      background: "linear-gradient(145deg, rgba(10,17,27,0.98) 0%, rgba(22,12,34,0.96) 100%)",
      overflow: "hidden",
      boxShadow: "var(--shadow-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      margin: 0
    }
  }, "Diagn\xF3stico estrat\xE9gico"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      marginTop: 16,
      maxWidth: "10ch",
      fontSize: "clamp(2rem,3.6vw,3.4rem)"
    }
  }, "Dinos d\xF3nde hoy se atasca tu operaci\xF3n."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 18,
      maxWidth: "54ch",
      color: "var(--text-secondary-dark)",
      fontSize: "1.06rem"
    }
  }, "Si el problema est\xE1 en captar, responder, validar o coordinar al equipo, dise\xF1amos la capa correcta para empezar sin sobredimensionar el sistema."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 24
    }
  }, ["Ventas", "Pedidos", "Datos", "Operación interna"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      padding: "10px 14px",
      borderRadius: 999,
      border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(255,255,255,0.03)",
      fontSize: "0.84rem",
      color: "#d8e1ef"
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 58,
      padding: "14px 28px",
      borderRadius: 999,
      color: "#fff",
      background: "var(--gradient-brand)",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, "Quiero mi diagn\xF3stico"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 58,
      padding: "14px 28px",
      borderRadius: 999,
      color: "var(--text-primary-dark)",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.09)",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, "Hablar con Pronti"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "28ch",
      color: "var(--text-secondary-dark)",
      fontSize: "0.94rem"
    }
  }, "Llamada para detectar el cuello de botella y definir por d\xF3nde conviene arrancar."))), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 22,
      padding: "26px 0 10px",
      color: "var(--text-secondary-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 14,
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pronti-logo.png",
    alt: "Pronti",
    style: {
      width: 40,
      height: 40,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("p", null, "Agentes, web, datos y software operativo conectados en una sola capa digital.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#soluciones",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Sistema"), /*#__PURE__*/React.createElement("a", {
    href: "#equipo",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Equipo"), /*#__PURE__*/React.createElement("a", {
    href: "#productos",
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Productos"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: "inherit",
      textDecoration: "none"
    }
  }, "Contacto")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/cta-footer-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/hero-section.jsx
try { (() => {
function NumberedTile({
  index,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 18,
      borderRadius: "var(--radius-sm)",
      border: "1px solid rgba(8,17,31,0.06)",
      background: "rgba(247,249,255,0.9)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-fuchsia)"
    }
  }, index), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 10,
      fontFamily: "var(--font-display)",
      fontSize: "1.08rem",
      lineHeight: 1.1,
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: "0.94rem",
      color: "var(--text-secondary)"
    }
  }, children));
}
function Chip({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "10px 14px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: "0.84rem",
      border: "1px solid var(--border-default)",
      background: "rgba(255,255,255,0.64)",
      color: "var(--text-secondary)"
    }
  }, children);
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "18px var(--page-gutter) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.02fr 0.98fr",
      gap: 24,
      padding: "clamp(28px,4vw,56px)",
      borderRadius: 50,
      border: "1px solid var(--border-default)",
      background: "linear-gradient(145deg, rgba(255,255,255,0.96) 0%, rgba(246,250,255,0.94) 54%, rgba(237,242,255,0.96) 100%)",
      boxShadow: "var(--shadow-light)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-violet)",
      margin: 0
    }
  }, "Pronti Operating Layer"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      lineHeight: 0.98,
      letterSpacing: "-0.05em",
      fontSize: "clamp(2.4rem,5vw,4.4rem)",
      maxWidth: "14ch",
      marginTop: 18,
      color: "var(--text-primary)"
    }
  }, "La capa que convierte caos comercial en un", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--gradient-brand)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "sistema que responde.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "20ch",
      marginTop: 24,
      fontSize: "clamp(1.05rem,2vw,1.5rem)",
      lineHeight: 1.15,
      color: "var(--text-secondary)",
      fontFamily: "var(--font-body)"
    }
  }, "Dise\xF1amos agentes, sitios, datos y software operativo para que la demanda entre clara, se procese bien y llegue a ejecuci\xF3n sin ruido."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 30,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#soluciones",
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 58,
      padding: "14px 28px",
      borderRadius: 999,
      color: "#fff",
      background: "var(--gradient-brand)",
      fontWeight: 700,
      fontFamily: "var(--font-body)",
      textDecoration: "none",
      boxShadow: "var(--shadow-btn-primary)"
    }
  }, "Explorar sistema"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 58,
      padding: "14px 28px",
      borderRadius: 999,
      color: "var(--text-primary)",
      background: "rgba(255,255,255,0.7)",
      border: "1px solid var(--border-default)",
      fontWeight: 700,
      fontFamily: "var(--font-body)",
      textDecoration: "none"
    }
  }, "Hablar con Pronti")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(NumberedTile, {
    index: "01",
    title: "Entrada"
  }, "La captaci\xF3n deja de traer ruido y empieza a traer demanda m\xE1s clara."), /*#__PURE__*/React.createElement(NumberedTile, {
    index: "02",
    title: "Criterio"
  }, "La conversaci\xF3n valida, ordena y devuelve estructura antes de entrar a operaci\xF3n."), /*#__PURE__*/React.createElement(NumberedTile, {
    index: "03",
    title: "Control"
  }, "Datos, estados y equipo trabajando sobre la misma realidad operativa."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 200px",
      gap: 16,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      gridColumn: "1",
      gridRow: "1 / span 2",
      margin: 0,
      overflow: "hidden",
      borderRadius: 34,
      border: "1px solid var(--border-default)",
      background: "#fff",
      boxShadow: "var(--shadow-light)",
      transform: "rotate(-2deg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pronti-hero-mascot.png",
    alt: "Pronti mascota",
    style: {
      width: "100%",
      height: 200,
      objectFit: "cover",
      objectPosition: "center 20%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "16px 18px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.68rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-violet)"
    }
  }, "Centro de operaci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: "0.92rem",
      lineHeight: 1.4,
      color: "var(--text-primary)",
      fontWeight: 500
    }
  }, "Pronti es un agente que toma pedidos, atiende clientes 24/7 y organiza toda la informaci\xF3n."))), /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 18,
      borderRadius: 24,
      border: "1px solid var(--border-default)",
      background: "rgba(255,255,255,0.68)",
      boxShadow: "var(--shadow-light)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: "0.7rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-fuchsia)"
    }
  }, "Captura"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "0.94rem",
      lineHeight: 1.3,
      color: "var(--text-primary)"
    }
  }, "Landing, QR, pauta y WhatsApp leyendo la misma intenci\xF3n del cliente.")), /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 18,
      borderRadius: 24,
      border: "1px solid rgba(255,94,196,0.16)",
      background: "linear-gradient(155deg, rgba(255,255,255,0.9) 0%, rgba(248,239,255,0.88) 100%)",
      boxShadow: "var(--shadow-light)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: "0.7rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-fuchsia)"
    }
  }, "Operaci\xF3n"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "0.94rem",
      lineHeight: 1.3,
      color: "var(--text-primary)"
    }
  }, "Pedidos completos, estados claros y equipo trabajando sobre informaci\xF3n accionable.")), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "1 / -1",
      display: "flex",
      flexWrap: "wrap",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Chip, null, "Sitios que convierten"), /*#__PURE__*/React.createElement(Chip, null, "Agentes que ordenan"), /*#__PURE__*/React.createElement(Chip, null, "Tableros que muestran la verdad")))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/hero-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/nav-section.jsx
try { (() => {
const links = [{
  id: "soluciones",
  label: "Sistema"
}, {
  id: "equipo",
  label: "Equipo"
}, {
  id: "productos",
  label: "Productos"
}];
function Nav({
  activeSection,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 14,
      zIndex: 50,
      padding: "0 var(--page-gutter)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 20,
      padding: "10px 14px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid var(--border-default)",
      background: "var(--surface-nav)",
      backdropFilter: "blur(18px)",
      boxShadow: "0 14px 42px rgba(18,31,61,0.1)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNavigate("top");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/pronti-logo.png",
    alt: "Pronti",
    style: {
      width: 36,
      height: 36,
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "1rem",
      color: "var(--text-primary)"
    }
  }, "Pronti"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.62rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--color-violet)"
    }
  }, "Operating layer"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      padding: "8px 12px",
      borderRadius: "var(--radius-pill)",
      background: "rgba(8,17,31,0.03)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: e => {
      e.preventDefault();
      onNavigate(l.id);
    },
    style: {
      fontSize: "0.9rem",
      textDecoration: "none",
      color: activeSection === l.id ? "var(--color-violet)" : "var(--text-secondary)",
      fontWeight: activeSection === l.id ? 600 : 400
    }
  }, l.label))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "center",
      minHeight: 42,
      padding: "10px 18px",
      borderRadius: "var(--radius-pill)",
      color: "#fff",
      background: "var(--gradient-brand)",
      fontWeight: 700,
      fontSize: "0.86rem",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, "Agendar diagn\xF3stico")));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/nav-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/products-section.jsx
try { (() => {
const products = [{
  tier: "Lite",
  img: "Pronti_lite.webp",
  title: "Pronti Lite",
  summary: "Landing o menú digital listo para captar y derivar mejor la demanda desde hoy.",
  price: "$70.000",
  priceUnit: "COP/mes",
  list: ["Presencia lista para compartir", "Salida directa al canal comercial", "Implementación rápida para empezar ya"],
  featured: false,
  actions: ["Ver demo", "Elegir Lite"]
}, {
  tier: "Expert",
  img: "Pronti_expert.webp",
  title: "Pronti Expert",
  summary: "Flujo comercial que valida pedido, dirección, total y estado antes de pasarlo a operación.",
  price: "$150.000",
  priceUnit: "COP/mes",
  list: ["Automatización comercial completa", "Pedido estructurado y trazable", "Demo lista para probar antes de entrar"],
  featured: true,
  actions: ["Probar flujo", "Elegir Expert"]
}, {
  tier: "A medida",
  img: "Pronti_escala.webp",
  title: "Arquitectura personalizada",
  summary: "Una capa hecha para conectar captación, operación, datos y los sistemas que ya usa tu equipo.",
  price: "Gratis",
  priceUnit: "primera cita de diagnóstico",
  list: ["Definición del flujo contigo", "Ruta de implementación posterior al diagnóstico", "Sistema pensado para crecer sin rehacer todo"],
  featured: false,
  actions: ["Agendar diagnóstico"]
}];
function Products() {
  const [chosen, setChosen] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    id: "productos",
    style: {
      background: "var(--color-bg-dark)",
      color: "var(--text-primary-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 var(--page-gutter) 80px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      margin: 0
    }
  }, "Productos Pronti"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 1.15,
      fontSize: "clamp(2.2rem,4vw,3.6rem)",
      maxWidth: "10ch",
      margin: "16px auto 0"
    }
  }, "Tres formas de entrar al sistema."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "58ch",
      margin: "18px auto 0",
      color: "var(--text-secondary-dark)",
      fontSize: "1.06rem"
    }
  }, "Puedes empezar por una pieza puntual o por una arquitectura m\xE1s completa, seg\xFAn el momento de tu operaci\xF3n y el cuello de botella m\xE1s costoso.")), chosen && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto 28px",
      padding: "14px 20px",
      borderRadius: 20,
      border: "1px solid rgba(110,231,255,0.24)",
      background: "rgba(110,231,255,0.06)",
      textAlign: "center",
      fontSize: "0.94rem"
    }
  }, "Elegiste ", /*#__PURE__*/React.createElement("strong", null, chosen), " \u2014 en el sitio real esto abre WhatsApp con un mensaje prellenado."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      alignItems: "stretch"
    }
  }, products.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.tier,
    style: {
      display: "flex",
      flexDirection: "column",
      padding: 22,
      borderRadius: 34,
      border: p.featured ? "1px solid rgba(110,231,255,0.16)" : "1px solid var(--border-default-dark)",
      background: p.featured ? "linear-gradient(180deg, rgba(13,18,29,0.99) 0%, rgba(19,11,31,0.94) 100%)" : "linear-gradient(180deg, rgba(9,14,22,0.98) 0%, rgba(11,17,27,0.9) 100%)",
      transform: p.featured ? "translateY(-14px)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, p.tier), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: "18px 0 0",
      overflow: "hidden",
      borderRadius: 28,
      border: "1px solid rgba(255,255,255,0.07)",
      background: "rgba(255,255,255,0.03)",
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../images/${p.img}`,
    alt: p.title,
    style: {
      width: "100%",
      borderRadius: 22,
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      marginTop: 20,
      fontSize: "2rem"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      color: "var(--text-secondary-dark)"
    }
  }, p.summary), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 24,
      fontFamily: "var(--font-display)",
      fontSize: "clamp(1.8rem,3vw,2.4rem)",
      lineHeight: 0.95
    }
  }, p.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 8,
      fontFamily: "var(--font-body)",
      fontSize: "0.94rem",
      color: "var(--text-secondary-dark)"
    }
  }, p.priceUnit)), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "grid",
      gap: 12,
      marginTop: 22,
      listStyle: "none",
      padding: 0
    }
  }, p.list.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      position: "relative",
      paddingLeft: 18,
      color: "#dce6f7"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: "0.6em",
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "linear-gradient(135deg, var(--color-cyan) 0%, var(--color-fuchsia) 100%)"
    }
  }), item))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12,
      marginTop: "auto",
      paddingTop: 24
    }
  }, p.actions.map((a, i) => /*#__PURE__*/React.createElement("button", {
    key: a,
    onClick: () => setChosen(`${p.title} — ${a}`),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: 52,
      padding: "14px 24px",
      borderRadius: 999,
      fontWeight: 700,
      fontFamily: "var(--font-body)",
      fontSize: "0.98rem",
      cursor: "pointer",
      border: "1px solid transparent",
      color: i === p.actions.length - 1 ? "#fff" : "var(--text-primary-dark)",
      background: i === p.actions.length - 1 ? "var(--gradient-brand)" : "rgba(255,255,255,0.04)",
      borderColor: i === p.actions.length - 1 ? "transparent" : "rgba(255,255,255,0.09)"
    }
  }, a))))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/products-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/service-rail-section.jsx
try { (() => {
const railItems = [{
  n: "01",
  kicker: "Captación web",
  title: "Una entrada más inteligente.",
  copy: "La primera impresión deja de ser decorativa y empieza a clasificar mejor la intención comercial.",
  list: ["Landing pages con mensaje más claro", "Formularios y CTA conectados al flujo", "Mejor lectura de qué canal sí funciona"]
}, {
  n: "02",
  kicker: "Agentes + automatización",
  title: "Menos improvisación al vender.",
  copy: "La atención deja de depender de memoria, capturas o mensajes largos reenviados entre personas.",
  list: ["Validación de pedido y datos clave", "Respuesta consistente y trazable", "Escalamiento limpio hacia operación"]
}, {
  n: "03",
  kicker: "Datos + software",
  title: "El negocio se vuelve legible.",
  copy: "Dashboards, intranet y software operativo para decidir sin perseguir hojas sueltas o reportes atrasados.",
  list: ["Indicadores conectados al flujo real", "Roles, estados y seguimiento interno", "Base lista para crecer sin rehacer todo"]
}];
function ServiceRail() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-bg-dark)",
      color: "var(--text-primary-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "94px var(--page-gutter) 80px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      margin: 0
    }
  }, "Qu\xE9 Construimos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 1.15,
      fontSize: "clamp(2.2rem,4vw,3.6rem)",
      maxWidth: "13ch",
      margin: "16px auto 0"
    }
  }, "Elegimos la pieza correcta y la dejamos dialogando con el resto."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "58ch",
      margin: "18px auto 0",
      color: "var(--text-secondary-dark)",
      fontSize: "1.06rem"
    }
  }, "Pronti puede empezar por una sola necesidad cr\xEDtica, pero la arquitectura queda lista para conectar el siguiente frente cuando haga sentido.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18
    }
  }, railItems.map(r => /*#__PURE__*/React.createElement("article", {
    key: r.n,
    style: {
      padding: 28,
      borderRadius: 34,
      border: "1px solid var(--border-default-dark)",
      background: "linear-gradient(180deg, rgba(10,16,24,0.96) 0%, rgba(12,18,28,0.88) 100%)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: "50%",
      border: "1px solid var(--border-default-dark)",
      background: "rgba(255,255,255,0.03)",
      fontFamily: "var(--font-display)",
      fontSize: "1rem"
    }
  }, r.n), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, r.kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      marginTop: 16,
      fontSize: "2rem"
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 14,
      color: "var(--text-secondary-dark)"
    }
  }, r.copy), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "grid",
      gap: 10,
      marginTop: 22,
      listStyle: "none",
      padding: 0
    }
  }, r.list.map(item => /*#__PURE__*/React.createElement("li", {
    key: item,
    style: {
      position: "relative",
      paddingLeft: 18,
      color: "#dce6f7"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: "0.5em",
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "linear-gradient(135deg, var(--color-cyan) 0%, var(--color-fuchsia) 100%)"
    }
  }), item))))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/service-rail-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/systems-section.jsx
try { (() => {
const services = [{
  img: "service-web-pronti-panel.png",
  tag: "Tu Equipo 24/7",
  title: "Pronti atiende y toma pedidos sin pausas.",
  copy: "Olvídate de perder ventas en la noche o en horas pico. Tu agente IA siempre está respondiendo y capturando clientes."
}, {
  img: "service-agents-pronti-panel.png",
  tag: "Flexibilidad Total",
  title: "Planes listos o un agente cien por ciento a tu medida.",
  copy: "Tenemos opciones listas para usar inmediatamente y también desarrollamos agentes personalizados con las reglas únicas de tu operación."
}, {
  img: "service-ops-pronti-panel.png",
  tag: "Order en Casa",
  title: "El agente atiende, el equipo ejecuta.",
  copy: "Lo que Pronti captura y valida entra directamente ordenado a tus tableros para que tu equipo se concentre solo en despachar."
}];
function Systems() {
  return /*#__PURE__*/React.createElement("section", {
    id: "soluciones",
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "94px var(--page-gutter) 0",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-violet)",
      margin: 0
    }
  }, "Sistema Pronti"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 1.15,
      fontSize: "clamp(2.2rem,4vw,3.6rem)",
      maxWidth: "14ch",
      margin: "16px auto 0",
      color: "var(--text-primary)"
    }
  }, "No solo creamos sistemas bonitos. Creamos sistemas que sostienen la operaci\xF3n."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "58ch",
      margin: "18px auto 0",
      color: "var(--text-secondary)",
      fontSize: "1.06rem"
    }
  }, "Cada frente resuelve una parte del negocio, pero el valor real aparece cuando captaci\xF3n, atenci\xF3n, datos y operaci\xF3n quedan conectados en una sola secuencia.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.02fr 0.98fr",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 34,
      borderRadius: 40,
      border: "1px solid var(--border-default)",
      background: "linear-gradient(160deg, rgba(255,255,255,0.96) 0%, rgba(243,247,255,0.92) 100%)",
      boxShadow: "var(--shadow-light)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-violet)",
      margin: 0
    }
  }, "De punta a punta"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      marginTop: 16,
      maxWidth: "12ch",
      fontSize: "clamp(1.7rem,2.6vw,2.6rem)",
      color: "var(--text-primary)"
    }
  }, "Captas, validas, lees y ejecutas dentro del mismo mapa operativo."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 14,
      marginTop: 30
    }
  }, [["01", "Web", "Mensajes, formularios, demos y páginas hechas para convertir mejor."], ["02", "Agente", "Atención comercial que filtra, responde y arma la demanda con criterio."], ["03", "Data", "Lectura del negocio con métricas útiles, no con reportes muertos."], ["04", "Operación", "Equipo, estados y ejecución dentro de una capa propia para crecer mejor."]].map(([n, t, c]) => /*#__PURE__*/React.createElement("article", {
    key: n,
    style: {
      padding: 18,
      borderRadius: 24,
      border: "1px solid rgba(8,17,31,0.06)",
      background: "rgba(247,249,255,0.9)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-fuchsia)"
    }
  }, n), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 10,
      fontSize: "1.08rem",
      color: "var(--text-primary)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: "0.94rem",
      color: "var(--text-secondary)"
    }
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 22
    }
  }, services.map(s => /*#__PURE__*/React.createElement("figure", {
    key: s.img,
    style: {
      margin: 0,
      overflow: "hidden",
      borderRadius: 34,
      border: "1px solid var(--border-default)",
      background: "#fff",
      boxShadow: "var(--shadow-light)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/${s.img}`,
    alt: s.title,
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "18px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-violet)"
    }
  }, s.tag), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 8,
      fontSize: "1.04rem",
      lineHeight: 1.36,
      color: "var(--text-primary)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 10,
      color: "var(--text-secondary)",
      fontSize: "0.96rem"
    }
  }, s.copy)))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/systems-section.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/team-section.jsx
try { (() => {
const roles = [["Dirección", "Oscar Sánchez", "Lectura del negocio y definición de la arquitectura que conviene construir."], ["Producto", "Julieth Sánchez", "Ordena la experiencia y la convierte en flujos usables y sostenibles."], ["Datos", "Carolina Sánchez", "Hace legible la operación para que las decisiones salgan de datos útiles."], ["Marketing", "Valentina Parra", "Afina mensaje, captación y criterio comercial dentro del sistema."], ["Desarrollo", "Samir Sánchez", "Conecta la lógica operativa con implementación real, estable y escalable."]];
function Team() {
  return /*#__PURE__*/React.createElement("section", {
    id: "equipo",
    style: {
      background: "var(--color-bg-dark)",
      color: "var(--text-primary-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: "0 var(--page-gutter) 80px",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 700,
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      margin: 0
    }
  }, "Equipo Pronti"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      lineHeight: 1.15,
      fontSize: "clamp(2.2rem,4vw,3.6rem)",
      maxWidth: "16ch",
      margin: "16px auto 0"
    }
  }, "Negocio, producto, datos y desarrollo en la misma mesa."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: "58ch",
      margin: "18px auto 0",
      color: "var(--text-secondary-dark)",
      fontSize: "1.06rem"
    }
  }, "La diferencia de Pronti no es una herramienta aislada. Es la forma en que estrategia, experiencia, anal\xEDtica e implementaci\xF3n se dise\xF1an juntas.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.82fr 0.62fr",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      overflow: "hidden",
      borderRadius: 34,
      border: "1px solid var(--border-default-dark)",
      background: "var(--color-panel-dark-strong)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/equipo-pronti.jpeg",
    alt: "Equipo Pronti",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "18px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, "Equipo base"), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 8,
      fontSize: "1.04rem",
      lineHeight: 1.36
    }
  }, "La estrategia y la ejecuci\xF3n no se separan en compartimentos."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      padding: 30,
      borderRadius: 34,
      border: "1px solid var(--border-default-dark)",
      background: "linear-gradient(150deg, rgba(12,18,28,0.98) 0%, rgba(20,11,32,0.92) 100%)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "0.74rem",
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--color-cyan)",
      margin: 0
    }
  }, "C\xF3mo trabajamos"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      letterSpacing: "-0.05em",
      marginTop: 16,
      fontSize: "clamp(1.5rem,2.2vw,2.2rem)"
    }
  }, "Primero entendemos la fricci\xF3n real. Despu\xE9s construimos la capa correcta."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12,
      marginTop: 24
    }
  }, ["Diseñamos alrededor del cuello de botella real, no de una moda técnica.", "Preferimos sistemas claros que el equipo pueda operar desde el día uno.", "Conectamos mensaje, datos y ejecución para que la solución no se parta en cuatro."].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      padding: "16px 18px",
      borderRadius: 22,
      border: "1px solid var(--border-default-dark)",
      background: "rgba(255,255,255,0.03)",
      color: "#dbe6f7"
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, roles.map(([role, name, copy]) => /*#__PURE__*/React.createElement("article", {
    key: name,
    style: {
      padding: "18px 20px",
      borderRadius: 24,
      border: "1px solid var(--border-default-dark)",
      background: "rgba(255,255,255,0.03)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.74rem",
      fontWeight: 700,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, role), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 10,
      fontSize: "1.06rem"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8,
      fontSize: "0.94rem",
      color: "var(--text-secondary-dark)"
    }
  }, copy))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      overflow: "hidden",
      borderRadius: 34,
      border: "1px solid var(--border-default-dark)",
      background: "var(--color-panel-dark-strong)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/equipo-pronti-caro-oscar.jpeg",
    alt: "Carolina y Oscar",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "18px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, "Estrategia + anal\xEDtica"), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 8,
      fontSize: "1.04rem",
      lineHeight: 1.36
    }
  }, "La lectura del negocio y los n\xFAmeros salen conectadas."))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      overflow: "hidden",
      borderRadius: 34,
      border: "1px solid var(--border-default-dark)",
      background: "var(--color-panel-dark-strong)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/equipo-pronti-vale-sami.jpg",
    alt: "Valentina y Samir",
    style: {
      width: "100%",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      padding: "18px 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.72rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "var(--color-cyan)"
    }
  }, "Marketing + desarrollo"), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: 8,
      fontSize: "1.04rem",
      lineHeight: 1.36
    }
  }, "Mensaje, experiencia e implementaci\xF3n dentro de la misma ruta.")))))));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/team-section.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.NumberedTile = __ds_scope.NumberedTile;

})();
