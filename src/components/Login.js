import React from 'react';
import styled from 'styled-components';
import {ProductContext} from '../context';


export default class Login extends React.Component {

static contextType = ProductContext;

  constructor(props) {
    super(props);

    this.email = React.createRef();
    this.password = React.createRef();
    this.email2 = React.createRef();
    this.password2 = React.createRef();
    this.name = React.createRef();
    this.surname = React.createRef();
    this.adress = React.createRef();
    this.country = React.createRef();
    this.formRef = React.createRef();

    this.state = {
      modal: false,
      token: null,
      userId: null,
      cartAPI: [],
      messageEmail: '',
      messagePassword: '',
      mainMessage: '',
      messagePassword2: '',
      mainMessage2: ''
    }
  }

  openModal = (event) => {
    this.setState({modal: true})
  }

  closeModal = (event) => {
    this.resetForm();
    this.setState({modal: false})
  }

  checkEmail = (email) => {
    if(email.trim().length ===0 || !email.includes('@')){
      this.setState({messageEmail:'Email has wrong format!'})
      return false;
    }
    return true;
  }

  containsNumbers = (str) =>{
    return /\d/.test(str);
  }

  checkPassword = (password) => {
    if(password.trim().length ===0){
      this.setState({messagePassword:'Password has wrong format!'})
      return false;
    }
    if(!this.containsNumbers(password)){
      this.setState({messagePassword:'Password must contains a number!!'})
      return false;
    }
    return true;
  }

  resetForm = () => {
    this.formRef.current.reset();
    this.setState({messageEmail: '',messagePassword: ''})
  };

  onSubmitSignUp = (event) => {
    event.preventDefault();
    const email = this.email2.current.value;
    const password = this.password2.current.value;
    const name = this.name.current.value;
    const surname = this.surname.current.value;
    const adress = this.adress.current.value;
    const country = this.country.current.value;

    const emailTest = this.checkEmail(email);
    const passwordTest = this.checkPassword(password);

    if (!emailTest || !passwordTest) {
      return;
    }

    fetch('https://shop-mobile-backend.onrender.com/user/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        surname: surname,
        adress: adress,
        country: country
      }) 
    })
    .then(res => {  
      return res.json();
    })
    .then(resData => {
      this.resetForm();
      this.closeModal();
      this.setState({mainMessage: resData.message});
    })
    .catch(err => {
      console.log(err);
    });
  }

  onSubmitLogIn = (event) => {
    event.preventDefault();

    const email = this.email.current.value;
    const password = this.password.current.value;

    const emailTest = this.checkEmail(email);
    const passwordTest = this.checkPassword(password);

    if (!emailTest || !passwordTest) {
      return;
    }

    fetch('https://shop-mobile-backend.onrender.com/user/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: email,
        password: password
      }) 
    })
    .then(res => {
      return res.json();
    })
    .then(resData => {

      this.resetForm();

      if(resData.message){
        this.setState({mainMessage: resData.message})
      }
      if (resData.userId) {
        this.context.user(
          resData.userId
        );
      }
      if (resData.token) {
        this.context.login(
          resData.token
        );
        this.props.history.push('/')
      }
      if (resData.role) {
        this.context.setRole(
          resData.role
        );
        this.props.history.push('/')
      }
      if (resData.cart) {
        this.context.setCart(
          resData.cart
        );
      }
  // pouzivam static context type, ale musim vlozit celkovy context, nie consumer, ani provider, 
  //inak by som musela cez consumer odkazovat na prihlasenie      
      this.context.fetchProducts(); 
      this.context.showAdress();
    })
    .catch(err => {
      console.log(err);
    });
  } 

  componentDidUpdate() {
    if (this.state.mainMessage !== '') {
      this.timer = setTimeout(() => {
        this.setState({
          mainMessage: ''
        });
      }, 1000);
    }
  }

  componentWillUnmount(){
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="container login">
        <div className='col-8 mx-auto col-md-6 col-lg-4 pt-5'>
          <form ref={this.formRef}>
            <div className="form-group pt-5">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail" 
              aria-describedby="emailHelp" 
              placeholder="Enter email"
              ref={this.email}
              />
              <small id="email">{this.state.messageEmail}</small>
            </div>
            <div className="form-group pt-3">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword" 
              placeholder="Password"
              ref={this.password}
              />
              <small id="password">{this.state.messagePassword}</small>
            </div>
            <div className= 'text-center text-capitalize pt-3'>
              <button 
              type="submit" 
              className="btn btn-primary"
              onClick = {this.onSubmitLogIn}
              >Login
              </button>
            </div>
          </form>

          <div className= 'text-center text-capitalize pt-5'>
            <h4>don't have an account?</h4>    
          </div>
          <div className= 'text-center text-capitalize pt-3'>
             <button 
              type="submit" 
              className="btn btn-primary"
              onClick={() => 
              this.openModal()}
              >Signup
              </button>
          </div>

          {this.state.modal && (
            <ModalContainer>
              <div className='container' >
              <div className='row'>
              <div id='modal' className='signup col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>

              <form >
                <div className="form-group" >
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input 
                  type="email" 
                  className="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  placeholder="Enter email"
                  ref={this.email2}
                  />
                  <small>{this.state.messageEmail2}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input 
                  type="password" 
                  className="form-control" 
                  id="exampleInputPassword1" 
                  placeholder="Password"
                  ref={this.password2}
                  />
                  <small>{this.state.messagePassword2}</small>
                </div>
                <div className="form-group">
                  <label htmlFor="fname">name</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  placeholder="Enter your name"
                  ref={this.name}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lname">surname</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="surname" 
                  placeholder="Enter your surname"
                  ref={this.surname}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">address</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="address" 
                  placeholder="Enter your address"
                  ref={this.adress}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">country</label>
                  <input 
                  type="text" 
                  className="form-control" 
                  id="country" 
                  placeholder="Enter your country"
                  ref={this.country}
                  />
                </div>
                <div className="buttons">
                  <button 
                  type="button" 
                  className="btn btn-primary m-4"
                  onClick={() => 
                  this.closeModal()}
                  >Close
                  </button>
                  <button 
                  type="submit" 
                  className="btn btn-primary m-4"
                  onClick = {this.onSubmitSignUp}
                  >Signup
                  </button>
                </div>
              </form>

          </div>
            </div>
          </div>
          </ModalContainer>
          )}

          {this.state.mainMessage !== '' && (
            <ModalContainer>
              <div id='modal' className='signup col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4'>
              <h5>{this.state.mainMessage}</h5>
              </div>
            </ModalContainer>
          )}
        </div>
      </div>
    )
  }
}



const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
    #modal{
      margin-top: 3rem;
      background: var(--mainWhite);
    }
  @media (max-width: 500px){
    #modal{
      margin-top: 1rem;
    }
    .p-5{
     padding: 0.7rem 2rem 0rem 2rem !important;
    }
    .buttons{
      display: flex;
      align-items: left;
      justify-content: center;
    }
}
`;