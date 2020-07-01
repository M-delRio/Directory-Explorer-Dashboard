import React from "react";
import SubFolder from "./SubFolder";

import { useState, useEffect } from "react";

const SubFoldersList = ({ subFolders }) => {
  console.log(subFolders);


  return (
    <ul class="list-group">
      {subFolders.map((name, index) => (
        <SubFolder
          name={name}
          key={index}
        />
      ))
      }
    </ul>
  );
}

export default SubFoldersList;
