
const info = document.getElementById("info-container");
const closeBtn = document.getElementById("close-modal");
const modale = document.getElementById("modal");

// Ouvrir Modal
export function openModal(film) {

    if (!film || !info || !modale) return;

    const extraInfo = film.type === "movie"
        ? `<p>Duration: ${film.duration} min</p>`
        : `<p>Seasons: ${film.seasons.length}</p>`;

    info.innerHTML = `
        <img src="${film.image}" alt="${film.title}"
             class="w-full h-64 object-cover rounded-lg">

        <h3 class="text-2xl font-bold mt-4">${film.title}</h3>

        <p>Type: ${film.type}</p>
        <p>Release Year: ${film.releaseYear}</p>

        ${extraInfo}

        <p>Description: ${film.description}</p>
        <p>Genres: ${film.genres.join(", ")}</p>
        <p>Directors: ${film.directors.join(", ")}</p>
        <p>Countries: ${film.productionCountries.join(", ")}</p>
    `;

    modale.classList.remove("hidden");
    modale.classList.add("flex");
}

// Fermer Modal
export function closeModal() {

    modale.classList.add("hidden");
    modale.classList.remove("flex");
}

// Events
export function initModal() {

    closeBtn.addEventListener("click", closeModal);

    modale.addEventListener("click", e => {
        if (e.target === modale) {
            closeModal();
        }
    });
}
