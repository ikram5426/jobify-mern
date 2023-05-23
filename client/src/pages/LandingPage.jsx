import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import heroImg from "../assets/images/main.svg";
import "../index.css";

const LandingPage = () => {
  return (
    <Wrapper>
      <nav className='logo'>
        <img src={logo} alt='jobify logo' />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking</span>
          </h1>
          <p>
            Welcome to CareerTrack, the ultimate job tracking solution designed
            to empower job seekers like you. Whether you're a recent graduate or
            an experienced professional, CareerTrack helps you take control of
            your career path. Our intuitive platform enables you to effortlessly
            manage and organize your job applications, interviews, and
            follow-ups all in one place. With insightful analytics and
            reminders, never miss an opportunity or deadline again. Stay on
            track, stay organized, and propel your career forward with
            CareerTrack. Start tracking your success today!
          </p>
          <button className='btn btn-hero'>Login/signup</button>
        </div>
        <img src={heroImg} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    
  }
  .page{
    min-height: calc(100vh-var(--nav-height));
    display: grid;
    align-items: center;
    /* margin-top: -3rem; */
    h1{
      font-weight: 700;
    }
    span{
      color:var(--primary-500)
    }
    p{
      color: var(--gray-500);
    }
  }
  .main-img{
    display: none;
  }
  @media (min-width: 990px){
    .page{
      grid-template-columns:1fr 1fr;
      column-gap: 3rem;
    }
    .main-img{
      display: block;
    }
  }
`;

export default LandingPage;
