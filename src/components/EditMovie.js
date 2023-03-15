import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {API} from '../global'

function EditMovie() {
    const [editMovie, setEditMovie] = useState(null);
    const { id } =useParams();

    useEffect(() => {
        fetch(`${API}/${id}`, {
          method: "GET",
        })
          .then((data) => data.json())
          .then((mve) => setEditMovie(mve));
      }, [id]);

    
      return editMovie ? <EditUserForm editMovie={editMovie} /> : "Loading...";
}
function EditUserForm({editMovie}){
    const [id,setId]= useState(editMovie.id)
    const [name,setName] = useState(editMovie.name)
    const [poster,setPoster] = useState(editMovie.poster)
    const [rating,setRating] = useState(editMovie.rating)
    const [summary,setSummary] = useState(editMovie.summary)
    const [trailer,setTrailer] = useState(editMovie.trailer)
    const navigate = useNavigate();
    return(
        
    <div className='edit-user'>
    <TextField
    value={id}
    id="outlined-basic"
    label="ID"
    variant="outlined"
    onChange={(event) => setId(event.target.value)} />
    <br/><br/>
    <TextField
    value={name}
    id="outlined-basic"
    label="Name"
    variant="outlined"
    onChange={(event) => setName(event.target.value)} />
    <br/><br/>
    <TextField
    value={poster}
    id="outlined-basic"
    label="Poster"
    variant="outlined"
    onChange={(event) => setPoster(event.target.value)} />
    <br/><br/>
    <TextField
    value={rating}
    id="outlined-basic"
    label="Rating"
    variant="outlined"
    onChange={(event) => setRating(event.target.value)} />
    <br/><br/>
    <TextField
    value={summary}
    id="outlined-basic"
    label="Summary"
    variant="outlined"
    onChange={(event) => setSummary(event.target.value)} />
    <br/><br/>
    <TextField
    value={trailer}
    id="outlined-basic"
    label="Trailer"
    variant="outlined"
    onChange={(event) => setTrailer(event.target.value)} />
    <br/><br/>
    
    <Button 
    variant="contained"
    onClick={()=>{
        const UpdatedUser = {
            id:id,
            name:name,
            poster:poster,
            rating:rating,
            summary:summary,
            trailer:trailer,
        };
        // console.log(UpdatedUser);
        fetch(`${API}/${editMovie.id}`, {
            method: "PUT",
            body: JSON.stringify(UpdatedUser),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/movies"));
    }}
    >
    Save 
    </Button>
    </div>
        
    );
}

export default EditMovie;