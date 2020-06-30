import React from "react";
import Files from "./Files";
import SubFolders from "./SubFolders";
import { useState, useEffect } from "react";

// fileCount={folderData.fileCount}
// totalFileSize={folderData.totalFileSize}
// files={folderData.files}
// subFolders={folderData.subFolders}

const FolderDataContainer = ({ fileCount, totalFileSize, files, subFolders }) => {

  return (
    <div>
      <section>
        <p>{fileCount}</p>
        <p>{totalFileSize}</p>
      </section>
      <Files
        fileCount={fileCount}
        files={files}
      />
      <SubFolders>
        subFolders={subFolders}
      </SubFolders>
    </ div>
  );
}

export default FolderDataContainer;


