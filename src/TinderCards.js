import React, { useState , useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from './firebase';
import  "./TinderCards.css";


function TinderCards() {
   const [people, setPeople] = useState([
       {
           name:"steve jobs",
    url:
    "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",      
 },
       {
           name: "mark zuckerburg",
         url:"https://about.fb.com/wp-content/uploads/2019/01/mz.jpg?fit=4655%2C3102",
              }, 
            ]);
//useEffect piece of code which runs based on a condition
            useEffect(() => {
                
            const unsubscribe=database
                .collection('people')
                .onSnapshot((snapshot) =>
                   setPeople(snapshot.docs.map(doc => doc.data()))
                );
                
                return ()=> {
                    //this is the cleanup..
                    unsubscribe();
                }
            }, []);
    //bad
   //const people=[];
   // people.push("sony","qazi")

   //good[push to an array to react]
   // setpeople([...people,'sonny','qazi']) [...people] means let older files there
//always give kys in react it makes app fast and allows react to render efficiently
    return (
        <div>
         
            <div className="tinderCards__cardContainer">    
             {people.map(person =>(
              <TinderCard
              className="swipe" 
              key={person.name}
              preventSwipe={["up","down"]}
              >  
                  <div style={{ backgroundImage:`url(${person.url})`} }
                className ="card"
                >
                    
             <h3>{person.name}</h3>   
                  </div>
              </TinderCard>
             ))
         }
         </div>
        </div>
    )
}

export default TinderCards