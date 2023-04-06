import React from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export function Create ({setDogs, dogs}) {
   const [dogImgUrl, setDogImgUrl] = useState("")
   const [friendList, setFriendList] = useState([])

   function handleFormSubmit (event) {
      event.preventDefault()
      const id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))
      // Create a new dog object with the form data and the generated ID
      const newDog = 
      {
         name: event.target.name.value,
         nickname: event.target.nickname.value,
         age: event.target.age.value,
         bio: event.target.bio.value,
         friends: friendList,
         image: dogImgUrl,
         id: id
      } 
      setDogs([...dogs, newDog])
   }

   function handleFriendSelection(event) {
      const selected = event.target.value
      setFriendList([...friendList, selected]) 
   }

    function handleFriendRemoval(removedFriend){
      const remainingFriends = friendList.filter((friend) => friend !== removedFriend);
      setFriendList(remainingFriends);
   }
   // Use the useEffect hook to fetch a random dog image from the Dog API and set the dogImgUrl state with the URL
     useEffect(() => {
      async function fetchDog() {
         const response = await fetch('https://dog.ceo/api/breeds/image/random')
         const url = await response.json()
         const randomDog = url.message;
             setDogImgUrl(randomDog)
      }
      fetchDog()
   }, []); 

   // Render create component
   return(
      <div className="create">
         <h2>Create</h2>
         <div className="back-to-users">
            <Link to='/'> &lt; back to users</Link>
         </div>
         <form className="form" onSubmit={handleFormSubmit}>
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
               <input type="number" name="age" min={0}/>
            </div>
            <div>
               <label htmlFor="bio">Bio</label>
               <input type="text" name="bio"/>
            </div>
            <div>
               <label htmlFor="friends">Friends</label>
               <select onChange={handleFriendSelection} id="addFriend">
                  <option></option>
                  {dogs.map( dog => <option key={dog.id}>{dog.nickname}</option>)}
               </select>
     
            </div>
               <div className="flex-row added-friends" >
                  Added friends:
                  <ul className="added-friend-list">
                  {friendList.map((friend) => 
                  <li key={friend}>@{friend} 
                  <button 
                     className="delete-button" 
                     onClick={() => handleFriendRemoval(friend)}>x</button>
                  </li>)}
                  </ul>
               </div>
            <Link to={'/'}><input className="save-created-dog" type="submit" value='Save'/></Link>
         </form>
      </div>
   )
}

