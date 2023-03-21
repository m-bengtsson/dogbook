import React from "react"

export function Create () {
   return(
      <div>
         <h1>Create</h1>
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
                  <option value="nala">nala</option>
                  <option value="kossan">pepsi</option>
                  <option value="kossan">kosssan</option>
               </select>            
            </div>
         </form>
      </div>

   )
}

