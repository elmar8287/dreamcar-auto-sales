const Hiro = () => {  
  return (
      <header>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh"
          }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('https://images.drive.ru/i/0/5dde7d5aec05c40442000007.jpg')"
            }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-6xl">
                  Dreamcar  <span className="text-sky-500">Auto Sales</span>
                  </h1>
                  <p className="mt-4 text-[18px] text-gray-300">
                  Don’t Only Dream it, Just Drive It
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-40 bg-gray-100 -mt-24">
          <div className="container px-4">
            <div className="flex flex-wrap h-65 mb-8">
              <div className="w-full text-center">
                <div className="h-200 relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg">
                  <div className="grid md:grid-cols-2 px-4 py-5 flex-auto items-center">
                    <div>
                    <img src="https://img.sm360.ca/ir/w640h390c/images/newcar/ca/2022/mercedes-benz/sprinter-fourgon-2500-a-essence/base/commercial-vehicle/exteriorColors/2022_mercedes_sprinter_fourgon_2500_001_147.png" alt="sprinter" className="w-100"/>
                      </div>
                    <div id="about-us">
                    <h6 className="text-xl font-semibold">Who we are?</h6>
                    <p className="mt-2 mb-4 text-gray-600 text-md">
                    Here at Dreamcar, we specialized in diesel cargo vans.
                    We carefully select them for you! Every van goes through extensive
                    mechanical preparations and service at our partner <a href="https://www.google.com/maps/place/Sprinter+Specialist/@47.8277583,-122.1944767,9z/data=!4m6!3m5!1s0x54900f69509d0985:0x1c1692d52afa4704!8m2!3d47.7709948!4d-122.1483373!16s%2Fg%2F11h035l1q1" rel="noreferrer" target="_blank" className="font-bold text-indigo-600">Sprinter dedicated shop</a>. 
                    We also partner with <a href="https://ridgevans.com/" target="_blank" rel="noreferrer" className="font-bold text-indigo-600">RIDGEVANS</a> for quality custom camper builds.
                    So we may fulfill all your sprinter needs from purchase to service and camper build! Give us a call now!
                      </p>
                      <a href="#cars">
                      <button
                          className="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-full hover:bg-indigo-500 active:bg-indigo-700"
                      >
                          View the car list
                      </button>
                      </a>
                    </div>
                    
                  </div>
                </div>
              </div>
          
          
        </div>
        </div>
        </div>
      </header>
  );
};

export default Hiro;
