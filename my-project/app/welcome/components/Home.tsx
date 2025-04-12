import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./App.css";
import { motion } from 'framer-motion';

export default function home() {
  return (
    <div>
      <motion.section id="Home" className=" flex justify-center pt-24 "
      initial={{ opacity: 0, y: '-45px' }}
      whileInView={{ opacity: 1, y: '0' }} 
      transition={{ duration: 1 }} 
      viewport={{ once: false, amount: 0.4}} 
      >
      <div className="grid w-[1200px] gap-4 m-4 max-md:text-center  max-md:justify-start">
        <div>
          <h1 className="text-[40px] text-[#eff396] font-bold leading-snug max-md:text-[35px] max-[27rem]:text-2xl">Hi, It's Shotiko <br />
          I'm a
          <span className="text-[#74e291]">
          <Typewriter words={[" web Developer", " ReactJs Developer", " JavaScript Developer"]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={60}
          deleteSpeed={50}
          delaySpeed={1500}
           />
          </span>
          </h1>
        </div>
        <div>
          <p className="max-w-3xl text-2xl text-[#f0f2f5] opacity-90 max-md:text-xl max-[27rem]:text-[18px] leading-relaxed">I am a beginner developer, I know HTML, CSS and basic JavaScript.
             I am also learning other programming languages ​​such as php, python.
             My goal is to become a fullstack developer</p>
        </div>

        <div>
        <div className="flex flex-row gap-3 max-xl:grid-rows-4 max-md:justify-center">
          <a href="https://www.linkedin.com/in/shotiko-beboshvili-68a94828b/"
          className="border-2 w-12 h-12 rounded-full flex items-center justify-center 
          text-[#74e291] border-[#74e291] 
          hover:bg-[#74e291] hover:text-black hover:rotate-12
          hover:-translate-y-1 transition-all duration-300         ">
          <FaLinkedin style={{fontSize: "30"}}></FaLinkedin>
          </a>

          <a href="https://github.com/shotikobeboshvili"
           className="border-2 w-12 h-12 rounded-full flex items-center justify-center 
          text-[#74e291] border-[#74e291] 
          hover:bg-[#74e291] hover:text-black hover:rotate-12
          hover:-translate-y-1 transition-all duration-300">
            <FaGithub style={{fontSize: "30"}}></FaGithub>
          </a>

          <a className="border-2 w-12 h-12 rounded-full flex items-center justify-center 
          text-[#74e291] border-[#74e291] 
          hover:bg-[#74e291] hover:text-black hover:rotate-12
          hover:-translate-y-1 transition-all duration-300">
            <FaTwitter style={{fontSize: "30"}}></FaTwitter>
          </a>

          <a href="https://www.instagram.com/beboshvilishotiko/"
           className="border-2 w-12 h-12 rounded-full flex items-center justify-center 
          text-[#74e291] border-[#74e291] 
          hover:bg-[#74e291] hover:text-black hover:rotate-12
          hover:-translate-y-1 transition-all duration-300">
            <FaInstagram style={{fontSize: "30"}}></FaInstagram>
          </a>
        </div>
        
        <button className="w-32 h-11 text-xl text-[#74e291] border-[2px] border-[#74e291] 
        rounded-2xl font-bold mt-3
        hover:-translate-y-1.5 transition-all duration-300 
        hover:bg-[#74e291] hover:text-black hover:border-[#74e291] cursor-pointer">
          <a href="#Contact">
          Hire me
          </a>
        </button>
        </div>
      </div>
    </motion.section>
    </div>
  )
}
