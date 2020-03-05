import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      profileImage:'',
      fullName:'',
      isLogout:false
    }

    this.onLogout = this.onLogout.bind(this);

  }

  componentWillMount(){
    let fbdata =JSON.parse(localStorage.getItem('fbData'));

    if( fbdata ){
      this.setState({profileImage:fbdata.picture,fullName:fbdata.name});
    }

  }

  onLogout(e){
    //Setear todas las variables de localstore
    localStorage.clear();
    this.setState({ isLogout:true });
  }
  
  render(){
    if(this.state.isLogout){
      return (<Redirect to="/" />);
    }
    return(
      <div>
          <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <div>
              <button className="btn btn-primary">
                <i className="fas fa-power-off" onClick={this.onLogout}></i>
              </button>
              <a className="float-rigth">
                {this.state.fullName}
              </a>
              <img className="rounded-circle" src={this.state.profileImage} width="50" height="50"/>
            </div>
          </nav>
      </div>
    );
  }
}

export default Home;
