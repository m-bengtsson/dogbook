import React from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";

export function Create ({setDogs, dogs}) {
   const [dogImg, setDogImg] = useState("")
   const [friendList, setFriendList] = useState([])


   function submitHandler (event) {
      event.preventDefault()

      const id = Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))

      const newDog = 
      {
         name: event.target.name.value,
         nickname: event.target.nickname.value,
         age: event.target.age.value,
         bio: event.target.bio.value,
         friends: friendList,
         image: dogImg,
         id: id
      } 

      setDogs([...dogs, newDog])
   }

   function handleChange(event) {
      const selected = event.target.value
      setFriendList([...friendList, selected]) 

   }
    function handleRemoveFriend(removedFriend){
      const updatedList = friendList.filter((friend) => friend !== removedFriend);
      setFriendList(updatedList);
   }

     useEffect(() => {
      async function fetchDog() {
         const response = await fetch('https://dog.ceo/api/breeds/image/random')
         const url = await response.json()
         const randomDog = url.message;
             setDogImg(randomDog)
      }
      fetchDog()
   }, []); 


   return(
      <div className="create">
         <h1>Create</h1>
         <div className="back-to-users">
            <Link to='/'> &lt; back to users</Link>
         </div>
         <form className="form" onSubmit={submitHandler}>
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
               <select onChange={handleChange} id="addFriend">
                  <option></option>
                  {dogs.map( dog => <option key={dog.id}>{dog.nickname}</option>)}
               </select>
     
            </div>
               <div className="flex-row" >
                  Added friends:
                  <ul className="friend-list">
                  {friendList.map((friend) => 
                  <li key={friend}>@{friend} 
                  <button 
                     className="delete-button" 
                     onClick={() => handleRemoveFriend(friend)}>x</button>
                  </li>)}
                  </ul>
               </div>
            <input type="submit" value='Save'/>
         </form>
      </div>

   )
}

