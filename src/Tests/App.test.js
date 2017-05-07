/* eslint-disable */
import React from 'react';
import { shallow, mount } from 'enzyme'
import ReactDOM from 'react-dom';
import App from '../Components/App';
import DistrictRepository from '../../src/Helpers/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';


describe('Application', () =>{
  const schoolsData = new DistrictRepository(kinderData)

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const wrapper = shallow(<App />)
    ReactDOM.render(<App />, div);
  });

  it('initial state starts with an empty states', () => {
    const wrapper = shallow(<App/>)
    const expectedState = {
      searched : '',
      selected : []
    };
    expect(wrapper.state()).toEqual(expectedState)
  });

  it('has a search component', () => {
    const wrapper = mount(<App/>)

    expect(wrapper.find('input').length).toBe(1)
  });

  it('by default, there should be 1 card grid on the screen', () => {
    const wrapper = mount(<App/>)

    expect(wrapper.find('.card-grid').length).toBe(1)
  });

  it('by default, there should be 1 card grid that has 181 cards on the screen', () => {
    const wrapper = mount(<App/>)

    expect(wrapper.find('.card-grid').length).toBe(1)
    expect(wrapper.find('.card').length).toBe(181)
  });

  it('has a user flow that starts with a search, and changes the state.', () => {
    const wrapper = mount(<App/>)
    const search = wrapper.find('input').first();
    const originalState = {
      searched : '',
      selected : []
    };

    const searchState = {
      searched : 'Colorado',
      selected : []
    };

    expect(wrapper.state()).toEqual(originalState)
    search.simulate('change', { target: { value: 'Colorado'}})
    wrapper.setState({searched : 'Colorado'})
    expect(wrapper.state()).toEqual(searchState)
  });

  it('after the search, there should be only 2 cards displayed.', () => {
    const wrapper = mount(<App/>)
    const search = wrapper.find('input').first();
    const originalState = {
      searched : '',
      selected : []
    };

    const searchState = {
      searched : 'Colorado',
      selected : []
    };

    expect(wrapper.state()).toEqual(originalState)
    search.simulate('change', { target: { value: 'Colorado'}})
    wrapper.setState({searched : 'Colorado'})
    expect(wrapper.state()).toEqual(searchState)

    expect(wrapper.find('.card').length).toBe(2)
  });

  it('the state should change when something is selected.', () => {
    const wrapper = mount(<App/>)
    const search = wrapper.find('input').first();
    const originalState = {
      searched : '',
      selected : []
    };

    const selectedState = {
      searched : '',
      selected : ['Colorado', 'ACADEMY 20']
    };

    expect(wrapper.state()).toEqual(originalState)
    const selectOne  = wrapper.find('.card').first()
    const selectTwo  = wrapper.find('.card').at(1)
    selectOne.simulate('click')
    selectTwo.simulate('click')
    expect(wrapper.state()).toEqual(selectedState)
  });

  it('the state should change when something is selected.', () => {
    const wrapper = mount(<App/>)
    const search = wrapper.find('input').first();
    const originalState = {
      searched : '',
      selected : []
    };

    const selectedState = {
      searched : 'Colorado',
      selected : ['Colorado', 'COLORADO SPRINGS 11']
    };

    expect(wrapper.state()).toEqual(originalState)
    search.simulate('change', { target: { value: 'Colorado'}})
    wrapper.setState({searched : 'Colorado'})
    
    const selectOne  = wrapper.find('.card').first()
    const selectTwo  = wrapper.find('.card').at(1)
    selectOne.simulate('click')
    selectTwo.simulate('click')
    expect(wrapper.state()).toEqual(selectedState)
  });
})
