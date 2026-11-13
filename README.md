#  CinéTrack

**Réalisé par : Yassine Dafali**

##  Présentation du projet

CinéTrack est une application web qui permet aux utilisateurs de découvrir des films et des séries à partir d'une API.

L'objectif de ce projet est de pratiquer JavaScript, la manipulation du DOM et l'organisation du code avec les modules ES6.

##  Fonctionnalités

- Afficher les films et les séries sous forme de cards.
- Rechercher un film ou une série par son titre.
- Filtrer les contenus par type : Films ou Séries.
- Naviguer entre les pages grâce à la pagination.
- Afficher les détails d'un film ou d'une série dans une fenêtre Modal.
- Ajouter et retirer des titres des favoris.
- Sauvegarder les favoris dans le LocalStorage.
- Retrouver les favoris après le rechargement de la page.

##  Technologies utilisées

- HTML5
- Tailwind CSS
- JavaScript (ES6)
- Fetch API
- Async / Await
- LocalStorage
- Modules JavaScript (Import / Export)

##  Organisation du projet

```text
CinéTrack/
│
├── index.html
│
├── img/
│
├── js/
│   ├── store.js
│   ├── render.js
│   ├── filter.js
│   ├── Favorites.js
│   ├── modale.js
│   └── main.js
│
└── README.md
```

##  API utilisée

Les données des films et des séries sont récupérées depuis cette API :

[ CinetTrack API - GitHub ](https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json)

J'utilise `fetch()` avec `async/await` pour récupérer les données et `try/catch` pour gérer les erreurs.

##  Installation et lancement

1. Cloner le projet :

```bash
git clone URL_DU_DEPOT
```

2. Entrer dans le dossier :

```bash
cd CinéTrack
```

3. Ouvrir le projet avec VS Code.

4. Lancer `index.html` avec l'extension **Live Server**.

##  Objectif pédagogique

Ce projet m'a permis de pratiquer plusieurs notions JavaScript :

- La manipulation du DOM.
- Les événements avec `addEventListener`.
- Les méthodes `map()`, `filter()`, `find()` et `reduce()`.
- Les fonctions asynchrones.
- La gestion des données avec LocalStorage.
- L'organisation du code en plusieurs modules.
- La gestion des événements avec `stopPropagation()`.

##  Auteur

**Yassine Dafali**

Projet réalisé dans le cadre de ma formation à YouCode.
