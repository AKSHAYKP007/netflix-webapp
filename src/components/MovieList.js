import {Row} from './Row'
import requests from '../Request'
export const MovieList = () => {
  
  return (
    <div>
      <Row title='TRENDING MOVIES' fetchUrl={requests.fetchTrending}/>
      <Row title='TOP RATED MOVIES' fetchUrl={requests.fetchTopRated}/>
      <Row title='COMEDY MOVIES' fetchUrl={requests.fetchComedyMovies}/>
      <Row title='UPCOMING MOVIES' fetchUrl={requests.fetchUpcoming}/>
      <Row title='POPULAR MOVIES' fetchUrl={requests.fetchPopular}/>
      <Row title='TV POPULAR' fetchUrl={requests.fetchTvPopular}/>
    </div>

  )
}
