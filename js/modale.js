import { getData } from "./store.js";

const data = await getData();

const container = document.getElementById("movies-container");
const info = document.getElementById("info-container");
const closeBtn = document.getElementById("close-modal");
const modale = document.getElementById("modal");
console.log("container:", container);
console.log("info:", info);
console.log("closeBtn:", closeBtn);
console.log("modale:", modale);

function openModal() {
    modale.classList.remove("hidden");
    modale.classList.add("flex");
}

function closeModal() {
    modale.classList.add("hidden");
    modale.classList.remove("flex");
}

container.addEventListener("click", e => {
    const card = e.target.closest(".movie-card");
    if (!card) return;

    const film = data.find(f => String(f.id) === card.dataset.id);
    if (!film) return;

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

    openModal();
});

closeBtn.addEventListener("click", closeModal);

modale.addEventListener("click", e => {
    if (e.target === modale) closeModal();
});
