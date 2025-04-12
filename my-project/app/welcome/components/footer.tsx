import { motion } from 'framer-motion';

export default function footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-24">
  <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
    <motion.div
      className="text-center mb-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
    >
      <p className="text-lg">
        © {new Date().getFullYear()} Shotiko | All Rights Reserved.
      </p>
    </motion.div>

    <motion.div
      className="flex gap-8 mb-4"
      initial={{ opacity: 0, y: '30px' }}
      whileInView={{ opacity: 1, y: '0' }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
    >
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl text-[#1DA1F2] hover:text-[#006bb3] transition duration-300"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl text-[#1DA1F2] hover:text-[#006bb3] transition duration-300"
      >
        GitHub
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl text-[#1DA1F2] hover:text-[#006bb3] transition duration-300"
      >
        Twitter
      </a>
    </motion.div>

    <motion.div
      className="flex justify-center gap-4 mt-4"
      initial={{ opacity: 0, y: '30px' }}
      whileInView={{ opacity: 1, y: '0' }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false }}
    >
      <a
        href="mailto:youremail@example.com"
        className="text-lg hover:underline"
      >
        Email
      </a>
      <a
        href="tel:+123456789"
        className="text-lg hover:underline"
      >
        Call
      </a>
    </motion.div>
  </div>
</footer>

  )
}
