import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Default from './components/Default';
import Login from './components/Login';
import BackProduct from './components/BackProduct';
import DetailsAPI from './components/DetailsAPI';
import ModalAPI from './components/ModalAPI';
import Account from './components/Account';
import Cart from './components/Cart/Cart';
import Admin from './components/Admin/Admin';
import AdminModalProduct from './components/Admin/AdminModalProduct';
import AdminRoute from './components/AdminRoute';
import UserRoute from './components/UserRoute';




class App extends Component {

  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".body-cyrcle");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 5000));
  };


  render () {

    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    
    return (
      <React.Fragment>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={BackProduct} />
          <AdminRoute path='/admin' component={Admin} />
          <UserRoute path='/cart' component={Cart} />
          <Route path='/login' component={Login} />
          <Route path="/product/:_id" component={DetailsAPI}/>      
          <UserRoute path='/account/:userId' component={Account} />
          <Route  component={Default} />
        </Switch>
        <ModalAPI/>
        <AdminModalProduct/>
      </React.Fragment>
    );
  }
}

export default App;
