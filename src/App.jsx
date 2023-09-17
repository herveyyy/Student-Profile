import React from "react"
import StudentProfilePage from "./Page/StudentProfilePage.jsx"
export default function App() {
  return (
    <div className="min-h-screen w-full"> 
    <div className="w-full flex flex-wrap justify-center items-center gap-x-12 p-2">
      <div>
        <img className="w-24 h-24" src="/static/images/MOGCHS_Logo.png"/>
      </div>
      <div> 
        <h1 className="font-bold text-6xl">MOGCHS</h1>
      </div>
    </div>
<StudentProfilePage />
    </div>

  )
}