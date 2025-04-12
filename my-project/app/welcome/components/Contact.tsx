import { motion } from 'framer-motion';

export default function contact() {
    
  return (
    <section id="Contact" className="mt-24">
  <div className="flex flex-col items-center m-4">
    <motion.h2
      className="text-4xl mb-8 text-center font-bold"
      initial={{ opacity: 0, y: '-30px' }}
      whileInView={{ opacity: 1, y: '0' }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.4 }}
    >
      Contact Me
    </motion.h2>

    <motion.div
      className="w-full max-w-3xl mx-auto"
      initial={{ opacity: 0, y: '30px' }}
      whileInView={{ opacity: 1, y: '0' }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <form className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="border-2 border-gray-300 p-4 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="border-2 border-gray-300 p-4 rounded-lg"
        />
        <textarea
          name="message"
          rows={6}
          placeholder="Your Message"
          className="border-2 border-gray-300 p-4 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 text-xl bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  </div>
</section>

  )
}
