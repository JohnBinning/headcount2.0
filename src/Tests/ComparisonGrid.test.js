/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, mount} from 'enzyme'
import ComparisonGrid from '../Components/ComparisonGrid';
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Comparison Grid', () =>{
  const schoolsData = new DistrictRepository(kinderData)


  it('renders without crashing', () => {
    const selectedArray = ['ACADEMY 20', 'Colorado']
    let mockFn = jest.fn()
    const div = document.createElement('div');
    ReactDOM.render(<ComparisonGrid schools = {schoolsData}
                              cardClick = {mockFn}
                              selected = {selectedArray}/>, div);
  })

  it('should render 2 cards', () => {
    const selectedArray = ['ACADEMY 20', 'Colorado']
    let mockFn = jest.fn()
    const wrapper = mount(<ComparisonGrid schools = {schoolsData}
                              cardClick = {mockFn}
                              selected = {selectedArray}/>)

    expect(wrapper.find('Card').length).toEqual(2);
  })

  it('should render 2 cards and one comparison-card', () => {
    const selectedArray = ['ACADEMY 20', 'Colorado']
    let mockFn = jest.fn()
    const wrapper = shallow(<ComparisonGrid schools = {schoolsData}
                              cardClick = {mockFn}
                              selected = {selectedArray}/>)

    expect(wrapper.find('Card').length).toEqual(2);
    expect(wrapper.find('ComparisonCard').length).toEqual(1);
  })

})
