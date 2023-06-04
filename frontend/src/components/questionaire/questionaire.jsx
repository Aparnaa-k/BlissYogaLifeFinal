import React, { useEffect, useState } from 'react';
import './questionaire.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../nav_bar/nav_bar';

const Questionaire = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:7000/api/get')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div className='question'>
          <header className='question1'> Are you? </header>
          <p className='question2'>Please select your level to maximize your practice.</p>
        </div>
        <div className='main_div'>
          {data &&
            data.data?.map((e) => (
              <div className='beginner' key={e.level}>
                <div className='border_img'>
                  <img className='bgn_img' src={e.img} alt='image' />
                </div>
                <button className='bgn_btn' onClick={() => navigate('/details', { state: e.level })}>
                  {e.level}
                </button>
                <p className='bgn_text'>{e.info}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Questionaire;
