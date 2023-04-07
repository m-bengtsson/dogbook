import React from "react";
import { Link, useParams } from "react-router-dom";

export function Profile({ dogs, setDogs }){
   // Finding dog based on the url parameter
   const { id } = useParams() 
   const { name, nickname, age, bio, friends, present, image } = dogs.find(dog => dog.id === id)
      // Handles changes setting dog to present or not present
   function handlePresentChange (e) {
      let isChecked = e.target.checked

      setDogs(
         dogs.map(dog => {
            if (dog.id === id) {
               return {...dog, present: isChecked}
            }
            else {
               return dog
            }
      }))
   }

   return (
      <div className="profile">
         <img className="dog-image" src={image} alt=""/>
         <div className="profile-info">
            <div className="info-div flex-row">
               Name: <p> {name}</p>
                  <Link to={`/${id}/edit`}>Edit</Link>
            </div>
            <div className="info-div flex-row">
               Nickname: <p> {nickname}</p>
               </div>
            <div className="info-div flex-row">
               Age: <p>{age}</p>
            </div>
            <div className="info-div flex-row">
               Bio:<p>{bio}</p>
            </div>    
            <div className="info-div flex-row">
               Friends: 
               {!friends.length ? (
                  <p>no friends yet!</p>
                  ) : (
                     <ul className="friend-list">
                        {friends.map(friend => {
                           const dogFriend = dogs.find(dog => dog.nickname === friend);

                           return (
                              <li key={friend}>
                                 <Link to={`/${dogFriend?.id}`}>@{friend}</Link>
                              </li>
                           );
                        })}
                     </ul>
                  )}
            </div>
         </div>
         <div> 
             <input 
                  type="checkbox" 
                  name="present" 
                  defaultChecked={present}
                  onChange={handlePresentChange}
               />
               <label 
                  className="present-label"
                  htmlFor="present"> Present
               </label>
         </div>
         <div className="back-to-users">
            <Link to='/'> &lt; back to users</Link>
         </div>
      </div>
   )
}