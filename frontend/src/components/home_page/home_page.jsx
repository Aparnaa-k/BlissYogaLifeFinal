import "./home_page.css";
import backgroundVideo from "../../assets/bg_vdo.mp4";
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from "../nav_bar/nav_bar";


function Homepage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
    <Navbar/>
      <div>
      <video
        src={backgroundVideo}
        autoPlay
        muted
        loop
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1, width: "100%", height: "100%" }}
      /> 
          <div className="over_container">
            
          <div className="main_text">
            <p className="main">Fitness is not a Destination, It's a Journey.</p>
            <p className="sub_text">
              Enjoy the path and let your body be your guide.
            </p>
          
            <button className="start_your_journey" onClick={() => loginWithRedirect()}>Start Your Journey</button>
          </div>
        </div>        
      </div>
    </>
  );
}

export default Homepage;
