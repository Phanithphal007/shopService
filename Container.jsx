import React from 'react'

const Container = () => {
  const container =document.querySelector('.container');
  let Product =[
    {
      namePro:"Louis Vuitton",
      price:89900.89,
       image: "https://i.ebayimg.com/images/g/~-IAAOSw5zVc82OC/s-l500.jpg"

    },
    {
         namePro:" Preston",
         price:78900.89,
         image: "https://tse3.mm.bing.net/th/id/OIP.f2WY2mtoM3e8g0yEFYqtbwHaIq?pid=ImgDet&w=207&h=241&c=7&dpr=1.1&o=7&rm=3",
    },
    { 
         namePro:"Abercrombie",
         price:89900.89,
         image:"https://tse2.mm.bing.net/th/id/OIP.MIDJPQoF8xKi4Xwy3vK_ewAAAA?pid=ImgDet&w=207&h=275&c=7&dpr=1.1&o=7&rm=3",
    },
    {
         namePro:"Topshop ",
         price:100900.89,
         image: "https://tse3.mm.bing.net/th/id/OIP.gV2y3iYMDPYwYseSsmNb0wHaJ4?pid=ImgDet&w=207&h=275&c=7&dpr=1.1&o=7&rm=3",
    },{
        namePro:"Givenchy",
        price:88000.89,
       image: "https://tse2.mm.bing.net/th/id/OIP.Ttvuw9cd1DOwWzp_CdJkEQHaHa?pid=ImgDet&w=207&h=207&c=7&dpr=1.1&o=7&rm=3"
    }
    
   
    
    
    
  ];

  return (
    <div >
      <div className='w-full flex justify-center font-bold text-4xl mt-[30px] '>
        <h2 >Clothes For Man Style</h2>
      </div>
        <div className=' w-full h-auto flex justify-center'>
           <div className="container grid grid-cols-1  md:grid-cols-4 gap-6 p-[20px] ">{Product.map((url,index)=>(
    
                 <div key={index} className='w-[300px] h-auto   relative shadow-2xl  bg-cover object-cover p-[15px] rounded-[10px]'>
                 <i class=" buyicon flex justify-center items-center rounded-[50%] fa-solid fa-heart  absolute top-[20px] right-[30px] p-[10px]  text-[25px]"></i>
                
                <img className=' w-[300px] h-[320px]  rounded-[7px]  z-10 transform transition-transform duration-500 hover:scale-90  '  src={url.image} alt={`Product ${index}`}/>
                   
                    <div className=' w-auto h-auto flex gap-5  justify-center  items-center'>
                      <span className=' sell font-bold bg-red-400 p-[5px] rounded-[4px]'><i class=" sky fa-solid fa-bolt"></i> Popular Now </span>
                      <div>
                        <span className=' Prname text-[20px] m-0'>{url.namePro}</span>
                        <h3 className=' text-[15px] -mt-[10px] text-gray-400'>New colection</h3>
                      </div>
                       
                    </div>
                    <div className=' font-bold m-[10px] -mt-[10px]'><span>KHR </span><span className='text-[25px]'>{url.price}</span></div>
                    <div className='flex m-[10px] -mt-[20px]'>
                        <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i></span>
                        <div className=' text-gray-400'><span>4.8</span><span>||100+ Sold</span></div>
                    </div>
                    <div className='w-[100%] flex gap-2'>
                      <button className='w-[50%] shadow-2xl bg-green-500 rounded-[4px] pt-[5px] pb-[5px] hover:bg-green-300' > <i class="fa-solid fa-cart-plus"></i>Add To Card</button>
                      <button className=' w-[50%] shadow-2xl bg-blue-500 rounded-[4px] hover:bg-blue-300'><i class="fa-solid fa-truck-fast"></i> Shiping </button>
                    </div>
                </div>

           ))}
               
           </div>
        </div>
    </div>
  )
}

export default Container
