import Certificate from"./assets/certificate.png";
import { motion } from 'framer-motion';
import Certificate2 from "./assets/certificate2.jpg";

export default function education() {
  return (
    <section id="Education" className="mt-24">
  <motion.h2 
    className="text-center text-4xl text-[#74e291] font-bold "
    initial={{ opacity: 0, y: "0" }}
    whileInView={{ opacity: 1, y: "0" }}
    transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
    viewport={{ once: false }}
  >
    Education
  </motion.h2>

  <div className="flex justify-center m-6">
    <div className="grid max-w-[1200px] grid-cols-2 gap-6 max-xl:justify-center max-xl:grid-cols-1">
      <motion.div 
        className="flex flex-col gap-y-8"
        initial={{ opacity: 0, y: '-50px' }}
        whileInView={{ opacity: 1, y: '0' }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false, amount: 0.4 }} 
      >
        <p className="text-xl max-xl:max-w-[768px] text-[#f0f2f5]">
          I started learning coding from YouTube. Then I took a course "Programming from 0", where I learned HTML, CSS, and JavaScript.
          After that, I took a course from Coursera "ReactJS and Tailwind CSS Fundamentals".
        </p>

        <div className="grid justify-center max-xl:gap-y-4">
          <div className="flex gap-8">
            <div className="text-[#74e291]">Jun. 2024 - Dec. 2024</div>
            <div>
              <h3 className="text-xl text-[#eff396]">Front-end Development <br /> Nexts Step Academy</h3>
              <p>HTML, CSS, JavaScript, Git</p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="text-[#74e291]">Nov. 2024 - Dec. 2024</div>
            <div>
              <h3 className="text-xl text-[#eff396]">ReactJS and Tailwind CSS <br /> Fundamentals "Packt"</h3>
              <p>ReactJS and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: '20px' }}
        whileInView={{ opacity: 1, y: '0' }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }} 
        viewport={{ once: false }}
      >
        <h2 className="text-3xl text-[#74e291] font-bold">
          Certificates
        </h2>

        <div className="flex flex-row gap-6 m-4 max-xl:justify-center max-[32rem]:grid max-xl:pt-4">
          <div className="flex border-2 h-54 w-74 justify-center items-center overflow-hidden max-md:w-54 max-md:h-32 rounded-lg hover:scale-105 transform transition-all duration-300">
            <img src={Certificate} alt="" className="w-64 rotate-6 hover:w-72 max-md:w-44 max-md:hover:w-48 transform transition-all duration-300" />
          </div>

          <div className="flex border-2 h-54 w-74 justify-center items-center overflow-hidden max-md:w-54 max-md:h-32 rounded-lg hover:scale-105 transform transition-all duration-300">
            <img src={Certificate2} alt="" className="-rotate-85 w-48  hover:w-50 max-md:w-44 max-md:hover:w-48 transform transition-all duration-300" />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

  )
}
