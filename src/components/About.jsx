import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id='about' className='py-12 bg-white'>
    <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>
        About Us
        </h2>
         <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center"
        >
     <div className="md:w-1/2">
            <img
              src="https://cdn.pixabay.com/photo/2024/01/20/12/31/ai-generated-8520995_960_720.png"
              alt="About Us"
              className="w-full h-72 object-cover rounded shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-8">
            <h3 className="text-xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-4">
              We are a team of passionate chefs dedicated to bringing the best
              flavors to your table. Our dishes are crafted with love, using the
              finest ingredients to ensure a delightful dining experience.
            </p>
            <p className="text-gray-600">
              Whether you're craving a delicious pizza, a fresh salad, or savory
              pasta, we have something for everyone. Join us for an
              unforgettable culinary journey.
            </p>
          </div>
        </motion.div>
    </div>
    </section>
  )
}

export default About