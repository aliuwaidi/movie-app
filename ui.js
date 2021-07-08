class UI{

  constructor() {
    this.movies = document.querySelector('.container1')
    this.image = 'https://image.tmdb.org/t/p/w1280';
  }

  paintMovies(datas) {
    datas.forEach(data => {
      const { title, poster_path, vote_average, overview } = data;
      this.movies.innerHTML += `
       
          <div class='card'>
            <a href="#">
              <img class='img' src= ${this.image}${poster_path}>
            </a>
            <div class="text">
              <p><a href='#'> ${title}</a></p>
              <span class='text-color ${this.getVoteColor(vote_average)}'>${vote_average}</span>
            </div>
            <div class="overview">
              <h3>Overview:</h3>
              ${overview}
            </div>
            
          </div>

      `
    });

  }

   clearUI(){
      this.movies.innerHTML = ''
    }

  getVoteColor(vote) {
    if (vote >= 8) {
      return' green';
    } else if (vote >= 6) {
      return 'orange';
    } else {
      return 'red';
    }
  }
}