import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"

export function Edit ({dogs, setDogs}) {
   const nickname = useParams().nickname;
   // const { name, age, bio, friends } = dogs.find(dog => dog.nickname === nickname)
  const dog = dogs.find(dog => dog.nickname === nickname);

   const [editedDog, setEditedDog] = useState(dog);
   // Fix so you can only add the friends that are not already friends
   // removeFriendHandler

   function handleChange(event){
      const { name, nickname, age, bio, value } = event.target;
      
      setEditedDog(
         {...editedDog, 
            [name]: value, 
            [nickname]: value,
            [age]: value,
            [bio]: value,
         });
   }

   function handleAddFriend(event){
      const {friends, value} = event.target;

      setEditedDog({...editedDog, [friends]: value})

      console.log('selected', [friends], value)
      console.log('editeddog.friends: ', editedDog.friends)

   }

    function handleRemoveFriend(deletedFriend){

       /* setEditedDog(dogs.map(dog => {
         const friendsLeft = dog.friends.filter(friend => friend !== deletedFriend)
         console.log('friendslesft: ', friendsLeft)
            return {...dog, friends: friendsLeft}
      }))  */
   }


   function submitHandler () {
      setDogs(dogs.map(dog => {
         if(dog.nickname === nickname){
            return editedDog
         } else {
            return dog;
         }
      })) 
   };

   return(
      <div className="edit">
         <h1>Edit</h1>
         <div className="back-to-users">
            <Link to='/'> &lt; back to users</Link>
         </div>
         <form onSubmit={submitHandler}>
            <div className="edit-divs">
               <label htmlFor="name">Name</label>
               <input 
                  onChange={handleChange}
                  type="text" 
                  id="name" 
                  name="name" 
                  value={editedDog.name}
                   />
            </div>
             <div className="edit-divs">
               <label htmlFor="nickname">Nickname</label>
               <input 
                  onChange={handleChange} 
                  type="text" 
                  id="nickname" 
                  name="nickname" 
                  value={editedDog.nickname}/>
            </div>   
            <div className="edit-divs">
               <label htmlFor="age">Age</label>
               <input 
                  onChange={handleChange} 
                  type="number" 
                  name="age" 
                  defaultValue={editedDog.age}/>
            </div> 
             <div>
               <label htmlFor="bio">Bio</label>
               <textarea 
                  onChange={handleChange} 
                  type="text" 
                  name="bio" 
                  value={editedDog.bio}/>
            </div>
             <div>
               <label htmlFor="friends">Friends</label>
               <ul>
                  {editedDog.friends.map(friend => 
                  <li key={friend.id}>@{friend} 
                  <button 
                     className="delete-button" 
                     onClick={() => handleRemoveFriend(friend)}>x</button>
                  </li>)}
               </ul>
               <select
               onChange={handleAddFriend} 
                  name="friends" 
                  id="friends" >
                  <option value="">--Add dog friend--</option>
                  {editedDog.friends.map(friend => 
                  <option key={friend} value={friend}> { friend } </option>)}
               </select>            
            </div> 
            <input type="submit" value='Save'/>
            
         </form>

      </div>

   )
}

