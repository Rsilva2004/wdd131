// ==========================
// FORM
// ==========================

const form = document.querySelector("#consoleForm");
const result = document.querySelector("#result");
const recommendation = document.querySelector("#recommendation");

// ==========================
// CONSOLE OBJECT
// ==========================

const consoles = {

    playstation: {

        name: "PlayStation 5",

        color: "#006FCD",

        description:
            "PlayStation is the perfect choice for players who enjoy exclusive games, cinematic adventures, and immersive single-player experiences.",

        page: "playstation.html"

    },

    xbox: {

        name: "Xbox Series X",

        color: "#107C10",

        description:
            "Xbox is ideal for players who value Game Pass, online gaming, backward compatibility, and excellent value for money.",

        page: "xbox.html"

    }

};

// ==========================
// LOAD LAST RESULT
// ==========================

loadRecommendation();

// ==========================
// FORM EVENT
// ==========================

form.addEventListener("submit", function(event){

    event.preventDefault();

    calculateConsole();

});

// ==========================
// CALCULATE
// ==========================

function calculateConsole(){

    let xboxPoints = 0;
    let playstationPoints = 0;

    const answers = [];

    const fields = document.querySelectorAll("fieldset");

    fields.forEach(field => {

        const answer = field.querySelector("input:checked");

        answers.push(answer.value);

        if(answer.value === "xbox"){

            xboxPoints++;

        }

        else{

            playstationPoints++;

        }

    });

    if(xboxPoints > playstationPoints){

        showResult(consoles.xbox);

    }

    else{

        showResult(consoles.playstation);

    }

}

// ==========================
// SHOW RESULT
// ==========================

function showResult(consoleChoice){

    result.style.display = "block";

    recommendation.innerHTML = `

        <h3 style="color:${consoleChoice.color};">

            ${consoleChoice.name}

        </h3>

        <p>

            ${consoleChoice.description}

        </p>

        <a class="button" href="${consoleChoice.page}">

            Learn More

        </a>

    `;

    localStorage.setItem(

        "recommendedConsole",

        JSON.stringify(consoleChoice)

    );

}

// ==========================
// LOAD LOCAL STORAGE
// ==========================

function loadRecommendation(){

    const savedConsole = localStorage.getItem("recommendedConsole");

    if(savedConsole){

        const consoleChoice = JSON.parse(savedConsole);

        result.style.display = "block";

        recommendation.innerHTML = `

            <h3 style="color:${consoleChoice.color};">

                Last Recommendation

            </h3>

            <h2>

                ${consoleChoice.name}

            </h2>

            <p>

                ${consoleChoice.description}

            </p>

            <a class="button" href="${consoleChoice.page}">

                Learn More

            </a>

        `;

    }

}