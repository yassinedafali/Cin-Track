
let favoris = JSON.parse(localStorage.getItem("favoris")) || [];

// Ajouter ou supprimer un film
export function toggleFavorite(id) {

    id = String(id);

    if (favoris.includes(id)) {
        favoris = favoris.filter(f => f !== id);
    } else {
        favoris.push(id);
    }

    localStorage.setItem("favoris", JSON.stringify(favoris));

    return favoris;
}

// Récupérer les favoris
export function getFavorites() {
    return favoris;
}

// Bouton Toggle
export function activebtn() {
    return document.getElementById("active");
}
