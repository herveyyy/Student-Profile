import React from 'react'

import students from '../data/Students'
import Scheds from '../Components/Scheds';
const StudentProfilePage = () => {
    const selectedStudent = students.find((student) => student.id === 1);

  return (
    <div className='min-h-screen w-full'>
    
    <div>
      {selectedStudent ? (
        <div className='flex w-full  justify-center text-center'>
            <div className=''>
                <div className='p-4  mx-8 bg-gray-50 shadow-lg rounded-lg'>
                <h1>Student Information</h1>
            <p>Student ID: {selectedStudent.id}</p>
            <div className='w-full  flex justify-center'>
                <div className='border-2 border-black rounded-full w-32 h-32 overflow-hidden'>
                    <img className='' src={selectedStudent.profilePic}/>
                </div>
            </div>
           
          <p className='font-bold'>{`${selectedStudent.firstName} ${ selectedStudent.middleName.charAt(0) + "."} ${ selectedStudent.lastName}`}</p>
          <p className='-translate-y-1 text-sm'>Student</p>
          <p>{selectedStudent.age} years old</p>
                </div>       
          <div className=' mx-8'>
          <p className="font-bold text-4xl my-8">{selectedStudent.grade} - {selectedStudent.section}</p>
          <Scheds />
          </div>
            </div>
           
        </div>
      ) : (
        <p>Student with ID 1 not found</p>
      )}
    </div>
    
    </div>

  )
}
export default StudentProfilePage