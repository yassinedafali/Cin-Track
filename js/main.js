
import { getData } from "./store.js";

import {
    toggleFavorite
} from "./Favorites.js";

import {
    renderfilm,
    renderFavorites
} from "./render.js";

import {
    initFilter
} from "./filter.js";

import {
    openModal,
    initModal
} from "./modale.js";


// ================= INITIALISATION =================

const data = await getData();

if (!data.length) {
    console.log("Aucun film trouvé");
} else {

    const container = document.getElementById("movies-container");
    const favoritesContainer = document.getElementById("favorites-container");
    const active = document.getElementById("active");

    let currentFilms = data;


    // ================= PREMIER AFFICHAGE =================

    renderfilm(currentFilms);
    renderFavorites(data);


    // ================= ACTIVE BUTTON =================

    active.addEventListener("click", () => {

        active.classList.toggle("text-green-700");
        active.classList.toggle("text-red-700");

        const isActive = active.classList.contains("text-green-700");

        favoritesContainer.classList.toggle("hidden", !isActive);

        document.querySelectorAll(".favorite-btn").forEach(btn => {
            btn.classList.toggle("hidden", !isActive);
        });

    });


    // ================= FAVORITES + MODAL =================

    container.addEventListener("click", e => {

        const btn = e.target.closest(".favorite-btn");

        // Click sur le coeur
        if (btn) {

            e.stopPropagation();

            toggleFavorite(btn.dataset.id);

            renderfilm(currentFilms);
            renderFavorites(data);

            return;
        }

        // Click sur la Card
        const card = e.target.closest(".movie-card");

        if (!card) return;

        const film = data.find(f =>
            String(f.id) === card.dataset.id
        );

        if (!film) return;

        openModal(film);

    });


    // ================= REMOVE FAVORITE =================

    favoritesContainer.addEventListener("click", e => {

        const btn = e.target.closest(".remove-favorite");

        if (!btn) return;

        toggleFavorite(btn.dataset.id);

        renderfilm(currentFilms);
        renderFavorites(data);

    });


    // ================= SEARCH + FILTER =================

    initFilter(data, resultats => {

        currentFilms = resultats;

        renderfilm(currentFilms);

    });


    // ================= MODAL =================

    initModal();

}
