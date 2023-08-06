export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const minusItem = (product) => {
  return {
    type: "MINUSITEM",
    payload: product,
  };
};

export const plusItem = (product) => {
  return {
    type: "PLUSITEM",
    payload: product,
  };
};
