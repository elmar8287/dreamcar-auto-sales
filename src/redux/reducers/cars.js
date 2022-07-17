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
    img: "https://images.craigslist.org/01313_1iFHCh7cd4Yz_09p07r_1200x900.jpg",
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
  }
];

const carsList = (state=cars) => {
  return state.sort((a,b)=> b.id-a.id);
};

export default carsList;
