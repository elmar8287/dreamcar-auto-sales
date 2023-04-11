import { useSelector } from "react-redux";
import React, { useState } from "react";

export default () => {
    const carsList = useSelector((state)=>state);
    const [more, setMore] = useState(4);
    const showMore = (e) => {
    e.preventDefault();
    setMore(more+4);
  };
    
    return (
        <section className="mt-20 mx-auto px-4 max-w-screen-xl md:px-8" id="cars">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                Later updates
                </h1>
                <p className="mt-3 text-gray-500">
                    We keep the car list updated, so we are fresh!
                </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {
                    carsList.map(car => (
                        <article className="w-full mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={car.id}>
                            <a href={car.link}>
                                <img src={car.img} loading="lazy" alt={car.model}  className="w-full h-38 md:h-56 rounded-t-md" onError={(e)=>{e.target.onerror = null; e.target.src="https://img.freepik.com/free-vector/sold-out-price-tag-sign_123447-162.jpg"}} alt={car.model} />
                                
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-md text-gray-900">
                                        {car.model}
                                    </h3>
                                    <p className="text-lg text-indigo-900 font-bold">{car.price}$</p>
                                    <p className="text-gray-400 text-sm mt-1">Year: {car.year}</p>
                                    <p className="text-gray-400 text-sm mt-1">Condition: {car.condition}</p>
                                    <p className="text-gray-400 text-sm mt-1">Cylinders: {car.cylinders} cylinders</p>
                                    <p className="text-gray-400 text-sm mt-1">Transmission: {car.transmission}</p>
                                    <p className="text-gray-400 text-sm mt-1">Fuel: {car.fuel}</p>
                                    <p className="text-gray-400 text-sm mt-1">Odometer: {car.odometer}</p>
                                </div>
                            </a>
                        </article>
                    )).slice(0, more)
                }
                
            </div>
            <div className="text-center w-full">

                <button onClick={showMore}
                          className="px-5 py-3 m-4 text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700"
                      >
                          Show more cars
                      </button>
                </div>
        </section>
    )
}
