
export function initFilter(data, onResults) {

    const search = document.getElementById("search-film");
    const filter = document.getElementById("filter-status");
    const clear = document.getElementById("clear-btn");

    function searchAndFilter() {

        let recherche = search.value.trim().toLowerCase();
        let valeur = filter.value;

        let resultats = data.filter(film => {

            return film.title.trim().toLowerCase().includes(recherche)
                && (valeur === "all" || valeur === film.type);

        });

        onResults(resultats);
    }

    search.addEventListener("input", searchAndFilter);

    filter.addEventListener("change", searchAndFilter);

    clear.addEventListener("click", () => {

        search.value = "";
        filter.value = "all";

        searchAndFilter();
    });
}
