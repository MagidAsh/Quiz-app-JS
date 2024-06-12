const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const list = document.querySelector("ol");
// console.log(highScores);

const content = highScores.map((score, index) => {
  return `
    <li>
        <span>${index + 1}</span>
        <p>${score.name}</p>
        <span>${score.score}</span>
    </li>`;
});

list.innerHTML = content.join("");
