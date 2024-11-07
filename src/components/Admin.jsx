import React from 'react'

const Admin = () => {
  return (
    <div className='bg-blue-500 h-[100vh] w-[100vw] flex justify-center items-center'>
        <div className="login bg-white w-[40vw] h-[40vh] rounded-xl bg-opacity-60 flex flex-col items-center">
            <p className='font-extrabold text-xl mt-4'>Admin Login</p>
            <input type="text" placeholder='Enter your Username' className='bg-black text-white placeholder-white w-[35vw] py-2 px-4 mt-4 rounded-3xl'/>
            <input type="password" placeholder='Enter your Password' className='bg-black text-white placeholder-white w-[35vw] py-2 px-4 mt-4 rounded-3xl'/>
            <button className='border-4 border-black bg-red-600 text-white px-4 py-2 m-4 rounded-2xl '>Sign-In</button>
        </div>
      
    </div>
  )
}

export default Admin
