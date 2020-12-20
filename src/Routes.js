import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Main from './Pages/Main/Main';
// import Cart from './Pages/Cart/Cart';
// import CheckOut from './Pages/CheckOut/CheckOut'
// import Login from './Pages/Login/Login';
// import SignUp from './Pages/SignUp/SignUp';
// import MyPage from './Pages/MyPage/MyPage';
// import ProductDetail from './Pages/ProductDetail/ProductDetail'
// import ProductList from './Pages/ProductList/ProductList'

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
{/*          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={CheckOut} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/mypage' component={MyPage} />
          <Route exact path='/productdetail' component={ProductDetail} />
    <Route exact path='/productlist' component={ProductList} />*/}
        </Switch>
      </Router>
    )
  }
}

export default Routes