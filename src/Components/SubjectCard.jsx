import React from 'react'

const SubjectCard = ({subject}) => {
  return (
    <>
   
    <div className=' my-4 w-full h-[85px] bg-gray-50 shadow-lg  border-t-[1px]  border-l-[1px] rounded-lg'>
        <div className='flex pl-6 pt-2'>
            <h1 className='font-bold text-2xl '>MATH</h1>
        </div>
        <div className='flex pl-8'>
            <p className='text-sm'>Teacher: </p>
        </div>
        <div className='flex pl-8'>
            <p className='text-sm'>Schedule: 6:00am - 7:00am</p>
        </div>
     
    </div>
    <div className=' my-4 w-full h-[85px] bg-gray-50 shadow-lg  border-t-[1px] border-l-[1px] rounded-lg'>
        <div className='flex pl-6 pt-2'>
            <h1 className='font-bold text-2xl '>ENGLISH</h1>
        </div>
        <div className='flex pl-8'>
            <p className='text-sm'>Teacher: </p>
        </div>
        <div className='flex pl-8'>
            <p className='text-sm'>Schedule: 6:00am - 7:00am</p>
        </div>
     
    </div>
    </>
  )
}

export default SubjectCard