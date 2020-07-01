import React from "react";

import { useState, useEffect } from "react";

const File = ({ fileData }) => {

  return (
    <p>
      {fileData.name}
      {fileData.size}
      {fileData.lastModifiedDate}
    </ p>
  );
}

export default File;


