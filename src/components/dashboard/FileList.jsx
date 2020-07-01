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
    <table>
      <caption></caption>
      <tbody>
        <tr>
          <th>File Name</th>
          <th>File Size (bytes)</th>
          <th>Date Last Modified</th>
        </tr>

        {files.map((file, index) => (
          <File
            fileData={file}
            key={index}
          />
        ))
        }
      </tbody>
    </table>
  );
}

export default FileList;


