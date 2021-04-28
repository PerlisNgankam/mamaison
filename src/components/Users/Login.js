import React from "react";
//import './Signup.css';
import axios from "axios";
import './Login.css'


class Login extends React.Component {
    constructor(props){ 
    super(props);

        this.state = {
            user:
            {
                userLogin :"",
                userPassWord :"",
            }
        }
     }
    handleSubmit = (event) =>{

        event.preventDefault()
        console.log(this.state.user);

        axios.post(`https://mamaison.arenaplaza.site/api/User/Authentificate`, this.state.user)
        .then(res => {
            const user =res.data
            //permet d'enregistrer notre token que le navigateur nous a generer lorsque nous nous sommes connecte
            //et lorsq
            localStorage.setItem('token', user.userTokeng);
            console.log(localStorage.getItem('token'))

          console.log(res.data);
          })

         .catch(erreur =>{
          //On traite ici les erreurs éventuellement survenues
          alert("serveur indisponible")
          console.log(erreur);
         });
    }
    

    handleChange = (event)=>{

        let usertmp = this.state.user
        usertmp[event.target.name] = event.target.value
        this.setState ({user:usertmp});

    };
     

 render(){
     return(

    <div id="login">
        <h3 className="text-center text-black pt-5">Formulaire de connexion</h3>
        <div className="container">
        <div id="login-row" className="row justify-content-md-center align-items-center">    
        <div id="login-column" className="col-md-6">
        <div id="login-box" className="col-md-12">

                <form id="login-form" className="form" action="" method="post">
                    <div className="form-group">
                        <label for="username" className="text-info">
                            <strong>UserLogin:</strong>
                            <input type = "text" name="username" id="username" className ="form-control" onChange = {this.handleChange} ></input> 

                        </label>
                    </div>
                        <br></br>

                    <div className="form-group">
                        <label for="password" className="text-info">
                            <strong>UserPasWord: </strong>

                        <input className="form-control" type = "text" onChange = {this.handleChange} name="userPassWord"></input>
                        
                        </label>
                    </div>
                    <div className="form-group">
                        <button  type="connect" className="btn btn-info btn-md"  onClick = {this.handleSubmit} >Se connecter</button> <br></br>
                    </div>
                    
                </form>

    </div>
    </div> 
    </div> 
    </div>  
    </div>
      )
     }
 }
     

 export default Login; 