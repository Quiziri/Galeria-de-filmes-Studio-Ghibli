function createMovieCard(movie) {
    //Cria os elementos
    const card = document.createElement('div');
    const cover =document.createElement('img');
    const title = document.createElement('h1');
    const description = document.createElement('p');

    // adiciona as classes CSS
    card.className = 'card';
    cover.className = 'card-cover';
    title.className = 'card-title';
    description.className = 'card-description';

    //configura os atributos e conteúdo dos elementos
    cover.src = movie.image;
    cover.alt = movie.title;
    title.textContent = movie.title;
    description.textContent = movie.description;

    //anexa os elementos ao card
    card.appendChild(cover);
    card.appendChild(title);
    card.appendChild(description);

    // Retorna o card
    return card;
}

function addMoviesToGallery(data) {
    const gallery = document.getElementById('galeria');
    data.forEach(movie => {
        const movieCard = createMovieCard(movie);
        galeria.appendChild(movieCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ghibliapi.vercel.app/films')
        .then(response => response.json())
        .then(addMoviesToGallery);
})