import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import {API} from '../global'

function Movies() {
  const navigate = useNavigate();
  const [user, setUser]=useState([])
  const getUser = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setUser(result));
  };
  useEffect(() => getUser(), []);
 return (   
  <div className='container'>
    
     
    {user.map((element,index)=>{
           return ( 
        <div key={index}
        id={element.id} >
        <div className='movie-container'>
       <div className='movie-list'>
        <img className='movie-poster' src={element.poster} alt= {element.name} />
        <div className='movie-spec'>
        <h2 className="movie-name">{element.name}</h2>    
        <p>⭐{element.rating}</p>
        <p className='movie-summary'>{element.summary}</p>
        <link href={element.trailer} />
        </div>
        <div>
        <Button
        onClick={() => {
          navigate(`/movies/edit/${element.id}`);
        }}
        >
          <EditIcon/>
        </Button>
        <Button 
        onClick={() => {
          alert("Are you sure you want to delete");
          fetch(`${API}/movies/${element.id}`,{
            method: 'DELETE'
          }).then(()=>getUser());
        }}
        >
            <DeleteIcon color='error'/>
        </Button>
        </div>
      </div>
      </div>
      </div>
      );
    })}
    
    </div>
    
  )
}
export default Movies;