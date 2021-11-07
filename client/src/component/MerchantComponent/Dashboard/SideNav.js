import React from 'react'

const SideNav = ({setActiveStep}) => {
    return (
        <div className="min-h-screen flex flex-row bg-gray-100">
  <div className="flex flex-col w-56 bg-white rounded-r-3xl overflow-hidden">
    <div className="flex items-center justify-center h-20 shadow-md">
      <h1 className="text-3xl uppercase text-indigo-500">Merchant</h1>
    </div>
    <ul className="flex flex-col py-4">
      
      <li>
        <button onClick={()=>setActiveStep(0)} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-music"></i></span>
          <span className="text-sm font-medium">My Products</span>
        </button>
      </li>
      <li>
        <button onClick={()=>setActiveStep(1)} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-drink"></i></span>
          <span className="text-sm font-medium">Top Products</span>
        </button>
      </li>
      <li>
        <button onClick={()=>setActiveStep(2)} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-shopping-bag"></i></span>
          <span className="text-sm font-medium">Sales</span>
        </button>
      </li>
      <li>
        <button onClick={()=>setActiveStep(3)} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
          <span className="text-sm font-medium">Chat</span>
        </button>
      </li>
      <li>
        <button onClick={()=>setActiveStep(4)} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
          <span className="text-sm font-medium">Profile</span>
        </button>
      </li>
      
      <li>
        <button onClick={()=>setActiveStep(5)} className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
          <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
          <span className="text-sm font-medium">Logout</span>
        </button>
      </li>
    </ul>
  </div>
</div>
    )
}

export default SideNav
