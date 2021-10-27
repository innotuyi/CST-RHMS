import React from "react";
import Login from "./components/Login";

import { configure, shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Login />);
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("Login Tests", () => {

  it("matches Snapshot Collectly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("should have input for email and password", () => {
    expect(wrapper.find("#email")).toHaveLength(1);
    expect(wrapper.find("#password")).toHaveLength(1);
  });

  it("should have a btn component", () => {
    expect(wrapper.find("Button")).toHaveLength(1);

    expect(wrapper.find("Button").text()).toEqual("Login");
  });

  it("Should capture Email correctly onChange", () => {
    wrapper.find("#email").simulate("change", {
      target: {
        value: "admin@gmail.com",
      },
    });
    expect(wrapper.find("#email").props().value).toEqual("admin@gmail.com");
  });

  it("Should capture Password correctly onChange", () => {
    wrapper.find("#password").simulate("change", {
      target: {
        value: "12345",
      },
    });
    expect(wrapper.find("#password").props().value).toEqual("12345");
  });

  it("validates model on button click", () => {});
});
