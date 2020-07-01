import React from "react";
import Files from "./FileList";

import { useState, useEffect } from "react";

const FileButton = ({ fileCount, handleExpand }) => {

  return (
    <button
      onClick={handleExpand}
    >
      {fileCount} files(click to expand)
    </button >
  );
}

export default FileButton;


