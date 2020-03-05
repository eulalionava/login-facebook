import React,{ Component } from 'react';
import '../views/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';

class Login extends Component{
    constructor(){
        super();

        this.state = {
            isLogged:false
        }

        this.responseFacebook = this.responseFacebook.bind(this);
        // this.responseGoogle = this.responseGoogle.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    // responseGoogle=(response)=>{
    //     console.log(response);
    // }

    responseFacebook(response){
        //OBTIENE LOS DATOS DEL USUARIO
        localStorage.setItem("fbData",JSON.stringify({
            token:response.token,
            email:response.email,
            name:response.name,
            picture:response.picture.data.url,
            social:'fb'
        }));
        
        //PASA EL LOGEO A TRUE Y POR FACEBOOK
        this.setState({isLogged:true})
    }

    onFailure(error){
        console.log(error);
    }

    render(){
        //VERIFICA SI ENCUENTRA LOGEADO
        if(this.state.isLogged){
            return(<Redirect to="/home/" />);
        }
        return(
            <div className="Login">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header justify-content-center">
                                Inice sesion con facebook
                            </div>
                            <div className="card-body">
                                <FacebookLogin
                                appId="279869553004751"
                                autoLoad={false}
                                fields="name,email,picture.width(120)"
                                callback={this.responseFacebook}
                                onFailure={this.onFailure}
                                textButton="Facebook"
                                cssClass="btn btn-primary form-control"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;