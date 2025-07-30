import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { SiThreedotjs } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaCloudflare } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiTurborepo } from "react-icons/si";
import { motion } from "framer-motion"
import styled from 'styled-components';

const iconVariants = (duration) => ({
    initial: { y:-10 },
    animate: {
        y: [10,-10],
        transition:{
            duration: duration,
            ease : "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () =>{
    return (
        <div className="pb-24">
            <motion.h2 
            whileInView={{opacity:1, y: 0 }}
            initial={{opacity:0, y:-100}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h2>

            <motion.div 
            whileInView={{opacity:1, x: 0 }}
            initial={{opacity:0, x:-100}}
            transition={{duration: 1.5}}            
            className="flex flex-wrap items-center justify-center gap-4">

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                    <BiLogoTypescript  className="text-7xl text-blue-400"/>
                </motion.div>

                <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                >    
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                    <TbBrandNextjs className="text-7xl"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                    <SiExpress  className="text-7xl text-white"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                    <TbBrandOauth  className="text-7xl text-white"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                    <SiPrisma  className="text-7xl text-white"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                    <SiZod  className="text-7xl text-cyan-900"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                    <FaCloudflare  className="text-7xl text-orange-500"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                    <FaAws  className="text-7xl "/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                    <SiMongodb className="text-7xl text-green-500"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                    <FaDocker className="text-7xl text-blue-500"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                className="p-4">
                    <FaNodeJs className="text-7xl text-yellow-300"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                className="p-4">
                    <BiLogoPostgresql className="text-7xl text-cyan-800"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                className="p-4">
                    <SiTurborepo className="text-7xl "/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                className="p-4">
                    <RiTailwindCssFill className="text-7xl text-cyan-500"/>
                </motion.div>

                <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                    <SiThreedotjs  className="text-7xl "/>
                </motion.div>
            </motion.div>

            <StyledWrapper>
      <div className="my-loader">
        <div className="rubiks-cube">
          <div className="face front">
            <div style={{background: '#ff3d00'}} className="cube" />
            <div style={{background: '#ffeb3b'}} className="cube" />
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#2196f3'}} className="cube" />
            <div style={{background: '#ffffff'}} className="cube" />
            <div style={{background: '#ffeb3b'}} className="cube" />
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#2196f3'}} className="cube" />
            <div style={{background: '#ff3d00'}} className="cube" />
          </div>
          <div className="face back">
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#ff3d00'}} className="cube" />
            <div style={{background: '#ffeb3b'}} className="cube" />
            <div style={{background: '#2196f3'}} className="cube" />
            <div style={{background: '#ffffff'}} className="cube" />
            <div style={{background: '#ff3d00'}} className="cube" />
            <div style={{background: '#ffeb3b'}} className="cube" />
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#2196f3'}} className="cube" />
          </div>
          <div className="face left">
            <div style={{background: '#ffeb3b'}} className="cube" />
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#2196f3'}} className="cube" />
            <div style={{background: '#ff3d00'}} className="cube" />
            <div style={{background: '#ffffff'}} className="cube" />
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#2196f3'}} className="cube" />
            <div style={{background: '#ffeb3b'}} className="cube" />
            <div style={{background: '#ff3d00'}} className="cube" />
          </div>
          <div className="face right">
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#ff3d00'}} className="cube" />
            <div style={{background: '#ffeb3b'}} className="cube" />
            <div style={{background: '#2196f3'}} className="cube" />
            <div style={{background: '#ffffff'}} className="cube" />
            <div style={{background: '#ff3d00'}} className="cube" />
            <div style={{background: '#ffeb3b'}} className="cube" />
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#2196f3'}} className="cube" />
          </div>
          <div className="face top">
            <div style={{background: '#2196f3'}} className="cube" />
            <div style={{background: '#ffeb3b'}} className="cube" />
            <div style={{background: '#ff3d00'}} className="cube" />
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#ffffff'}} className="cube" />
            <div style={{background: '#ffeb3b'}} className="cube" />
            <div style={{background: '#ff3d00'}} className="cube" />
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#2196f3'}} className="cube" />
          </div>
          
          <div className="face bottom">
            <div style={{background: '#ffffff'}} className="cube" />
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#2196f3'}} className="cube" />
            <div style={{background: '#ff3d00'}} className="cube" />
            <div style={{background: '#ffeb3b'}} className="cube" />
            <div style={{background: '#4caf50'}} className="cube" />
            <div style={{background: '#2196f3'}} className="cube" />
            <div style={{background: '#ffffff'}} className="cube" />
            <div style={{background: '#ff3d00'}} className="cube" />
          </div>
        </div>
      </div>
    </StyledWrapper>

        </div>
    )
};

const StyledWrapper = styled.div`

position: absolute;
  left: 110px;      
  top: 1480px; 

  .my-loader {
    width: 100px;
    height: 100px;
    perspective: 500px;
    margin: 75px auto;
  }

  .rubiks-cube {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    animation: my-rotateCube 5s infinite linear;
  }

  .my-loader .face {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  }

  .my-loader .face.front {
    transform: translateZ(50px);
  }
  .my-loader .face.back {
    transform: rotateY(180deg) translateZ(50px);
  }
  .my-loader .face.left {
    transform: rotateY(-90deg) translateZ(50px);
  }
  .my-loader .face.right {
    transform: rotateY(90deg) translateZ(50px);
  }
  .my-loader .face.top {
    transform: rotateX(90deg) translateZ(50px);
  }
  .my-loader .face.bottom {
    transform: rotateX(-90deg) translateZ(50px);
  }

  .my-loader .cube {
    width: calc(100% / 3);
    height: calc(100% / 3);
    box-sizing: border-box;
    border: 1px solid #000;
  }

  @keyframes my-rotateCube {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }`;


export default Technologies