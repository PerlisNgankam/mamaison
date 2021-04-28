//import { logDOM } from "@testing-library/dom";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
//import logo12 from './public/logo12';
//import logo12 from './public/logo12';



class LoggDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            logementInfos:{},
            Clog:{ 
                id: 1,
                type :"Villa",
                nbresalon : 3,
                nbrechambre : 4,
                nbredouche : 3,
                nbrecuisine: 2,
                etat : "Disponibler",
                Prix : 116000,
            
           },
           isFavoritelog: false,
           id: this.props.match.params.id
        };
    }

            
    handleFavoritelog=(event) =>{
        let isfav = !this.state.isFavoritelog
        this.setState({
          isFavoritelog: isfav
        });
        const action = { type: "TOGGLE_FAVORITE", value: this.state.logementInfos };
        this.props.dispatch(action);
        console.log(isfav);
        console.log(this.props.favoritesLog)


         }

     



componentDidMount(){
   
     const { match: {params}} = this.props;
     console.log(this.state.id);

    let id = params.id;
    axios.get("https://mamaison.arenaplaza.site/api/Room/GetRoomDetail/"+id)
    .then(res => {
        const logementInfos = res.data
        console.log(logementInfos)
        this.setState({ logementInfos: logementInfos });


    })  
}

// let isfav = !isFavoriteLog
        // this.setState({
        //   isFavoriteLog: isfav
        // });
        // //console.log(this.state.logement[index])
        // const action = { type: "TOGGLE_FAVORITE", value: this.props.house };
        // this.props.dispatch(action);
     

    render() {

        

        return (

            <div>
         {/* <img src= { "https://res.cloudinary.com/dfaah1nvg/image/upload/v1618567394/samples/react%20images/logo12_jpxr5p.jpg" }alt = " " />  */}
               

                <div>
         <label className = "Logement">
             {/* <h3>id: {this.state.logementInfos.id}</h3> */}
             <h3>Type :{this.state.logementInfos.roomName}</h3>
             <h3>Salon :{this.state.logementInfos.livingRoomNumber}</h3>
             <h3>Chambre :{this.state.logementInfos.bedroomNumber}</h3>
             <h3>Douche:{this.state.logementInfos.showerNumber}</h3>
             <h3>Cuisine :{this.state.logementInfos.cookedNumber}</h3>
             {/* <h3>Etat:{this.state.logementInfos.etat}</h3> */}
             <h3>Prix :{this.state.logementInfos.rentCost}</h3>
             <div onClick = {this.handleFavoritelog}>
             <img src ={this.props.favoritesLog.findIndex(item => item.id === this.state.logementInfos.id)===-1?"/logo16.png":"/ic_favorite.png" }  alt = "" width = "25px" height ="25px"/>
             </div>

         </label>
                </div>


            </div>


        )
    }


}
const mapStateToProps = state => {
    return {
      favoritesLog:state.favoritesLog
    };
  };

export default connect(mapStateToProps)(LoggDetail);

//export default LoggDetail;
