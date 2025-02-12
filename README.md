# Buddl test- Visualisation de Données

## Introduction

Voici une application de visualisation de données qui permet de créer et d'afficher des graphiques (barres, lignes, et camemberts) en temps réel à partir de données dynamiques stockées dans une base de données MongoDB. Ce projet est divisé en deux parties principales : le backend et le frontend.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (généralement inclus avec Node.js)
- [MongoDB](https://www.mongodb.com/) (pour la base de données en local)
- [Vue.js](https://vuejs.org/) (version 3 recommandée, ou Vue.js 2 avec Vuex si nécessaire)
- [Express.js](https://expressjs.com/) (pour le backend)

## Installation et Configuration

### Backend

1. **Naviguez vers le dossier `backend` :**
   ```bash
   cd backend
   ```

2. **Installez les dépendances :**
   ```bash
   npm install
   ```

3. **Démarrez le serveur :**
   ```bash
   node server.js
   ```

   Le serveur backend devrait maintenant être en cours d'exécution.

### Frontend

1. **Naviguez vers le dossier `frontend` :**
   ```bash
   cd frontend
   ```

2. **Installez les dépendances :**
   ```bash
   npm install
   ```

3. **Démarrez l'application frontend :**
   ```bash
   npm run serve
   ```

   L'application frontend devrait maintenant être accessible sur `http://localhost:8080`.

## Fonctionnalités

- **Types de graphiques :**
  - Diagrammes en barres
  - Diagrammes en lignes
  - Diagrammes en camemberts

- **Données dynamiques :**
  - Les données sont récupérées en temps réel depuis une base de données MongoDB.
  - Mise à jour automatique des graphiques lors de la modification des données.

-   **Intégration fluide :**
    -   Communication transparente entre le frontend et le backend.
    -   Interface utilisateur intuitive et réactive.
        
-   **Branding & UX/UI :**
    -   Design en accord avec l'identité visuelle de Buddl (logo, couleurs, typographie).
    -   Animations et interactions pour améliorer l'expérience utilisateur.
  
## Structure du Projet

```
buddl/
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── App.vue
│   │   └── main.js
│   ├── public/
│   └── package.json
└── README.md
```
## Livrables attendus

-   Un repository GitHub contenant le code source du projet avec des instructions d'installation.
    
-   Un README.md expliquant le fonctionnement du projet et comment l'exécuter.
    
-   Une courte démonstration du projet (screencast vidéo).
    

## Critères d'évaluation

-   **Qualité du code :**  Propreté, lisibilité, respect des bonnes pratiques.
    
-   **Intégration API :**  Bonne communication entre le frontend et le backend.
    
-   **Esthétique des graphiques :**  Design propre, animations fluides, bonne lisibilité des données.
    
-   **Respect du branding Buddl :**  UI cohérente avec l'identité de la marque.
    
-   **Explication et documentation :**  README clair, instructions faciles à suivre.