/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import ComparisonCard from '../Components/ComparisonCard';
import {shallow, mount} from 'enzyme'
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Comparison Card', () =>{
  const schoolsData = new DistrictRepository(kinderData)
  const selectedArray = ['ACADEMY 20', 'Colorado']

  it('renders without crashing', () => {
    var mockFn = jest.fn()
    let locationA = 'Colorado'
    let locationB = 'ACADEMY 20'
    let avgA = 0.53
    let avgB = 0.407
    let comparisonAverage = {'Colorado': 0.53, 'ACADEMY 20': 0.407, "compared": 1.302}

    const div = document.createElement('div');
    ReactDOM.render(<ComparisonCard locationA = {locationA}
                          locationB = {locationB}
                          avgA = {avgA}
                          avgB = {avgB}
                          comparisonAverage = {comparisonAverage}/>, div);
  });

  it('should render locations on a card', () =>{
    var mockFn = jest.fn()
    let locationA = 'Colorado'
    let locationB = 'ACADEMY 20'
    let avgA = 0.53
    let avgB = 0.407
    let comparisonAverage = {'Colorado': 0.53, 'ACADEMY 20': 0.407, "compared": 1.302}

    const wrapper = shallow(<ComparisonCard locationA = {locationA}
                          locationB = {locationB}
                          avgA = {avgA}
                          avgB = {avgB}
                          comparisonAverage = {comparisonAverage}/>);
    expect(wrapper.find("h3").length).toEqual(2);

  })

  it('should render an average on the card', () =>{
    var mockFn = jest.fn()
    let locationA = 'Colorado'
    let locationB = 'ACADEMY 20'
    let avgA = 0.53
    let avgB = 0.407
    let comparisonAverage = {'Colorado': 0.53, 'ACADEMY 20': 0.407, "compared": 1.302}

    const wrapper = shallow(<ComparisonCard locationA = {locationA}
                          locationB = {locationB}
                          avgA = {avgA}
                          avgB = {avgB}
                          comparisonAverage = {comparisonAverage}/>);
    expect(wrapper.find("h2").length).toEqual(1);
  })

  it('should find a specifc location and average', () =>{
    var mockFn = jest.fn()
    let locationA = 'Colorado'
    let locationB = 'ACADEMY 20'
    let avgA = 0.53
    let avgB = 0.407
    let comparisonAverage = {'Colorado': 0.53, 'ACADEMY 20': 0.407, "compared": 1.302}

    const wrapper = shallow(<ComparisonCard locationA = {locationA}
                          locationB = {locationB}
                          avgA = {avgA}
                          avgB = {avgB}
                          comparisonAverage = {comparisonAverage}/>);
    let found = wrapper.find("h3").first()

    expect(found.text()).toEqual("Colorado: 0.53")
  })

  it('should render the combined average', () =>{
    var mockFn = jest.fn()
    let locationA = 'Colorado'
    let locationB = 'ACADEMY 20'
    let avgA = 0.53
    let avgB = 0.407
    let comparisonAverage = {'Colorado': 0.53, 'ACADEMY 20': 0.407, "compared": 1.302}

    const wrapper = shallow(<ComparisonCard locationA = {locationA}
                          locationB = {locationB}
                          avgA = {avgA}
                          avgB = {avgB}
                          comparisonAverage = {comparisonAverage}/>);
    let found = wrapper.find("h2").first()

    expect(found.text()).toEqual("1.302")
  })
});
