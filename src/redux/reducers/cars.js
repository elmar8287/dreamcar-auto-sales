const cars = [
  {
    id: 1,
    img: "https://images.craigslist.org/01313_1iFHCh7cd4Yz_09p07r_600x450.jpg",
    model: "Mercedes",
    price: 666,
    year: 2010,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 10000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2014-mercedes-sprinter-diesel/7496303349.html"
  },
  { 
    id: 2,
    img: "https://images.craigslist.org/01313_1iFHCh7cd4Yz_09p07r.jpg",
    model: "Dodge",
    price: 999,
    year: 2020,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 9999,
    link: "#"
  },
  { 
    id: 3,
    img: "https://images.craigslist.org/01313_1iFHCh7cd4Yz_09p07r.jpg",
    model: "Dodge",
    price: 999,
    year: 2020,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 9999,
    link: "#"
  },
  { 
    id: 4,
    img: "https://images.craigslist.org/01313_1iFHCh7cd4Yz_09p07r.jpg",
    model: "Dodge",
    price: 999,
    year: 2020,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 9999,
    link: "#"
  },
  { 
    id: 5,
    img: "https://images.craigslist.org/01313_1iFHCh7cd4Yz_09p07r.jpg",
    model: "Dodge",
    price: 999,
    year: 2020,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 9999,
    link: "#"
  },
  { 
    id: 6,
    img: "https://images.craigslist.org/01313_1iFHCh7cd4Yz_09p07r.jpg",
    model: "Dodge",
    price: 999,
    year: 2020,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 9999,
    link: "#"
  },
  { 
    id: 7,
    img: "https://images.craigslist.org/01313_1iFHCh7cd4Yz_09p07r.jpg",
    model: "Dodge",
    price: 999,
    year: 2020,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 9999,
    link: "#"
  }
];

const carsList = (state=cars) => {
  return state.sort((a,b)=> b.id-a.id)
}

export default carsList;
