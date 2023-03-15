import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
  return (
    <div className='home'>
     Welcome to Movie Application
      <Button onClick={()=> navigate("/movies")}>
        Explore
      </Button>
     </div>
  )
}

export default Home;