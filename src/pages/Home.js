import React from "react"
import { Link } from "react-router-dom"


export default function Home({ dogs, setDogs }) {
   // A function to handle deleting a dog from the list
   function handleDelete(deleted) {
      const newDogs = dogs
         .filter(dog => dog.nickname !== deleted)
         // Deletes from dogs friendslists
         .map(dog => {
            dog.friends = dog.friends.filter(friend => friend !== deleted)
            return dog
         })
      setDogs(newDogs)
   }

   return (
      <div className="home-content">
         <h2>Users</h2>
         <ul className="user-list">
            {dogs.map(dog =>
               // Returns classname based on wether the dog is present or not
               <li className={dog.present ? 'present' : 'not-present'} key={dog.id}>
                  <Link to={`/${dog.id}`}>@{dog.nickname}</Link>
                  <button onClick={() => handleDelete(dog.nickname)} className="delete-button">x</button>
               </li>
            )}
         </ul>
         <button id="create"><Link to='/create'>Create new dog</Link></button>
      </div>
   )
}