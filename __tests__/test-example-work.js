import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, {ExampleWorkBubble } from '../js/example-work';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const myWork = [
  {
  'title': "Ecommerce Website",
  'image':{
  'desc':"example screenshot of a project involving code",
  'src':"images/example1.png",
  'comment':""
  }
},
{
'title': "Portfolio with ReactJS using Lambda",
'image':{
'desc':"Serverless Portfolio",
'src':"images/example2.png",
'comment':""
    }
  }
];
describe("ExampleWork Component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("Shoulde be a 'section' element", () => {
    expect(component.type()).toEqual('section');
  });

  it("Should contan as many childrens as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);

  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

it("Should have the image src set correctly", () => {
  expect(images.prop('src')).toEqual(myWork[1].image.src);
});
});
