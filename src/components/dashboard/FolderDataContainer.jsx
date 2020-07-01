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
  const [filesExpanded, toggleFilesExpand] = useState(false);
  const [subFoldersExpanded, toggleSubFoldersExpand] = useState(false);

  const handleFilesExpand = event => {
    toggleFilesExpand(!filesExpanded);
  };

  const handleSubFoldersExpand = data => {
    toggleSubFoldersExpand(!subFoldersExpanded);
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
            isExpanded={filesExpanded}
            handleExpand={handleFilesExpand}
          />
          {filesExpanded &&
            <FileList
              files={files}
            />}
          <SubFolderButton
            handleExpand={handleSubFoldersExpand}
            subFolders={subFolders}
            isExpanded={subFoldersExpanded}
          />
          {subFoldersExpanded &&
            <SubFoldersList
              subFolders={subFolders}
            />}
        </>
      }
    </ div>
  );
}

export default FolderDataContainer;


