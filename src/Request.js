const API_KEY = "12b8d7631a3fa648e849b89c117e7d4f"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`, 
    fetchTvPopular: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;
