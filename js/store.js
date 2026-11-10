
sotor const url = "https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json";

 export async function getData() {
    try {
        const response = await fetch(url);

        const data = await response.json();  
        return data;
        
    } catch (error) {
        console.log("Erreur :", error);
    }
}

getData();