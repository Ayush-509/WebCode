import React from 'react'

const Login = () => {
  return (
    <div className='bg-blue-800 w-[100vw] h-[100vh] flex justify-evenly p-8'>
      <a href="http://localhost:5173/admin" className="admin bg-white w-[29vw] h-[30vh] rounded-lg text-center flex flex-col items-center justify-evenly px-6">
          <img src="public\Circled User Icon transparent PNG - StickPNG (3).jpeg" width={40}/>
          <h1 className='text-blue-800 font-bold'>Admin</h1>
          <p>Login as an administrator to access the dashboard to manage app data</p>
      </a>

      <a href='http://localhost:5173/student' className="admin bg-white w-[29vw] h-[30vh] rounded-lg text-center flex flex-col items-center justify-evenly px-6">
          <img src="public\Template Material Silhouette Vector PNG, Toga Icon Design Template Illustration, Template Icons, College, Icon PNG Image For Free Download.jpeg" width={40}/>
          <h1 className='text-blue-800 font-bold'>Student</h1>
          <p>Login as a student to explore course materials and assignments</p>
      </a>

      <a href='http://localhost:5173/teacher' className="admin bg-white w-[29vw] h-[30vh] rounded-lg text-center flex flex-col items-center justify-evenly px-6">
          <img src="public\Teacher Illustration Clipart Transparent PNG Hd, Teacher Vector Illustration With Black And White Design Teacher Icon, Teacher Icons, Black Icons, White Icons PNG Image For Free Download.jpeg" width={40}/>
          <h1 className='text-blue-800 font-bold'>Teacher</h1>
          <p>Login as a teacher to create courses, assignments, and track student progress</p>
      </a>
    </div>
  )
}

export default Login
