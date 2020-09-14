import React from 'react';
import App from "./App";
import {Character} from "./Character";
import Adapter from 'enzyme-adapter-react-16'
import {configure, shallow} from "enzyme";


configure({
    adapter: new Adapter()
})

test('Should render 3 characters in light', () => {

    const wrapper = shallow(<App/>)
    expect(wrapper.find(Character)).toHaveLength(3)
})

test('Should render 2 characters in dark side', () => {

    const wrapper = shallow(<App side='dark'/>)
    expect(wrapper.find(Character)).toHaveLength(2)
})