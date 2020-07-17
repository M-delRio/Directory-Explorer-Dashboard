import React from "react";

const FileButton = ({ fileCount, isExpanded, handleExpand }) => {

  return (
    <button
      className=""
      onClick={handleExpand}
    >
      {isExpanded ? "click to collapse file view" :
        `${fileCount} files(click to show details)`}
    </button >
  );
}

export default FileButton;


