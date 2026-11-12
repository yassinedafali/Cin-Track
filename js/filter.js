import { getData } from "./store.js";

let data = await getData();
import { renderfilm } from "./render.js";

const search=document.getElementById("search-film")
 const filter=document.getElementById("filter-status")
 const clear=document.getElementById("clear-btn")


search.addEventListener("input", () => {

    let recherche = search.value.trim().toLowerCase();
    let valeur = filter.value;
    let resultats = data.filter(trip => {
        console.log(trip.title.trim() + " => " +recherche )
        return trip.title.trim().toLowerCase().includes(recherche) && (valeur === "all" || valeur === trip.type) ;
    });

    renderfilm(resultats)
});

clear.addEventListener("click",()=>{
    search.value="";
    filter.value="all"
}

)