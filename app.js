// instantiate Movies
const movie = new Movie()

// instantiate Ui
const ui = new UI();

// adding event listener to the DOM
// document.addEventListener('DOMContentLoaded', fetchMovies)
fetchMovies();

const form = document.querySelector('#form');
const search = document.querySelector('.search');

// addingevent on form
form.addEventListener('submit', lookMovies);

// function () {
//   console.log(movie.searchMovies(search.value))
// });

// function lookMovies
function lookMovies(e) {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm) {
    movie.searchMovies(searchTerm)
      .then(function (results) {

         console.log(results)

        // clear ui
        ui.clearUI()

        // paint
        ui.paintMovies(results);
      })
  }
  console.log(searchTerm);
 
}
 
// function fetch Movies
function fetchMovies(){
  movie.getMovies()
    .then(function (results) {
      console.log(results)

      // uipaint
      ui.paintMovies(results);
    })
}