import React from "react"
import { Link } from "react-router-dom"


export function Home({dogs}) {
// Add link and clickhandle for create new dog 


   return (
      <div>
         <section className='main-content'>
            <h1>Users</h1>
            <ul>
               {dogs.map(dog => <Link to={`/${dog.nickname}`} key={dog.id}><li >@{dog.name}</li> </Link>)}

            </ul>
            <button>Create new dog</button>
         </section>
      </div>
   )
}