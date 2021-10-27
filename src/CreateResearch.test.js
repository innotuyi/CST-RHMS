import React from "react";
import CreateResearch from "./components/CreateResearch";

import { configure, shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = shallow(<CreateResearch />);
});

describe("Create Research Tests", () => {
  it("matches Snapshot Collectly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

   it("should have All Inputs", () => {
     expect(wrapper.find("#title")).toHaveLength(1);
     expect(wrapper.find("#startdate")).toHaveLength(1);
     expect(wrapper.find("#endingdate")).toHaveLength(1);
     expect(wrapper.find("#amount")).toHaveLength(1);
     expect(wrapper.find("#type")).toHaveLength(1);
   });

   it("should have a Button  Component", () => {
     expect(wrapper.find("Button")).toHaveLength(1);
     expect(wrapper.find("Button").text()).toEqual("Create Research");
   });

   it("Should capture Research Title correctly onChange", () => {
     wrapper.find("#title").simulate("change", {
       target: {
         value: "New Title",
       },
     });
     expect(wrapper.find("#title").props().value).toEqual("New Title");
   });

   it("Should capture Starting Date correctly onChange", () => {
     wrapper.find("#startdate").simulate("change", {
       target: {
         value: "2021-06-09",
       },
     });
     expect(wrapper.find("#startdate").props().value).toEqual("2021-06-09");
   });

   it("Should capture Ending Date correctly onChange", () => {
     wrapper.find("#endingdate").simulate("change", {
       target: {
         value: "2021-05-19",
       },
     });
     expect(wrapper.find("#endingdate").props().value).toEqual("2021-05-19");
   });
  
  it("Should capture Amount correctly onChange", () => {
    wrapper.find("#amount").simulate("change", {
      target: {
        value: "800",
      },
    });
    expect(wrapper.find("#amount").props().value).toEqual("800");
  });

  it("Should capture Research Type correctly onChange", () => {
    wrapper.find("#type").simulate("change", {
      target: {
        value: "Jounal Based Research",
      },
    });
    expect(wrapper.find("#type").props().value).toEqual("Jounal Based Research");
  });

});
