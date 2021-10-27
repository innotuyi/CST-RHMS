import React from "react";
import ConferenceBased from "./components/ConferenceBased";

import { configure, shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;
const name = "Rwigamba";

beforeEach(() => {
  wrapper = shallow(<ConferenceBased />);
});

describe("Conference Based Tests", () => {

  it("matches Snapshot Collectly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

it("should have All Inputs", () => {
  expect(wrapper.find("#name")).toHaveLength(1);
  expect(wrapper.find("#theme")).toHaveLength(1);
  expect(wrapper.find("#organizer")).toHaveLength(1);
  expect(wrapper.find("#date")).toHaveLength(1);
  expect(wrapper.find("#place")).toHaveLength(1);
  expect(wrapper.find("#page")).toHaveLength(1);
  expect(wrapper.find("#isbn")).toHaveLength(1);
});

it("should have a Button  Component", () => {
  expect(wrapper.find("Button")).toHaveLength(1);
  expect(wrapper.find("Button").text()).toEqual("Create");
});

it("Should Conference Name correctly on Change", () => {
  wrapper.find("#name").simulate("change", {
    target: {
      value: name,
    },
  });
  expect(wrapper.find("#name").props().value).toEqual(name);
});

it("Should capture Conference Theme correctly on Change", () => {
  wrapper.find("#theme").simulate("change", {
    target: {
      value: name,
    },
  });
  expect(wrapper.find("#theme").props().value).toEqual(name);
});

it("Should capture Orgnizer's Name correctly on Change", () => {
  wrapper.find("#organizer").simulate("change", {
    target: {
      value: name,
    },
  });
  expect(wrapper.find("#organizer").props().value).toEqual(name);
});

it("Should capture Conference Location correctly on Change", () => {
  wrapper.find("#place").simulate("change", {
    target: {
      value: name,
    },
  });
  expect(wrapper.find("#place").props().value).toEqual(name);
});

it("Should capture Conference Date correctly on Change", () => {
  wrapper.find("#date").simulate("change", {
    target: {
      value: "2021-06-16",
    },
  });
  expect(wrapper.find("#date").props().value).toEqual("2021-06-16");
});

it("Should capture Chapter Pages correctly on Change", () => {
  wrapper.find("#page").simulate("change", {
    target: {
      value: "20",
    },
  });
  expect(wrapper.find("#page").props().value).toEqual("20");
});

it("Should capture ISBN correctly on Change", () => {
  wrapper.find("#isbn").simulate("change", {
    target: {
      value: "20",
    },
  });
  expect(wrapper.find("#isbn").props().value).toEqual("20");
});

});
