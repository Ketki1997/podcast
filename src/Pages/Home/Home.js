import React from 'react';
import HeroImage from '../../Assets/hero.svg';
import Navbar from '../../Components/Navbar';
import './home.css';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
        <Navbar/>
        <div className="hero">
            <div className="left">
                <h1>PodZone: Create, Listen, and Share Podcasts</h1>
                <div className='texts'>
                    <p>A podcast is a digital audio or video program that is available for streaming or downloading on the internet. Podcasts are typically episodic, meaning they consist of a series of individual episodes that can be on a wide range of topics. 
                        You can easily create your own podcast channel,listen to podcasts from various genres and categories, and share your podcasts with the world. 
                        PodZone is free, simple, and fun. Join now and start your podcast journey today!</p>
                </div>
                <Button value='Sign Up / Log In' exeFunc={()=>navigate('/sign-in-sign-up')}/>
            </div>
            <div className="right">
                <img src={HeroImage} alt="Podify" />
            </div>
        </div>
    </>

  )
}

export default Home
