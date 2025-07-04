import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
        <div className='container mx-auto text-center'>
            <p>&copy; 2025 Plateful. All rights reserved</p>
            <p>Follow Us on:</p>
            <div className='flex justify-center gap-x-4 mt-2'>
                <a className='hover:text-blue-400' href='#'>Facebook</a>
                <a className='hover:text-blue-400'href='#'>Youtube</a>
                <a className='hover:text-blue-400' href='#'>Instagram</a>
            </div>
        </div>

    </footer>
  )
}

export default Footer