import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from '../screens/Landing'
import TeacherList from '../screens/TeacherList'
import TeacherForm from '../screens/TeacherForm'

const Routes = () => {
  React.useEffect(() => {
    console.log('version:', process.env.REACT_APP_VERSION)
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
