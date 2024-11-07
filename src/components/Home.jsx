import React from 'react'
const Home = () => {
  return (
    <div>
      <div className="navbar w-[100vw] h-[12vh] bg-blue-600 flex justify-evenly items-center">
        <a href="http://localhost:5173/profile" className="profile h-14 w-14 rounded-full">
        </a>

        <div className="search w-[30vw] h-10 rounded-full bg-gray-100 flex items-center p-4 gap-6">
            <img src="public\Search White Transparent, Search Icon, Search Icons, Search Clipart, Magnifying Glass PNG Image For Free Download.jpeg" width={40}  />
            <input type='text' placeholder= "Search" className='font-semibold text-xl bg-gray-100 border-none '/>
        </div>

        <a href="#">Academic</a>
       
        <select name="Resources" id="study" className='bg-blue-600'>
            <option value="note">Resources</option>
            <option value="note">Notes</option>
            <option value="note">PYQ</option>
            <option value="note">Assignments</option>
            <option value="note">Labs</option>
        </select>

        <a href="#">Events</a>
        
        <a href="http://localhost:5173/campus">Campus</a>

        <a href="#"  className="message">
        </a>

        <a href="http://localhost:5173/notification"  className="notification"></a>
      </div>

    <div className="main h-[88vh] flex justify-evenly items-center">
        <div className="left w-[40vw] h-[80vh] border-4 rounded-xl border-black flex flex-col items-center justify-evenly">
            <h2 className='text-red-700 font-bold text-2xl'>Announcements</h2>
            <div className="announcements h-[70vh] w-[35vw] bg-slate-300 p-6 overflow-auto rounded-xl">
                <p className='border-y-2 border-black p-2 flex justify-between'><a href='#'>avishkar will start from 12th of nov</a>5 Nov 2024</p>
                <p className='border-y-2 border-black p-2 flex justify-between'><a href='#'>avishkar will start from 12th of nov</a>5 Nov 2024</p>
                <p className='border-y-2 border-black p-2 flex justify-between'><a href='#'>avishkar will start from 12th of nov</a>5 Nov 2024</p>
                <p className='border-y-2 border-black p-2 flex justify-between'><a href='#'>avishkar will start from 12th of nov</a>5 Nov 2024</p>
                <p className='border-y-2 border-black p-2 flex justify-between'><a href='#'>avishkar will start from 12th of nov</a>5 Nov 2024</p>
                <p className='border-y-2 border-black p-2 flex justify-between'><a href='#'>avishkar will start from 12th of nov</a>5 Nov 2024</p>
                <p className='border-y-2 border-black p-2 flex justify-between'><a href='#'>avishkar will start from 12th of nov</a>5 Nov 2024</p>
                <p className='border-y-2 border-black p-2 flex justify-between'><a href='#'>avishkar will start from 12th of nov</a>5 Nov 2024</p>
                <p className='border-y-2 border-black p-2 flex justify-between'><a href='#'>avishkar will start from 12th of nov</a>5 Nov 2024</p>
                <p className='border-y-2 border-black p-2 flex justify-between'><a href='#'>avishkar will start from 12th of nov</a>5 Nov 2024</p>
                <p className='border-y-2 border-black p-2 flex justify-between'><a href='#'>avishkar will start from 12th of nov</a>5 Nov 2024</p>
            </div>
        </div>

        <div className="right w-[50vw] rounded-xl h-[80vh] bg-white border-4 border-black flex flex-col justify-evenly items-center">
            <h2 className='text-red-700 font-bold text-2xl'>Lost And Found</h2>
            <div className="laf h-[70vh] w-[45vw] bg-white flex justify-between">
                <div className="lost rounded-xl h-[70vh] w-[22vw] bg-lime-300 flex flex-col items-center justify-evenly">
                    <h3 className="font-bold text-xl" >Lost</h3>
                    <div className="items h-[65vh] overflow-hidden">
                        <div className="item rounded-xl my-2 w-[21vw] flex justify-evenly gap-2 items-center border-2 border-black">
                            <img className=' rounded-xl w-20 h-20 ' src="data:image/jpeg;base64,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" alt="" />
                            <div className="info">
                                <p className='text-xs font-extrabold'>Lost by :- Ayush Pandey</p>
                                <p className='text-xs font-extrabold'>Near GS-Gate</p>
                                <p className='text-xs font-extrabold'>At 3pm</p>
                                <img className='w-5 h-5' src="public\info-svgrepo-com.svg"/>
                            </div>
                            <img className='w-10 h-10' src="public\message-square-dots-svgrepo-com.svg"/>
                        </div>
                    </div>
                </div>
                
                <div className="found rounded-xl h-[70vh] w-[22vw] bg-lime-300 flex flex-col items-center justify-evenly">
                    <h3 className="font-bold text-xl" >Found</h3>
                    <div className="items h-[65vh] overflow-hidden">
                        <div className="item rounded-xl my-2 w-[21vw] flex justify-evenly gap-2 items-center border-2 border-black">
                            <img className=' rounded-xl w-20 h-20 ' src="data:image/jpeg;base64,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" alt="" />
                            <div className="info">
                                <p className='text-xs font-extrabold'>Found by :- Ayush Pandey</p>
                                <p className='text-xs font-extrabold'>Near GS-Gate</p>
                                <p className='text-xs font-extrabold'>At 3pm</p>
                                <img className='w-5 h-5' src="public\info-svgrepo-com.svg"/>
                            </div>
                            <img className='w-10 h-10' src="public\message-square-dots-svgrepo-com.svg"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home
