const cloudinary = require("cloudinary").v2;

const connectToCloudinary = () => {
  return cloudinary.config({
    cloud_name: "dw3rtflxw",
    api_key: "918483474269396",
    api_secret: "9xhc4ryB3b_mWWLiauqEzvdDn",
  });
};

module.exports = { connectToCloudinary };
