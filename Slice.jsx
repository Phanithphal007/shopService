import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './App.css';

const images = [
  "https://i.etsystatic.com/14123490/r/il/a3d85e/4853614362/il_fullxfull.4853614362_t15e.jpg",
  "https://images.creativemarket.com/0.1.0/ps/231781/1160/772/m1/fpnw/wm1/adventure-t-shirt-screenshot-1-.jpg?1415469959&s=a7a8d293bea48af586892f14f91e408f",
  "https://1.bp.blogspot.com/-OWYBny7f0Oc/X7-z4TmlLgI/AAAAAAAAMHI/nlDUdp_pqqAPjVWQO865F9xqygKe4YYhQCLcBGAsYHQ/s900/Hanging%2BT-Shirt%2BMockup%2B900.jpg",
  "https://www.creativefabrica.com/wp-content/uploads/2021/09/18/Adventure-svg-design-Life-was-made-for-Graphics-17493694-1.jpg",
  "https://www.creativefabrica.com/wp-content/uploads/2021/04/18/This-is-my-hiking-shirt-camping-vector-Graphics-11029913-1.jpg"
];

const Header = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  
 
  return (
    <>
      <header className="w-full h-[80px] flex items-center fixed top-0 left-0 z-50 justify-between px-8 py-4 bg-white shadow">
        <div className="flex items-center gap-8">
          <img
            src="https://pedroshoes.com.kh/cdn/shop/files/PEDRO_Primary-Black-Logo_1_100x@2x.png?v=1619493127"
            alt=""
            className="petro w-[90px]"
          />
          
          <ul className="option font-bold">
            <li className='transition-transform hover:scale-110'> 
              <Link to="/new ">New</Link>
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

      <div className='w-full h-screen mt-[50px] relative flex justify-center'>
        <div className="relative w-[1300px] h-[700px] overflow-hidden mt-4">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${src})` }}
              ></div>
            ))}
          </div>

          {/* Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg"
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-500 text-white p-3 rounded-full shadow-lg"
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>

        {/* Login Modal */}
        {isVisible && (
          <div className='w-full absolute top-[20px]'>
            <div className='detail w-[330px] h-[530px] shadow-2xl bg-white rounded-[10px] fixed top-[120px] left-[40%] z-20'>
              <div className='w-[100%] flex justify-center mt-[2px] font-bold'><h3>Sign In</h3></div>
              <form className='p-[5px]' action="">
                <div className='mt-[10px]'>
                  <label htmlFor="">Username</label>
                  <input className='w-[100%] rounded-[10px] outline-0 p-[10px] border' type="text" placeholder='Username' />
                </div>
                <div className='mt-[10px]'>
                  <label htmlFor="">Email</label>
                  <input className='w-[100%] rounded-[10px] outline-0 p-[10px] border' type="email" placeholder='Email' />
                </div>
                <div className='mt-[10px]'>
                  <label htmlFor="">Password</label>
                  <input className='w-[100%] rounded-[10px] outline-0 p-[10px] border' type="password" placeholder='########' />
                </div>
                <div className='mt-[10px]'>
                  <label htmlFor="">Confirm Password</label>
                  <input className='w-[100%] rounded-[10px] outline-0 p-[10px] border' type="password" placeholder='########' />
                </div>
                <h2 className='text-[15px] hover:text-green-600 text-green-400 underline'>Forgot Password</h2>
                <div className='w-[100%] flex justify-center items-center'>
                  <button onClick={toggleVisibility} className='w-[70px] font-bold bg-blue-500 hover:bg-blue-400 rounded-[5px] px-[4px] py-[8px]'>
                    Login
                  </button>
                </div>
                <h2 className='text-center font-bold'>or sign in With</h2>
                <div className='w-[100%] flex justify-center'>
                  <div>
                    <div className='w-[300px] flex items-center gap-[4px] py-[5px] px-[3px] justify-center border rounded-[15px]'> 
                      <img className='w-[20px] h-[20px] rounded-[50%]' src="https://th.bing.com/th/id/OIP.eY3S8i5yMpIQ6h_6sFbRjAHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" alt="" />
                      <h2 className='hover:text-gray-600 underline'>Google</h2>
                    </div>
                    <div className='w-[300px] flex justify-center items-center py-[5px] px-[3px] mt-[8px] border rounded-[13px]'>
                      <img className='w-[25px] rounded-[50%]' src="https://thewindowsplus.org/wp-content/uploads/2017/08/micro.jpg" alt="" />
                      <h2>Microsoft</h2>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;