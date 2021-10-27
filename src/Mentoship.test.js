import React from "react";
import Mentoship from "./components/Mentoship";

import { configure, shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Mentoship />);
});

describe("Mentoship Tests", () => {
  it("matches Snapshot Collectly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

   it("should have All Inputs", () => {
     expect(wrapper.find("#name")).toHaveLength(1);
     expect(wrapper.find("#university")).toHaveLength(1);
     expect(wrapper.find("#date")).toHaveLength(1);
     expect(wrapper.find("#title")).toHaveLength(1);
   });
  
   it("should have a Button  Component", () => {
     expect(wrapper.find("Button")).toHaveLength(1);
     expect(wrapper.find("Button").text()).toEqual("Submit");
   });
  
  it("Should capture Name correctly onChange", () => {
    wrapper.find("#name").simulate("change", {
      target: {
        value: "Kwibuka",
      },
    });
    expect(wrapper.find("#name").props().value).toEqual("Kwibuka");
  });

   it("Should capture University correctly onChange", () => {
     wrapper.find("#university").simulate("change", {
       target: {
         value: "CST",
       },
     });
     expect(wrapper.find("#university").props().value).toEqual("CST");
   });
  
  it("Should capture Title correctly onChange", () => {
    wrapper.find("#title").simulate("change", {
      target: {
        value: "Research",
      },
    });
    expect(wrapper.find("#title").props().value).toEqual("Research");
  });

  it("Should capture Date correctly onChange", () => {
    wrapper.find("#date").simulate("change", {
      target: {
        value: "2021-05-19",
      },
    });
    expect(wrapper.find("#date").props().value).toEqual("2021-05-19");
  });
});
