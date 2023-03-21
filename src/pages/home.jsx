import React from "react"
import { Link } from "react-router-dom"


export function Home() {
   //Todo:
   // Mappa över lista av hundar

   return (
      <div>
         <section className='main-content'>


            <h1>Users</h1>
            <ul>
               <li>
                  <a href='#'>@ Dog 1</a>
               </li>
               <li>
                  <Link to="/profile">Profile</Link>

               </li>
               <li>
                  <a href='#'>@ Dog 3</a>
               </li>
            </ul>

            <button>Create new dog</button>
         </section>
      </div>
   )
}