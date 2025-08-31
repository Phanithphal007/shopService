import React from 'react'
import { Link } from 'react-router-dom'; // Add this import
const Title = () => {
  return (
    <div>
      <header className="w-full h-[80px] flex items-center fixed top-0 left-0 z-50 justify-between px-8 py-4 bg-white shadow">
        <div className="flex items-center gap-8">
          <img
            src="https://pedroshoes.com.kh/cdn/shop/files/PEDRO_Primary-Black-Logo_1_100x@2x.png?v=1619493127"
            alt=""
            className="petro w-[90px]"
          />
          
          <ul className="option font-bold">
            <li className='transition-transform hover:scale-110'> 
              <Link to="home">Home</Link>
            </li>
            <li className='transition-transform hover:scale-110'>New</li>
            <li className='transition-transform hover:scale-110'>Women</li>
            <li className='transition-transform hover:scale-110'>Man</li>
            <li className='transition-transform hover:scale-110'>Contact</li>
          </ul>
        </div>
        
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 border rounded px-2 py-1">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" className="outline-none" />
          </div>
          
          <i className="fa-solid fa-bag-shopping text-xl transition-transform hover:scale-110"></i>
          <i className="fa-regular fa-user text-xl transition-transform hover:scale-110"></i>
          <button onClick={toggleVisibility} className="login bg-green-400 px-3 py-1 rounded transition-transform hover:scale-110">
            Login
          </button>
        </div>
      </header>
    </div>
  )
}

export default Title
