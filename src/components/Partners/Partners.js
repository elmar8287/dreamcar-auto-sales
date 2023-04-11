/* eslint-disable */

import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../Inventory/Inventory.css";
const Partners = () => {

  const partners = [
    {
      img: "https://user-images.githubusercontent.com/49064106/231073241-c5455497-acf1-487d-9059-783c4211878e.png",
      title: "Ridgevans",
      link: "https://ridgevans.com",
      desc: "Ridgevans is a coalition of Sprinter vans enthusiasts, mechanics, dealers, cabinetry makers, RV specialists and engineers with over 15 years of experience with camper vans and RV’s."
    },
    {
      img: "https://user-images.githubusercontent.com/49064106/231074054-b370f2cd-8fe3-4a2e-8364-4bcc5ba0a0c8.png",
      title: "Sprinter Specialists",
      link: "https://www.google.com/maps/place/Sprinter+Specialist/@47.8277583,-122.1944767,9z/data=!4m6!3m5!1s0x54900f69509d0985:0x1c1692d52afa4704!8m2!3d47.7709948!4d-122.1483373!16s%2Fg%2F11h035l1q1",
      desc: "Serving Seatac Washington for over 10 years. Experienced and trustworthy sprinter repairs"
    }
  ]

  return (
    <div className="px-3 my-10 md:my-15" id="partners">
      <div className="max-w-xl sm:text-center md:mx-auto text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Review our partners
          </h3>
      </div>
      <div className="flex flex-col md:flex-row mt-4">
      {
        partners.map(car => (
            <article className="w-full mt-4 shadow-lg md:mx-7 border rounded-md duration-300 hover:shadow-sm" key={car.img}>
                <a href={car.link} target="_blank">
                    <img src={car.img} loading="lazy" alt={car.title}  className="w-full h-48 rounded-t-md" alt={car.title} />
                    
                    <div className="pt-3 ml-4 mr-2 mb-3">
                        <h3 className="text-lg text-gray-900 font-bold">
                            {car.title}
                        </h3>
                        <p className="text-sm text-indigo-900">{car.desc}$</p>
                    </div>
                </a>
            </article>
        ))
    }
    </div>
    </div>



//     <div className="main-block" id="partners">
//       <span className="cars-number">Our partners</span>
//       <div className="car-block">
//             <div className="card">
//             <img src={require('./ridgevans.png')} hight="100px" alt="ridgevans" />
//               <div className="car-container">
//                 <h4>Ridgevans</h4>
//                 <p>Ridgevans is a coalition of Sprinter vans enthusiasts, mechanics, dealers, cabinetry makers, RV specialists and engineers with over 15 years of experience with camper vans and RV’s.
// We offer full spectrum of services from finding a van to complete build to your taste, all kinds of mechanical repairs including engine and transmission rebuilds, RV repairs, modifications to existing builds and many more!!!</p>
//                 <button type='button' className="card-button"><a href="https://ridgevans.com/" target="_blank" rel="noreferrer">Read more</a></button>
//               </div>
//             </div>
//             <div className="card">
//             <img src={require('./sprinterspec.png')} alt="ridgevans" hight="100px"/>
//               <div className="car-container">
//                 <h4>Sprinter Specialists</h4>
//                 <p>We are the sprinter specialist</p>
//                 <button type='button' className="card-button"><a href="https://sprinterspecialists.com/" target="_blank" rel="noreferrer">Read more</a></button>
//               </div>
//             </div>
//       </div>
//     </div>
  );
};

export default Partners;
