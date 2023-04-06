import './App.css';
import { Header } from './components/Header';
import { Home } from './pages/Home'
import { Profile } from './pages/Profile';
import { Edit } from './pages/Edit'
import { Create } from './pages/Create'

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
   // Get saved dogs from local storage
   const savedDogs = localStorage.getItem('dogs')
   // Set initial state to saved dogs
   const [dogs, setDogs] = useState(JSON.parse(savedDogs))

   // Save dogs to local storage everytime the state changes
   useEffect(() => {
      localStorage.setItem('dogs', JSON.stringify(dogs))
   }, [dogs])
   // Retrieve dogs from local storage everytime on component mount
   useEffect(() => {
      const retrievedItem = window.localStorage.getItem('dogs');
      if (retrievedItem !== null) setDogs(JSON.parse(retrievedItem));

   }, []);

   // Render the header, routes and footer components
   return (
      <div>
         <Header />
         <Routes>
            <Route path='/' element={<Home dogs={dogs} setDogs={setDogs} />} />
            <Route path='/:nickname' element={<Profile dogs={dogs} setDogs={setDogs} />} />
            <Route path='/create' element={<Create dogs={dogs} setDogs={setDogs} />} />
            <Route path='/:nickname/edit' element={<Edit dogs={dogs} setDogs={setDogs} />} />
         </Routes>
      </div>
   );
}

export default App;
