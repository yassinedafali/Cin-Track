container.innerHTML += `
    <div class="movie-card" data-id="${e.id}">
        <img src="${e.image}" alt="${e.title}">
        <h3>${e.title}</h3>
    </div>
`;
container.innerHTML += `
    <div class="bg-gray-900 movie-card"
         data-id="${e.id}"
         rounded-xl overflow-hidden shadow-lg">

        <img
            src="${e.image}"
            alt="${e.title}"
            class="w-full h-64 object-cover"
        >

        <div class="p-4 text-white">
            <h2 class="text-lg font-bold">${e.title}</h2>

            <p class="text-gray-400 mt-2">
                ${e.releaseYear}
            </p>

            <span class="inline-block mt-2 bg-red-600 px-3 py-1 rounded-lg text-sm">
                ${e.type}
            </span>
        </div>
    </div>
`;