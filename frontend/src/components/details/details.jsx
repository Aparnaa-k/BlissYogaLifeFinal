// importing the files 
import React, { useState, useEffect } from 'react'; //using this to impoert the hooks
import Navbar from '../nav_bar/nav_bar';//importing navbar
import demoVideo from "../../assets/demo_vdo.mp4";//importing demovideo 
import { IoArrowBackCircleOutline } from 'react-icons/io5';//using to import icon
import { IoExit } from 'react-icons/io5';
import { InlineWidget } from 'react-calendly';//importing the react calendly
import { useNavigate, useLocation } from 'react-router-dom';//importing to use routes
import "./details.css";//importing css file to style this page

const Details = () => {
  const location = useLocation(); // Corrected the variable name
  const state = location.state;
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  // Using the useEffect to fetch the data
  useEffect(() => {
    fetch('https://blissyogalife.onrender.com/api/get')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error(error));
  }, []);
  
  // Created filteredData to get the data according to the required
  const filteredData = data?.data?.filter((_data) => {
    return _data.level === state;
  });

  return (
    <div>
      <Navbar />
      <IoArrowBackCircleOutline
        size={34}
        style={{ marginLeft: '20px', marginTop: '20px' }}
        onClick={() => navigate("/questionaire")}
      />
      <video
        className='demo_video'
        controls
        width="100"
        height="250"
      >
        <source src={demoVideo} type="video/mp4" />
      </video>
      {/* the data is being filtered from the database */}
      {filteredData && filteredData.map((e) => (
        <div key={e.title}>
          <div className='details_left'>
            <h1 className='demo'>Demo Session</h1>
          </div>
          <div className='details_right'>
            <p className='header'>{e.title}</p>
            <p className='details_txt'>{e.description}</p>
            <div className='list'>
              <ul className='list_vertical'>
                {e.curriculum.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <button className='book_a_slot' onClick={() => setDisplay(true)}>
              Book a slot
            </button>
          </div>
          <div className={display ? 'book_a_slot2' : 'book_a_slot3'}>
            <h2>Book Your Slot</h2>
            <span>
              <IoExit onClick={() => setDisplay(false)} />
            </span>
            <InlineWidget url='https://calendly.com/blissyogalife' styles={{ width: '75vw', height: '70vh', marginTop:'25px', marginLeft:'-50px' }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Details;