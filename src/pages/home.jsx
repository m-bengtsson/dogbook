import React from "react"
import { Link } from "react-router-dom"


export function Home({dogs, setDogs}) {

   // Returns className if dog is present or not present
   function isPresent(presentBoolean){
      if(presentBoolean){
         return 'present'
      } else {
         return 'not-present'
      }
   }

   function handleDelete(deleted){
      // set dogs to new dogs, updating localstorage from
      const newDogs = dogs.filter(dog => dog.nickname !== deleted)
      setDogs(newDogs) 
   }

   return (
      <div>
         <section className='home-content'>
            <h1>Users</h1>
            <ul>
                  {dogs.map(dog => <li className={isPresent(dog.present)} key={dog.nickname}><Link to={`/${dog.nickname}`}>@{dog.nickname}</Link> <button onClick={() => handleDelete(dog.nickname)} className="remove-dog">x</button></li> )}
            </ul>
            <button id="create"><Link to='/create'>Create new dog</Link></button>
         </section>
      </div>
   )
}