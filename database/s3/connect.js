const AWS = require('aws-sdk');
const config = require('./config.json');
const helpers = require('./utils/helpers.js')
const card_images = require('../mysql/utils/card_images.js');

AWS.config.loadFromPath(__dirname + '/config.json');
const S3 = new AWS.S3();

(async function() {

  const titles = [];
  const prices = [];

  await (async function () {
    try {
      let cardBucketData = await S3.listObjectsV2({
        Bucket: 'fjallraven-card-images'
      }).promise();

      let cachedFolders = await helpers.cacheFolderNames(cardBucketData.Contents);

      for (let folder in cachedFolders) {
        let folderData = await S3.listObjectsV2({
          Bucket: 'fjallraven-card-images',
          Prefix: cachedFolders[folder] + ''
        }).promise();

        let title = helpers.getProductTitle(folderData.Prefix);
        titles.push(title);
        let price = helpers.generateProductPrice();
        prices.push(price);
        let colors = helpers.generateProductColors();
        let urls = helpers.getImageUrls(folderData.Contents, 'card');

        let entry = {title, price, colors, urls};

        try {
          await card_images.insert(entry);
        } catch (error) {
          console.log('Error entering entries into MySQL datbase:', error);
        }
      }

    } catch (error) {
      console.log(error.stack);
    }
  })();

})();
