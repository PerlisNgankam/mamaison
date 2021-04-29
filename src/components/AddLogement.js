//import { Alert } from "antd";
import React from "react";
//import logement from "./Item";
import axios from "axios";

import menu from './AddMenu'
//import AddLogement from './AddLogement.css';
import "./AddLogement.css";
//import { Button } from "antd";

class AddLogement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabimg: [],
      cloggimageUpload: [],

      Clogg: {
        roomName: " Appartement123456785",
        livingRoomNumber: 1,
        bedroomNumber: 3,
        showerNumber: 2,
        cookedNumber: 1,
        rentCost: 100000,
        roomStateName: "disponible",
        roomCategory: {},
        roomDaCreated: "2021-04-15T09:42:31.173Z",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    const formData = new FormData();

    formData.append("file", this.state.tabimg[0]);
    //replace this with your upload preset name

    formData.append("upload_preset", "ml_default");

    //   const options ={
    //       method: 'POST',
    //       body: formData,
    //   };
    //enreristrement de l'image sur cloudinary
    axios.post(`https://api.cloudinary.com/v1_1/dfaah1nvg/image/upload`, formData)
      .then((res) => {
          console.log(res.data);
          let cloggtmp = this.state.Clogg;
          cloggtmp["roomStateName"] = res.data.url;
          this.addRom(cloggtmp);
          this.setState({
              clogg: cloggtmp,
          });
      })
      .catch((erreur) => {
        //On traite ici les erreurs éventuellement survenues
        alert("serveur indisponible");
        console.log(erreur);
      });

    e.preventDefault();

    e.preventDefault();

    console.log(this.state.Clogg);
  };

  handleChange = (e) => {
      let Cloggtmp = this.state.Clogg;
      Cloggtmp[e.target.name] = e.target.value;
      this.setState({
      Clogg: Cloggtmp,
      });
  };

  imagehandleChange = (event) => {
    let imagetemp = this.state.tabimg;
    // let cloggimageUploadtemp = this.state.cloggimageupload

        if (this.state.tabimg.length < 4) {
            imagetemp.push(event.target.files[0]);

          //cloggimageUploadtemp.push(event.target.files[0])
          // imagetemp[event.target.file] =event.target.value

          this.setState({
            tabimg: imagetemp,
            //cloggimageupload:cloggimageUploadtemp
          });
          //console.Clog
        } else {
            alert("impossible d'inserer une image");
        }
      };

  handledelete = (index) => {
    let imagetemp = this.state.tabimg;
    imagetemp.splice(index, 1);
    this.setState({
      tabimg: imagetemp,
    });
  };

  componentDidMount() {
    axios
      .get(`https://mamaison.arenaplaza.site/api/Room/GetRoomList`)
      .then((res) => {
        const logementInfos = res.data;
        console.log(logementInfos);
        //this.setState({ persons });
      })
      .catch((erreur) => {
        //on trite ici les erreurs eventuelles survenues
      });
  }

  //permet de creer une image dans cloudinary
  addRom(room) {
    axios
      .post(`https://mamaison.arenaplaza.site/api/Room/CreatedRoom`, room)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        //On traite la reponse obtenue
      })
      .catch((erreur) => {
        //On traite ici les erreurs éventuellement survenues
        //alert("serveur indisponible")
        console.log(erreur);
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="center"> Ajouter un logement de votre choix logement</h1>
        <div className ="main">
          <div className = "main-center">
            
            <div>
              <form id ="login-form"  className="" method="post" action="#" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    
                    <label for="username" className="text-info" htmlFor="selectOption"><strong> Type de logement: </strong></label>
                    <select id="username" name="selectOption"  className="form-control"
                          value={this.state.Clogg["roomName"]}
                          name="roomName"
                          onChange={this.handleChange}>
                          <option> Appartement </option> 
                          <option> Duplex10 </option>
                          <option> Villa </option>
                    </select>
                </div>
                   
                <div  className="form-group">
                    <label for="username" className="text-info"  htmlFor="bedroom"> Nombre de chambre: </label>
                      <select name="name" id="username" className ="form-control"
                          value={this.state.Clogg["bedroomNumber"]}
                          name="bedroomNumber"
                          onChange={this.handleChange}>
                          <option> 1 </option> 
                          <option> 2 </option> 
                          <option> 3 </option>{" "}
                          <option> 4 </option>
                      </select>{" "}
                </div> 
                <div  className="form-group">
                    <label for="username" className="text-info" htmlFor="shownumber">Nombre de douche: </label>
                      <select name="shownumber"  id="username" className ="form-control"
                          value={this.state.Clogg["showerNumber"]}  name="showerNumber"
                          onChange={this.handleChange}>
                          <option> 1 </option> 
                          <option> 2 </option> 
                          <option> 3 </option>{" "}
                          <option> 4 </option>
                      </select>
                </div>
                <div  className="form-group">
                      <label for="username" className="text-info">Nombre de cuisine: </label>
                        <select  id="username" className ="form-control"
                            value={this.state.Clogg["cookedNumber"]} name=" cookedNumber" onChange={this.handleChange} >
                            <option> 1 </option> 
                            <option> 2 </option> 
                            <option> 3 </option>{" "}
                            <option> 4 </option>{" "}
                        </select>{" "}
                </div>  
                <div  className="form-group">
                  <label for="username" className="text-info">
                    Nombre de salon:
                      <select id="username" className ="form-control"
                        value={this.state.Clogg["livingRoomNumber"]}    name="livingRoomNumber"  onChange={this.handleChange}   >
                        <option> 1 </option>
                        <option> 2 </option>
                        <option> 3 </option>
                      </select>{" "}
                  </label>{" "}
                </div>
                <div  className="form-group">
                  <label for="username" className="text-info">
                    Loyer:
                    <input  id="username" className ="form-control" type="number" min="50000" name="rentCost" max="2000000" onChange={this.handleChange}/>
                  </label>{" "}
                </div>
                <div  className="form-group">
                  <label for="username" className="text-info">
                    Etat du logement:
                      <select  id="username" className ="form-control" value={this.state.Clogg["roomStateName"]} name="roomStateName" onChange={this.handleChange}>
                        <option> Disponible </option> 
                        <option> Occupe </option>{" "}
                        <option> A revoir </option>
                      </select>
                  </label>{" "}
                </div>
                <div  className="form-group">
                      <button type="submit" className="btn btn-info btn-md"> Envoyer </button> <br></br>
                </div>
                <div className="form-group">
                  <label for="username" className="text-info"> inserer les images </label>
                  <input type="file"  onChange={this.imagehandleChange} name="mesImages" disabled={this.state.tabimg.length === 4}/>{" "}
                  
                  {this.state.tabimg.map((url, index) => (
                
           
                    <div className="form-group">
                        <img src={URL.createObjectURL(url)} alt=" "></img>
                        <button type="connect" className="btn btn-info btn-md" onClick={this.handledelete}> supprimer </button>
                    </div>
                     
                  ))}
                </div> 
                  {" "}
              
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddLogement;
 