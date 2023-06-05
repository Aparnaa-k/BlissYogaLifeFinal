import backgroundVideo from "../../assets/mnpg_vdo.mp4"
import { Link } from 'react-router-dom';
import Navbar from "../nav_bar/nav_bar";

const Mainpage =() => {
  
  return (
    <>
    <Navbar /> 
      <div>
      <video
        src={backgroundVideo}
        autoPlay
        muted
        loop
        style={{ position: "absolute", top: 0, left: 0, zIndex: -1, width: "100%", height: "100%", opacity: 0.85}}
      /> 
          <div className="over_container">
            
          <div className="main_text">
            <p className="main">Fitness is not a Destination, It's a Journey.</p>
            <p className="sub_text">
              Enjoy the path and let your body be your guide.
            </p>
            <Link to='/questionaire'> <button className="start_your_journey">Start Your Journey </button></Link>
          </div>
        </div>        
      </div>
    </>
  );
}
export default Mainpage;