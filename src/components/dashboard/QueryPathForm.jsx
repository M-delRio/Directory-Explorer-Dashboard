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
    <>
      <hr></ hr>
      <section className="path_selection">
        <h2>Path Selection</h2>
        <p>To view a source folder enter a path relative to the server's home folder below:</p>
        <form
          className=""
          onSubmit={handleSubmit}>
          <label
            htmlFor="sourceFolderInput"
            className="">Source Folder Path:</label>
          <input
            id="sourceFolderInput"
            className="form-control"
            placeholder="enter/source/folder"
            type="text"
            value={query}
            onChange={event => handleQuery(event)}
          />
          <div className="form-group">
            <div className="">
              <button type="submit" className="new-path-button btn btn-primary">Find!</button>
            </div>
            {errorMessage &&
              <p className="">{errorMessage} </p>}
          </div>
        </form >
      </section >
    </>
  );
}

export default QueryPathForm;