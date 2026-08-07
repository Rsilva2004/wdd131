// ==========================
// CURRENT YEAR
// ==========================

const currentYear = document.querySelector("#currentyear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// ==========================
// LAST MODIFIED
// ==========================

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// ==========================
// HAMBURGER MENU
// ==========================

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");
        menuButton.classList.toggle("open");

    });

}