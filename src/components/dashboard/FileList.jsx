import React from "react";
import File from "./File";

import { useState, useEffect } from "react";

{/* <Files
        fileCount={fileCount}
        files={files}
      /> */}

const FileList = ({ files }) => {
  // console.log(files);

  return (
    <div>
      {files.map((file, index) => (
        <File
          fileData={file}
          key={index}
        />
      ))
      }
    </div>
  );
}

export default FileList;


