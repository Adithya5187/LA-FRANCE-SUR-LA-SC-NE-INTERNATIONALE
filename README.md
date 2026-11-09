# La France sur la Scène Internationale
## Présentation Cinématographique et Documentaire Interactif

Une application web de présentation continue, cinématique et scroll-driven conçue pour un groupe de six présentateurs universitaires (durée approximative de 1,5 minute par intervenant).

---

### 🌟 Fonctionnalités Clés

1. **Expérience Documentaire Continue & Immersive**
   - 6 chapitres interconnectés au format 16:9, optimisés pour la vidéoprojection en amphithéâtre ou en salle de cours.
   - Design inspiré du storytelling haut de gamme d'Apple et des grands reportages géopolitiques.

2. **Système de Navigation Latérale Indépendant (Sidebar Gauche)**
   - Barre fixe sur le bord gauche avec 6 icônes thématiques (Globe, Monument/Étoiles, Nations Unies, Bouclier OTAN, Poignée de main/Paix, Laurier Conclusion).
   - Espacement strict : le rail de navigation ne chevauche jamais les titres, sous-titres ou images.
   - Indicateurs d'état en direct : Actif, En cours, et Validé (Checkmark).

3. **Indicateurs de Progression Indépendants par Chapitre**
   - Chaque chapitre possède sa propre barre de progression et son compteur de pourcentage (0% → 100%).
   - Synchronisation dynamique avec la position réelle de défilement (scroll position).

4. **Animations & Révélations Cinématiques**
   - Révélations directionnelles (gauche, droite, bas, haut) avec zoom progressif de 1.08 à 1.0.
   - Transitions fluides, dégradés sombres d'estompage et légers effets parallaxes.

5. **Visualisations & Graphiques Interactifs Intégrés**
   - **Chapitre 1 (Introduction)** : Les 4 piliers du rayonnement français (Diplomatie, Défense souveraine, Économie, Culture & Francophonie).
   - **Chapitre 2 (Union Européenne)** : Les 27 États membres, distinction des 6 pays fondateurs (1951) et rôle central de la France.
   - **Chapitre 3 (Nations Unies)** : Les 5 membres permanents du Conseil de Sécurité (P5), doctrine du droit de veto et Accord de Paris.
   - **Chapitre 4 (OTAN)** : Principe de défense collective (Article 5), comparaison historique 1966 (De Gaulle) vs 2009 (Sarkozy) et capacités Rafale.
   - **Chapitre 5 (Paix Mondiale)** : Carte géopolitique interactive du monde avec points chauds (Ukraine, Israël/Palestine, Inde, Indo-Pacifique, Sommet du G7 à Évian 2026).
   - **Chapitre 6 (Conclusion)** : Matrice récapitulative globale des 5 sphères d'influence diplomatique.

6. **Effet Machine à Écrire (Typewriter)**
   - Une citation clé par chapitre dans un panneau translucide teinté vert menthe (`#34D399`) avec curseur clignotant.

7. **Frises Chronologiques Interactives**
   - Chaque chapitre intègre sa propre frise interactive cliquable avec fiches d'impact historique.

8. **Mode Vidéoprojection & Raccourcis Clavier**
   - `Flèche Droite` / `Flèche Bas` : Chapitre suivant
   - `Flèche Gauche` / `Flèche Haut` : Chapitre précédent
   - `F` : Activer / Quitter le mode Plein Écran
   - `S` ou `N` : Ouvrir / Fermer le tiroir du script oral de l'orateur
   - `Début` / `Home` : Retour au sommet

---

### 🚀 Lancer le Projet Localement

```bash
# Installer les dépendances (si ce n'est pas déjà fait)
npm install

# Démarrer le serveur de développement
npm run dev

# Prévisualiser la version de production
npm run preview
```

Le site s'ouvrira sur `http://localhost:5173` ou `http://localhost:4173`.

