import React from "react";
import fetchFolderContent from "../../actions/index.js";

const QueryPathForm = ({ query, handleQuery, handleContent }) => {

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const queryResponse = await fetchFolderContent(query);

      //parse data received

      handleContent(queryResponse);
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

      // do something with error message
    }


  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Target Path:
        <input type="text"
          type="text"
          value={query}
          onChange={event => handleQuery(event)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default QueryPathForm;