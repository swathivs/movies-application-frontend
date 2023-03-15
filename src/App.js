import Movies from './components/Movies';
import './App.css';
import Home from './components/Home';
import { Route, Routes} from 'react-router-dom';
import EditMovie from './components/EditMovie';

function App() {
  return (
    <div className="App">
     
     <Routes>
     <Route path='/' element={<Home />}/>
     <Route path="/movies" element={<Movies/>} />
     <Route path="/movies/edit/:id" element={<EditMovie />} />
     </Routes>
    </div>
  );
}

export default App;
