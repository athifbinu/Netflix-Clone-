import React, { useEffect, useState } from 'react';
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../axios';

function Banner() {
  const [movie,SetMovie]=useState()
  useEffect(()=>{
    
    //to fetch data using axios get method
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
        console.log(res.data.results)
        SetMovie(res.data.results[5])
      
        
      })
      
  },[])
  //[] is used only working in a component
  return (

    <div
      style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}
     className='banner'>
     <div className="content">
      <div className="mane-content">
        <div className="tittle">
           <h1>{movie ? movie.title : ""}</h1>
           
        </div>
        <div className="banner_buttons">
               <button className='button'>Play</button>
               <button className='button'>+ My List</button>
        </div>
        <div className="discription">
          <p>{movie ? movie.overview : ""}</p>
        </div>
        </div>
     </div>
   
     <div className="fade">
             
     </div>
      
    </div>
  )
}

export default Banner

