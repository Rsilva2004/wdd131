const products = [
    {
        id: "fc-1888",
        name: "Flux Capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power Lifter",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Quantum Drive",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "Hyper Grill",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Pocket Booster",
        averagerating: 5.0
    }
];


const productSelect = document.querySelector("#product");

products.forEach(product => {

    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    productSelect.appendChild(option);

});

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modification: ${document.lastModified}`;