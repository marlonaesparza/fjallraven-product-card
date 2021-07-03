const config = require('../config.json');

// get folder name for each object in a S3 bucket
module.exports.getFolderName = (key) => {
  return key.split('/')[0];
};

// cache all folder names contained in a S3 bucket
module.exports.cacheFolderNames = (contents) => {
  let cache = {};

  for (let i = 0; i < contents.length; i++) {
    let key = contents[i].Key;
    let folder = module.exports.getFolderName(key);
    if (!cache[folder]) {
      cache[folder] = folder;
    }
  }

  return cache;
};

// get product title
module.exports.getProductTitle = (prefix) => {
  return prefix.split('_').join(' ');
};

// generate a random price for a product
module.exports.generateProductPrice = () => {
  const max = 370;
  const min = 70;
  return (Math.random() * (max - min+1)+min).toFixed(2);
};

// generate an array of random colors for a product
module.exports.generateProductColors = () => {
  const CSScolors = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"];

  const colors = [];

  const end = Math.floor(Math.random() * (15 - 0 + 1) + 0);
  for (let i = 0; i < end; i++) {
    let randomIndex = Math.floor(Math.random() * CSScolors.length);
    let randomColor = CSScolors[randomIndex];
    colors.push(randomColor);
  }

  return colors;
};

// store all image urls in an array
module.exports.getImageUrls = (contents, bucket) => {
  const imageUrls = [];

  for (let i = 0; i < contents.length; i++) {
    let imageUrl;

    if (bucket === 'card') {
      imageUrl = 'https://fjallraven-card-images.s3.us-west-2.amazonaws.com/' + contents[i].Key;
    };

    imageUrls.push(imageUrl);
  }
  return imageUrls;
};
