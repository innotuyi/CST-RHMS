import React from "react";
import Header from "./components/Header";

import { configure,shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
   wrapper = shallow(<Header />);
})

describe("Header Tests", () => {
  it("matches Snapshot Collectly", () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
