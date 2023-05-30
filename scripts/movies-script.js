const searchBox = document.getElementById("searchBox");
const resultMessage = document.getElementById("resultMessage");

function searchMovies() {
const question = document.getElementById("searchBox").value.toLowerCase();
const movies = document.getElementsByClassName("movie");
let countMovies = 0;

for (let i = 0; i < movies.length; i++) {
let title = movies[i].querySelector("h5").textContent.toLowerCase();

if (title.includes(question)) {
movies[i].style.display = "flex";
countMovies++
} else {
movies[i].style.display = "none";
}
}
if (countMovies === 0) {
resultMessage.style.display = "flex";
resultMessage.innerHTML = `<p> Brak wyników wyszukiwania dla " ${question} " </p>`
} else {
resultMessage.style.display = "none";
}
};

searchBox.addEventListener("input", searchMovies);