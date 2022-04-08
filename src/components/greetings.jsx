import React from "react";


function Greetings() {
  
    let constumestyle = {
      color: ""
    };
    
    let greeting;
    const currentyear = new Date();
    let time = currentyear.getHours();
    
    if (time < 12) {
      greeting = "Good Morning ";
      constumestyle.color = "#eee ";
    } else if (time <= 16) {
      greeting = "Good Afternoon";
      constumestyle.color = "#eee";
    } else {
      greeting = "Good Evening";
      constumestyle.color = "#143a50";
    }
    
    
      
      return  <h2 style={constumestyle} className="greeting">
          {greeting}
        </h2>
    }
    
    export default Greetings;

    
    
    
