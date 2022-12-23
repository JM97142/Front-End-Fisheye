async function getPhotographers() {
    // Récupère les datas dans le json
    const response = await fetch('data/photographers.json');
    const photographers = await response.json();
    console.log(photographers);
    // retourne le tableau photographers
    return photographers;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();