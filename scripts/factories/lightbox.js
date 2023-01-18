// Affiche le carrousel des medias
function lightboxFactory(tabMedias, media) {
    
    const { photographerId, image, video, title, id, likes, date, price } = media;

    let mediaIndex = 0;

    for (let i=0; i<tabMedias.length; i++) {
        const currentMedia = tabMedias[i];
        if (media.id === currentMedia.id) {
            mediaIndex = i;
            break;
        }
    }

    function nextSlide() {
        if (mediaIndex + 1 >= tabMedias.length) {
            const lastItem = document.querySelector(`.item-${mediaIndex}`);
            mediaIndex = 0;
            const currentItem = document.querySelector(`.item-${mediaIndex}`);

            setAttribute(lastItem, currentItem);
        }
        else {
            mediaIndex += 1;
            const lastItem = document.querySelector(`.item-${mediaIndex -1}`);
            const currentItem = document.querySelector(`.item-${mediaIndex}`);

            setAttribute(lastItem, currentItem);
        }
    }

    function previousSlide() {
        if (mediaIndex - 1 >= 0) {
            mediaIndex -= 1;
            const currentItem = document.querySelector(`.item-${mediaIndex}`);
            const lastItem = document.querySelector(`.item-${mediaIndex + 1}`);

            setAttribute(lastItem, currentItem);
        }
        else {
            const lastItem = document.querySelector(`.item-${mediaIndex}`);
            mediaIndex = tabMedias.length - 1;
            const currentItem = document.querySelector(`.item-${mediaIndex}`);

            setAttribute(lastItem, currentItem);
        }
    }

    function setAttribute(lastItem, currentItem) {
        lastItem.style.display = 'none';
        currentItem.style.display = 'block';
        lastItem.setAttribute('aria-hidden', 'true');
        currentItem.setAttribute('aria-hidden', 'false');
    }

    function getLightbox() {
        const carrousel = document.createElement( 'div' );
        carrousel.className = "carrousel";
        
        const mediaCarrousel = document.createElement( 'figure' );
        // Bouton pour afficher le média précédent
        const previousBtn = document.createElement( 'span' );
        previousBtn.className = "previous-btn";
        const arrowLeft = document.createElement( 'i' );
        arrowLeft.className = "fa-sharp fa-solid fa-angle-left";
        previousBtn.addEventListener('click', function() {
            previousSlide();
        });
        // Bouton pour afficher le média suivant
        const nextBtn = document.createElement( 'span' );
        nextBtn.className = "next-btn";
        const arrowRight = document.createElement( 'i' );
        arrowRight.className = "fa-sharp fa-solid fa-angle-right";
        nextBtn.addEventListener('click', function() {
            nextSlide();
        });
        // Ferme le carroussel
        const closeBtn = document.createElement( 'span' );
        closeBtn.className = "close-btn";
        const cross = document.createElement( 'i' );
        cross.className = "fa-sharp fa-solid fa-xmark";
        closeBtn.addEventListener('click', function() {
            carrousel.remove();
        });

        const mediaContainer = document.createElement( 'div' );

        mediaCarrousel.appendChild(previousBtn);
        previousBtn.appendChild(arrowLeft);

        for (let i=0; i<tabMedias.length; i++) {      
            const currentMedia = tabMedias[i];

            if (currentMedia.image) {
                const imgFiles = `./assets/medias/${photographerId}/${currentMedia.image}`;

                const container = document.createElement( 'div' );
                container.className = `item-${i}`;

                if (mediaIndex !== i) {
                    container.style.display = "none";
                }

                const imgPhotographer = document.createElement( 'img' );
                imgPhotographer.setAttribute("src", imgFiles);
                imgPhotographer.classList = `img-carrousel item-${i}`;

                mediaContainer.appendChild(container);
                container.appendChild(imgPhotographer);
        
                const nameMedia = document.createElement( 'figcaption' );
                nameMedia.textContent = currentMedia.title;

                mediaCarrousel.appendChild(mediaContainer);
                container.appendChild(nameMedia);
            }

            if (currentMedia.video) {  
                const videoFiles = `./assets/medias/${photographerId}/${currentMedia.video}`;

                const container = document.createElement( 'div' );
                container.className = `item-${i}`;

                if (mediaIndex !== i) {
                    container.style.display = "none";
                }

                const videoPhotographer = document.createElement( 'video' );
                videoPhotographer.setAttribute("src", videoFiles);
                videoPhotographer.classList = `video-carrousel item-${i}`;

                mediaContainer.appendChild(container)
                container.appendChild(videoPhotographer);
        
                const nameMedia = document.createElement( 'figcaption' );
                nameMedia.textContent = title;
        
                mediaCarrousel.appendChild(mediaContainer);
                container.appendChild(nameMedia);
            }
        }
        
        carrousel.appendChild(mediaCarrousel);
        mediaCarrousel.appendChild(nextBtn);
        nextBtn.appendChild(arrowRight);
        mediaCarrousel.appendChild(closeBtn);
        closeBtn.appendChild(cross);

        return carrousel;
    }
    return { photographerId, image, video, title, id, likes, date, price, getLightbox }
}