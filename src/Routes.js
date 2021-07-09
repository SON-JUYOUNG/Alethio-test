import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/header';
import Service from './Pages/Service';
import Login from './Pages/Login';
import MyPage from './Pages/MyPage';
import Detail from './Pages/MyPage/Detail';
import SignUp from './Pages/SignUp';

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Service} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/mypage/order" component={MyPage} />
        <Route exact path="/mypage/order/:id" component={Detail} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default Routes;
