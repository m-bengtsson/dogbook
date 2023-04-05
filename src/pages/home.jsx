import React from "react"
import {Link } from "react-router-dom"


export function Home({dogs, setDogs}) {

   // Returns className if dog is present or not
   function isPresent(presentBoolean){
      if(presentBoolean){
         return 'present'
      } else {
         return 'not-present'
      }
   }


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
            <h1>Users</h1>
            <ul className="user-list">
                  {dogs.map(dog => 
                  <li className={isPresent(dog.present)} key={dog.nickname}>
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