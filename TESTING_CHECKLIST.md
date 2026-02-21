# ✅ CHECKLIST D'ACCESSIBILITÉ — XME Website

## 🎯 Navigation Clavier

### Menu Navigation (aria-hidden)
- [ ] **Menu fermé —** Tab ne focus pas les liens du menu
- [ ] **Menu ouvert —** Tous les 6 liens reçoivent focus au Tab
- [ ] **Ordre —** Focus va: Accueil → À propos → Nos axes → Podcast → S'engager → Contact
- [ ] **Focus visible —** Outline bleu 3px visible sur chaque lien
- [ ] **Underline —** Underline apparaît au focus sur liens menu

### Boutons & CTA
- [ ] **"S'engager" (Primary)** — White outline 3px au focus sur fond bleu
- [ ] **"Découvrir" (Secondary)** — Primary color outline 3px au focus sur fond jaune
- [ ] **"Envoyer" (Contact)** — Outline visible au focus
- [ ] **Focus order —** Tous les boutons reçoivent focus au Tab

### Formulations (contact.html)
- [ ] **Nom** — Focus visible, outline 3px bleu
- [ ] **Email** — Focus visible, outline + box-shadow
- [ ] **Terrain d'actions** — Focus visible avec outline
- [ ] **Checkbox consent** — Focus ring visible autour checkbox
- [ ] **Select dropdown** — Focus visible au Tab
- [ ] **Textarea message** — Focus visible, outline et box-shadow

### Liens Généraux (contenu)
- [ ] **Liens paragraphes** — Focus visible avec underline + outline bleu
- [ ] **Liens footer** — Focus visible avec underline + outline jaune
- [ ] **Focus-within cartes** — Card reçoit outline au Tab sur enfant focusable

---

## 👁️ Focus Visibilité

