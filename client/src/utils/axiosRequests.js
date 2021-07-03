import axios from 'axios';

export const getProduct = (id) => {
  const path = '/card/' + id;

  // you may choose to use this as a universal path instead
  // const path =  '/router';

  // you may use these in proxy
  // will guide your request
  const config = {
    params: {
      service: 'card',
      host: 'localhost',
      port: 8001,
      path: '/card/',
      productId: id
    }
  };

  return axios.get(path, config)
    .then((response) => {
      return response.data;
    });
};


export const getProductType = (id) => {
  const path = '/activity/' + id;

  // you may choose to use this as a universal path instead
  // const path =  '/router';

  // you may use these in proxy
  // will guide your request
  const config = {
    params: {
      service: 'details',
      host: 'localhost',
      port: 8002,
      path: '/',
      productId: id,
      indicator: 'activity'
    }
  };

  return axios.get(path, config)
    .then((response) => {
      return response.data;
    });
};


export const getProductReview = (id) => {
  const path =  '/reviews/' + id;

  // you may choose to use this as a universal path instead
  // const path =  '/router';

  // you may use these in proxy
  // will guide your request
  const config = {
    params: {
      service: 'reviews',
      host: 'localhost',
      port: 8004,
      path: '/',
      productId: id
    }
  };

  return axios.get(path, config)
    .then((response) => {
      return response.data;
    });
};