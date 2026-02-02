# 📁 Structure Modulaire - XME Site

## Architecture des Fichiers

Le projet utilise une **architecture modulaire** pour optimiser les performances et faciliter la maintenance.

### 🎨 CSS - Structure Modulaire

```
CSS/
├── style.css              ⭐ CSS PRINCIPAL (header, footer, vars, buttons, forms, responsive)
├── pages-common.css       📄 Styles communs aux pages (page-header, content, blocks)
├── style-about.css        👥 Styles spécifiques à "À propos"
├── style-axes.css         🎯 Styles spécifiques à "Nos axes"
├── style-podcast.css      🎙️ Styles spécifiques au "Podcast"
├── style-engagement.css   🤝 Styles spécifiques à "S'engager"
├── style-contact.css      📧 Styles spécifiques au "Contact"
└── style-legal.css        ⚖️ Styles spécifiques à "Mentions légales"
```

### 🔧 JavaScript - Structure Modulaire

```
JS/
├── main.js         ⭐ JS PRINCIPAL (navigation, hamburger, scroll, animations, common)
└── contact.js      📧 JS spécifique au formulaire de contact
```

### 📄 HTML

Chaque page HTML charge :
1. **style.css** - Styles généraux (toujours)
2. **pages-common.css** - Styles de structure (toujours)
3. **style-[page].css** - Styles spécifiques à la page (si existe)
4. **main.js** - Scripts communs (toujours)
5. **contact.js** - Scripts du formulaire (contact.html seulement)

## 📊 Exemple de Chargement

### Page "À propos" (about.html)
```html
<link rel="stylesheet" href="../CSS/style.css">
<link rel="stylesheet" href="../CSS/pages-common.css">
<link rel="stylesheet" href="../CSS/style-about.css">

<script src="../JS/main.js"></script>
```

### Page "Contact" (contact.html)
```html
<link rel="stylesheet" href="../CSS/style.css">
<link rel="stylesheet" href="../CSS/pages-common.css">
<link rel="stylesheet" href="../CSS/style-contact.css">

<script src="../JS/main.js"></script>
<script src="../JS/contact.js"></script>
```

## ✅ Avantages de cette Architecture

✨ **Performance** : Chaque page charge seulement ce dont elle a besoin
📦 **Modularité** : Facile d'ajouter/modifier des styles par page
♻️ **Réutilisabilité** : Les styles et scripts communs sont partagés
🚀 **Maintenabilité** : Séparation claire des responsabilités
📈 **Scalabilité** : Simple d'ajouter de nouvelles pages

## 🔄 Flux de Chargement

```
1. style.css chargé (variables, reset, navigation, footer)
   ↓
2. pages-common.css chargé (structure des pages)
   ↓
3. style-[page].css chargé (styles spécifiques)
   ↓
4. main.js exécuté (initialisation générale)
   ↓
5. [page].js exécuté si présent (fonctionnalités spécifiques)
```

## 📝 Notes

- Les **variables CSS** sont définies dans `style.css` et accessibles partout
- Les **transitions et animations** globales sont dans `style.css`
- Les **responsive breakpoints** sont gérés dans chaque fichier CSS concerné
- Les **erreurs et logs** sont gérés dans `main.js` pour toutes les pages

---

**Créé le** : 2 février 2026
**Version** : 1.0 - Architecture modulaire
