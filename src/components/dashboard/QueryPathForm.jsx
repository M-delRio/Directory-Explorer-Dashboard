import React from "react";
import fetchFolderContent from "../../actions/index.js";
import { useState, useEffect } from "react";

const QueryPathForm = ({ query, handleQuery, setQuery, handleContent }) => {

  const [errorMessage, setErrorMessage] = useState(undefined);

  // useEffect(() => {
  //   setErrorMessage(undefined);
  // });

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const queryResponse = await fetchFolderContent(query);

      console.log(queryResponse);

      if (query === "") {
        setQuery("./");
      }

      handleContent(queryResponse);

      setErrorMessage(undefined);
    } catch (error) {
      let errorMessage;

      if (error.response) {
        // status code that falls out of the range of 2xx
        errorMessage = error.response.data.message;

      } else if (error.request) {
        // no response
        errorMessage = "the request was sent but a response was not received from the server";
      } else {
        // error setting up the request
        errorMessage = "unable to process your request at this time, try again later or contact Folder View is this error persists";
      }

      setErrorMessage(errorMessage);
      handleContent({});
    }

  };

  return (
    <div>
      <form
        className="form-horizontal"
        onSubmit={handleSubmit}>
        <div className="form-group">

          <label
            htmlFor="sourceFolderInput"
            className="col-sm-2 control-label">Target Path:</label>
          <div className="col-sm-10">
            <input
              id="sourceFolderInput"
              className="form-control"
              placeholder="enter/source/folder"
              type="text"
              // className="form-control"
              value={query}
              onChange={event => handleQuery(event)}
            />
          </div>
        </div>
        <div className="col-sm-offset-2 col-sm-10">
          <button type="submit" className="btn btn-primary">Find!</button>
        </div>
      </form >
      {errorMessage &&
        <p>{errorMessage} </p>}

    </div >
  );
}

export default QueryPathForm;