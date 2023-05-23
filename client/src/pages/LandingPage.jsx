
import { Link } from "react-router-dom";
import heroImg from "../assets/images/mainHero.svg";
import Wrapper from '../assets/wrappers/LandingPage';
import {Logo } from '../components'
import "../index.css";

const LandingPage = () => {
  return (
    <Wrapper>
      <nav className='logo'>
        <Logo/>
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>Track</span> App
          </h1>
          <p>
            Welcome to Job Track, the ultimate job tracking solution designed
            to empower job seekers like you. Whether you're a recent graduate or
            an experienced professional, CareerTrack helps you take control of
            your career path. Our intuitive platform enables you to effortlessly
            manage and organize your job applications, interviews, and
            follow-ups all in one place. With insightful analytics and
            reminders, never miss an opportunity or deadline again. Stay on
            track, stay organized, and propel your career forward with
            CareerTrack. Start tracking your success today!
          </p>
         <Link to="/register"><button className='btn btn-hero'>Login/signup</button></Link> 
        </div>
        <img src={heroImg} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};



export default LandingPage;
