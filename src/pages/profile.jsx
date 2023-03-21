import React from "react";
import { Link, useParams } from "react-router-dom";


export function Profile({dogs}){
   console.log(dogs)

   const nickname = useParams().nickname

   const { name, age, bio } = dogs.find(dog => dog.nickname === nickname)

   return (
      <div>
         <p>Name: {name} <button> <Link to={'/edit'}>Edit</Link></button></p>
         <p>Nickname: {nickname}</p>
         <p>Age: {age}</p>
         <p>Bio: {bio}</p>
      </div>
   )

}