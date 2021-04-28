import React from "react";
import './Signup.css';
import axios from "axios";
//import locale from "antd/lib/date-picker/locale/en_US";

class Signup extends React.Component {
    constructor(props){ 
    super(props);

        this.state = {
             
            user:{
            userLogin:"",
            userPassWord:"",
            agentName:"",
            agentEmail:"",
            image:""
        }
        }
    }

    handleSubmit = (event) =>{

        event.preventDefault()
        console.log(this.state.user);
       

        axios.post(`https://mamaison.arenaplaza.site/api/User/CreatedUser`, this.state.user)
        .then(res => {
            
            
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
        <div class="container">
        <div id="login-row1" className="row justify-content-md-center align-items-center">    
                <div id="login-column1" className="col-md-4">
                    <div id="login-box1" className="col-md-12">
                            <form id="login-form1" className="form" action="" method="post">
                                <div className="form-group">
                                    <label for="username" className="text-info">
                                        <strong>UserLogin:</strong>
                                        <input type = "text" name="username" id="username" className ="form-control" onChange = {this.handleChange} name="userLogin"></input> 
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label for="password" className="text-info">
                                        <strong>UserPassWord: </strong>
                                        <input type = "text"className="form-control"  onChange = {this.handleChange} name="userPassWord"></input>
                                    </label>
                                </div>
                                <div className="form-group"> 
                                    <label for="username" className="text-info">
                                        <strong> AgentName:</strong>
                                        <input type = "text" className="form-control"onChange = {this.handleChange} name="agentName"></input>
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label for="username" className="text-info">
                                    <strong>AgentEmail:</strong>
                                    <input type = "text" className="form-control" onChange = {this.handleChange} name="agentEmail"></input>
                                    </label>
                                </div> 
                                <div> 
                                    <button   type="submit" className="btn btn-info btn-md"  onClick = {this.handleSubmit}>Envoyer</button> <br></br>
                                </div>              

                            </form>
                        
                    </div>
                </div>  
            </div>
        </div>
    </div>


);

}
}
export default Signup;