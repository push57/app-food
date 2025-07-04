import React from 'react'

const Hero = () => {
  return (
   <section id='home' className='relative bg-hero-pattern bg-cover bg-center h-screen flex justify-center items-center'>
    {/* Dark overlay */}
    <div className='absolute inset-0 bg-black opacity-70'></div>
     <div className='text-center z-10'>
        <h1 className='text-4xl md:text-6xl font-bold text-white'>Savor the Taste of Freshness!</h1>
        <p className='text-lg md:text-2xl my-4 text-white'>Discover delicious recipes and local resturants near you</p>
        <button className='bg-blue-500 px-6 py-3 rounded text-white hover:bg-blue-600'>Explore Menu</button> 
     </div>
   </section>
  )
}

export default Hero