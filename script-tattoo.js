// Caricare dinamicamente le immagini dalla cartella (con percorsi relativi)
const gallery = document.querySelector('.gallery');
const imagePaths = [
    'Asset/Gallery/Tattoo/Tattoo (1).png',
'Asset/Gallery/Tattoo/Tattoo (2).png',
'Asset/Gallery/Tattoo/Tattoo (3).png',
'Asset/Gallery/Tattoo/Tattoo (4).png',
'Asset/Gallery/Tattoo/Tattoo (5).png',
'Asset/Gallery/Tattoo/Tattoo (6).png',
'Asset/Gallery/Tattoo/Tattoo (7).png',
'Asset/Gallery/Tattoo/Tattoo (8).png',
'Asset/Gallery/Tattoo/Tattoo (9).png',
'Asset/Gallery/Tattoo/Tattoo (10).png',
'Asset/Gallery/Tattoo/Tattoo (11).png',
'Asset/Gallery/Tattoo/Tattoo (12).png',
'Asset/Gallery/Tattoo/Tattoo (13).png',
'Asset/Gallery/Tattoo/Tattoo (14).png',
'Asset/Gallery/Tattoo/Tattoo (15).png',
'Asset/Gallery/Tattoo/Tattoo (16).png',
'Asset/Gallery/Tattoo/Tattoo (17).png',
'Asset/Gallery/Tattoo/Tattoo (18).png',
'Asset/Gallery/Tattoo/Tattoo (19).png',
'Asset/Gallery/Tattoo/Tattoo (20).png',
'Asset/Gallery/Tattoo/Tattoo (21).png',
'Asset/Gallery/Tattoo/Tattoo (22).png',

    // Aggiungi altre immagini qui, se necessario
];

// Creare le immagini nella galleria
imagePaths.forEach(path => {
    const imgElement = document.createElement('img');
    imgElement.src = path;
    imgElement.alt = "Sketch";
    imgElement.addEventListener('click', () => openModal(path));
    gallery.appendChild(imgElement);
});

let currentIndex = 0;
let images = [];

// Funzione per aprire il modal con l'immagine ingrandita
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    // Carica l'immagine ingrandita
    modalImage.src = imageSrc;
    modal.style.display = 'block';

    // Trova l'indice dell'immagine
    currentIndex = imagePaths.indexOf(imageSrc);
    images = imagePaths; // Imposta l'array delle immagini per la navigazione
}

// Funzione per chiudere il modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
}

// Funzione per visualizzare l'immagine precedente
function showPrevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    document.getElementById('modalImage').src = images[currentIndex];
}

// Funzione per visualizzare l'immagine successiva
function showNextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    document.getElementById('modalImage').src = images[currentIndex];
}

// Gestione pulsanti per chiudere la finestra e navigare
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('prev').addEventListener('click', showPrevImage);
document.getElementById('next').addEventListener('click', showNextImage);


