import React from 'react'
import ReactDOM from 'react-dom'
import Trends from './Trends'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Trends />, div)
  ReactDOM.unmountComponentAtNode(div)
})
