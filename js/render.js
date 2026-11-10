import { getData } from "./store.js";

let data = await getData();

let container = document.getElementById("movies-container");

for (let i = 0; i < data.length; i++) {

    container.innerHTML += `
        <div class="bg-gray-900 rounded-xl overflow-hidden shadow-lg">

            <img
                src="${data[i].image}"
                alt="${data[i].title}"
                class="w-full h-64 object-cover"
            >

            <div class="p-4 text-white">

                <h2 class="text-lg font-bold">
                    ${data[i].title}
                </h2>

                <p class="text-gray-400 mt-2">
                    ${data[i].releaseYear}
                </p>

                <span class="inline-block mt-2 bg-red-600 px-3 py-1 rounded-lg text-sm">
                    ${data[i].type}
                </span>

            </div>

        </div>
    `;
}