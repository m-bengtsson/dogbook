import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


/* Profilsida
I det här fallet har användaren kommit till en hunds profilsida. Här ser
användaren:
● Bild
● Edit länk
● Namn
● Smeknamn (påsidan)
● Ålder
● Kort beskrivning
● Vänlista
● Checkbox för närvaro
● Länk tillbaka till startsidan
Bilden påhunden kommer tas från ett API
(https://dog.ceo/api/breeds/image/random) . Detta API kräver ingen
nyckel och returnerar en godtycklig bild påen hund som tjänar våra
syften att bara ha en statisk bild påen hund eftersom vi inte har några
riktiga hundbilder. */

export function Profile({dogs}){

   const [dogImg, setDogImg] = useState("")

   const nickname = useParams().nickname
   const { name, age, bio, friends, present } = dogs.find(dog => dog.nickname === nickname)
   

     useEffect(() => {
      async function fetchDog() {
         const response = await fetch('https://dog.ceo/api/breeds/image/random')
         const url = await response.json()
         const randomDog = url.message;
             setDogImg(randomDog)
         console.log('Dogimage:', dogImg)
         // setDog(data)
      }
      fetchDog()
   }, []);


   return (
      <div className="profile">

         <img className="dog-image" src={dogImg} alt=""  />

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