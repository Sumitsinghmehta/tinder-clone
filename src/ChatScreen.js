import React, { useState } from 'react';
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";
function ChatScreen() {
    const [input,setInput]=useState('');
 const [messages, setMessages]= useState([
     
         {
             name:'joey',
             image:'...',
             message:'Whats up',
         },
         {
            name:'joey',
            image:'...',
            message:'Whats up',
        },
        {
            message:"how its going?",
        },
     
        ]) ;
        const handleSend =e =>{
            e.preventDefault();
            setMessages([...messages,{message:input}]);
            setInput("");
        };
          return (
        
            <div className="chatScreen">
                <p className="chatScreen__timestamp"> You matched with joey on 10/10/20</p>
            {messages.map((message) => (
                message.name? (
           <div className="chatScreen__messages">
               <Avatar 
               className="chatScreen__image"
               alt={message.name}
               src={message.image}
               /><p className="chatScreen__text">{message.message}</p>
               </div>)
               :(
            <div className="chatScreen__messages">
                <p className="chatScreen__textUser">{message.message}</p>
              </div> )
            ))}
            
                <form className="chatScreen__input"
                type="text">
                    <input value ={input}
                    onChange={(e)=> setInput(e.target.value)}
                    type ="text" className="chatScreen__inputField"
                    placeholder="Type a message..." />
                    <button onClick={handleSend} className="chatScreen__inputButton">Send</button>
                </form>
            </div>
        
    );
}

export default ChatScreen
