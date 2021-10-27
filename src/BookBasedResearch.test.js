import React from "react";
import BookBasedResearch from "./components/BookBasedResearch";

import { configure, shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;
const name = "Rwigamba"

beforeEach(() => {
  wrapper = shallow(<BookBasedResearch />);
});

describe("Book Based Research Tests", () => {

  it("matches Snapshot Collectly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

   it("should have All Inputs", () => {
     expect(wrapper.find("#author")).toHaveLength(1);
     expect(wrapper.find("#editor")).toHaveLength(1);
     expect(wrapper.find("#publisher")).toHaveLength(1);
     expect(wrapper.find("#pubdate")).toHaveLength(1);
     expect(wrapper.find("#pubplace")).toHaveLength(1);
     expect(wrapper.find("#pugnumber")).toHaveLength(1);
     expect(wrapper.find("#isbn")).toHaveLength(1);
   });
  
  it("should have a Button  Component", () => {
    expect(wrapper.find("Button")).toHaveLength(1);
    expect(wrapper.find("Button").text()).toEqual("Proceed");
  });

  it("Should capture Author's Name correctly on Change", () => {
    wrapper.find("#author").simulate("change", {
      target: {
        value: name,
      },
    });
    expect(wrapper.find("#author").props().value).toEqual(name);
  });

   it("Should capture Editor's Name correctly on Change", () => {
     wrapper.find("#editor").simulate("change", {
       target: {
         value: name,
       },
     });
     expect(wrapper.find("#editor").props().value).toEqual(name);
   });
  
  it("Should capture Publisher's Name correctly on Change", () => {
    wrapper.find("#publisher").simulate("change", {
      target: {
        value: name,
      },
    });
    expect(wrapper.find("#publisher").props().value).toEqual(name);
  });

it("Should capture Publication Place correctly on Change", () => {
  wrapper.find("#pubplace").simulate("change", {
    target: {
      value: name,
    },
  });
  expect(wrapper.find("#pubplace").props().value).toEqual(name);
});
  
  it("Should capture Publication Date correctly on Change", () => {
    wrapper.find("#pubplace").simulate("change", {
      target: {
        value: "2021-06-16",
      },
    });
    expect(wrapper.find("#pubplace").props().value).toEqual("2021-06-16");
  });

  it("Should capture Page Number correctly on Change", () => {
    wrapper.find("#pugnumber").simulate("change", {
      target: {
        value: "20",
      },
    });
    expect(wrapper.find("#pugnumber").props().value).toEqual("20");
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
