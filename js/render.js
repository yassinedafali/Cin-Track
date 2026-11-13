
import { getFavorites } from "./Favorites.js";

// Afficher les films
export function renderfilm(
    filmData,
    page = 1,
    size = 8
) {
    const container = document.getElementById("movies-container");
    const active = document.getElementById("active");

    if (!container || !filmData) return;

    container.innerHTML = "";

    const isActive = active?.classList.contains("text-green-700");

    let startIndex = (page - 1) * size;
    let endIndex = startIndex + size;

    let datas = filmData.slice(startIndex, endIndex);

    for (let i = 0; i < datas.length; i++) {

        let isFavorite = getFavorites().includes(
            String(datas[i].id)
        );

        let heartColor = isFavorite
            ? "text-red-500"
            : "text-white";

        container.innerHTML += `
            <div class="bg-gray-900 movie-card rounded-xl overflow-hidden shadow-lg"
                 data-id="${datas[i].id}">

                <div class="relative">

                    <button
                        class="favorite-btn ${isActive ? "" : "hidden"} absolute right-2 top-2 rounded-full bg-black/50 p-2"
                        data-id="${datas[i].id}">

                        <i class="fa-solid fa-heart ${heartColor}"></i>

                    </button>

                    <img src="${datas[i].image}"
                         alt="${datas[i].title}"
                         class="w-full h-64 object-cover">

                </div>

                <div class="p-4 text-white">

                    <h2 class="text-lg font-bold">
                        ${datas[i].title}
                    </h2>

                    <p class="text-gray-400 mt-2">
                        ${datas[i].releaseYear}
                    </p>

                    <span class="inline-block mt-2 bg-red-600 px-3 py-1 rounded-lg text-sm mb-2">
                        ${datas[i].type}
                    </span>

                </div>

            </div>
        `;
    }

    renderPaginationButtons(filmData, page, size);
}


// Afficher les favoris
export function renderFavorites(data) {
    const favoritesContainer = document.getElementById("favorites-container");

    if (!favoritesContainer) return;

    favoritesContainer.innerHTML = "";

    let favoriteFilms = data.filter(film =>
        getFavorites().includes(String(film.id))
    );

    favoriteFilms.forEach(film => {

        favoritesContainer.innerHTML += `
            <div class="bg-gray-900 rounded-xl overflow-hidden shadow-lg">

                <img src="${film.image}"
                     alt="${film.title}"
                     class="w-full h-64 object-cover">

                <div class="p-4 text-white">

                    <h2 class="text-lg font-bold">
                        ${film.title}
                    </h2>

                    <p class="text-gray-400 mt-2">
                        ${film.releaseYear}
                    </p>

                    <button
                        class="remove-favorite bg-red-600 text-white px-3 py-2 rounded-lg mt-3"
                        data-id="${film.id}">

                        Remove Favorite

                    </button>

                </div>
            </div>
        `;
    });
}


// Pagination
export function renderPaginationButtons(
    filmData,
    currentPage,
    pageSize = 8
) {
    const Cbtn = document.getElementById("pagination");

    if (!Cbtn) return;

    Cbtn.innerHTML = "";

    let totalPage = Math.ceil(filmData.length / pageSize);

    for (let i = 1; i <= totalPage; i++) {

        let btn = document.createElement("button");

        btn.innerHTML = i;

        btn.className = i === currentPage
            ? "bg-red-600 text-white px-4 py-2 rounded-lg font-bold"
            : "bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600";

        btn.addEventListener("click", () => {
            renderfilm(filmData, i, pageSize);
        });

        Cbtn.appendChild(btn);
    }
}
