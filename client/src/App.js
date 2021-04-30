/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import NavBar from "./components/mainComponents/NavBar";
import Main from "./components/mainComponents/Main";
import { BrowserRouter as Router } from "react-router-dom";



function App() {
   
  const BackgorundCss = css({
    WebkitBackgroundSize: "cover",
    backgroundColor :'#708090',
    width: "100%",
    height: "100vh",
    display: "flex",
    color: "white",
    paddingTop: "1%",
    
  });
 
  return (
    <Router>
          <NavBar />
            <div css={BackgorundCss } >
              <Main />
            </div>
    </Router>
  );
}


export default App;
