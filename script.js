// Przełączanie zakładek
// OPIS: Przełączanie widocznych sekcji na stronie w zależności od klikniętego przycisku.
document.querySelectorAll(".tab-button").forEach(button => {
    button.addEventListener("click", () => {
        // Ukryj wszystkie sekcje
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

        // Pokaż wybraną sekcję
        const target = document.getElementById(button.dataset.tab);
        target.classList.add("active");
    });
});

window.addEventListener("scroll", () => {
    const header = document.getElementById("dynamic-header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// OPIS: Funkcja do zmiany zdjęcia z efektem przejścia.
function updateImageWithEffect(imageElement, newSrc) {
    imageElement.classList.add("fade-in"); // Dodaj efekt
    setTimeout(() => {
        imageElement.src = newSrc; // Zmień obraz po krótkim czasie
        imageElement.classList.remove("fade-in"); // Usuń efekt po zakończeniu
    }, 1000); // Połowa czasu trwania animacji
}

// OPIS: Funkcja do inicjalizacji galerii (zmiana zdjęć, strzałki, automatyczne przewijanie).
function initGallery(galleryId, images) {
    const gallery = document.getElementById(galleryId);
    const imgElement = gallery.querySelector("img");
    const prevButton = gallery.querySelector(".prev");
    const nextButton = gallery.querySelector(".next");
    let currentIndex = 0;

    // Funkcja do zmiany obrazu w galerii
    const updateImage = () => {
        updateImageWithEffect(imgElement, images[currentIndex]);
    };

    // Obsługa strzałki wstecz
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });

    // Obsługa strzałki naprzód
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });

    // Automatyczna zmiana zdjęcia co 10 sekund
    setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    }, 10000); // 10000 ms = 10 sekund
}

document.querySelectorAll(".footer-link").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); // Zapobiega domyślnemu przewijaniu
        const targetId = link.getAttribute("href").substring(1); // Pobierz ID sekcji
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add("active");
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// Inicjalizacja galerii dla poszczególnych sekcji
initGallery("gallery-nida", [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg",
    "images/img6.jpg",
//    "images/img7.jpg",
//    "images/img8.jpg",
//    "images/img9.jpg",
//    "images/img10.jpg",
]);

initGallery("gallery-klimkowka", [
    "images/klim1.jpg",
    "images/klim2.jpg",
    "images/klim3.jpg",
    "images/klim4.jpg",
    "images/klim5.jpg",
    "images/klim6.jpg",
    "images/klim7.jpg",
    "images/klim8.jpg",
//    "images/klim9.jpg",
//    "images/klim10.jpg",
]);
