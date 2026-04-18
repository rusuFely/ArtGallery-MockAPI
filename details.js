const urlParams = new URLSearchParams(window.location.search);
const artId = urlParams.get('id'); // ia valoarea parametrului id din url

        if (artId) { //verificam daca extista un id in url si nu este gol sau null
            // fetch face o cerere http catre api pentru pictura cu id-ul specificat
            fetch(`https://69d409f3336103955f8fecbe.mockapi.io/art/${artId}`) 
                .then(res => res.json()) // asteapta raspunsul de la server si il transforma in format json
                .then(art => {
                    document.getElementById('details-content').innerHTML = `
                        <a href="index.html" class="back-link">← Înapoi la Galerie</a>
                        
                        <img src="${art.image}" class="full-img">
                        <h1>${art.title}</h1>
                        <p class="details-subtxt"><em>Creat de ${art.artist.name} în anul ${art.technical_details.year}</em></p>
                        <hr>

                        <p class="art-description">${art.description}</p>

                        <h3>Descriere Compozițională</h3>
                        <ul class="art-key-el">
                            ${art.composition.elements.map(el => `<li><i class="fa-solid fa-paintbrush"></i>${el}</li>`).join('')}
                        </ul>

                        <h3>Pigmenți Utilizați</h3>
                        <ul class="art-key-colors">
                            ${art.composition.key_colors.map(c => `<li><i class="fa-solid fa-palette"></i><strong>${c.name}:</strong> ${c.shades}</li>`).join('')}
                        </ul>

                        <p><strong>Dimensiuni:</strong> ${art.technical_details.dimensions.h}x${art.technical_details.dimensions.w} cm</p>
                        <p><strong>Curent artistic:</strong> ${art.artist.period}</p>
                    `;
                });
        }

// ul cream lista neordonata, map() trece prin fiecare element din array-ul elements, creeaza li pentru fiecare element, join uneste toate li
// ${art.composition.elements.map(el => `<li>${el}</li>`).join('')}

// ul cream lista neordonata, map() trece prin fiecare culoare din array-ul elements, creeaza li pentru fiecare culoare, join uneste toate li
// ${art.composition.key_colors.map(c => `<li><strong>${c.name}:</strong> ${c.shades}</li>`).join('')}