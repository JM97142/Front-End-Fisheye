//Affichage des medias de la page photographe
function mediaFactory(media) {
    const { photographerId, image, video, title, id, likes, date, price } = media;

    const videoFiles = `./assets/medias/${photographerId}/${video}`;
    const imgFiles = `./assets/medias/${photographerId}/${image}`;
    
    // Affiche les images des photographe
    function getImgCardDOM() {
        const divMedia = document.createElement( 'article' );

        const lienCarrousel = document.createElement( 'a' );
        lienCarrousel.addEventListener('click', function() {
            const mediaContent = document.querySelector(".media-content");
            const lightBox = lightboxFactory(media);
            const lightbox = lightBox.getLightbox();

            mediaContent.appendChild(lightbox);
        });

        const imgPhotographer = document.createElement( 'img' );
        imgPhotographer.setAttribute("src", imgFiles);
        imgPhotographer.classList = "img-media item";
        

        const divInfos = document.createElement( 'div');
        divInfos.className = "media-infos";

        const imgTitle = document.createElement( 'h2' );
        imgTitle.textContent = title;
        imgTitle.className = "img-media-title";

        const imgLikes = document.createElement( 'p' );
        imgLikes.textContent = likes;
        imgLikes.className = "img-media-likes";
        imgLikes.setAttribute("aria-label", "likes");

        const iconLikes = document.createElement ( 'i' );
        iconLikes.className = "fa-solid fa-heart";

        lienCarrousel.appendChild(imgPhotographer);
        divMedia.appendChild(lienCarrousel);
        divMedia.appendChild(divInfos);
        divInfos.appendChild(imgTitle);
        divInfos.appendChild(imgLikes);
        divInfos.appendChild(iconLikes);

        return divMedia;
    }

    // Affiche les videos du photographe
    function getVideoCardDOM() {
        const carrousel = document.querySelector( '.carrousel' );

        const divMedia = document.createElement( 'article' );

        const lienCarrousel = document.createElement( 'a' );
        lienCarrousel.addEventListener('click', function() {
            const mediaContent = document.querySelector(".media-content");
            const lightBox = lightboxFactory(media);
            const lightbox = lightBox.getLightbox();

            mediaContent.appendChild(lightbox);
        });

        const srcMedia = document.createElement( 'source' );
        const videoPhotographer = document.createElement( 'video' );
        videoPhotographer.setAttribute("src", videoFiles);
        videoPhotographer.classList = "video-media item";

        const divInfos = document.createElement( 'div' );
        divInfos.className = "media-infos";

        const videoTitle = document.createElement( 'h2' );
        videoTitle.textContent = title;
        videoTitle.className = "video-media-title";

        const videoLikes = document.createElement( 'p' );
        videoLikes.textContent = likes;
        videoLikes.className = "video-media-likes";
        videoLikes.setAttribute("aria-label", "likes");

        const iconLikes = document.createElement ( 'i' );
        iconLikes.className = "fa-solid fa-heart";

        lienCarrousel.appendChild(videoPhotographer);
        divMedia.appendChild(lienCarrousel);
        divMedia.appendChild(divInfos);
        divInfos.appendChild(videoTitle);
        divInfos.appendChild(videoLikes);
        divInfos.appendChild(iconLikes);

        return divMedia;
    }

    // Affiche l'ensemble des medias
    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        
        const lienCarrousel = document.createElement( 'a' );
        lienCarrousel.href = `/photographer.html?id=${id}`;
        lienCarrousel.addEventListener('click', function() {
            const mediaContent = document.querySelector(".media-content");
            const lightbox = lightbox.getLightbox();

            mediaContent.appendChild(lightbox);
        });

        if (image) {
            return getImgCardDOM();
        }

        if (video) {
            return getVideoCardDOM();
        }

        article.appendChild(lienCarrousel);

        return article;
    }
    return { photographerId, image, video, title, id, likes, date, price, getMediaCardDOM }
}