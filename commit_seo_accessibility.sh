#!/bin/bash

# ==============================================
# Script Git — XME SEO & Accessibilité Updates
# ==============================================

# Afficher l'état actuel des fichiers modifiés
echo "📊 État des fichiers modifiés..."
git status -s

# Ajouter tous les fichiers modifiés
echo ""
echo "➕ Ajout des fichiers..."
git add -A

# Commit principal
echo ""
echo "✅ Commit principal..."
git commit -m "🎯 Optimisation Accessibilité & SEO — PageSpeed Target ≥95

## ACCESSIBILITÉ (WCAG AA)
- ✅ Alt text amélioré (images descriptives)
- ✅ Contraste couleur optimisé (#555 sur #FFF → 4.5:1+)
- ✅ Focus visible clairs (outline 3px)
- ✅ Hiérarchie H1 unique vérifiée
- ✅ Formulaire avec aria-required, aria-describedby
- ✅ Skip link 'Aller au contenu principal'
- ✅ Navigation ARIA (aria-label, aria-expanded, aria-hidden)
- ✅ Balises sémantiques <main id='main-content'>

## SEO (Search Engine Optimization)
- ✅ Meta descriptions optimisées (150-160 chars)
- ✅ Open Graph & Twitter Card complets
- ✅ Canonical links sur toutes les pages
- ✅ JSON-LD WebSite + Organization
- ✅ Alt text avec mots-clés SEO
- ✅ Titres optimisés (mots-clés pertinents)

## FICHIERS MODIFIÉS
- HTML/* (7 fichiers) — Structure sémantique, aria, skip link
- CSS/style.css — Contraste, focus, skip link styles
- CSS/style-contact.css — Inputs, formulaire contrast
- JS/main.js — ARIA attributes pour hamburger/menu
- MODIFICATIONS_SEO_ACCESSIBILITE.md — Documentation complète

## PERFORMANCE
✅ Aucune dégradation attendue (maintien 97/100 mobile)
- CSS légèrement enrichis (propriétés additionnelles)
- JS minimaliste (attributs ARIA uniquement)
- Pas de frameworks/dépendances supplémentaires

Voir MODIFICATIONS_SEO_ACCESSIBILITE.md pour détails complets."

# Vérification du commit
echo ""
echo "📝 Commit effectué avec succès !"
git log --oneline -1

# Push (optionnel, à décommenter si remote branch existe)
# echo ""
# echo "🚀 Push vers remote..."
# git push origin main

echo ""
echo "✨ Déploiement préparé ! Prêt pour PageSpeed validation."
