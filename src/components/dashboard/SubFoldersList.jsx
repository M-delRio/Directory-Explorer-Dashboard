import React from "react";
import SubFolder from "./SubFolder";

const SubFoldersList = ({ subFolders }) => {
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
