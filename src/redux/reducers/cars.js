const cars = [
  {
    id: 68,
    img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/366818842_10232286198922655_7151300853938293561_n.jpg?stp=dst-jpg_p720x720&_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=9fda53&_nc_ohc=wjpdtjSrwkEAX_PXpDZ&_nc_ht=scontent-dfw5-2.xx&oh=00_AfAsgcfcnL7f-8-AS0dZzdWXcL6xu1_6CqvyMcY5qLi1TA&oe=64DB57B0",
    status: true,
    model: "Mercedes-Benz westfalia sprinter",
    price: 63000,
    year: 2005,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 82000,
    link: "https://www.facebook.com/marketplace/item/983388589536790/?mibextid=6ojiHh",
  },
   {
    id: 67,
    img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/366958945_10232286753576521_5745724785865360634_n.jpg?stp=dst-jpg_p720x720&_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=a71bad&_nc_ohc=VQ4-EY2ZjggAX-sch08&_nc_ht=scontent-dfw5-2.xx&oh=00_AfDb_WAAmG-StM1tW1tGJF5PuYgSBnZGj43GUS33QtSVDw&oe=64DC3471",
    status: true,
    model: "Mercedes-Benz sprinter",
    price: 48000,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 98033,
    link: "https://www.facebook.com/marketplace/item/853288889802701/?mibextid=6ojiHh",
  },
  {
    id: 66,
    img: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/365186182_10232223726800891_7280415292771091138_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=3b2858&_nc_ohc=Uo-Eyl9jT4gAX_SLCki&_nc_ht=scontent-dfw5-1.xx&oh=00_AfDGeI_UB2dRCEEIfz6RTS_DpTYaCFVXF_sduXUQskKsXg&oe=64D7EBB8",
    status: true,
    model: "Ford transit cab & chassis 14.5 box truck",
    price: 29995,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 106000,
    link: "https://www.facebook.com/marketplace/item/311608667940170/?mibextid=6ojiHh",
  },
  {
    id: 65,
    img: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/362258432_10232223862364280_2219328125660571331_n.jpg?stp=dst-jpg_p720x720&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=3b2858&_nc_ohc=DqzTvnHMGPAAX9QEnti&_nc_ht=scontent-dfw5-1.xx&oh=00_AfAzDTw67STN30REYySyMlZnVKajTt51ijCjdipzImcCFA&oe=64D816E6",
    status: true,
    model: "Mercedes-Benz sprinter 2500 cargo 144wb high roof",
    price: 34300,
    year: 2019,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 91000,
    link: "https://www.facebook.com/marketplace/item/676009667778609/?mibextid=6ojiHh",
  },
  {
    id: 64,
    img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/359793168_10232098152981624_1038050103478549593_n.jpg?stp=dst-jpg_p720x720&_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=3b2858&_nc_ohc=e31TiVVTQf8AX_gTcc3&_nc_ht=scontent-dfw5-2.xx&oh=00_AfAs2cQwtHeGkJnH8bBOY_QxsX44ovMaxya2KxyQBekODA&oe=64D75504",
    status: true,
    model: "Coachmen prism sprinter",
    price: 64000,
    year: 2014,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 26000,
    link: "https://www.facebook.com/marketplace/item/311736571199307/?mibextid=6ojiHh",
  },
  {
    id: 63,
    img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/361409922_10232097917055726_7614280443154583695_n.jpg?stp=dst-jpg_p720x720&_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=3b2858&_nc_ohc=zfwUFehtPEIAX8thjMV&_nc_ht=scontent-dfw5-2.xx&oh=00_AfCoCFk7tWDVxLTzu13dSAgMVJC98UTalhNLyPtywqrswA&oe=64D76A5E",
    status: true,
    model: "Ford transit 350 hd van Extended Length High Roof w/Sliding Side Door w/9950-lb GVWR Van 3D",
    price: 24995,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 170000,
    link: "https://www.facebook.com/marketplace/item/933426434622408/?mibextid=6ojiHh",
  },
  {
    id: 62,
    img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/361612041_10232090513310637_8910095960916588730_n.jpg?stp=dst-jpg_p720x720&_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=843cd7&_nc_ohc=X_5l2P1pznsAX80rID3&_nc_ht=scontent-dfw5-2.xx&oh=00_AfCxWOLdMcKJtIV665jErYXtcR8hN918VoO4wRQOCl6GfQ&oe=64D80536",
    status: true,
    model: "Mercedes-Benz sprinter 2500 cargo",
    price: 37000,
    year: 2019,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 52000,
    link: "https://www.facebook.com/marketplace/item/2282033328665885/?mibextid=6ojiHh",
  },
  {
    id: 61,
    img: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/360153987_10232086290005057_6388972671907159504_n.jpg?stp=dst-jpg_p720x720&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=3b2858&_nc_ohc=h-ilSAF5cM4AX-2qZLb&_nc_ht=scontent-dfw5-1.xx&oh=00_AfCG1SMNvrsUvIZPpAfKmXpyKtkKFQTvE6XTqm5OixRk9Q&oe=64D816D1",
    status: true,
    model: "Mercedes-Benz sprinter 2500 cargo High Roof w/170'' WB Van 3D",
    price: 38000,
    year: 2021,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 86000,
    link: "https://www.facebook.com/marketplace/item/954955639117928/?mibextid=6ojiHh",
  },
  {
    id: 60,
    img: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/358416805_10232009462644421_5673522440351115889_n.jpg?stp=dst-jpg_p720x720&_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=3b2858&_nc_ohc=jD38A-4FvdUAX9POkXk&_nc_ht=scontent-dfw5-1.xx&oh=00_AfDIK1_sSQb3q6eOw2tDk2NXQJT6stN_bUEpYh_TuSUnTw&oe=64D888F0",
    status: true,
    model: "Mercedes-Benz sprinter 2500 cargo High Roof w/170'' WB Van 3D",
    price: 42000,
    year: 2019,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 47000,
    link: "https://www.facebook.com/marketplace/item/630989955433044/?mibextid=6ojiHh",
  },
  {
    id: 59,
    img: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/358542391_10232040431858632_1568911840769654340_n.jpg?stp=dst-jpg_p720x720&_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=3b2858&_nc_ohc=L8SDCy0QCb4AX-H7rdl&_nc_ht=scontent-dfw5-1.xx&oh=00_AfDfd9RhECjdZDOkKGhJLWRSUzzw1Np1xqMP2Jk_8-Te6g&oe=64D72D7C",
    status: true,
    model: "Mercedes-Benz sprinter 2500 cargo 144wb high roof",
    price: 34000,
    year: 2019,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 31000,
    link: "https://www.facebook.com/marketplace/item/1644723839342454/?mibextid=6ojiHh",
  },
  {
    id: 58,
    img: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/358466141_10232010359226835_7014129985818279252_n.jpg?stp=dst-jpg_p720x720&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=3b2858&_nc_ohc=2yYEU_0yBnAAX__Oix4&_nc_ht=scontent-dfw5-1.xx&oh=00_AfCFXEg5nDeGMcdepGFVw600pr8swtKUS6w6-fShe1JyNA&oe=64CDA8D3",
    status: true,
    model: "Mercedes-Benz sprinter 2500 cargo 144wb high roof",
    price: 42995,
    year: 2019,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 23000,
    link: "https://www.facebook.com/marketplace/item/951180329272342/?mibextid=6ojiHh",
  },
  {
    id: 57,
    img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/341242393_929508338174583_4910690979345131963_n.jpg?stp=dst-jpg_p720x720&_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=3b2858&_nc_ohc=i8QqNcHHb5sAX9vs4wh&_nc_ht=scontent-dfw5-2.xx&oh=00_AfDgBy32i1GZE-b9SNNB_aZ7ztYYGH9pZtJCzQWS_ux4xw&oe=64CCBCAB",
    status: true,
    model: "Mercedes-Benz sprinter 2500 cargo High roof 144wb",
    price: 37500,
    year: 2019,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 65000,
    link: "https://www.facebook.com/marketplace/item/1950783458601285/?mibextid=6ojiHh",
  },
  {
    id: 56,
    img: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/354252583_10231850024338563_132474045342865885_n.jpg?stp=dst-jpg_p720x720&_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=3b2858&_nc_ohc=0ivbq1HihMYAX-yxl_L&_nc_ht=scontent-dfw5-1.xx&oh=00_AfAWVC3c3NCL6v_vTlOs8SAOBJAqy3DuV2oZUkvlKntaEQ&oe=64CD9FC8",
    status: true,
    model: "Mercedes-Benz sprinter 2500 cargo High roof 144",
    price: 36995,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 31000,
    link: "https://www.facebook.com/marketplace/item/1057995051887754/?mibextid=6ojiHh",
  },
  {
    id: 55,
    img: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/352490442_753278789877796_7770034373791676840_n.jpg?stp=dst-jpg_p720x720&_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=843cd7&_nc_ohc=EFYSYv2fntoAX9WmBl5&_nc_ht=scontent-dfw5-1.xx&oh=00_AfDxdhJHMb1O4z5vnWcP4DoQs5h9ta9CNN1nLB0QACGCuQ&oe=64CCAD04",
    status: true,
    model: "Mercedes-Benz sprinter 2500 cargo",
    price: 35995,
    year: 2019,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 73709,
    link: "https://www.facebook.com/marketplace/item/1954363701593849/?mibextid=6ojiHh",
  },
  {
    id: 54,
    img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/352210735_1303737513893324_7479089483256645571_n.jpg?stp=dst-jpg_p720x720&_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=843cd7&_nc_ohc=D8Gp1EFutHAAX8dGqU5&_nc_ht=scontent-dfw5-2.xx&oh=00_AfAS_fqGFQ3JKTBPjIxj5UeLZoSyyJzYiBHRKXTnKgDVhw&oe=64CC1CD4",
    status: true,
    model: "Mercedes-Benz sprinter 2500 cargo 144wb high roof",
    price: 36000,
    year: 2019,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 77300,
    link: "https://www.facebook.com/marketplace/item/6522348764483131/?mibextid=6ojiHh",
  },
  {
    id: 53,
    img: "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/340596715_208105315279310_5135050634076700460_n.jpg?stp=dst-jpg_p720x720&_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=3b2858&_nc_ohc=Z0SmlEvxFagAX_UPLP7&_nc_ht=scontent-dfw5-1.xx&oh=00_AfBoDMBFCXcD2mxDzSpPZR5z2_5GbCKfthjmeoFEnQsCsw&oe=64CC962D",
    status: true,
    model: "Mercedes-Benz sprinter 2500 cargo 144wb high roof",
    price: 37500,
    year: 2019,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 55000,
    link: "https://www.facebook.com/marketplace/item/886221002468210/?mibextid=6ojiHh",
  },
  {
    id: 52,
    img: "shttps://images.craigslist.org/00H0H_nB8WNFikdk_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter diesel cargo van",
    price: 29995,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 79000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7632513404.html",
  },
  {
    id: 51,
    img: "shttps://images.craigslist.org/00R0R_kIfk96NVoqN_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter camper",
    price: 89995,
    year: 2021,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 10000,
    link: "https://seattle.craigslist.org/est/ctd/d/kirkland-2021-mercedes-sprinter-camper/7631561304.html",
  },
  {
    id: 50,
    img: "shttps://images.craigslist.org/00j0j_11joCJNPIlX_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter diesel cargo van with cooler box",
    price: 36000,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 77000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-diesel/7630021509.html",
  },
  {
    id: 49,
    img: "shttps://images.craigslist.org/00T0T_7X6WLzpSd1v_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes-Benz sprinter diesel cargo van",
    price: 35995,
    year: 2019,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 73500,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-benz-sprinter/7630051721.html",
  },
  {
    id: 48,
    img: "shttps://images.craigslist.org/01111_hRO6q6h6kFk_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes / Dodge Sprinter diesel cargo van",
    price: 11995,
    year: 2004,
    condition: "Excellent",
    cylinders: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 260000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2004-mercedes-dodge-sprinter/7631547247.html",
  },
  {
    id: 47,
    img: "shttps://images.craigslist.org/01414_bqARwY9pnYh_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel box truck",
    price: 24995,
    year: 2015,
    condition: "Excellent",
    cylinders: 4,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 16800,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2015-mercedes-sprinter-diesel/7617770590.html",
  },
  {
    id: 46,
    img: "shttps://images.craigslist.org/00v0v_7iuH47aJ14k_0CI0t2_1200x900.jpg",
    status: true,
    model: "2014 coachmen prism 24g Mercedes sprinter class c camper Rv",
    price: 73000,
    year: 2014,
    condition: "Excellent",
    cylinders: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 26000,
    link: "https://seattle.craigslist.org/est/rvd/d/kirkland-2014-coachmen-prism-24g/7614129296.html",
  },
  {
    id: 45,
    img: "shttps://images.craigslist.org/00303_2qpGusGJ188_0CI0t2_1200x900.jpg",
    status: true,
    model: "Dodge / Mercedes sprinter Reefer box truck",
    price: 19995,
    year: 2006,
    condition: "Excellent",
    cylinders: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 149000,
    link: "https://seattle.craigslist.org/est/ctd/d/kirkland-dodge-mercedes-sprinter-reefer/7614125201.html",
  },
  {
    id: 44,
    img: "shttps://images.craigslist.org/00Y0Y_7lor9e5HxCj_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel van / 2007 freightliner",
    price: 15500,
    year: 2007,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 265000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2007-freightliner-mercedes/7604485468.html",
  },
  {
    id: 43,
    img: "shttps://images.craigslist.org/00g0g_6e2AHEdirYJ_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter class C RV motor home thor",
    price: 45000,
    year: 2009,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 100000,
    link: "https://seattle.craigslist.org/est/rvd/d/kirkland-2009-mercedes-sprinter-class/7602285081.html",
  },
  {
    id: 42,
    img: "shttps://images.craigslist.org/00J0J_kk5NrSdcmol_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter 2500 170 WB long & tall diesel van",
    price: 44995,
    year: 2019,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 66000,
    link: "https://seattle.craigslist.org/est/ctd/d/kirkland-2019-mercedes-sprinter-wb-long/7602236084.html",
  },
  {
    id: 41,
    img: "shttps://images.craigslist.org/00O0O_fSnsXhNBWX2_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel van",
    price: 39900,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 55505,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-diesel/7597940816.html",
  },
  {
    id: 40,
    img: "shttps://images.craigslist.org/00w0w_4rg3930JyrS_0CI0t2_1200x900.jpg",
    status: true,
    model: "Jeep Cherokee trailhawk elite fully loaded",
    price: 23000,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Gas",
    odometer: 71880,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-jeep-cherokee-trailhawk/7596585297.html",
  },
  {
    id: 39,
    img: "shttps://images.craigslist.org/00s0s_2CzY1gw6vQl_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter 2500 diesel van",
    price: 29995,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 95000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-2500/7597924586.html",
  },
  {
    id: 1,
    img: "shttps://vanlifetrader.com/wp-content/uploads/listing-uploads/gallery/2022/04/0B4FC072-AA3C-4062-A8B5-B892CF4C24DE-scaled.jpeg",
    status: true,
    model: "Low miles pre-def sprinter",
    price: 79995,
    year: 2007,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 23000,
    link: "https://vanlifetrader.com/listing/new-professional-build-low-miles-pre-def-sprinter/",
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
    link: "https://vanlifetrader.com/listing/renovated-leisure-vans-mercedes-sprinter/",
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
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2008-winnebago-view-sprinter/7480695217.html",
  },
  {
    id: 4,
    img: "shttps://images.craigslist.org/01313_1iFHCh7cd4Yz_09p07r.jpg",
    status: true,
    model: "Thor citation Mercedes",
    price: 89995,
    year: 2016,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 47000,
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2016-thor-citation-mercedes/7484841063.html",
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
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2008-mercedes-sprinter-four/7492862186.html",
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
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2014-mercedes-sprinter-diesel/7496303349.html",
  },
  {
    id: 7,
    img: "shttps://images.craigslist.org/00U0U_4vc4v0DiBx9z_0CI0t2_1200x900.jpg",
    status: true,
    model: "Thor Citation Mercedes Sprinter",
    price: 79995,
    year: 2016,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 47000,
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2016-thor-citation-mercedes/7498016513.html",
  },
  {
    id: 8,
    img: "shttps://images.craigslist.org/00t0t_f7VsT6XMxhdz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter Conversion Camper RV 2015",
    price: 59995,
    year: 2015,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 78000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2015-mercedes-sprinter/7502514374.html",
  },
  {
    id: 9,
    img: "shttps://images.craigslist.org/00e0e_8EzghievPYz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter diesel cargo van",
    price: 31995,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 114000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7506143812.html",
  },
  {
    id: 10,
    img: "shttps://images.craigslist.org/00R0R_9VpO28dgWiGz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter Diesel Cargo Van",
    price: 45000,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 43000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-diesel/7508568822.html",
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
    link: "https://vanlifetrader.com/listing/2015-mercedes-sprinter-2wd-2/",
  },
  {
    id: 12,
    img: "shttps://images.craigslist.org/01414_5pZn12p9m0pz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Thor citation Mercedes sprinter diesel class C",
    price: 79995,
    year: 2016,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 59000,
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2016-thor-citation-mercedes/7510791953.html",
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
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2008-winnebago-view-sprinter/7512657951.html",
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
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2013-mercedes-sprinter-diesel/7520306680.html",
  },
  {
    id: 15,
    img: "shttps://images.craigslist.org/00d0d_cev5XLdcW3lz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Winnebago View 23H sprinter class C RV",
    price: 49995,
    year: 2007,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 43000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2007-winnebago-view-23h/7520790405.html",
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
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-cargo/7522140260.html",
  },
  {
    id: 17,
    img: "shttps://images.craigslist.org/00m0m_6vm1SO3n8FTz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Mercedes Spinter FR RV low miles",
    price: 24900,
    year: 2004,
    condition: "Good",
    cylinders: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 47000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2004-mercedes-spinter-fr-rv/7526435038.html",
  },
  {
    id: 18,
    img: "shttps://images.craigslist.org/00000_fdfWichkehQz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van",
    price: 29995,
    year: 2018,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 83000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7532067904.html",
  },
  {
    id: 19,
    img: "",
    status: true,
    model: "VW Winnebago rialta excellent condition",
    price: 29995,
    year: 2002,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 88000,
    link: "https://seattle.craigslist.org/see/rvd/d/kirkland-2002-vw-winnebago-rialta/7527697795.html",
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
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-cargo/7522140260.html",
  },
  {
    id: 21,
    img: "shttps://images.craigslist.org/00f0f_jYFYSnpU9T1z_0kE0fs_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter diesel box truck lift gate",
    price: 27995,
    year: 2015,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 144000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2015-mercedes-sprinter-diesel/7539622959.html",
  },
  {
    id: 22,
    img: "shttps://images.craigslist.org/00z0z_jA9Yz8B3uC6z_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van low miles",
    price: 37800,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 44000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7540381426.html",
  },
  {
    id: 23,
    img: "shttps://images.craigslist.org/00Q0Q_4UbbKIW48Icz_0kE0fs_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter diesel cargo van excellent",
    price: 34995,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 97000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-diesel/7540379858.html",
  },
  {
    id: 24,
    img: "shttps://vanlifetrader.com/wp-content/uploads/2022/09/FB6EBADF-2C74-4FD2-9A62-19E2F3414AC7-scaled.jpeg",
    status: true,
    model: "Mercedes Sprinter professionally converted",
    price: 89995,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 34000,
    link: "https://vanlifetrader.com/listing/2018-mercedes-sprinter-professionally-converted/",
  },
  {
    id: 25,
    img: "shttps://images.craigslist.org/00w0w_8TuCUU3OzGQz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van",
    price: 32000,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 85000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7542287453.html",
  },
  {
    id: 26,
    img: "shttps://images.craigslist.org/00000_dTFJ2bTLqRYz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter camper van",
    price: 59995,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 8119,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-camper/7568746290.html",
  },
  {
    id: 27,
    img: "shttps://vanlifetrader.com/wp-content/uploads/2022/09/AEE67941-5514-4627-AF0C-AAF3A9DC8B49.jpeg",
    status: true,
    model: "Mercedes Sprinter professionally converted",
    price: 79995,
    year: 2018,
    condition: "Good",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 34000,
    link: "https://vanlifetrader.com/listing/2018-mercedes-sprinter-professionally-converted/",
  },
  {
    id: 28,
    img: "shttps://images.craigslist.org/00M0M_clfoWSbZArkz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van",
    price: 31995,
    year: 2018,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 118000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7572451407.html",
  },
  {
    id: 29,
    img: "shttps://images.craigslist.org/01414_iio0yOVvJUrz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van low miles",
    price: 47000,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 23000,
    link: "https://seattle.craigslist.org/est/ctd/d/kirkland-2019-mercedes-sprinter-diesel/7572453980.html",
  },
  {
    id: 30,
    img: "shttps://images.craigslist.org/00Q0Q_9uWSfxZL8tQz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Airstream Westfalia Camper sprinter",
    price: 69995,
    year: 2005,
    condition: "Excellent",
    cylinders: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 82200,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2005-airstream-westfalia/7575447512.html",
  },
  {
    id: 31,
    img: "shttps://images.craigslist.org/00m0m_bFSxogANTAWz_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter low miles",
    price: 36995,
    year: 2018,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 54899,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-low/7575754629.html",
  },
  {
    id: 32,
    img: "shttps://images.craigslist.org/00707_jv0KWviuCec_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel cargo van",
    price: 37996,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 83000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-diesel/7586815529.html",
  },
  {
    id: 33,
    img: "shttps://images.craigslist.org/00505_bU567Ki6mrS_0CI0t2_1200x900.jpg",
    status: true,
    model: "Dodge/Mercedes sprinter passenger diesel van low miles",
    price: 25000,
    year: 2006,
    condition: "Like new",
    cylinders: 5,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 71890,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2006-dodge-mercedes-sprinter/7586813760.html",
  },
  {
    id: 34,
    img: "shttps://images.craigslist.org/00n0n_37DMNyUZxQX_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel box truck",
    price: 45000,
    year: 2019,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 12000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2019-mercedes-sprinter-diesel/7577962116.html",
  },
  {
    id: 35,
    img: "shttps://images.craigslist.org/00E0E_iXl8nBmb8JQ_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel van high roof",
    price: 34995,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 62000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-diesel/7581524650.html",
  },
  {
    id: 36,
    img: "shttps://images.craigslist.org/00d0d_kJ3biTDHBZF_0ff0bn_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter diesel box truck",
    price: 27995,
    year: 2012,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 92750,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2012-mercedes-sprinter-diesel/7592727880.html",
  },
  {
    id: 37,
    img: "shttps://images.craigslist.org/00q0q_5HE5GsLANeT_0CI0t2_1200x900.jpg",
    status: true,
    model: "Mercedes sprinter diesel box truck",
    price: 26995,
    year: 2015,
    condition: "Like new",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 148000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2015-mercedes-sprinter-diesel/7594852534.html",
  },
  {
    id: 38,
    img: "shttps://images.craigslist.org/00C0C_bQmHk4f6TQv_09E07d_1200x900.jpg",
    status: true,
    model: "Mercedes Sprinter cargo van",
    price: 33500,
    year: 2018,
    condition: "Excellent",
    cylinders: 6,
    transmission: "Automatic",
    fuel: "Diesel",
    odometer: 84000,
    link: "https://seattle.craigslist.org/see/ctd/d/kirkland-2018-mercedes-sprinter-cargo/7596208934.html",
  },
];

const carsList = (state = cars) => {
  return state.sort((a, b) => b.id - a.id);
};

export default carsList;
