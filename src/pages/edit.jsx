import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"

export function Edit ({dogs, setDogs}) {
   const nickname = useParams().nickname;
   const dog = dogs.find(dog => dog.nickname === nickname);

   const [editedDog, setEditedDog] = useState(dog);
   const [friendList, setFriendList] = useState([]) 

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
      const selectedFriend = event.target.value;

      if (!friendList.includes(selectedFriend)) {
         setFriendList([...friendList, selectedFriend]);
         setEditedDog({ ...editedDog, friends: [...friendList, selectedFriend] 
         });
      }
   }

    function handleRemoveFriend(removedFriend){
      const updatedList = friendList.filter((friend) => friend !== removedFriend);

      setFriendList(updatedList);
      setEditedDog({ ...editedDog, friends: updatedList });
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
         <h2>Edit</h2>
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
                  {editedDog.friends.map((friend, i) => 
                  <li key={i}>@{friend} 
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
                  {dogs.map(dog => 
                  <option key={dog.id} value={dog.nickname}> {dog.nickname} </option>)}
               </select>            
            </div> 
            <button className="save-changes" type="submit" value='Save changes'>Save changes</button>
         </form>
      </div>
   )
}

