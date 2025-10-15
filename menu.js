const recommendBtn = document.getElementById("recommendBtn");
const movieMenu = document.getElementById("movieMenu");
const movieList = document.getElementById("movieList");
const recommendationsDiv = document.getElementById("recommendations");

// Populate movie list
movies.forEach(movie => {
  const li = document.createElement("li");
  li.textContent = movie.title;
  li.addEventListener("click", () => {
    movieMenu.style.display = "none";
    showRecommendations(movie);
  });
  movieList.appendChild(li);
});

// Toggle movie menu visibility
recommendBtn.addEventListener("click", () => {
  movieMenu.style.display = movieMenu.style.display === "block" ? "none" : "block";
  recommendationsDiv.innerHTML = ""; // Clear previous recommendations
});

// Content-based recommendation based on genres
function showRecommendations(selectedMovie) {
  recommendationsDiv.innerHTML = `<h3>Recommendations for: ${selectedMovie.title}</h3>`;

  const recommended = movies.filter(m =>
    m.id !== selectedMovie.id &&
    m.genres.some(g => selectedMovie.genres.includes(g))
  ).slice(0, 5);

  if (recommended.length === 0) {
    recommendationsDiv.innerHTML += "<p>No recommendations found.</p>";
    return;
  }

  recommended.forEach(movie => {
    const div = document.createElement("div");
    div.className = "recommended-movie";
    div.innerHTML = `
      <strong>${movie.title}</strong><br />
      Genres: ${movie.genres.join(", ")}
    `;
    recommendationsDiv.appendChild(div);
  });
}


