import React from "react";
import File from "./Files";

import { useState, useEffect } from "react";

{/* <Files
        fileCount={fileCount}
        files={files}
      /> */}

const Files = ({ fileCount, files }) => {

  return (
    <p>
      {fileCount} files (click to expand)
    </ p>
  );
}

export default Files;


