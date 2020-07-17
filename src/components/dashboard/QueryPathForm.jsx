import React from "react";
import fetchFolderContent from "../../actions/index.js";
import { useState } from "react";

const QueryPathForm = ({ query, handleQuery, setQuery, handleContent }) => {

  let [errorMessage, setErrorMessage] = useState(undefined);

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const queryResponse = await fetchFolderContent(query);

      if (query === "") {
        setQuery("./");
      }

      handleContent(queryResponse);
      setErrorMessage(undefined);
    } catch (error) {
      let newErrorMessage;

      if (error.response) {
        // status code that falls out of the range of 2xx
        newErrorMessage = error.response.data.message;

      } else if (error.request) {
        // no response
        newErrorMessage = "the request was sent but a response was not received from the server";
      } else {
        // error setting up the request
        newErrorMessage = "unable to process your request at this time, try again later or contact Folder View is this error persists";
      }

      setErrorMessage(newErrorMessage);
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
            className="col-sm-3 control-label">Target Path:</label>
          <div className="col-sm-10">
            <input
              id="sourceFolderInput"
              className="form-control"
              placeholder="enter/source/folder"
              type="text"
              value={query}
              onChange={event => handleQuery(event)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-1">
            <button type="submit" className="new-path-button btn btn-primary">Find!</button>
          </div>
          {errorMessage &&
            <p className="error-message col-sm-6">{errorMessage} </p>}
        </div>
      </form >
    </div >
  );
}

export default QueryPathForm;