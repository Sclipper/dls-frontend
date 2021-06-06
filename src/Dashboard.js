import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Generate from 'pages/Generate'
import HandleClasses from 'pages/HandleClasses'
import Header from 'components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Info from './pages/Info'

import RootTheme from './RootTheme'

const Dashboard = () => {
  return (
    <RootTheme>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/generate">
            <Generate />
          </Route>
          <Route path="/handle-classes">
            <HandleClasses />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </RootTheme>
  )
}

export default Dashboard
