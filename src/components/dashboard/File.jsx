import React from "react";
import commaNumber from "comma-number";

const File = ({ fileData }) => {

  return (
    <tr>
      <td>{fileData.name}</td>
      <td>{commaNumber(fileData.size)}</td>
      <td>{fileData.lastModifiedDate}</td>
    </tr>
  );
}

export default File;


