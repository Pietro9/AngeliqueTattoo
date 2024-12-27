// Caricare dinamicamente le immagini dalla cartella (con percorsi relativi)
const gallery = document.querySelector('.gallery');
const imagePaths = [
    'Asset/Gallery/sketches/project2.png',
    'Asset/Gallery/sketches/project3.png',
    'Asset/Gallery/sketches/project4.png',
    'Asset/Gallery/sketches/project5.png',
    'Asset/Gallery/sketches/project6.png',
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
