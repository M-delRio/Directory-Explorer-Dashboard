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
        class="form-horizontal"
        onSubmit={handleSubmit}>
        <div class="form-group">

          <label
            for="sourceFolderInput"
            class="col-sm-2 control-label">Target Path:</label>
          <div class="col-sm-10">
            <input
              id="sourceFolderInput"
              class="form-control"
              placeholder="enter/source/folder"
              type="text"
              // class="form-control"
              value={query}
              onChange={event => handleQuery(event)}
            />
          </div>
        </div>
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-primary">Find!</button>
        </div>
      </form >
      {errorMessage &&
        <p>{errorMessage} </p>}

    </div >
  );
}

export default QueryPathForm;