/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import Search from '../Components/Search'
import {shallow, mount} from 'enzyme'
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js'

describe('Search component functionality', () =>{
  const schoolsData = new DistrictRepository(kinderData)

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Search />, div)
  })

  it('should render an input field', () =>{
    const mockFn = jest.fn()
    const wrapper  = mount(<Search handleSearch = {mockFn} />)

    expect(wrapper.find('input').length).toBe(1)
  })

  it('expects search state to be empty', () => {
    const mockFn = jest.fn()

    const wrapper  = mount(<Search handleSearch = {mockFn} />)
    const input = wrapper.find('input')
    const expectedState = {
      search: '',
    }

    expect(wrapper.state()).toEqual(expectedState)

  })

  it('changes the value of the input', () => {
    const mockFn = jest.fn()
    const wrapper  = mount(<Search handleSearch = {mockFn} />)
    const input = wrapper.find('input')

    input.simulate('change', { target: { value: 'Colorado'}})
    expect(input.node.value).toEqual('Colorado')

  })

  it('changes the value of the input, and thus changes the state', () => {
    const mockFn = jest.fn()

    const wrapper  = mount(<Search handleSearch = {mockFn} />)
    const input = wrapper.find('input')
    const expectedStateBefore = {
      search: '',
    }
    const expectedStateAfter = {
      search: 'Colorado',
    }
    expect(wrapper.state()).toEqual(expectedStateBefore)
    input.simulate('change', { target: { value: 'Colorado'}})
    expect(mockFn).toBeCalledWith('Colorado')
    expect(input.node.value).toEqual('Colorado')
    expect(wrapper.state()).toEqual(expectedStateAfter)
  })

})
