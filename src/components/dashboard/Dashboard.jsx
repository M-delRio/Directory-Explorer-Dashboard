import React from 'react';
import { useState, useEffect } from "react";
import QueryPathForm from "./QueryPathForm";

const Dashboard = () => {
  const [pathQuery, setQuery] = useState("");
  const [folderContent, setContent] = useState(undefined);

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
        handleContent={handleContent}
      />

    </div>
  );

}

export default Dashboard;