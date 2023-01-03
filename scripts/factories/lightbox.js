// Affiche le carrousel des medias
function lightboxFactory(media) {
    
    const { photographerId, image, video, title, id, likes, date, price } = media;

    const videoFiles = `./assets/medias/${photographerId}/${video}`;
    const imgFiles = `./assets/medias/${photographerId}/${image}`;

    function getLightbox() {
        const carrousel = document.createElement( 'div' );
        carrousel.className = "carrousel";

        const mediaCarrousel = document.createElement( 'figure' );

        const arrowLeft = document.createElement( 'i' );
        arrowLeft.className = "fa-sharp fa-solid fa-angle-left";

        const arrowRight = document.createElement( 'i' );
        arrowRight.className = "fa-sharp fa-solid fa-angle-right";

        const closeBtn = document.createElement( 'i' );
        closeBtn.className = "fa-sharp fa-solid fa-xmark";
        closeBtn.addEventListener('click', function() {
            carrousel.style.display = "none";
        });
        
        const imgPhotographer = document.createElement( 'img' );
        if (image) {
            imgPhotographer.setAttribute("src", imgFiles);
            imgPhotographer.classList = "img-carrousel";
        }

        const srcMedia = document.createElement( 'source' );
        const videoPhotographer = document.createElement( 'video' );
        if (video) {
            videoPhotographer.setAttribute("src", videoFiles);
            videoPhotographer.classList = "video-carrousel";
        }
        
        const nameMedia = document.createElement( 'figcaption' );
        nameMedia.textContent = title;

        carrousel.appendChild(mediaCarrousel);
        mediaCarrousel.appendChild(arrowLeft)
        mediaCarrousel.appendChild(imgPhotographer);
        videoPhotographer.appendChild(srcMedia);
        mediaCarrousel.appendChild(videoPhotographer);
        mediaCarrousel.appendChild(arrowRight);
        mediaCarrousel.appendChild(closeBtn);
        carrousel.appendChild(nameMedia);

        return carrousel;
    }
    return { photographerId, image, video, title, id, likes, date, price, getLightbox }
}