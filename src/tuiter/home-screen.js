import React from "react";
import TuitsList from "./tuits/index";
import WhatsHappening from "./whats-happening";

const HomeScreen = () => {
 return(
   <>
     <h1>Home</h1>
     <WhatsHappening/>
     <TuitsList/>
   </>
 );
};
export default HomeScreen;