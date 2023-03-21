import React from "react";
import { useParams } from "react-router-dom";

export function Profile({dogs}){
   console.log(dogs)

   const nickname = useParams().nickname

   const { name, age, bio } = dogs.find(dog => dog.nickname === nickname)

   return (
      <div>
         <h1>Dog</h1>
         <p>Name: {name}</p>
         <p>Age: {age}</p>
         <p>Bio: {bio}</p>
      </div>
   )

}