//import { Alert } from "antd";
import React from "react";
//import logement from "./Item";
import axios from "axios";
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
        roomDaCreated: "2021-04-15T09:42:31.173Z"
      }
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
    axios
      .post(`https://api.cloudinary.com/v1_1/dfaah1nvg/image/upload`, formData)
      .then((res) => {
        console.log(res.data);
        let cloggtmp = this.state.Clogg;
        cloggtmp["roomStateName"] = res.data.url;
        this.addRom(cloggtmp);
        this.setState({
          clogg: cloggtmp
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
      Clogg: Cloggtmp
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
        tabimg: imagetemp
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
      tabimg: imagetemp
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
      <div className="AddLogement">
        <section>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                Type de logement:
                <select
                  value={this.state.Clogg["roomName"]}
                  name="roomName"
                  onChange={this.handleChange}
                >
                  <option> Appartement </option> <option> Duplex10 </option>{" "}
                  <option> Villa </option>
                </select>{" "}
              </label>{" "}
            </div>{" "}
            <br></br>
            <div>
              <label>
                Nombre de chambre:
                <select
                  value={this.state.Clogg["bedroomNumber"]}
                  name="bedroomNumber"
                  onChange={this.handleChange}
                >
                  <option> 1 </option> <option> 2 </option> <option> 3 </option>{" "}
                  <option> 4 </option>
                </select>{" "}
              </label>{" "}
            </div>{" "}
            <br></br>
            <div>
              <label>
                Nombre de douche:
                <select
                  value={this.state.Clogg["showerNumber"]}
                  name="showerNumber"
                  onChange={this.handleChange}
                >
                  <option> 1 </option> <option> 2 </option> <option> 3 </option>{" "}
                  <option> 4 </option>
                </select>{" "}
              </label>{" "}
            </div>
            <br></br>
            <div>
              <label>
                Nombre de cuisine:
                <select
                  value={this.state.Clogg[" cookedNumber"]}
                  name=" cookedNumber"
                  onChange={this.handleChange}
                >
                  <option> 1 </option> <option> 2 </option> <option> 3 </option>{" "}
                  <option> 4 </option>{" "}
                </select>{" "}
              </label>{" "}
            </div>{" "}
            <br> </br>
            <div>
              <label>
                Nombre de salon:
                <select
                  value={this.state.Clogg["livingRoomNumber"]}
                  name="livingRoomNumber"
                  onChange={this.handleChange}
                >
                  <option> 1 </option> <option> 2 </option> <option> 3 </option>
                </select>{" "}
              </label>{" "}
            </div>{" "}
            <br></br>
            <div>
              <label>
                Loyer:
                <input
                  type="number"
                  min="50000"
                  name="rentCost"
                  max="2000000"
                  onChange={this.handleChange}
                />
              </label>{" "}
            </div>{" "}
            <br> </br>
            <div>
              <label>
                Etat du logement:
                <select
                  value={this.state.Clogg["roomStateName"]}
                  name="roomStateName"
                  onChange={this.handleChange}
                >
                  <option> Disponible </option> <option> Occupe </option>{" "}
                  <option> A revoir </option>
                </select>{" "}
              </label>{" "}
            </div>
            <br></br>
            <button type="submit"> Envoyer </button> <br></br>
            <div>
              <label> inserer les images </label>
              <input
                type="file"
                onChange={this.imagehandleChange}
                name="mesImages"
                disabled={this.state.tabimg.length === 4}
              />{" "}
              <br></br>{" "}
              {this.state.tabimg.map((url, index) => (
                <div>
                  <img src={URL.createObjectURL(url)} alt=" " width="200px" />{" "}
                  <br> </br>
                  <button type="delete" onClick={this.handledelete}>
                    {" "}
                    suprimer{" "}
                  </button>
                </div>
              ))}{" "}
            </div>
          </form>
        </section>
      </div>
    );
  }
}

export default AddLogement;
