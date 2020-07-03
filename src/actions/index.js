// import axios from "axios";
import FOLDERS_ROUTE from "../helpers/apiRoutes";
const axios = require('axios').default;

// const baseURL = "http://localhost:3001/folders"

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
    const response = await axios.get(FOLDERS_ROUTE, config);
    //parse response
    return response.data.data;
  } catch (error) {
    throw error;
  }

};

export default fetchFolderContent;
