function triFactory(media, tabMedias) {
    const { photographerId, image, video, title, id, likes, date, price } = media;

    function getTri() {
        const divTri = document.createElement( 'div' );
        divTri.className = "tri-option";
        divTri.setAttribute("tabindex", "3");

        const label = document.createElement( 'label' );
        label.textContent = "Trier par";

        const selectionTri = document.createElement( 'select' );
        selectionTri.setAttribute("name", "tri");
        selectionTri.id = "tri-selection";

        const optionPopulaire = document.createElement( 'option' );
        optionPopulaire.textContent = "Popularité";
        optionPopulaire.setAttribute("value", "popularité");

        const optionDate = document.createElement( 'option' );
        optionDate.textContent = "Date";
        optionDate.setAttribute("value", "date");

        const optionTitre = document.createElement( 'option' );
        optionTitre.textContent = "Titre";
        optionTitre.setAttribute("value", "titre");

        selectionTri.addEventListener('change', function(event) {
            console.log(event.target.value);
        });

        // if (optionPopulaire) {
        //     tabMedias.sort((a, b) => {
        //         if (a.likes > b.likes) {
        //             return -1;
        //         } 
        //         else if (a.likes < b.likes) {
        //             return 1;
        //         }
        //         return 0;
        //     });
        // }
        // if (optionDate) {
        //     tabMedias.sort((a, b) => {
        //         if (new Date(a.date) > new Date(b.date)) {
        //             return -1;
        //         } 
        //         else if (new Date(a.date) > new Date(b.date)) {
        //             return 1;
        //         }
        //         return 0;
        //     });
        //     return sorted;
        // }
        // if (optionTitre) {
        //     tabMedias.sort((a, b) => {
        //         if (a.title > b.title) {
        //             return -1;
        //         } 
        //         else if (a.title < b.title) {
        //             return 1;
        //         }
        //         return 0;
        //     });
        // }

        divTri.appendChild(label);
        divTri.appendChild(selectionTri);
        selectionTri.appendChild(optionPopulaire);
        selectionTri.appendChild(optionDate);
        selectionTri.appendChild(optionTitre);

        return divTri;
    }
    return { photographerId, image, video, title, id, likes, date, price, getTri }
}