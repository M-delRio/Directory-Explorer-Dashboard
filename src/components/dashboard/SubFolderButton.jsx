import React from "react";

import { useState, useEffect } from "react";

const SubFolderButton = ({ handleExpand, subFolders, isExpanded }) => {
  let subFoldersLength;

  if (subFolders) {
    subFoldersLength = subFolders.length
  }
  return (
    <button
      className="expand-list-button"
      onClick={handleExpand}
    >
      {isExpanded ? "click to collapse subfolders view" :
        `${subFoldersLength} subfolders(click to show list expand`}
    </button >
  );
}

export default SubFolderButton;


