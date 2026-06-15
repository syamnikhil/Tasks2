const dice = document.getElementById("dice");
const rollBtn = document.getElementById("rollBtn");

const faces = [
    "⚀",
    "⚁",
    "⚂",
    "⚃",
    "⚄",
    "⚅"
];

rollBtn.addEventListener("click", () => {

    const randomNum =
    Math.floor(Math.random() * 6);

    dice.textContent =
    faces[randomNum];

});