export const MARKED_HANDLER  = 'MARKED_HANDLER';
export const FILTER_MODEL    = 'FILTER_MODEL';
export const FILTER_PRICE    = 'FILTER_PRICE';
export const CHEKED_HANDLER  = 'CHEKED_HANDLER';

export const handleMarked = (carId) => {
  return {
    type: MARKED_HANDLER,
    payload: carId
  }
};

export const inputFilterModelHandler = (model) => {
  return {
    type: FILTER_MODEL,
    payload: {model}
  }
};

export const inputFilterPriceHandler = (price) => {
  return {
    type: FILTER_PRICE,
    payload: {price}
  }
};

export const filterChekedHandler = () => {
  return {
    type: CHEKED_HANDLER
  }
};