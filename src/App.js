import './App.css';
import { Header } from './components/header';
import { Home } from './pages/home'
import { Profile } from './pages/profile';
import { Edit } from './pages/edit'
import { Create } from './pages/create'

import { Routes, Route, Link, useParams, json } from 'react-router-dom';
import { useEffect, useState } from 'react';



function App() {

   const savedDogs = localStorage.getItem('dogs')

   console.log(savedDogs)

   const [dogs, setDogs] = useState(JSON.parse(savedDogs))

   useEffect(() => {
      localStorage.setItem('dogs', JSON.stringify(dogs))
   }, [dogs])

   useEffect(() => {
      const retrievedItem = window.localStorage.getItem('dogs');
      if (retrievedItem !== null) setDogs(JSON.parse(retrievedItem));

   }, []);



   return (
      <div>
         <Header />
         <Routes>
            <Route path='/' element={<Home dogs={dogs} />} />
            <Route path='/:nickname' element={<Profile dogs={dogs} setDogs={setDogs} />} />
            <Route path='/create' element={<Create dogs={dogs} setDogs={setDogs} />} />
            <Route path='/:nickname/edit' element={<Edit dogs={dogs} setDogs={setDogs} />} />
         </Routes>

      </div>
   );
}

export default App;
