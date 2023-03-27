import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


export function Profile({dogs}){

   const nickname = useParams().nickname
   const { name, age, bio, friends, present, image } = dogs.find(dog => dog.nickname === nickname)
   
   return (
      <div className="profile">

         <img className="dog-image" src={image} alt=""  />

         <div className="profile-info">
            <div className="name-edit-present">
                  <p>Name: {name}</p>
                  <Link to={`/${nickname}/edit`}>Edit</Link>
                     <div> 
                        {present ? <input type="checkbox" name="present" checked /> : <input type="checkbox" name="present" disabled />}
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