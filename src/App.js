import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home'
import { Profile } from './pages/Profile';
import { Edit } from './pages/Edit'
import { Create } from './pages/Create'
import { Footer } from './components/Footer'

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {

   const savedDogs = localStorage.getItem('dogs')
   const [dogs, setDogs] = useState(JSON.parse(savedDogs))

   // Everytime we change dogs state
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
            <Route path='/' element={<Home dogs={dogs} setDogs={setDogs} />} />
            <Route path='/:nickname' element={<Profile dogs={dogs} setDogs={setDogs} />} />
            <Route path='/create' element={<Create dogs={dogs} setDogs={setDogs} />} />
            <Route path='/:nickname/edit' element={<Edit dogs={dogs} setDogs={setDogs} />} />
         </Routes>
         <Footer />

      </div>
   );
}

export default App;
