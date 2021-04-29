//import { render } from "@testing-library/react";
import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
//import axios from "axios";



class Logement extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            isFavoritelog: false,
           //total:this.props.list
            
            
        }
    }

    // handledelete = (e, id) => {
    
        
    //     axios.delete("https://mamaison.arenaplaza.site/api/Room/" + id,)
    //     .then(res => {
    //         console.log(res)
    //        console.log(res.data)
    //         }) 
    //             const recup = this.state.total.filter(item=>item.id !==id)
    //             this.setState({total:recup});
    //                 console.log(this.state.liste.total.length)
    //                 e.preventDefault()  
    //         };
      
           
       
    handleFavoritelog=(event) =>{
        let isfav = !this.state.isFavoriteLog
            this.setState({
            isFavoriteLog: isfav
        });
        //console.log(this.state.logement[index])
        const action = { type: "TOGGLE_FAVORITE", value: this.props.house };
        this.props.dispatch(action);
         }


    displayfavoritelog=()=>{
        const favoriteLogIndex = this.props.favoritesLog.findIndex(item => item.id === this.props.house.id);
            if (favoriteLogIndex === -1){
                return (
                    <img src ="/logo16.png" onClick = {this.handleFavoritelog} alt = "" width = "25px" height ="25px"/>
                )
            } else{
                return(
                    <img src ="/ic_favorite.png" onClick = {this.handleFavoritelog} alt = "" width = "25px" height ="25px"/>
                )
            }
    }

        render(){

            let params = this.props.house

            return(
                <div className= "logcontainer" >
                    {/* <img src={"https://res.cloudinary.com/dfaah1nvg/image/fetch/h_120/https://res.cloudinary.com/dfaah1nvg/image/upload/v1618567394/samples/react%20images/logo12_jpxr5p.jpg"}/> */}
                    <div>
                        <Link to={"./LoggDetail/" + params.id}> 
                        {/* l'image qu'on envoi dans notre serveur */}
                        <img className = "logimage" width = "200"  height = "160px" src={params.roomStateName} alt="ma srcreen" /> 
                        </Link>  
                    </div>

                        <br></br>
                        <button className="button"> {params.etat} </button>
                        <h3> Type: {params.roomName}</h3>
                        <h3> Salon: {params.livingRoomNumber}</h3>
                        <h3> Chambre: {params.bedroomNumber}</h3>
                        <h3> Douccppche: {params.showerNumber} </h3>
                        <h3> Cuisine: {params.cookedNumber} </h3>
                        {this.displayfavoritelog()}
                
                    <Link to = "./AddLogement" >
                        <button className = "bouton2" type="add" > Modifier</button>
                    </Link>
                        <button className = "bouton2" type="delete" onClick={this.props.handlesupprime()}> Supprimer</button>
                </div>

            ); 
         }
 }
  
 

     const mapStateToProps = state => {
         return {
        favoritesLog:state.favoritesLog
        }
    } 
 

export default connect(mapStateToProps)(Logement);