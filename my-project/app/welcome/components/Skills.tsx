import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "ReactJS", level: 65 },
    { name: "Tailwind CSS", level: 70 },
  ];

  return (
    <section id="Skills" className="mt-24 text-center">
      <motion.h2 
        className="text-4xl text-[#74e291] mb-8 font-bold"
        initial={{ opacity: 0, y: "-30px" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Skills
      </motion.h2>
      <motion.div 
        className="w-[80%] max-w-3xl mx-auto"
        initial={{ opacity: 0, y: '30px' }}
        whileInView={{ opacity: 1, y: '0' }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-between text-xl font-semibold">
            <span>{skill.name}</span>
              <motion.span 
                className="font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: index * 0.4 }}
              >
                {`${skill.level}%`}
              </motion.span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
              <motion.div
                className="h-full bg-[#74e291] rounded-full"
                style={{ width: `${skill.level}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 2 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
