const dataContainer = document.querySelector("#data-container");

getPicture();

function getPicture() {
    const api = "https://69d409f3336103955f8fecbe.mockapi.io/art";

    //scriem functia fetch care trimite o cerere http catre url-ul specificat
    fetch(api)
        .then((res) => res.json()) // res raspuns http de la server => transforma raspunsul in obiect js
        .then((data) => { // avem array de date (picturi) primit de la api
            data.forEach((art) => {
                dataContainer.innerHTML += `
                    <div class="art-card">
                        <img src="${art.image}" alt="${art.title}">
                        
                        <div class="card-content">
                            <h2>${art.title}</h2>
                            <h3>${art.artist.name} | ${art.artist.period}</h3>
            
                            <div class="info-section">
                                <p><strong>Tehnică:</strong> ${art.technical_details.support}</p>
                                <p><strong>Locație:</strong> ${art.current_location}</p>
                                <a href="details.html?id=${art.id}" class="btn-details">Vezi Detalii Complete</a>
                            </div>
                        </div>
                    </div>`;
            });
        })
}