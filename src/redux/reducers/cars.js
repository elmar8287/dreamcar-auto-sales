const cars = [
  {
    id: 1,
    img: "https://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2022/04/0B4FC072-AA3C-4062-A8B5-B892CF4C24DE-scaled.jpeg",
    status: true,
    model: "Low miles pre-def sprinter",
    price: 79995,
    year: 2007,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 23000,
    link: "https://vanlifetrader.com/listing/new-professional-build-low-miles-pre-def-sprinter/"
  },
  { 
    id: 2,
    img: "#",
    status: true,
    model: "Renovated leisure vans Mercedes sprinter",
    price: 45000,
    year: 2007,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 144000,
    link: "https://vanlifetrader.com/listing/renovated-leisure-vans-mercedes-sprinter/"
  },
  { 
    id: 3,
    img: "#",
    status: true,
    model: "Winnebago view sprinter",
    price: 49995,
    year: 2008,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 109000,
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2008-winnebago-view-sprinter/7480695217.html"
  },
  { 
    id: 4,
    img: "https://images.craigslist.org/01313_1iFHCh7cd4Yz_09p07r.jpg",
    status: true,
    model: "Thor citation Mercedes",
    price: 89995,
    year: 2016,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 47000,
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2016-thor-citation-mercedes/7484841063.html"
  },
  { 
    id: 5,
    img: "#",
    status: true,
    model: "Mercedes Sprinter Four Winds Camper",
    price: 45000,
    year: 2008,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 112000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2008-mercedes-sprinter-four/7492862186.html"
  },
  { 
    id: 6,
    img: "",
    status: true,
    model: "Mercedes Sprinter Cargo VAN",
    price: 24995,
    year: 2014,
    condition: "Good",
    cylinders: 4,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 180000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2014-mercedes-sprinter-diesel/7496303349.html"
  },
  { 
    id: 7,
    img: "https://images.craigslist.org/00U0U_4vc4v0DiBx9z_0CI0t2_1200x900.jpg",
    status: true,
    model: "Thor Citation Mercedes Sprinter",
    price: 79995,
    year: 2016,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 47000,
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2016-thor-citation-mercedes/7498016513.html"
  },
  { 
    id: 8,
    img: "https://images.craigslist.org/00t0t_f7VsT6XMxhdz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter Conversion Camper RV 2015",
    price: 59995,
    year: 2015,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 78000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2015-mercedes-sprinter/7502514374.html"
  },
  { 
    id: 9,
    img: "https://images.craigslist.org/00e0e_8EzghievPYz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter diesel cargo van",
    price: 31995,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 114000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7506143812.html"
  },
  { 
    id: 10,
    img: "https://images.craigslist.org/00R0R_9VpO28dgWiGz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter Diesel Cargo Van",
    price: 45000,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 43000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-diesel/7508568822.html"
  },
  { 
    id: 11,
    img: "",
    status: true,
    model: "Mercedes Sprinter 2WD",
    price: 55000,
    year: 2015,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 78000,
    link: "https://vanlifetrader.com/listing/2015-mercedes-sprinter-2wd-2/"
  },
  { 
    id: 12,
    img: "https://images.craigslist.org/01414_5pZn12p9m0pz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Thor citation Mercedes sprinter diesel class C",
    price: 79995,
    year: 2016,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 59000,
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2016-thor-citation-mercedes/7510791953.html"
  },
  { 
    id: 13,
    img: "",
    status: true,
    model: "Winnebago view sprinter diesel class C RV",
    price: 42500,
    year: 2008,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 109000,
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2008-winnebago-view-sprinter/7512657951.html"
  },
    { 
    id: 14,
    img: "",
    status: true,
    model: "Mercedes Sprinter diesel box truck ",
    price: 25900,
    year: 2013,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 100000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2013-mercedes-sprinter-diesel/7520306680.html"
  },
    { 
    id: 15,
    img: "https://images.craigslist.org/00d0d_cev5XLdcW3lz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Winnebago View 23H sprinter class C RV",
    price: 49995,
    year: 2007,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 43000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2007-winnebago-view-23h/7520790405.html"
  },
      { 
    id: 16,
    img: "",
    status: true,
    model: "Mercedes Sprinter cargo van",
    price: 34500,
    year: 2019,
    condition: "Excellent",
    cylinders: 4,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 85000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-cargo/7522140260.html"
  },
  { 
    id: 17,
    img: "https://images.craigslist.org/00m0m_6vm1SO3n8FTz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Mercedes Spinter FR RV low miles",
    price: 24900,
    year: 2004,
    condition: "Good",
    cylinders: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 47000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2004-mercedes-spinter-fr-rv/7526435038.html"
  },
  { 
    id: 18,
    img: "https://images.craigslist.org/00000_fdfWichkehQz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van",
    price: 29995,
    year: 2018,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 83000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7532067904.html"
  },
  { 
    id: 19,
    img: "",
    status: true,
    model: "VW Winnebago rialta excellent condition",
    price: 29995 ,
    year: 2002,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 88000,
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2002-vw-winnebago-rialta/7527697795.html"
  },
  { 
    id: 20,
    img: "",
    status: true,
    model: "Mercedes Sprinter cargo van",
    price: 34500,
    year: 2019,
    condition: "Excellent",
    cylinders: 4,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 85000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-cargo/7522140260.html"
  },
  { 
    id: 21,
    img: "https://images.craigslist.org/00f0f_jYFYSnpU9T1z_0kE0fs_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter diesel box truck lift gate",
    price: 27995,
    year: 2015,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 144000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2015-mercedes-sprinter-diesel/7539622959.html"
  },
  { 
    id: 22,
    img: "https://images.craigslist.org/00z0z_jA9Yz8B3uC6z_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van low miles",
    price: 37800,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 44000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7540381426.html"
  },
  { 
    id: 23,
    img: "https://images.craigslist.org/00Q0Q_4UbbKIW48Icz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter diesel cargo van excellent",
    price: 34995,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 97000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-diesel/7540379858.html"
  },
  { 
    id: 24,
    img: "https://vanlifetrader.com/wp-content/uploads/2022/09/FB6EBADF-2C74-4FD2-9A62-19E2F3414AC7-scaled.jpeg",
    status: true,
    model: "Mercedes Sprinter professionally converted",
    price: 89995,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 34000,
    link: "https://vanlifetrader.com/listing/2018-mercedes-sprinter-professionally-converted/"
  },
  { 
    id: 25,
    img: "https://images.craigslist.org/00w0w_8TuCUU3OzGQz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van",
    price: 32000,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 85000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7542287453.html"
  },
  { 
    id: 26,
    img: "https://images.craigslist.org/00000_dTFJ2bTLqRYz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter camper van",
    price: 59995,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 8119,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-camper/7568746290.html"
  },
  { 
    id: 27,
    img: "https://vanlifetrader.com/wp-content/uploads/2022/09/AEE67941-5514-4627-AF0C-AAF3A9DC8B49.jpeg",
    status: true,
    model: "Mercedes Sprinter professionally converted",
    price: 79995,
    year: 2018,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 34000,
    link: "https://vanlifetrader.com/listing/2018-mercedes-sprinter-professionally-converted/"
  },
  { 
    id: 28,
    img: "https://images.craigslist.org/00M0M_clfoWSbZArkz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van",
    price: 31995,
    year: 2018,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 118000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7572451407.html"
  },
  { 
    id: 29,
    img: "https://images.craigslist.org/01414_iio0yOVvJUrz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van low miles",
    price: 47000,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 23000,
    link: "https://seattle.craigslist.org/est/ctd/d/kirkland-2019-mercedes-sprinter-diesel/7572453980.html"
  },
  { 
    id: 30,
    img: "https://images.craigslist.org/00Q0Q_9uWSfxZL8tQz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Airstream Westfalia Camper sprinter",
    price: 69995,
    year: 2005,
    condition: "Excellent",
    cylinders: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 82200,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2005-airstream-westfalia/7575447512.html"
  },
  { 
    id: 31,
    img: "https://images.craigslist.org/00m0m_bFSxogANTAWz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter low miles",
    price: 36995,
    year: 2018,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 54899,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-low/7575754629.html"
  },
  { 
    id: 32,
    img: "https://images.craigslist.org/00707_jv0KWviuCec_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van",
    price: 37996,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 83000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-diesel/7586815529.html"
  },
  { 
    id: 33,
    img: "https://images.craigslist.org/00505_bU567Ki6mrS_0CI0t2_1200x900.jpg",
    status: true,
    model: "Dodge/Mercedes sprinter passenger diesel van low miles",
    price: 25000,
    year: 2006,
    condition: "Like new",
    cylinders: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 71890,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2006-dodge-mercedes-sprinter/7586813760.html"
  }
];


const carsList = (state=cars) => {
  return state.sort((a,b)=> b.id-a.id);
};

export default carsList;
