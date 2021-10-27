
import React from "react";
import Enzyme,{shallow, mount} from 'enzyme';
import App from './App'
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

import Footer from './components/Footer'
import Menu from './components/Menu'
import Sidebar from './components/Sidebar'
import HeaderDashborad from './components/HeaderDashborad'


describe("Testing all components", () => {

 test('testing Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('p').text()).toBe('LOrem lorem lorem lorem')

 })

 test('testing sidebar', () => {
   const wrapper = shallow(<Sidebar />);
   expect(wrapper.find('ul').children().length).toBe(3)
})

test('testing Menu', () => {
   const wrapper = shallow(<Menu />);
   
   expect(wrapper.find('Image').prop("src")).toEqual("Capture.PNG")
  
})


test('testing HeaderSection', () => {
   const wrapper = shallow(<HeaderDashborad />);   
   
   expect(wrapper.find('Image').prop("src")).toEqual("Capture.PNG")
  
})




})