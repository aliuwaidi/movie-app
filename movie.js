class Movie{
  constructor() {
    this.key = 'edc133fe527b75f0853f2dbab02776d8';
    this.apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.key}&sort_by=popularity.desc`
    this.searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${this.key}&query=`
  }

  // https://api.themoviedb.org/3/search/movie?api_key=edc133fe527b75f0853f2dbab02776d8&query=

  async getMovies() {
    const response =await fetch(this.apiUrl)
    const data = await response.json()
    return data.results;
  }

  async searchMovies(url) {
    const resp = await fetch(`${this.searchApi+url}`)
    const data = await resp.json()
    console.log(data)
    return data.results;
  }

}