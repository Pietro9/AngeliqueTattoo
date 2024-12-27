// Funzione per gestire lo scroll
function handleScroll() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Puoi modificare il valore di 50 se necessario
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Aggiungi un listener per l'evento scroll
window.addEventListener('scroll', handleScroll);

// Chiama la funzione subito per impostare lo stato iniziale
handleScroll();
