//Affichage des medias de la page photographe
function mediaFactory(media, tabMedias) {
    const { photographerId, image, video, title, id, likes, date, price } = media;

    const videoFiles = `./assets/medias/${photographerId}/${video}`;
    const imgFiles = `./assets/medias/${photographerId}/${image}`;
    
    // const likesEncart = document.querySelector( '.nbrLikes' );

    let likesMedia = likes;
    
    // Affiche les images des photographe
    function getImgCardDOM() {
        const divMedia = document.createElement( 'article' );
        // Permet la création du caroussel de media
        const lienCarrousel = document.createElement( 'a' );
        lienCarrousel.setAttribute("alt", `${title}, closeup view`);
        lienCarrousel.addEventListener('click', function() {
            const mediaContent = document.querySelector(".media-content");
            const lightBox = lightboxFactory(tabMedias, media);
            const lightbox = lightBox.getLightbox();

            mediaContent.appendChild(lightbox);
        });

        const imgPhotographer = document.createElement( 'img' );
        imgPhotographer.setAttribute("src", imgFiles);
        imgPhotographer.classList = "img-media";
        

        const divInfos = document.createElement( 'div' );
        divInfos.className = "media-infos";

        const imgTitle = document.createElement( 'h2' );
        imgTitle.textContent = title;
        imgTitle.className = "img-media-title";

        const divLikes = document.createElement( 'div' );
        divLikes.className = "media-likes";

        const imgLikes = document.createElement( 'span' );
        imgLikes.textContent = likes;
        imgLikes.className = "img-media-likes";

        const iconLikes = document.createElement ( 'i' );
        iconLikes.className = "fa-solid fa-heart";
        iconLikes.setAttribute("aria-label", "likes");
        // Permet à l'utilisateur de like le média
        iconLikes.addEventListener('click', function() {
            imgLikes.textContent = ++likesMedia;

            const likesEncart = document.querySelector( '.nbrLikes' );
            likesTotal = parseInt(likesEncart.textContent);
            likesTotal++;
            likesEncart.textContent = likesTotal;
        });

        lienCarrousel.appendChild(imgPhotographer);
        divMedia.appendChild(lienCarrousel);
        divMedia.appendChild(divInfos);
        divInfos.appendChild(imgTitle);
        divInfos.appendChild(divLikes);
        divLikes.appendChild(imgLikes);
        divLikes.appendChild(iconLikes);

        return divMedia;
    }

    // Affiche les videos du photographe
    function getVideoCardDOM() {
        const divMedia = document.createElement( 'article' );
        // Permet la création du caroussel de media
        const lienCarrousel = document.createElement( 'a' );
        lienCarrousel.setAttribute("alt", `${title}, closeup view`);
        lienCarrousel.addEventListener('click', function() {
            const mediaContent = document.querySelector(".media-content");
            const lightBox = lightboxFactory(tabMedias, media);
            const lightbox = lightBox.getLightbox();

            mediaContent.appendChild(lightbox);
        });

        const videoPhotographer = document.createElement( 'video' );
        videoPhotographer.setAttribute("src", videoFiles);
        videoPhotographer.classList = "video-media";

        const divInfos = document.createElement( 'div' );
        divInfos.className = "media-infos";

        const videoTitle = document.createElement( 'h2' );
        videoTitle.textContent = title;
        videoTitle.className = "video-media-title";

        const divLikes = document.createElement( 'div' );
        divLikes.className = "media-likes";

        const videoLikes = document.createElement( 'span' );
        videoLikes.textContent = likes;
        videoLikes.className = "video-media-likes";

        const iconLikes = document.createElement ( 'i' );
        iconLikes.className = "fa-solid fa-heart";
        iconLikes.setAttribute("aria-label", "likes");
        // Permet à l'utilisateur de like le média
        iconLikes.addEventListener('click', function() {
            videoLikes.textContent = ++likesMedia;
            
            const likesEncart = document.querySelector( '.nbrLikes' );
            likesTotal = parseInt(likesEncart.textContent);
            likesTotal++;
            likesEncart.textContent = likesTotal;
        });

        lienCarrousel.appendChild(videoPhotographer);
        divMedia.appendChild(lienCarrousel);
        divMedia.appendChild(divInfos);
        divInfos.appendChild(videoTitle);
        divInfos.appendChild(divLikes);
        divLikes.appendChild(videoLikes);
        divLikes.appendChild(iconLikes);

        return divMedia;
    }

    // Affiche l'ensemble des medias
    function getMediaCardDOM() {
        const article = document.createElement( 'article' );

        if (image) {
            return getImgCardDOM();
        }

        if (video) {
            return getVideoCardDOM();
        }

        return article;
    }
    return { photographerId, image, video, title, id, likes, date, price, getMediaCardDOM }
}