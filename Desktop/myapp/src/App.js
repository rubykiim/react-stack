import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
   
        <h1 id="loop">Welcome to the <span id="bigger">Loop</span></h1>
        <div className="img">
          <img id="closedeye" src="img/eyeclosed.png" alt="eye"/>
          <img id="openeye" src="img/openeye.png" alt="eye"/> 
        </div>
        

    <div className="STACK1">
      <div className="USER">
        <h1 id="userhd">User</h1>
            <p id="userexp">Before going to bed, it is hard to find myself falling asleep immediately 
            as I watch YouTube that <span>never stops recommending</span> me new videos. </p>
            <img id="user" src="img/user.jpg" alt="user"/>
      </div>
          
      <div className="INTERFACE">
          <h2 id="inthd">Interface</h2>
            <p id="intexp">In this case, my interface would be a YouTube application. 
            By touching or clicking the screen, it offers me a variety of choices. Sometimes it doesn't even require a single action if I use <span>auto-play</span> function.</p>
          <img id="int" src="img/interface.jpg" alt="interface"/>
      </div> 

      <div className="ADDRESS">
          <h2 id="addhd">Address</h2>
            <p id="addexp">Definitely the wifi I use in the dorms and especially NYU <span>VPN </span> 
              that enables me to use all the social media applications would be my address. </p>
          <img id="add1" src="img/address2.png" alt="interface"/>
          <img id="add2" src="img/vpn.png" alt="interface"/> 
      </div>
      </div>

      <div className="STACK2">
      <div className="CITY">
        <h2 id="cityhd">City</h2>
          <p id="cityexp">China Mobile, which is the agent I currently use for my mobile device, 
          <span>gather the users</span> who are using their service.</p>
        <img id="city" src="img/city.png" alt="city"/>
      </div>   

      <div className="CLOUD">
        <h2 id="cloudhd">Cloud</h2>
          <p id="cloudexp">Server of YouTube will both receive and send back numerous information from the users <span>all around the world.</span> </p>
        <img id="cloud" src="img/cloud.png" alt="city"/>
      </div>   

      <div className="EARTH">
        <h2 id="earthhd">Earth</h2>
          <p id="earthexp">The people <span>who upload content </span> on YouTube are the fundamental sources essential to all the activities. 
            Without such users, we won't be able to access any of the information and the servers or the Internet would be useless.
          </p>
        <img id="earth1" src="img/earth1.png" alt="city"/>
        <img id="earth2" src="img/earth2.png" alt="city"/>
        <img id="earth3" src="img/earth2.png" alt="city"/>
      </div>
      </div>

      </div>

    
  );
}

export default App;
