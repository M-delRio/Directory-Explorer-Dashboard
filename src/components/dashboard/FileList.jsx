import React from "react";
import File from "./File";

const FileList = ({ files }) => {
  return (
    <table className="table table-hover">
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


