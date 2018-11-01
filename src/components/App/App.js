import React, { Component } from 'react'
import './App.css'

import Header from '../Header/Header'
import Profile from '../Profile/Profile'
import Trends from '../Trends/Trends'
import NewCard from '../NewCard/NewCard'
import Card from '../Card/Card'
import Followers from '../Followers/Followers'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Profile />
        <Trends />
        <NewCard />
        <Card />
        <Card />
        <Followers />
      </div>
    )
  }
}

export default App
