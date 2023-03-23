import './App.css';
import { Header } from './components/header';
import { Home } from './pages/home'
import { Profile } from './pages/profile';
import { Edit } from './pages/edit'
import { Create } from './pages/create'

import { Routes, Route, Link, useParams } from 'react-router-dom';
import { useState } from 'react';



function App() {

   const [dogs, setDogs] = useState([
      {
         name: 'Pepsi',
         nickname: 'bepsi',
         age: 7,
         bio: 'I like to run after my owner, and i like to bark',
         id: 1,
         friends: 'Nala'
      },
      {
         name: 'Nala',
         nickname: 'Nala',
         age: 3,
         bio: 'I like to chew on my owners shoes',
         id: 2,
         friends: ['Kossan', 'Pepsi']
      },
      {
         name: 'Kossan',
         nickname: 'Kossan',
         age: 3,
         bio: 'I like to sleep',
         id: 3,
         friends: 'nala'

      }
   ])

   return (
      <div>
         <Header />
         <Routes>
            <Route path='/' element={<Home dogs={dogs} />} />
            <Route path='/:nickname' element={<Profile dogs={dogs} setDogs={setDogs} />} />
            <Route path='/create' element={<Create dogs={dogs} setDogs={setDogs} />} />
            <Route path='/edit' element={<Edit dogs={dogs} setDogs={setDogs} />} />
         </Routes>

      </div>
   );
}

export default App;
