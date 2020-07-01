import React from "react";
import Files from "./FileList";

import { useState, useEffect } from "react";

const FileButton = ({ fileCount, isExpanded, handleExpand }) => {

  return (
    <button
      onClick={handleExpand}
    >
      {isExpanded ? "click to collapse file view" :
        `${fileCount} files(click to show details)`}
    </button >
  );
}

export default FileButton;


