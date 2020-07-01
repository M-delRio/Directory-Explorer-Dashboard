import React from "react";
import FileButton from "./FileButton";
import FileList from "./FileList";
import SubFolderButton from "./SubFolderButton";
import SubFoldersList from "./SubFoldersList";
import { useState, useEffect } from "react";

// fileCount={folderData.fileCount}
// totalFileSize={folderData.totalFileSize}
// files={folderData.files}
// subFolders={folderData.subFolders}

const FolderDataContainer = ({ fileCount, totalFileSize, files, subFolders }) => {
  const [filesExpand, toggleFilesExpand] = useState(false);
  const [subFoldersExpand, toggleSubFoldersExpand] = useState(false);

  const handleFilesExpand = event => {
    toggleFilesExpand(!filesExpand);
  };

  const handleSubFoldersExpand = data => {
    toggleSubFoldersExpand(!subFoldersExpand);
  };

  return (
    <div>
      {fileCount !== undefined &&
        <>
          <section>
            <p>File Count: {fileCount}</p>
            <p>Total File Size: {totalFileSize}</p>
          </section>
          <FileButton
            fileCount={fileCount}
            files={files}
            handleExpand={handleFilesExpand}
          />
          {filesExpand &&
            <FileList
              files={files}
            />}
          <SubFolderButton
            handleExpand={handleSubFoldersExpand}
            subFolders={subFolders}
          />
          {subFoldersExpand &&
            <SubFoldersList
              subFolders={subFolders}
            />}
        </>
      }
    </ div>
  );
}

export default FolderDataContainer;


