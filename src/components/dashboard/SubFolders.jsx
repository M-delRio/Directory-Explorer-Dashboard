import React from "react";
// import Subfolder from "./Subfolder";

import { useState, useEffect } from "react";

const SubFolders = ({ subFolders }) => {
  let subFoldersLength;

  if (subFolders) {
    subFoldersLength = subFolders.length
  }

  return (
    <p>
      {subFoldersLength} subfolders (click to expand)
    </ p>
  );
}

export default SubFolders;
