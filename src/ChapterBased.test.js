import React from "react";
import ChapterBased from "./components/ChapterBased";

import { configure, shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;
const name = "Rwigamba";

beforeEach(() => {
  wrapper = shallow(<ChapterBased />);
});

describe("Chapter Based Tests", () => {
  it("matches Snapshot Collectly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

   it("should have All Inputs", () => {
     expect(wrapper.find("#author")).toHaveLength(1);
     expect(wrapper.find("#title")).toHaveLength(1);
     expect(wrapper.find("#chapter")).toHaveLength(1);
     expect(wrapper.find("#pubdate")).toHaveLength(1);
     expect(wrapper.find("#pubplace")).toHaveLength(1);
     expect(wrapper.find("#pagnumber")).toHaveLength(1);
     expect(wrapper.find("#isbn")).toHaveLength(1);
   });

   it("should have a Button  Component", () => {
     expect(wrapper.find("Button")).toHaveLength(1);
     expect(wrapper.find("Button").text()).toEqual("Create");
   });

   it("Should capture Author's Name correctly on Change", () => {
     wrapper.find("#author").simulate("change", {
       target: {
         value: name,
       },
     });
     expect(wrapper.find("#author").props().value).toEqual(name);
   });

   it("Should capture Book Title correctly on Change", () => {
     wrapper.find("#title").simulate("change", {
       target: {
         value: name,
       },
     });
     expect(wrapper.find("#title").props().value).toEqual(name);
   });

   it("Should capture Publication Date correctly on Change", () => {
     wrapper.find("#pubdate").simulate("change", {
       target: {
         value: name,
       },
     });
     expect(wrapper.find("#pubdate").props().value).toEqual(name);
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
     wrapper.find("#pubdate").simulate("change", {
       target: {
         value: "2021-06-16",
       },
     });
     expect(wrapper.find("#pubdate").props().value).toEqual("2021-06-16");
   });

   it("Should capture Page Number correctly on Change", () => {
     wrapper.find("#pagnumber").simulate("change", {
       target: {
         value: "20",
       },
     });
     expect(wrapper.find("#pagnumber").props().value).toEqual("20");
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
