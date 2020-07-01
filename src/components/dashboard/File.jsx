import React from "react";

import { useState, useEffect } from "react";

const File = ({ fileData }) => {

  return (
    <tr>
      <td>{fileData.name}</td>
      <td>{fileData.size}</td>
      <td>{fileData.lastModifiedDate}</td>
    </tr>
  );
}

export default File;


