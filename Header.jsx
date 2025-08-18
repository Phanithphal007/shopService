import React, { useState, useEffect } from 'react';
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
    },4000); // 4000ms = 4s

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);


 
  return (
    <>
      <header className="w-full h-[80px] flex items-center fixed top-0 left-0 z-50 justify-between px-8 py-4 bg-white shadow">
        <div className="flex items-center gap-8">
          <img
            src="https://pedroshoes.com.kh/cdn/shop/files/PEDRO_Primary-Black-Logo_1_100x@2x.png?v=1619493127"
            alt=""
            className=" petro w-[90px]"
          />
          <ul className=" option font-bold">
            <li className='transition-transform hover:scale-110'>Home</li>
            <li  className='transition-transform hover:scale-110'>New</li>
            <li  className='transition-transform hover:scale-110'>Women</li>
            <li  className='transition-transform hover:scale-110'>Man</li>
            <li  className='transition-transform hover:scale-110'>Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border rounded px-2 py-1">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" className="outline-none" />
          </div>
          <i className="fa-regular fa-user text-xl transition-transform hover:scale-110"></i>
          <button className="bg-green-400 px-3 py-1 rounded transition-transform hover:scale-110 ">Login</button>
        </div>
      </header>

      <div className='w-full h-screen mt-[50px] flex justify-center'>
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
      </div>
      
    </>
  );
};

export default Header;
