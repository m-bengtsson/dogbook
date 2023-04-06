import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"

export function Edit ({dogs, setDogs}) {
   // Get nickname parameter from URL and finding dog object in array with matching nickname
   const { nickname } = useParams()
   const dogToEdit = dogs.find(dog => dog.nickname === nickname);

   // Set up state for the edited dog and the list of friends
   const [editedDog, setEditedDog] = useState(dogToEdit);
   const [friendList, setFriendList] = useState(dogToEdit.friends) 

   // Handle changes in the form inputs
   function handleChange(event){
      const { name, nickname, age, bio, value } = event.target;
      // Update the editedDog state object with the new value for the input field
      setEditedDog(
         {...editedDog, 
            [name]: value, 
            [nickname]: value,
            [age]: value,
            [bio]: value,
         });
   }

   // Handle adding a friend to the friendList array
   function handleAddFriend(event){
      event.preventDefault()
      const selectedFriend = event.target.value;

      if (!friendList.includes(selectedFriend)) {
         // Add the selected friend to the friendList array and update the editedDog state object
         setFriendList(prevState => [...prevState, selectedFriend]);
         setEditedDog(prevState => ({ ...prevState, friends: [...prevState.friends, selectedFriend] }));
      }
   }

    function handleRemoveFriend(removedFriend){
      const updatedList = friendList.filter((friend) => friend !== removedFriend);

      setFriendList(updatedList);
      setEditedDog({ ...editedDog, friends: updatedList });
      console.log('updatedlist2: ', updatedList)
      
   }

   // Handle form submission
   function handleEditSubmit () {
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
         <form onSubmit={handleEditSubmit}>
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

