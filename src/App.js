import './App.css';
import { Header } from './components/header';
import { Home } from './pages/home'
import { Profile } from './pages/profile';
import { Edit } from './pages/edit'
import { Create } from './pages/create'

import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Dog() {
   return (
      <h1>Dog</h1>
   )

}



function App() {

   const doglist = useState

   return (
      <div>
         <Header />
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/create' element={<Create />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/id' element={<Dog />} />
         </Routes>

      </div>
   );
}

export default App;
