import React from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export function Create ({setDogs, dogs}) {
   
   const [dogImg, setDogImg] = useState("")

    useEffect(() => {
      async function fetchDog() {
         const response = await fetch('https://dog.ceo/api/breeds/image/random')
         const url = await response.json()
         const randomDog = url.message;
             setDogImg(randomDog)

         console.log('Dogimage:', dogImg)
         // setDog(data)
      }
      fetchDog()
   }, []);

   return(
      <div className="create">
         <h1>Create</h1>
         <div className="back-to-users">
            <Link to='/'> &lt; back to users</Link>
         </div>
         <form>
            <div>
               <label htmlFor="name">Name</label>
               <input type="text" name="name"/>
            </div>
            <div>
               <label htmlFor="nickname">Nickname</label>
               <input type="text" name="nickname"/>
            </div>   
            <div>
               <label htmlFor="age">Age</label>
               <input type="number" name="age"/>
            </div>
            <div>
               <label htmlFor="bio">Bio</label>
               <input type="text" name="bio"/>
            </div>
            <div>
               {/* Add button to add friends from the dropdown list */}
               <label htmlFor="friends">Friends</label>
               <select name="friends" id="friends">
                  {dogs.map(dog => <option value= '' key={dog.id}>{dog.name}</option>)}
               </select>            
            </div>

            <input type="submit" value='Save'/>
         </form>
      </div>

   )
}

