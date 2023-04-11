const Social = () => {
  return (
    <section className="cta-sec relative max-w-screen-xl mx-auto py-4 px-4 md:px-8">
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl text-gray-800 font-semibold md:text-4xl">
            Be informed about the last news{" "}
            <span className="text-indigo-600">Connect us</span>
          </h3>
          <p className="text-gray-500 leading-relaxed mt-3">
            Follow us in social networks - we try to keep you updated with the
            last news
          </p>
          <div className="flex">
            <a href="https://www.google.com/maps/place/DreamCar+Auto+Sales/@47.6802284,-122.1939093,16z/data=!3m1!5s0x549012ea5ebecb13:0xbf5eedb4bc22e48e!4m6!3m5!1s0x549013b8df4b3415:0x7a896d6d3e48721b!8m2!3d47.6809744!4d-122.1940535!16s%2Fg%2F11h8c9k616?hl=en">
              <img
                className="h-16 h-16 m-4"
                src="https://user-images.githubusercontent.com/49064106/231059215-cb417d6f-04ad-473b-a93a-10d1908cc3f8.png"
                alt="google-maps"
              />
            </a>
            <a href="https://www.facebook.com/sprinterspecialistseattle">
              <img
                className="h-16 h-16 m-4"
                src="https://user-images.githubusercontent.com/49064106/231058156-9b303601-bce4-4fc1-b64a-cf64aeaa3691.png"
                alt="facebook"
              />
            </a>
          </div>
        </div>
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
          <img
            src="https://user-images.githubusercontent.com/49064106/231057865-74023028-a910-42b6-af11-45ace6e0c157.jpeg"
            alt=""
            className="w-full rounded-lg"
          />
        </div>
      </div>

      <style jsx>{`
        .cta-sec {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>
    </section>
  );
};

export default Social;
