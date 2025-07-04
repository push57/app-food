import { useState } from "react"
import { motion } from "framer-motion";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) =>{
   const { name, value } = e.target;
    setFormData({...formData, [name]: value})
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert('message sent');
  }
  return (
    <section id='contact' className='py-12 bg-gray-100'>
       <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="container mx-auto px-4"
            >
    <div className='container mx-auto px-4'>
      <h2 className='text-3xl font-bold text-center mb-8'>Contact Us</h2>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className='bg-white p-6 w-full rounded shadow-md max-w-lg'>
          <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
              <input type="text" id="name"
                name="name" value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded outline-none"
                placeholder="Your Name"
              />
            </div>
           <div className="mb-4">
            <label htmlFor='Email' className='block text-gray-700 font-semibold'>Email</label>
            <input type='email' id='email' name='email' value={FormData.email} onChange={handleChange} 
            className='w-full p-2 mt-2 border border-gray-300 rounded outline-none' placeholder="your Email"/>
          </div>
         <div className="mb-4">
            <label htmlFor='message' className='block text-gray-700 font-semibold'>Message</label>
            <textarea type='text' id='message' name='message' value={FormData.message} onChange={handleChange} 
            className='w-full p-2 mt-2 border border-gray-300 rounded outline-none' placeholder="your message"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
        </form>
     
      </div>
    </div>
        </motion.div>
    </section>
  )
}

export default Contact