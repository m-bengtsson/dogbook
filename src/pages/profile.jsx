import React from "react";
import { Link, useParams } from "react-router-dom";

export function Profile({dogs, setDogs}){

   const nickname = useParams().nickname
   const { name, age, bio, friends, present, image } = dogs.find(dog => dog.nickname === nickname)
   
   function handleChange (e) {
      let isChecked = e.target.checked

      setDogs(dogs.map(dog => {
         if (dog.nickname === nickname){
            console.log(dog)
            return {...dog, present: isChecked}
         }
         else{
            return dog
         }}))
   }


   return (
      <div className="profile">

         <img className="dog-image" src={image} alt=""  />

         <div className="profile-info">
            <div className="name-edit-present">
                  <p>Name: {name}</p>
                  <Link to={`/${nickname}/edit`}>Edit</Link>
                     <div> 
                        <input 
                        type="checkbox" 
                        name="present" 
                        defaultChecked={present}
                        onChange={handleChange}
                        />
                        <label htmlFor="present"> Present</label>
                     </div>
            </div>
            <p>Nickname: {nickname}</p>
            <p>Age: {age}</p>
            <p>Bio: {bio}</p>
            <p>Friends: {friends}</p>
         </div>
         <div className="back-to-users">
            <Link to='/'> &lt; back to users</Link>
         </div>
      </div>
   )

}