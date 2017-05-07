/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme'
import CardGrid from '../Components/CardGrid';
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Caaard Grid', () =>{
  const schoolsData = new DistrictRepository(kinderData)
  const selectedArray = ['ACADEMY 20, Colorado']

  it('renders without crashing', () => {
    let mockFn = jest.fn()
    const div = document.createElement('div');
    ReactDOM.render(<CardGrid schools = {schoolsData}
                              searched = {''}
                              cardClick = {mockFn}
                              selected = {selectedArray}/>, div);
  })

  it('should render 181 school districts', () => {
    let mockFn = jest.fn()
    const wrapper = shallow(<CardGrid schools = {schoolsData}
                              searched = {''}
                              cardClick = {mockFn}
                              selected = {selectedArray}/>)
    const found = wrapper.find("Card")

    expect(found.length).toEqual(181)
  })

  it('should render 2 school districts when searching colo', () => {
    let mockFn = jest.fn()
    const wrapper = mount(<CardGrid schools = {schoolsData}
                              searched = {'colo'}
                              cardClick = {mockFn}
                              selected = {selectedArray}/>)
    const found = wrapper.find("Card")

    expect(found.length).toEqual(2)
  })

})
