import React, { useEffect,useState } from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constatnts'
function RowPost(props) {

  
  
  
  
  

  const [movie,setmovie]=useState([])
  const [yurl,seturl]=useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
          // console.log(response.data.results);
          setmovie(response.data.results)
    })
  
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handlemovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response);
         if(response.data.results.length!==0){
         
          seturl(response.data.results[0])
         }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movie.map((obj)=>{
              return(
                <img onClick={()=>handlemovie(obj.id)} className={ props.isSmall?'smallposter':'postersimg'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
              )
            })
          }
           
            
        </div>
       {yurl && <Youtube videoId={yurl.key} opts={opts}/>} 
    </div>
  )
}

export default RowPost