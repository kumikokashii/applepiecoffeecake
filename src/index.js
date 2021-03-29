import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import FillInTheBlank from './components/FillInTheBlank';
import PickOne from './components/PickOne';

ReactDOM.render((
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={FillInTheBlank} />
      <Route exact path="/nice" component={PickOne} />
      <Redirect to="/" />
    </Switch>
  </Router>),
  document.getElementById('root')
);