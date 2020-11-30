// Get videos
const getVideos = async (searchword) => {
  const axios = require("axios").default;

  const apiKey = "AIzaSyCkoudPxKxj2a9yQbrpuTC_jrHpiocbbS8";
  // const apiKey = "AIzaSyApqlDNbpnYtVlLekF4AnYwDQqP3LKDRes";
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  let apiRequestString = "";
  let result;

  if (searchword) {
    apiRequestString =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=" +
      searchword +
      "&key=" +
      apiKey;
  } else {
    apiRequestString =
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=" +
      apiKey;
  }

  await axios.get(apiRequestString, requestOptions).then(function (response) {
    // handle success
    result = response.data.items;
    // console.log("result", result);
    return result;
  });
  return result;
  // console.log(result);
};

module.exports = {
  getVideos,
};
