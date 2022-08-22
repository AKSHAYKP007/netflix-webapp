import React from 'react';
import { useEffect,useState } from 'react';
import instance from '../axios';
import './row.css'

export const Row = ({title, fetchUrl}) => {

  const [movies,setMovies] = useState([])
  const base_url = 'https://image.tmdb.org/t/p/original'
  
  useEffect(()=>{
    async function fetchData (){
      const request = await instance.get(fetchUrl);
      setMovies(
        request.data.results)
    }
    fetchData()
    
  },[fetchUrl])


  return (
    <div className='text-white ml-2 mb-6 mt-2'>

        <h1 className='p-2'>{title}</h1>
        <div className='posters'>

       {movies.map((movie)=>{
        //console.log(movie.poster_path);
        return(
            <img className='max-h-24 hover:scale-x-50 opacity-5 m-1' key={movie.id} src={`${base_url}${movie?.poster_path}`} alt=''/>
          )

})}
        
      </div>
    </div>
  )
}
