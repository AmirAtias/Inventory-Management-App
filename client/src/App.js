/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import NavBar from "./components/mainComponents/NavBar";
import Main from "./components/mainComponents/Main";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [pos, setPosition] = useState("fixed");

  useEffect(() => {
    function handleResize() {
      if(window.innerHeight<800){
        setPosition("sticky");
      }
      else {
        setPosition("fixed");
      }
    
}

    window.addEventListener('resize', handleResize)
  })
  const BackgorundCss = css({
    WebkitBackgroundSize: "cover",
   // backgroundColor :'red',
    // background:
    // "url(https://dafq4moetmy65.cloudfront.net/cdn/ff/38VK4_WtKZgW00bVoBKq_wkTcMEXR4iV1ppnQNqTRqE/1505219788/public/2017-09/Why-is-AI-a-Must-in-Social-Media-App-Development_0.jpg)",
    backgroundRepeat: "round",
    backgroundPosition: "center center",
   backgroundAttachment: "fixed",
    MozBackgroundSize: "cover",
    OBackgroundSize: "cover",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    display: "flex",
    color: "white",
    paddingTop: "3%",
  });
  //
  return (
    <Router>
          <NavBar />
            <div css={BackgorundCss }  style={{ position: pos }}>
              <Main />
            </div>
    </Router>
  );
}


export default App;
