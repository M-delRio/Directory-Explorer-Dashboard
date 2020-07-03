import React from "react";

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
      {isExpanded ? "click to collapse subfolder view" :
        `${subFoldersLength} subfolders(click to view list)`}
    </button >
  );
}

export default SubFolderButton;


