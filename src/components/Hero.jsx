import portfolio from "../assets";
import {HERO_CONTENT} from "../constants"
import { motion } from "framer-motion"
import styled from 'styled-components';

const containerVariants = {
    hidden : { opacity: 0, x: -100},
    visible : {
        opacity:1,
        x:0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: {opacity: 0, x: -100},
    visible : {opacity : 1, x: 0, transition: {duration: 0.5}},
}

const Hero = () =>{
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2 mt-16">
                    <div className="flex justify-center lg:p-2">
                        <motion.img 
                            src={portfolio} 
                            alt="Anuj Dubey" 
                            className="border border-stone-900 rounded-3xl" 
                            width={650}
                            height={650}
                            initial={{x:100, opacity:0}}
                            animate={{x:0, opacity:1}}
                            transition={{duration:1, delay:1.5}}
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start mt-10"
                    >
                        <motion.h2 
                            variants={childVariants}
                            className="pb-2 text-4xl tracking-tighter lg:text-8xl"
                        >
                            Anuj Dubey
                        </motion.h2>

                        <motion.span 
                            variants={childVariants}
                            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Full Stack Developer
                        </motion.span>

                        <motion.p 
                            variants={childVariants}
                            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
                        >
                            {HERO_CONTENT}
                        </motion.p>

                        <motion.a 
                            variants={childVariants}
                            href={"https://drive.google.com/file/d/1NFBKsomPV6G-Q3Y5UuDXYG-cTVlfByXt/view?usp=sharing"}
                            target="_blank"
                            download
                            className="bg-white rounded-full p-4 text-sm text-stone-800 mb-4 lg:mb-10"
                        >
                            Download Resume
                        </motion.a>

                        <div className="lg:hidden w-full flex justify-center py-4">
                            <div className="flex items-center space-x-4">
                                <StyledWrapper>
                                    <span className="loader" />
                                </StyledWrapper>
                                <StyledWrappermid>
                                    <div className="loader-wrapper">
                                        <div className="packman" />
                                        <div className="dots">
                                            <div className="dot" />
                                            <div className="dot" />
                                            <div className="dot" />
                                            <div className="dot" />
                                        </div>
                                    </div>
                                </StyledWrappermid>
                                <StyledWrapper2>
                                    <span className="loader2" />
                                </StyledWrapper2>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Desktop version of loaders (positioned under profile pic) */}
                <div className="hidden lg:flex lg:w-1/2 relative">
                    <div className="flex justify-between absolute bottom-0 w-full px-4">
                        <StyledWrapper>
                            <span className="loader" />
                        </StyledWrapper>
                        <StyledWrappermid>
                            <div className="loader-wrapper">
                                <div className="packman" />
                                <div className="dots">
                                    <div className="dot" />
                                    <div className="dot" />
                                    <div className="dot" />
                                    <div className="dot" />
                                </div>
                            </div>
                        </StyledWrappermid>
                        <StyledWrapper2>
                            <span className="loader2" />
                        </StyledWrapper2>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Updated styled components with better mobile scaling
const LoaderBase = styled.div`
  .loader, .loader2 {
    width: 32px;
    height: 32px;
    border: 2px solid #FFF;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation_35 1s linear infinite;

    @media (min-width: 768px) {
      width: 48px;
      height: 48px;
    }
  }

  .loader::after, .loader::before,
  .loader2::after, .loader2::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    background: greenyellow;
    width: 6px;
    height: 6px;
    transform: translate(150%, 150%);
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 4px;
      height: 4px;
    }
  }

  .loader::before, .loader2::before {
    left: auto;
    top: auto;
    right: 0;
    bottom: 0;
    transform: translate(-150%, -150%);
  }

  @keyframes rotation_35 {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const StyledWrapper = styled(LoaderBase)`
  position: relative;
  margin: 0 5px;

  @media (min-width: 768px) {
    margin: 0 10px;
  }
`;

const StyledWrapper2 = styled(LoaderBase)`
  position: relative;
  margin: 0 5px;

  @media (min-width: 768px) {
    margin: 0 10px;
  }
`;

const StyledWrappermid = styled.div`
  position: relative;
  margin: 0 5px;
  top: 850px

  @media (min-width: 768px) {
    margin: 0 10px;
  }

  .loader-wrapper {
    position: relative;
    width: 80px;
    height: 40px;

    @media (min-width: 768px) {
      width: 100px;
      height: 50px;
    }
  }

  .packman::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 20px;
    background-color: #EFF107;
    border-radius: 100px 100px 0 0;
    transform: translate(-50%, -50%);
    animation: pac-top 0.5s linear infinite;
    transform-origin: center bottom;

    @media (min-width: 768px) {
      width: 50px;
      height: 25px;
    }
  }

  .packman::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 20px;
    background-color: #EFF107;
    border-radius: 0 0 100px 100px;
    transform: translate(-50%, 50%);
    animation: pac-bot 0.5s linear infinite;
    transform-origin: center top;

    @media (min-width: 768px) {
      width: 50px;
      height: 25px;
    }
  }

  .dots .dot {
    position: absolute;
    z-index: -1;
    top: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;

    @media (min-width: 768px) {
      width: 10px;
      height: 10px;
      top: 8px;
    }
  }

  .dots .dot:nth-child(1) {
    left: 60px;
    animation: dot-stage1 0.5s infinite;

    @media (min-width: 768px) {
      left: 90px;
    }
  }

  .dots .dot:nth-child(2) {
    left: 40px;
    animation: dot-stage1 0.5s infinite;

    @media (min-width: 768px) {
      left: 60px;
    }
  }

  .dots .dot:nth-child(3) {
    left: 20px;
    animation: dot-stage1 0.5s infinite;

    @media (min-width: 768px) {
      left: 30px;
    }
  }

  .dots .dot:nth-child(4) {
    left: 8px;
    animation: dot-stage2 0.5s infinite;

    @media (min-width: 768px) {
      left: 10px;
    }
  }

  @keyframes pac-top {
    0% { transform: translate(-50%, -50%) rotate(0) }
    50% { transform: translate(-50%, -50%) rotate(-30deg) }
    100% { transform: translate(-50%, -50%) rotate(0) }
  }

  @keyframes pac-bot {
    0% { transform: translate(-50%, 50%) rotate(0) }
    50% { transform: translate(-50%, 50%) rotate(30deg) }
    100% { transform: translate(-50%, 50%) rotate(0) }
  }

  @keyframes dot-stage1 {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-24px, 0); }
  }

  @keyframes dot-stage2 {
    0% { transform: scale(1); }
    5%, 100% { transform: scale(0); }
  }
`;

export default Hero;