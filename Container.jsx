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
    },{
        namePro:"",
        price:88000.89,
       image: "https://image.made-in-china.com/2f0j00uZUaVCIEVcri/Wholesale-Clothing-Garment-Latest-Shirt-Designs-Mens-Dress-Shirts-for-Men-Fashion.jpg"
    },{
        namePro:"Givenchy",
        price:78900.89,
       image: "https://cdn.shopify.com/s/files/1/0249/7784/files/022824_RhoneModel_3053_850x1150_crop_center.jpg?v=1715022956"
    },{
        namePro:"Givenchy",
        price:88000.89,
       image: "https://www.snitch.co.in/cdn/shop/products/Lazar_Oct20029_1400x.jpg?v=1667280737"
    }
    
  ];

  let productWomen=[
   {
        namePro:"Givenchy",
        price:88000.89,
       image: "https://tse4.mm.bing.net/th/id/OIF.0s8e3RXL8UWffDDyuVXNYA?rs=1&pid=ImgDetMain&o=7&rm=3"
    },{
        namePro:"Givenchy",
        price:88000.89,
       image: "https://th.bing.com/th?id=OIF.roz7S%2fJnYMhFKmN2w9Csdg&rs=1&pid=ImgDetMain&o=7&rm=3"
    },{
        namePro:"Givenchy",
        price:88000.89,
       image: "https://tse4.mm.bing.net/th/id/OIP.M7gy70iStrqrl-EKBZQRqwHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3"
    },,{
        namePro:"Givenchy",
        price:88000.89,
       image: "https://tse4.mm.bing.net/th/id/OIP.1no5tISZMNHbOiqMrhPtDgHaJk?pid=ImgDet&w=207&h=267&c=7&dpr=1.1&o=7&rm=3"
    },{
        namePro:"Givenchy",
        price:88000.89,
       image: "https://tse3.mm.bing.net/th/id/OIP.K0cQJRI7JAUJcn5SfETbOgHaJ2?pid=ImgDet&w=207&h=274&c=7&dpr=1.1&o=7&rm=3"
    },{
        namePro:"Givenchy",
        price:88000.89,
       image: "https://tse2.mm.bing.net/th/id/OIP.yYTvp6a0szNU4jzpxvYaUgHaJ3?pid=ImgDet&w=207&h=274&c=7&dpr=1.1&o=7&rm=3"
    }
   ,{
        namePro:"Givenchy",
        price:88000.89,
       image: "https://tse4.mm.bing.net/th/id/OIP.v24W3XdWcHTbIGIkAO2_WQHaJQ?pid=ImgDet&w=207&h=258&c=7&dpr=1.1&o=7&rm=3"
    },{
        namePro:"Givenchy",
        price:88000.89,
       image: "https://tse3.mm.bing.net/th/id/OIP.EwyQU8rmsG7JkQeKUXUeUAHaJQ?pid=ImgDet&w=207&h=258&c=7&dpr=1.1&o=7&rm=3"
    }

  ];

  return (
    <div >
      <div className='w-full flex justify-center font-bold text-4xl mt-[30px] '>
        <h2 className=' text-shadow-cyan-950' > Man Style</h2>
      </div>
        <div className=' w-full h-auto flex justify-center'>
           <div className="container grid   md:grid-cols-4 gap-6 p-[20px] ">{Product.map((url,index)=>(

                 <div key={index} className='w-[300px] h-auto   relative shadow-2xl  bg-cover object-cover p-[15px] rounded-[10px]'>
                 <i class=" buyicon flex justify-center items-center rounded-[50%] fa-solid fa-face-grin-hearts  absolute top-[20px] right-[30px] p-[10px]  text-[25px]"></i>
                
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
        <div className="container-grile">
           <div className='w-full flex justify-center text-shadow-blue-800'><h2 className=' font-bold text-3xl mt-[20px] mb-[20px]'>Women Style </h2></div>
           <div className=' grid  md:grid-cols-4 gap-6' > {productWomen.map((url,index)=>(
                 

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
        <div className="payment flex justify-between p-[10px] mt-[70px] mb-[20px]">
           <div className="qr w-[150px] border-2 border-blue-500 rounded-[10px]">
            <h3 className=' text-center font-bold text-[20px] mb-[20px]'>SCANE ME</h3>
            <img className='mb-[10px]' src="https://th.bing.com/th/id/OIP.XddA3we5txwZAP4fAJtYRQHaHa?w=260&h=195&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3" alt="" />
           </div>
           <div className="loyality w-[140px]  border-2 border-blue-500 rounded-[10px]  pl-[10px] pr[10px]" >
               <h2 className=' text-center font-bold text-[20px]'>LOYALITY</h2>
              <div><i class="fa-solid fa-hand-holding-heart m-[5px]"></i>Honesty</div>
              <div><i class="fa-solid fa-handshake m-[5px]"></i>Quality</div>
              <div><i class="fa-solid fa-hands m-[5px]"></i>Efficiency</div>
           </div>
           <div className="followUs w-[200px]  text-center block justify-center  border-2 border-blue-500 rounded-[10px]">
            <h2 className=' text-center font-bold'>FOLLOW US </h2>
             <div><i class="fa-brands fa-facebook m-[5px]"></i>Facebook</div>
             <div><i class="fa-brands fa-square-instagram m-[5px]"></i>Instargram</div>
             <div><i class="fa-brands fa-tiktok m-[5px]"></i>Instargram</div>
             <div><i class="fa-brands fa-youtube m-[5px]"></i>Instargram</div>
           </div>
           <div className="service w-[230px] border-2  border-blue-600 rounded-[10px]">
            <h2 className=' text-center font-bold text-[20px]'>Costomer Service </h2>
            <div><i class="fa-solid fa-question m-[5px]"></i>Online Privercy Exchange </div>
            <div><i class="fa-solid fa-shield-halved m-[5px]"></i>Privercy</div>
            <div><i class="fa-solid fa-location-dot m-[5px]"></i>Find Store </div>

           </div>
           <div className="contactUs border-2 border-blue-600 rounded-[10px]">
            <h2 className=' font-bold text-[20px] text-center'>CONTACT US </h2>
            <div><i class="fa-solid fa-envelope m-[5px]"></i>phanithphal007@gmail.com</div>
            <div><i class="fa-solid fa-phone-volume m-[5px]"></i>+885 678 900</div>
            <div><i class="fa-brands fa-telegram m-[5px]"></i>@phanith009</div>
           </div>
           <div className="accep  border-2 border-blue-600 rounded-[10px] pl-[10px] pr-[10px]">
            <h2 className=' font-bold text-[20px] text-center'>We Accept</h2>
            <img className='w-[300px]' src="https://zandokh.com/image/catalog/logo/web-footer/We-accept-payment%E2%80%93for-web-footer-1.png" alt="" />
           </div>
        </div>
        <footer className=' w-full text-left h-[40px] bg-gray-200'>
          <h2  >@2024-2025 All ringt|| Owner by phanith</h2>

        </footer>
    </div>
  )
}

export default Container
