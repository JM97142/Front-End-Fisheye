//Affichage des medias de la page photographe
function mediaFactory(media) {

    const { photographerId, image, video, title, id, likes, date, price } = media;

    const videoFiles = `./assets/medias/${photographerId}/${video}`;
    const imgFiles = `./assets/medias/${photographerId}/${image}`;
    // Affiche les images des photographe
    function getImgCardDOM() {
        const divMedia = document.createElement( 'article' );

        const imgPhotographer = document.createElement( 'img' );
        imgPhotographer.setAttribute("src", imgFiles);
        imgPhotographer.className = "img-media";

        const divInfos = document.createElement( 'div');
        divInfos.className = "media-infos";

        const imgTitle = document.createElement( 'h2' );
        imgTitle.textContent = title;
        imgTitle.className = "img-media-title";

        const imgLikes = document.createElement( 'p' );
        imgLikes.textContent = likes;
        imgLikes.className = "img-media-likes";

        const iconLikes = document.createElement ( 'i' );
        iconLikes.className = "fa-solid fa-heart";

        divMedia.appendChild(imgPhotographer);
        divMedia.appendChild(divInfos);
        divInfos.appendChild(imgTitle);
        divInfos.appendChild(imgLikes);
        divInfos.appendChild(iconLikes);

        return divMedia;
    }

    // Affiche les videos du photographe
    function getVideoCardDOM() {
        const divMedia = document.createElement( 'article' );

        const srcMedia = document.createElement( 'source' );
        const videoPhotographer = document.createElement( 'video' );
        videoPhotographer.setAttribute("src", videoFiles);
        videoPhotographer.className = "video-media";

        const divInfos = document.createElement( 'div');
        divInfos.className = "media-infos";

        const videoTitle = document.createElement( 'h2' );
        videoTitle.textContent = title;
        videoTitle.className = "video-media-title";

        const videoLikes = document.createElement( 'p' );
        videoLikes.textContent = likes;
        videoLikes.className = "video-media-likes";

        const iconLikes = document.createElement ( 'i' );
        iconLikes.className = "fas fa-heart";

        divMedia.appendChild(videoPhotographer);
        videoPhotographer.appendChild(srcMedia);
        divMedia.appendChild(divInfos);
        divInfos.appendChild(videoTitle);
        divInfos.appendChild(videoLikes);
        divInfos.appendChild(iconLikes);

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