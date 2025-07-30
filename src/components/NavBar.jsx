import { FaLinkedin, FaGithub} from "react-icons/fa"
import {  FaSquareXTwitter  } from "react-icons/fa6"
import logo from "../assets/A.png"
import styled from 'styled-components';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                    <img src={logo} className="mx-2" width={133} height={33}
                    alt="Logo"></img>
                </a>
            </div>
                <StyledWrapper>
                    <div className="loader">
                        <div className="load1" />
                        <div className="load2" />
                        <div className="load3" />
                        <div className="load4" />
                        <div className="load5" />
                        <div className="load6" />
                        <div className="load7" />
                        <div className="load8" />
                        <div className="load9" />
                    </div>
                </StyledWrapper>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/anujdubey10/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin/>

                </a>
                <a href="https://github.com/anujd24"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub">
                    <FaGithub/>
                    </a>

                    <a href="https://x.com/Anuj_Dubey10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter">
                    <FaSquareXTwitter/>
                    </a>

            </div>
        </nav>
    )
}

const StyledWrapper = styled.div`
  .loader {
    display: flex;
    align-items: center;
    margin-left: -0.65em;
    
    /* Small screens (mobile) */
    @media (max-width: 640px) {
      margin-left: -0.3em;
      transform: scale(0.7);
    }
    
    /* Medium screens (tablets) */
    @media (min-width: 641px) and (max-width: 1024px) {
      margin-left: -0.5em;
      transform: scale(0.85);
    }
  }

  /* Base styles for all load elements */
  [class^="load"] {
    position: absolute;
    content: "";
    height: 1.2em;
    width: 1.2em;
    border-radius: 5px;
    background-color: white;
    box-shadow: 0 1px 7px rgba(0,0,0,0.3);
    
    /* Adjust size for mobile */
    @media (max-width: 640px) {
      height: 1em;
      width: 1em;
    }
  }

  /* Specific load elements with their animations */
  .load1 { margin-right: 1em; }
  
  .load2 { 
    animation: 2s flow2 infinite;
    @media (max-width: 640px) {
      animation: 2s flow2Mobile infinite;
    }
  }
  
  .load3 { 
    animation: 2s flow3 infinite;
    @media (max-width: 640px) {
      animation: 2s flow3Mobile infinite;
    }
  }
  
  .load4 { 
    animation: 2s flow4 infinite;
    @media (max-width: 640px) {
      animation: 2s flow4Mobile infinite;
    }
  }
  
  .load5 { 
    animation: 2s flow5 infinite;
    @media (max-width: 640px) {
      animation: 2s flow5Mobile infinite;
    }
  }
  
  .load6 { 
    animation: 6s flow6 infinite;
    @media (max-width: 640px) {
      animation: 6s flow6Mobile infinite;
    }
  }
  
  .load7 { 
    animation: 6s flow7 infinite;
    @media (max-width: 640px) {
      animation: 6s flow7Mobile infinite;
    }
  }
  
  .load8 { 
    animation: 6s flow8 infinite;
    @media (max-width: 640px) {
      animation: 6s flow8Mobile infinite;
    }
  }
  
  .load9 { 
    animation: 6s flow9 infinite;
    @media (max-width: 640px) {
      animation: 6s flow9Mobile infinite;
    }
  }

  /* Original animations */
  @keyframes flow2 {
    50% { transform: translateX(3em); }
    100% { transform: translateX(0em); }
  }
  @keyframes flow3 {
    50% { transform: translateX(-3em); }
    100% { transform: translateX(0em); }
  }
  @keyframes flow4 {
    50% { transform: translateY(3em); }
    100% { transform: translateY(0em); }
  }
  @keyframes flow5 {
    50% { transform: translateY(-3em); }
    100% { transform: translateY(0em); }
  }
  @keyframes flow6 {
    30% { transform: translateX(3em); }
    60% { transform: translateX(3em) translateY(-3em); }
    100% { transform: translateX(0em) translateY(0em); }
  }
  @keyframes flow7 {
    30% { transform: translateX(-3em); }
    60% { transform: translateX(-3em) translateY(3em); }
    100% { transform: translateX(0em) translateY(0em); }
  }
  @keyframes flow8 {
    30% { transform: translateY(3em); }
    60% { transform: translateY(3em) translateX(3em); }
    100% { transform: translateX(0em) translateY(0em); }
  }
  @keyframes flow9 {
    30% { transform: translateY(-3em); }
    60% { transform: translateY(-3em) translateX(-3em); }
    100% { transform: translateX(0em) translateY(0em); }
  }

  /* Mobile-specific animations with reduced movement */
  @keyframes flow2Mobile {
    50% { transform: translateX(2em); }
    100% { transform: translateX(0em); }
  }
  @keyframes flow3Mobile {
    50% { transform: translateX(-2em); }
    100% { transform: translateX(0em); }
  }
  @keyframes flow4Mobile {
    50% { transform: translateY(2em); }
    100% { transform: translateY(0em); }
  }
  @keyframes flow5Mobile {
    50% { transform: translateY(-2em); }
    100% { transform: translateY(0em); }
  }
  @keyframes flow6Mobile {
    30% { transform: translateX(2em); }
    60% { transform: translateX(2em) translateY(-2em); }
    100% { transform: translateX(0em) translateY(0em); }
  }
  @keyframes flow7Mobile {
    30% { transform: translateX(-2em); }
    60% { transform: translateX(-2em) translateY(2em); }
    100% { transform: translateX(0em) translateY(0em); }
  }
  @keyframes flow8Mobile {
    30% { transform: translateY(2em); }
    60% { transform: translateY(2em) translateX(2em); }
    100% { transform: translateX(0em) translateY(0em); }
  }
  @keyframes flow9Mobile {
    30% { transform: translateY(-2em); }
    60% { transform: translateY(-2em) translateX(-2em); }
    100% { transform: translateX(0em) translateY(0em); }
  }

  /* Hide completely on very small screens if needed */
  @media (max-width: 400px) {
    display: none;
  }
`;

export default Navbar