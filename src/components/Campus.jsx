import React from 'react'

const Campus = () => {
  return (
    <div className='bg-pink-100 min-h-[100vh]'>
      <div className="campus">
        <div className="item flex p-6 gap-4 border-y-2 border-black">
          <img className='rounded-lg h-[35vh]' src="public\dewsis.jpeg"/>
          <div className="info">
            <h2 className='font-extrabold text-4xl'>Mr. Dewsis</h2>
            <p className='font-semibold text-xl mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eligendi, odit at sed praesentium ipsam quibusdam rem quae quidem quia tempora dolore laborum, hic quo deserunt earum necessitatibus nostrum eum?</p>
          </div>
        </div>
        <div className="item flex p-6 gap-4 border-y-2 border-black">
          <img className='rounded-lg h-[35vh]' src="public\dewsis.jpeg"/>
          <div className="info">
            <h2 className='font-extrabold text-4xl'>Mr. Dewsis</h2>
            <p className='font-semibold text-xl mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam eligendi, odit at sed praesentium ipsam quibusdam rem quae quidem quia tempora dolore laborum, hic quo deserunt earum necessitatibus nostrum eum?</p>
          </div>
        </div>
      </div>

      <div className="feedback flex justify-center flex-col items-center">
        <h3 className='font-bold m-4 text-2xl'>Give us your valuable feedback</h3>
        <input type="text" placeholder='Write your Feedback' className='bg-white bg-opacity-60 text-black placeholder-black w-[35vw] py-2 px-4 mt-4 rounded-3xl'/>
        <button className='border-4 border-black bg-slate-200 bg-opacity-55 text-black px-4 py-2 m-4 rounded-2xl '>Submit</button>
      </div>

      <div className="divide w-[100vw] h-1 bg-black"></div>

      <div className="faqs flex justify-center flex-col items-center">
        <h3 className='font-bold m-4 text-2xl'>Frequently Asked Questions</h3>
      </div>
    </div>
  )
}

export default Campus
