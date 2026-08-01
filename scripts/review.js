

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#reviewCount").textContent =
`You have submitted ${reviewCount} review${reviewCount === 1 ? "" : "s"}!`;

document.querySelector("#currentyear").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modification: ${document.lastModified}`;