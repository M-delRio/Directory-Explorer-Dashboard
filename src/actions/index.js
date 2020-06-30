// import axios from "axios";
const axios = require('axios').default;

// import FOLDERS_ROUTE from "../helpers/apiRoutes";

const baseURL = "http://localhost:3001/folders"

const fetchFolderContent = async (queryPath) => {
  // const headers = {
  //   "": ""
  // }

  const pathParam = {
    "path": queryPath,
  };

  const config = {
    "params": pathParam
    // headers: headers
  }

  try {
    const response = await axios.get(baseURL, config);

    console.log(response.data.data);
    //parse response
    return response;
  } catch (error) {
    throw error;
  }

};

export default fetchFolderContent;

// try {
//   // const response = await request.get();
//   const response = await axios.get(baseURL, config);

//   // console.log(response.data);
//   console.log(JSON.stringify(response.data, null, 4))

// } catch (error) {
//   console.log(JSON.stringify(response.data, null, 4))
// }