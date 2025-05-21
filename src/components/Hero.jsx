import React from "react";
import { motion } from "framer-motion";
import MyAvtar from "/assets/images/my-avatar.png";
const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* Background Image */}
      <img
        src={MyAvtar}
        alt="Happy Faces Hero"
        className="absolute inset-0 h-full object-cover opacity-80"
      />

      {/* Animated Circles */}
      <motion.div
        className="absolute bottom-0 rounded-full bg-black/40 h-[500px] w-[500px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 rounded-full bg-black/30 h-[700px] w-[700px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 rounded-full bg-black/20 h-[900px] w-[900px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1.5 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Title */}
      <motion.h1
        className="text-white text-5xl md:text-7xl font-serif z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Software Development <br /> Engineer
      </motion.h1>

      {/* Bottom Text or Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 text-white text-sm z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="bg-blue-300 rounded-full p-2 cursor-pointer">
          {" "}
          &#8595;
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
