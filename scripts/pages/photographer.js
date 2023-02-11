async function getPhotographer(id) {
    // Récupère les datas dans le json                               
    const response = await fetch ("data/photographers.json");
    const data = await response.json();
    // Retourne un photographe par rapport à son id
    for (let i=0; data.photographers.length; i++) {
        const photographer = data.photographers[i];
        if (photographer.id === id) {
            return photographer;
        }
    }
    return null;
}

// Création d'un tableau des médias
async function getMedias(photographerId) {
    // Récupère les datas dans le json
    const response = await fetch ("data/photographers.json");
    const data = await response.json();
    // Tableau qui doit contenir les medias
    let tabMedias = [];
    // Ajout des medias dans le tableau
    for (let i=0; i<data.media.length; i++) {
        const mediaPhotographer = data.media[i];
        if (mediaPhotographer.photographerId === photographerId) {
            tabMedias.push(mediaPhotographer);
        }
    }
    // Retourne le tableau avec les medias en fonction de l'id du photographe
    return tabMedias;
}

// Affiche l'en-tête de la page photographer
async function displayData(photographer) { 
    const photographerHeader = document.querySelector(".photograph-header");

    const photographerModel = profilsFactory(photographer);
    const userCardDOM = photographerModel.getProfilCardDOM(); 
    photographerHeader.appendChild(userCardDOM);
}

// Affiche les médias du photographe
async function displayMedia(tabMedias) {
    const mediaContent = document.querySelector(".media-content");

    mediaContent.innerHTML = '';
    
    for (let i=0; i<tabMedias.length; i++) {
        const mediaModel = mediaFactory(tabMedias[i], tabMedias);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        mediaContent.appendChild(mediaCardDOM);
    }
}

// Affiche l'encart de la page photographer
async function displayEncart(photographer, media) {
    const photographerEncart = document.querySelector(".encart-photographer");

    let sumLikes = 0;

    for (let i=0; i<media.length; i++) {
        const mediaLikes = media[i].likes;
        sumLikes = sumLikes + mediaLikes;
    }

    const data = { 
        "price":photographer.price, 
        "likes":sumLikes
    };

    const encartModel = encartFactory(data);
    const encartCardDOM = encartModel.getEncartCardDOM();
    photographerEncart.appendChild(encartCardDOM);
}

// Système de tri des médias
async function displayTri(tabMedias) {
    const triSystem = document.querySelector("#tri-selection");
    triSystem.setAttribute("alt", "Order by");

    triSystem.addEventListener('change', function(event) {
        if (event.target.value === 'popularité') {
            tabMedias.sort((a, b) => {
                if (a.likes > b.likes) {
                    return -1;
                } 
                else if (a.likes < b.likes) {
                    return 1;
                }
                return 0;
            });
        }
        else if (event.target.value === 'date') {
            tabMedias.sort((a, b) => {
                if (new Date(a.date) > new Date(b.date)) {
                    return -1;
                } 
                else if (new Date(a.date) > new Date(b.date)) {
                    return 1;
                }
                return 0;
            });
        }
        else if (event.target.value === 'titre') {
            tabMedias.sort((a, b) => {
                if (a.title < b.title) {
                    return -1;
                } 
                else if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
        }
    // Retourne le tableau des médias trié
    displayMedia(tabMedias);
    });
}

async function init() {
    // Récupère l'id et le converti en nombre 
    const params = new URL(document.location).searchParams;
    const id = params.get("id");
    const numberToString = Number(id);
                            
    const photographer = await getPhotographer(numberToString);
    const media = await getMedias(numberToString);
    // Verifie si on retourne bien un photographe
    if (photographer !== null) {
        displayData(photographer);
        displayTri(media);
        displayMedia(media);
        displayEncart(photographer, media);
    }
}

init();