import React from "react";
import SubFolder from "./SubFolder";

import { useState, useEffect } from "react";

const SubFoldersList = ({ subFolders }) => {
  console.log(subFolders);


  return (
    <div>
      {subFolders.map((name, index) => (
        <SubFolder
          name={name}
          key={index}
        />
      ))
      }
    </div>
  );
}

export default SubFoldersList;