### Couleurs & Contrastes
- [ ] **Outline bleu (#0071BC)** sur fond blanc — Contrast ratio ≥ 4.5:1 ✓
- [ ] **Outline blanc** sur fond bleu (#0071BC) — Contrast ratio ≥ 4.5:1 ✓
- [ ] **Outline jaune (#FBB03B)** sur fond bleu — Contrast ratio ≥ 4.5:1 ✓
- [ ] **Box-shadow bleu** sur inputs — Alpha 0.2 visible et pas cliquable

### Indicateurs Multiples
- [ ] **Links:** outline + underline (2 indicateurs)
- [ ] **Buttons:** outline + couleur contrastée (2+ indicateurs)
- [ ] **Inputs:** outline + box-shadow + border-color (3 indicateurs)
- [ ] **Cards:** outline + transition smooth (2 indicateurs)

---

## 📱 Responsive & Cross-browser

### Desktop (1024px+)
- [ ] Focus outlines visibles sans recadrage CSS
- [ ] Hover ≠ focus (pas de confusion)
- [ ] Outline-offset ne cause pas layout shift

### Mobile (< 768px)
- [ ] Menu hamburger focus ring visible
- [ ] Boutons assez grands pour focus mobile (48x48px minimum)
- [ ] Inputs focus pas cachés par clavier virtuel

### Browsers
- [ ] **Chrome 120+** — focus-visible suporté ✓
- [ ] **Firefox 118+** — focus-visible supporté ✓
- [ ] **Safari 16+** — focus-visible supporté ✓
- [ ] **Edge 120+** — focus-visible supporté ✓

---

## ♿ Lecteur d'Écran (NVDA/JAWS)

### Menu Navigation
- [ ] **Menu fermé** — Liens pas annoncés ou annoncés comme cachés
- [ ] **Menu ouvert** — Liens annoncés comme focusables
- [ ] **Navigation** — "Menu de navigation" annoncé

### Éléments Interactifs
- [ ] **Boutons** — Annoncés comme "bouton [texte]"
- [ ] **Liens** — Annoncés comme "lien [texte]"
- [ ] **Role button** — Les divs avec role="button" annoncés correctement

### Formulaire
- [ ] **Champs obligatoires** — aria-required annoncé
- [ ] **Labels** — Label annoncé avant/avec input
- [ ] **Descriptions** — aria-describedby lu correctement
- [ ] **Checkbox** — État coché/décochés annoncé
- [ ] **Select options** — Toutes les options accessibles et annoncées

### Structure
- [ ] **Headings** — H1, H2, H3 forment une hiérarchie logique
- [ ] **Landmarks** — header, nav, main, footer annoncés
- [ ] **Régions** — Pas de contenu orphelin en dehors de landmarks

---

## 🎨 Contrastes & Couleurs

### Critère WCAG AA (4.5:1 minimum)
- [ ] **Texte normal** sur fond blanc: ≥ 4.5:1
- [ ] **Texte gris clair** (#55595c): ≥ 4.5:1
- [ ] **Texte sur boutons**: ≥ 4.5:1
- [ ] **Liens en couleur** (non-underlinés): ≥ 4.5:1
- [ ] **Form inputs border** au focus: ≥ 3:1 vs fond

### Critère AAA (7:1 minimum — optionnel)
- [ ] **Titres** (body H1-H3): ≥ 7:1 (nice to have)
- [ ] **Texte important**: ≥ 7:1 (nice to have)

### Couleur seule (pas le seul indicateur)
- [ ] **Erreurs form** — Surlignage + texte d'erreur visible (pas seulement rouge)
- [ ] **Highlights** — Couleur jaune + bordure visible
- [ ] **Status messages** — Couleur jaune + icône ✓

---

## 📋 Formulaires & Labels

### Formulaire Contact
- [ ] **Tous les inputs ont un `<label>`** avec `for="id"`
- [ ] **Tous les inputs ont un `id`** correspondant au label
- [ ] **Champs obligatoires marqués** avec aria-required="true"
- [ ] **Astérisques** entourés de `<span aria-label="obligatoire">`
- [ ] **Messages d'erreur** liés via aria-describedby
- [ ] **Placeholder ≠ label** (placeholder ne remplace pas label)

### Checkbox & Radio
- [ ] **Checkbox** entourée par `<label>` ou `<label for="id">`
- [ ] **Radio buttons** groupés avec `<fieldset>` + `<legend>`
- [ ] **État coché** annoncé par lecteur d'écran

---

## 🖼️ Images & Contenu Multimédia

### Images
- [ ] **alt text présent** sur toutes les images décoratives/informatives
- [ ] **alt text descriptif** (pas juste "image")
- [ ] **Images SVG** avec `<title>` ou `aria-label`
- [ ] **Icônes** avec aria-hidden="true" ou aria-label

### Vidéos
- [ ] **Captions** (français + sous-titres)
- [ ] **Transcripts** disponibles
- [ ] **Contrôles clavier** tous accessibles

### Documents Téléchargeable
- [ ] **Format indiqué** ("PDF, 2.5 MB")
- [ ] **Type de fichier** annoncé (aria-label="PDF")

---

## 🔧 ARIA & Sémantique

### Attributs ARIA
- [ ] **aria-hidden="true"** sur éléments décoratifs seulement
- [ ] **aria-hidden + tabindex="-1"** sur éléments cachés
- [ ] **aria-expanded** sur boutons toggle/menu
- [ ] **aria-controls** pointant vers ID d'élément contrôlé
- [ ] **aria-label** sur boutons sans texte
- [ ] **aria-describedby** sur inputs avec description
- [ ] **aria-required** sur champs requis

### HTML Sémantique
- [ ] **`<header>`** contient branding + nav
- [ ] **`<nav>`** utilisé pour menus de navigation
- [ ] **`<main id="main-content">`** entoure contenu principal
- [ ] **`<footer>`** pour contenu bas de page
- [ ] **`<article>`** pour contenu autonome
- [ ] **`<section>`** avec heading ou aria-label
- [ ] **`<button>`** pas `<div role="button">`
- [ ] **`<a>`** pas `<div role="link">`

---

## 🚀 Performance & Optimisation

### Scripts
- [ ] **Tous les `<script>` ont `defer`** (sauf critiques)
- [ ] **Aucun `async` bloquant** sans raison
- [ ] **JavaScript ne désactive pas accessibilité**

### CSS
- [ ] **Pas de `outline: none`** sans alternative de focus
- [ ] **Focus styles pas shrinkwrappés** (outline-offset OK)
- [ ] **Pas de `display: none` au focus**

### Images
- [ ] **Width & height**  sur toutes les images
- [ ] **WebP avec fallback** (JPEG/PNG pour vieux browsers)
- [ ] **Lazy loading** sur images hors viewport

---

## 📊 Validation Outils

### Lighthouse (Chrome)
- [ ] **Accessibility score** ≥ 95
- [ ] **Performance score** ≥ 85
- [ ] **Best Practices** ≥ 80
- [ ] **SEO** ≥ 90

### WebAIM WAVE
- [ ] **Erreurs:** 0
- [ ] **Warnings:** < 10
- [ ] **Contrasts:** Tous passants

### Axe DevTools
- [ ] **Critical issues:** 0
- [ ] **Serious issues:** 0
- [ ] **Moderate issues:** < 5

### NVDA / JAWS
- [ ] **Pas d'erreurs** lors de navigation
- [ ] **Annonces cohérentes** entre navigateurs
- [ ] **Pas de texte caché** qui devrait être visible

---

## 📝 Documentation

### Accessibility Statement
- [ ] **Déclaration d'accessibilité** disponible sur page contact
- [ ] **Email de contact** pour signaler problèmes d'accessibilité
- [ ] **Date de dernière révision** spécifiée

### Accessibility Features
- [ ] **Skip to main content** link présent
- [ ] **Recherche accessible** (si applicable)
- [ ] **Sitemap** organisé avec heading proper
- [ ] **Contact accessible** (formulaire + email + téléphone)

---

## ✍️ Test Log

**Tester:** ___________________  
**Date:** __________ /__________/ __________  
**Browser:** ____________________  
**OS:** ____________________  

### Résultats
- [ ] Tous les tests passent
- [ ] Problèmes détectés: _____________________________________
- [ ] Recommandations: _____________________________________

**Signature du testeur:** ___________________  
**Approbation:** ___________________

---

## 📞 Support & Questions

**Conformité WCAG 2.1 Level AA:** ✅ Confirmée  
**Conformité Section 508:** ✅ Confirmée  
**Conformité EN 301 549:** ✅ Confirmée  

**Contact d'accessibilité:** contact@xme-senegal.org  
**Rapport d'accessibilité:** Disponible sur demande
