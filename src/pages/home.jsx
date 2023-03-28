import React from "react"
import { json, Link } from "react-router-dom"


export function Home({dogs, setDogs}) {
   // red text if dog is absent

   function handleDelete(deletedNickname){

      console.log('deleted dog', deletedNickname)
      const newDogs = dogs.filter(dog => dog.nickname !== deletedNickname)
      console.log('new dogs: ', newDogs)
      setDogs(newDogs) 
   
   }

   return (
      <div>
         <section className='home-content'>
            <h1>Users</h1>
            <ul>
                  {dogs.map(dog => <li key={dog.id}><Link to={`/${dog.nickname}`}>@{dog.nickname}</Link> <button onClick={() => handleDelete(dog.nickname)} className="remove-dog">x</button></li> )}
            </ul>
            <button id="create"><Link to='/create'>Create new dog</Link></button>
         </section>
      </div>
   )
}