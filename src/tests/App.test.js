import React from "react";
import axios from 'axios';
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import App from "../components/App";
import QueryPathForm from "../components/dashboard/QueryPathForm";
import FileButton from "../components/dashboard/FileButton";
import { act } from "react-dom/test-utils";

jest.mock('axios');


describe("App", () => {
  test("renders App component", () => {
    render(<App />);

    expect(screen.getByText("Folder View")).toBeInTheDocument();
    expect(screen.getByText("Find!")).toBeInTheDocument();
    expect(screen.getByText("Target Path:")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("enter/source/folder")).toBeInTheDocument();
  });

  test("renders App component with query path value", () => {
    render(<App />);

    expect(screen.queryByText("my_path")).toBeNull();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "my_path" },
    });

    expect(screen.getByDisplayValue("my_path")).toBeInTheDocument();

  });
});

describe("QueryPath", () => {
  test("renders QueryPathForm component", () => {
    render(<QueryPathForm />);
  });

  test("renders App component with query path input value", () => {
    render(<App />);

    expect(screen.queryByText("my_path")).toBeNull();

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "my_path" },
    });

    expect(screen.getByDisplayValue("my_path")).toBeInTheDocument();

  });

  test("onChange callback handler is called with appropriate event", () => {
    const onChange = jest.fn();

    render(
      <QueryPathForm query="" handleQuery={onChange} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "some/new/path" },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

describe("FileButton", () => {
  test("renders FileButton component", () => {
    render(<FileButton
      fileCount="10"
      isExpanded="false"
      handleExpand={jest.fn()} />)
  });

  test("onClick callback handler is called with appropriate event", () => {
    const onClick = jest.fn();

    render(<FileButton
      fileCount="10"
      isExpanded="false"
      handleExpand={onClick} />)

    fireEvent.click(screen.getByRole("button"));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});


