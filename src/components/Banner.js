import React, { useEffect,useState} from 'react';
import instance from '../axios';
import requests from '../Request';


export const Banner = () => {

  const [movie,setMovie] = useState([])
  
  useEffect(()=>{
    async function fetchData (){

      const request = await instance.get(requests.fetchComedyMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length-1)])
    }
    fetchData()
    
  },[])


  return (
    <div style={{backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    backgrounSize: "cover", backgroundPosition : "center center", height : "450px"
    }}>
     <div className='pt-80 mr-72 pb-32 text-white'>
      <h1 className='mb-2 mr-72 pl-1 text-3xl ml-6'>{movie.title}</h1>
      <p className='ml-6'>{movie.overview}</p>
     </div>
    </div>
  )
}
