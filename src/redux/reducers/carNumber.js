const cars = ["mercedes", "ford"];

const carNumber = (state=cars.length, action) => {
  switch(action.type) {
    case "Count the cars number":
      return state=cars.length;
    default:
      return state;
  }
};

export default carNumber;