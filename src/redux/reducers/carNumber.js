const cars = [1,2,3,4,5,6,7,8];

const carNumber = (state=cars.length, action) => {
  switch(action.type) {
    case "Count the cars number":
      return state=cars.length;
    default:
      return state;
  }
};

export default carNumber;
