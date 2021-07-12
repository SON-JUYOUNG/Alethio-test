import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Service from 'pages/Service';
import Login from 'pages/Login';
import MyPage from 'pages/MyPage';
import Detail from 'pages/MyPage/Detail';
import SignUp from 'pages/SignUp';

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
