import React from "react";
import SubFolder from "./SubFolder";

import { useState, useEffect } from "react";

const SubFolderButton = ({ handleExpand, subFolders }) => {
  let subFoldersLength;

  if (subFolders) {
    subFoldersLength = subFolders.length
  }
  return (
    <button
      onClick={handleExpand}
    >
      {subFoldersLength} subfolders(click to expand)
    </button >
  );
}

export default SubFolderButton;


