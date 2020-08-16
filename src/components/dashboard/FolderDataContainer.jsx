import React from "react";
import FileButton from "./FileButton";
import FileList from "./FileList";
import SubFolderButton from "./SubFolderButton";
import SubFoldersList from "./SubFoldersList";
import { useState } from "react";
import commaNumber from "comma-number";

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
    <>
      <hr></hr>
      <section className="folder_data">
        {fileCount !== undefined &&
          <>
            <h2>Results</h2>
            <section id="results-metadata-container">
              <p className="results-metadata">File Count: {fileCount}</p>
              <p className="results-metadata">Total File Size: {commaNumber(totalFileSize)} bytes</p>
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
      </ section>
    </>
  );
}

export default FolderDataContainer;


