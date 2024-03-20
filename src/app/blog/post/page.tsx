import React from 'react'

function page() {
  return (
    <div className='bg-slate-200 min-h-dvh'>
        <div className='max-w-7xl m-auto flex items-center justify-center px-4 py-8'>
            <form action="" className='bg-white w-[500px] min-h-[500px] flex flex-col items-center justify-around p-4 rounded-md'>
                <h1 className='text-xl sm:text-2xl'>Post Blog</h1>
                <div className='w-full flex items-center justify-between my-4 text-lg sm:text-xl'>
                    <label htmlFor="title">Title : </label>
                    <input type="text" id='title' className='outline-none border-2 rounded-sm p-1' />
                </div>
                <div className='w-full flex items-center justify-between my-4 text-lg sm:text-xl'>
                    <label htmlFor="slug">Slug : </label>
                    <input type="text" id='slug' className='outline-none border-2 rounded-sm p-1' />
                </div>
                <div className='w-full flex items-center justify-between my-4 text-lg sm:text-xl'>
                    <label htmlFor="des">Description : </label>
                    <textarea id='des' 
                    rows={5} cols={20}
                    className='outline-none border-2 rounded-sm resize-none p-1' />
                </div>
                <input type="file" className='w-full' />
                <button className='bg-green-500 text-white py-1 rounded-md  mx-auto hover:bg-green-600 text-lg w-1/2 sm:text-xl'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default page