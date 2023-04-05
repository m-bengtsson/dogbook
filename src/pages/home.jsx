import React from "react"
import {Link } from "react-router-dom"


export function Home({dogs, setDogs}) {
   // A function to handle deleting a dog from the list
   function handleDelete(deleted){
      const newDogs = dogs
      .filter(dog => dog.nickname !== deleted)

      .map(dog => {
         dog.friends = dog.friends.filter(friend => friend !== deleted)
         return dog
      })
      setDogs(newDogs) 
   }

   return (
      <div>
         <section className='home-content'>
            <h2>Users</h2>
             {/* Render the list of dogs */}
            <ul className="user-list">
               {dogs.map(dog => 
               // Returns classname based on wether the dog is present or not
                  <li className={dog.present ? 'present' : 'not-present'} key={dog.nickname}>
                     {/* Link to the dog's profile */}
                     <Link to={`/${dog.nickname}`}>@{dog.nickname}</Link>
                      <button onClick={() => handleDelete(dog.nickname)} className="delete-button">x</button>
                  </li> 
               )}
            </ul>
            <button id="create"><Link to='/create'>Create new dog</Link></button>
         </section>
      </div>
   )
}