import { getData } from "./store.js";

let data = await getData();
let container = document.getElementById("movies-container");

// Definyeena l-defaults hna ila ma-m-passinsh
let defaultPage = 1;
let defaultSize = 8;




export function renderfilm(filmData = data, page = defaultPage, size = defaultSize) {
  if (!filmData) return;

  container.innerHTML = "";

  let startIndex = (page - 1) * size;
  let endIndex = startIndex + size;

  let datas = filmData.slice(startIndex, endIndex);

for (let i = 0; i < datas.length; i++) {

    container.innerHTML += `
        <div class="bg-gray-900 movie-card rounded-xl overflow-hidden shadow-lg"
             data-id="${datas[i].id}">

            <img
                src="${datas[i].image}"
                alt="${datas[i].title}"
                class="w-full h-64 object-cover"
            >

            <div class="p-4 text-white">

                <h2 class="text-lg font-bold">
                    ${datas[i].title}
                </h2>

                <p class="text-gray-400 mt-2">
                    ${datas[i].releaseYear}
                </p>

                <span class="inline-block mt-2 bg-red-600 px-3 py-1 rounded-lg text-sm">
                    ${datas[i].type}
                </span>

            </div>
        </div>
    `;
}
  renderPaginationButtons(filmData, page, size);
}

export function renderPaginationButtons(filmData, currentPage, pageSize = defaultSize) {
  let Cbtn = document.getElementById("pagination");
  if (!Cbtn) return;
  
  Cbtn.innerHTML = "";
  let totalPage = Math.ceil(filmData.length / pageSize);

  for (let i = 1; i <= totalPage; i++) {
    let btn = document.createElement("button");
    btn.innerHTML = i;
    
    if (i === currentPage) {
      btn.className = "bg-red-600 text-white px-4 py-2 rounded-lg font-bold";
    } else {
      btn.className = "bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600";
    }

    btn.addEventListener("click", () => {
      renderfilm(filmData, i, pageSize);
    });

    Cbtn.appendChild(btn);
  }
}

// First Render Call
renderfilm(data, defaultPage, defaultSize);