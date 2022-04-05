import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import axios from 'axios'

import Home from './Home'
import Dashboard from './Dashboard'

export default class Isconnected extends Component {
  constructor() {
    super()

    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  checkLoginStatus() {
    axios
      .get('http://localhost:3000/connexion', { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === 'NOT_LOGGED_IN'
        ) {
          this.setState({
            loggedInStatus: 'LOGGED_IN',
            user: response.data.user,
          })
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === 'LOGGED_IN')
        ) {
          this.setState({
            loggedInStatus: 'NOT_LOGGED_IN',
            user: {},
          })
        }
      })
      .catch((error) => {
        console.log('check login error', error)
      })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  handleLogout() {
    this.setState({
      loggedInStatus: 'NOT_LOGGED_IN',
      user: {},
    })
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: 'LOGGED_IN',
      user: data.user,
    })
  }

  render() 
}
