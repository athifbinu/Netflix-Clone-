import React, { useEffect,useState } from 'react'
import './RowPost.css'
import axios from '../axios'
import {imageUrl,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube'


function RowPost(props) {
   const [movies,setmovies] = useState([])
   const [urlId,setUrlId]=useState('')
       useEffect(()=>{
         axios.get(props.url).then((res)=>{
        
          setmovies(res.data.results)
         }).catch(err=>{
          // alert('network err')
         })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMove=(id)=>{
          console.log(id)
          axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(responce=>{
            console.log(responce.data)
            if(responce.data.results.length!==0){
                setUrlId(responce.data.results[0])
            }else{
              console.log('empty array')
            }
          })
          
  }
  return (
  
    <div className='row'>
      
       <h2 className='text' >{props.tittle}</h2>
       
      <div className="posters">
        {movies.map((obj)=>

        <img id='post' onClick={()=>handleMove(obj.id)} className={props.isSmall ?'smallPosters':'poster'} alt='poster'  src={`${imageUrl+obj.backdrop_path}`}  />
        )}

     

      </div>
     {urlId && <YouTube opts={opts} videoId={urlId.key} />}
     
    </div>
  )
}

export default RowPost
