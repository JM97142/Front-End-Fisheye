async function getPhotographer(id) {
    // Récupère les datas dans le json                               
    const response = await fetch ("data/photographers.json");
    const data = await response.json();
    // Retourne le tableau photographers
    for (var i=0; data.photographers.length; i++) {
        const photographer = data.photographers[i];
        if (photographer.id === id) {
            return photographer;
        }
    }
    return null;
}

async function displayData(photographer) { 
    const photographerHeader = document.querySelector(".photograph-header");

    const photographerModel = profilsFactory(photographer);
    const userCardDOM = photographerModel.getProfilCardDOM(); 
    photographerHeader.appendChild(userCardDOM);
}

async function init() { 
    const params = new URL(document.location).searchParams;
    const id = params.get("id");
    const numberToString = Number(id);
    // Récupère les datas                                
    const photographer = await getPhotographer(numberToString);
    if (photographer !== null) {
        displayData(photographer);
    }
    console.log(photographer);
}

init(); 











