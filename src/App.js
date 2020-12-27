import Login from './components/login/login';
import Maker from './components/maker/maker';
import styles from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = ({ authService }) => {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>
          <Route path="/maker">
            <Maker authService={authService} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
