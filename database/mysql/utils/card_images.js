const db = require('../connect.js');

module.exports = {
  insert: (params) => {
    let query =  `
      INSERT INTO product_card (title, price, colors, urls)
      VALUES ('${params.title}', '${params.price}', '[${params.colors.map((color) => '"' + color + '"')}]', '[${params.urls.map((url) => '"' + url + '"')}]')
    `;

    return db.queryAsync(query)
      .then((results, fields) => {
        console.log('Success:', results);
        console.log('Success:', fields);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  },

  get: (params) => {
    let query = `
      SELECT * FROM product_card
      WHERE id=${params.id}
    `;

    return db.queryAsync(query);
  }
};
