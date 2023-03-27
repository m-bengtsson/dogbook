import React from "react"
import { Link } from "react-router-dom"


export function Home({dogs}) {
   return (
      <div>
         <section className='home-content'>
            <h1>Users</h1>
            <ul>
               {dogs.map(dog => <Link to={`/${dog.nickname}`} key={dog.id}><li >@{dog.name}</li> </Link>)}

            </ul>
            <button id="create"><Link to='/create'>Create new dog</Link></button>
         </section>
      </div>
   )
}