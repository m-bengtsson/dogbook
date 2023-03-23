import React from "react"
import { Link, useParams } from "react-router-dom"

export function Edit ({dogs, setDogs}) {

   // Todo
   // Fix so you can only add the friends that are not already friends
   // List of friends 
   // Submithandler

   const nickname = useParams().nickname
   const { name, age, bio, friends, present } = dogs.find(dog => dog.nickname === nickname)
   
   return(
      <div>
         <h1>Edit</h1>
         <div className="back-to-users">
            <Link to='/'> &lt; back to users</Link>
         </div>
         <form>
            <div>
               <label htmlFor="name">Name</label>
               <input type="text" name="name" value={name}/>
            </div>
            <div>
               <label htmlFor="nickname">Nickname</label>
               <input type="text" name="nickname" value={nickname}/>
            </div>   
            <div>
               <label htmlFor="age">Age</label>
               <input type="number" name="age" value={age}/>
            </div>
            <div>
               <label htmlFor="bio">Bio</label>
               <input type="text" name="bio" value={bio}/>
            </div>
            <div>
               {/* Add button to add friends from the dropdown list */}
               <label htmlFor="friends">Friends</label>
               <ul>
                  {friends.map(friend => <li>@{friend}</li>)}
               </ul>
               <select name="friends" id="friends" >
                  <option value="">--Add dog friend--</option>
                  {dogs.map(dog => <option value="">{dog.name}</option>)}
               </select>            
            </div>
            
         </form>

      </div>

   )
}

