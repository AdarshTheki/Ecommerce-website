const addItem = [];

const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];
      break;

    case "DELITEM":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));
      break;

    default:
      return state;
      break;
  }
};

export default addItems;

// const cart = [];
// const handleCart = (state = cart, action) => {
//   const product = action.payload;

//   // If Check Product is Already exists
//   const exist = state.find((x) => x.id === product.id);

//   switch (action.type) {
//     case "ADDITEMS":
//       if (exist) {
//         // Increase the Quantity
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty + 1 } : x
//         );
//       } else {
//         const product = action.payload;
//         return [...state, { ...product, qty: 1 }];
//       }
//       break;

//     case "DELETEITEMS":
//       if (exist.qty === 1) {
//         return state.filter((x) => x.id !== exist.id);
//       } else {
//         return state.map((x) =>
//           x.id === product.id ? { ...x, qty: x.qty - 1 } : x
//         );
//       }
//       break;

//     default:
//       return state;
//       break;
//   }
// };

// export default handleCart;
