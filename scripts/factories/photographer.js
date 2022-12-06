function photographerFactory(data) {

    const { portrait, name, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;
    const location = `${city}, ${country}`;
    const dayPrice = `${price}€/jour`;
    // Ajout de l'attribut alt au logo
    const homeLogo = document.querySelector('.logo');
    homeLogo.setAttribute("alt", "Fisheye Home page");

    function getUserCardDOM() {
        const profilLink = document.createElement( 'a' );
        profilLink.href = `/photographer.html?id=${id}`;
        profilLink.className = 'link_photographers';
        profilLink.setAttribute("aria-label", name);

        const article = document.createElement( 'article' );
        article.className = 'fiche_photographers';

        const photographersImg = document.createElement( 'img' );
        photographersImg.setAttribute("src", picture);
        photographersImg.setAttribute("alt", " ");

        const photographersName = document.createElement( 'h2' );
        photographersName.textContent = name;
        photographersName.className = 'name_photographers';

        const cityCountry = document.createElement( 'p' );
        cityCountry.textContent = location;
        cityCountry.className = 'city_photographers';

        const description = document.createElement( 'p' );
        description.textContent = tagline;
        description.className = 'description_photographers';

        const photographersPrice  = document.createElement( 'p' );
        photographersPrice.textContent = dayPrice;
        photographersPrice.className = 'day_price';

        profilLink.appendChild(photographersImg);
        profilLink.appendChild(photographersName);
        article.appendChild(profilLink);
        article.appendChild(cityCountry);
        article.appendChild(description);
        article.appendChild(photographersPrice);

        return (article);
    }
    return { picture, name, city, country, tagline, price, id, getUserCardDOM }
}

// Page photographe
function profilsFactory(data) {

    const { portrait, name, city, country, tagline, price, id } = data;
    const picture = `assets/photographers/${portrait}`;
    const location = `${city}, ${country}`;
    
    const homeLogo = document.querySelector('.logo');
    homeLogo.setAttribute("alt", "Fisheye Home page");

    function getProfilCardDOM() {

        const article = document.createElement( 'article' );
        article.className = 'photographer_header';

        const div = document.createElement( 'div' );

        const photographerName = document.createElement( 'h2' );
        photographerName.textContent = name;
        photographerName.className = 'name_profil';

        const cityCountry = document.createElement( 'p' );
        cityCountry.textContent = location;
        cityCountry.className = 'city_profil';

        const description = document.createElement( 'p' );
        description.textContent = tagline;
        description.className = 'description_profil';

        const contactButton = document.querySelector('.contact_button');

        const photographerImg = document.createElement( 'img' );
        photographerImg.setAttribute("src", picture);
        photographerImg.setAttribute("alt", "Mimi Keel");
        photographerImg.className = 'img_profil';

        div.appendChild(photographerName);
        div.appendChild(cityCountry);
        div.appendChild(description);
        article.appendChild(div);
        article.appendChild(contactButton);
        article.appendChild(photographerImg);

        return (article);
    }
    return { picture, name, city, country, tagline, price, id, getProfilCardDOM }
}