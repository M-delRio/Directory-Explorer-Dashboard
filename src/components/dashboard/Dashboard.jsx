import React from 'react';
import { useState, useEffect } from "react";
import QueryPathForm from "./QueryPathForm";
import FolderDataContainer from "./FolderDataContainer";


const Dashboard = () => {
  const [pathQuery, setQuery] = useState("");
  const [folderData, setContent] = useState({});

  const handleQuery = event => {
    setQuery(event.target.value);
  };

  const handleContent = data => {
    setContent(data);
  };

  return (
    <div>
      <QueryPathForm
        query={pathQuery}
        handleQuery={handleQuery}
        setQuery={setQuery}
        handleContent={handleContent}
      />
      <FolderDataContainer
        fileCount={folderData.fileCount}
        totalFileSize={folderData.totalFileSize}
        files={folderData.files}
        subFolders={folderData.subFolders}
      />

    </div>
  );

}

export default Dashboard;