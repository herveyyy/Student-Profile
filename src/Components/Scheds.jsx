import React from 'react'
import SubjectCard from './SubjectCard'

const Scheds = () => {
  return (
    <div className='w-full'>
        <p className='font-medium'>Class Schedule</p>
<div className='flex justify-evenly gap-x-4 flex-wrap shadow-md rounded-md w-full px-2'>
<div className='h-10 items-center flex hover:text-blue-800 hover:underline'>
<button>
Monday
</button>
</div>
<div className='h-10 items-center flex hover:text-blue-800 hover:underline'>
<button>
Tuesday
</button>
</div>
<div className='h-10 items-center flex hover:text-blue-800 hover:underline'>
<button>
Wednesday
</button>
</div>
<div className='h-10 items-center flex hover:text-blue-800 hover:underline'>
<button>
Thursday
</button>
</div>
<div className='h-10 items-center flex hover:text-blue-800 hover:underline'>
<button>
Friday
</button>
</div>
        </div>
        <SubjectCard />
    </div>
  )
}

export default Scheds