import ecomerce from "./assets/ecommerce.png";
import { motion } from 'framer-motion';
import ReactPortfolio from "./assets/reactportfolio.png";
import UpcomingProject from "./assets/upcomingProject.png";
import MoreUpcoming from "./assets/moreupcoming.png";

export default function projects() {
  return (
    <section id="Projects" className="flex justify-center mt-24">
    <div className="flex flex-col m-4">
      <motion.h2
        className="text-4xl mb-8 text-center font-bold"
        initial={{ opacity: 0, y: '-30px' }}
        whileInView={{ opacity: 1, y: '0' }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        Projects
      </motion.h2>
  
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  xl:grid-cols-4  max-w-[1200px] mx-auto">
            <motion.div
              className="grid justify-center"
              initial={{ opacity: 0, y: '50px' }}
              whileInView={{ opacity: 1, y: '0' }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="grid justify-center p-6 bg-gradient-to-r from-[#f9f9f9] to-[#e1e1e1] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={ecomerce}
                  className=" h-[250px]  rounded-xl transition-transform duration-300 hover:scale-105"
                  alt="project-image"
                />
                <div className="pt-4 ">
                  <h3 className="text-2xl text-center text-[#333] max-[34rem]:text-xl font-semibold">
                    My Portfolio
                  </h3>
                  <p className="pt-2 max-w-[240px] text-center text-[#777] max-[34rem]:text-[15px]">
                    This is my portfolio, built using HTML, CSS, and JavaScript.
                  </p>
                  <a
                    href="https://shotiko.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center text-[#FF6F61] font-semibold hover:text-[#ff0a0a] transition-all duration-200"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid justify-center"
              initial={{ opacity: 0, y: '50px' }}
              whileInView={{ opacity: 1, y: '0' }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="p-6 bg-gradient-to-r from-[#f9f9f9] to-[#e1e1e1] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={ReactPortfolio}
                  className="w-[250px] h-[250px] object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                  alt="project-image"
                />
                <div className="pt-4">
                  <h3 className="text-2xl text-center text-[#333] max-[34rem]:text-xl font-semibold">
                    My Portfolio
                  </h3>
                  <p className="pt-2 max-w-[240px] text-center text-[#777] max-[34rem]:text-[15px]">
                    This is my portfolio, React, TypeScript an Tailwind CSS.
                  </p>
                  <a
                    href="https://shotiko.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center text-[#FF6F61] font-semibold hover:text-[#ff0a0a] transition-all duration-200"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid justify-center"
              initial={{ opacity: 0, y: '50px' }}
              whileInView={{ opacity: 1, y: '0' }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="p-6 bg-gradient-to-r from-[#f9f9f9] to-[#e1e1e1] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={UpcomingProject}
                  className="w-[250px] h-[250px] object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                  alt="project-image"
                />
                <div className="pt-4">
                  <h3 className="text-2xl text-center text-[#333] max-[34rem]:text-xl font-semibold">
                    Store Website
                  </h3>
                  <p className="pt-2 max-w-[240px] text-center text-[#777] max-[34rem]:text-[15px]">
                    I already start working on this website,creating using React.
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center text-[#FF6F61] font-semibold hover:text-[#ff0a0a] transition-all duration-200"
                  >
                    Visit Site
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid justify-center"
              initial={{ opacity: 0, y: '50px' }}
              whileInView={{ opacity: 1, y: '0' }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="p-6 bg-gradient-to-r from-[#f9f9f9] to-[#e1e1e1] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={MoreUpcoming}
                  className="w-[250px] h-[250px] object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                  alt="project-image"
                />
                <div className="pt-4">
                  <h3 className="text-2xl text-center text-[#333] max-[34rem]:text-xl font-semibold">
                    Upcoming Projects
                  </h3>
                  <p className="pt-2 max-w-[240px] text-center text-[#777] max-[34rem]:text-[15px]">
                    More Projects Coming
                  </p>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center text-[#FF6F61] font-semibold hover:text-[#ff0a0a] transition-all duration-200"
                  >
                    
                  </a>
                </div>
              </div>
            </motion.div>
      </div>
    </div>
  </section>
  

  )
}
