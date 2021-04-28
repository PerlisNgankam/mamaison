
//import { render } from "@testing-library/react";
import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";



class Logement extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            isFavoritelog: false,
           total:this.props.list
            
            
        }
    }

    handledelete = (e, id) => {
        e.preventDefault()
        let set ={Headers:{"Acces-Control-Allow-Origin":"*"}}
        let imagetemp = this.state.tabimg;
        imagetemp.splice(index, 1);
        console.log(imagetemp)
        this.setState({
          tabimg: imagetemp
        });
        axios.delete("https://mamaison.arenaplaza.site/api/Room/" + id, )
        .then(res => {
           console.log(res.data)
           console.log()

                }) 
      };
      
      cont recup = this.state.props.total.fetch(item=)
 
     
       
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
                <div>
                    {/* <img src={"https://res.cloudinary.com/dfaah1nvg/image/fetch/h_120/https://res.cloudinary.com/dfaah1nvg/image/upload/v1618567394/samples/react%20images/logo12_jpxr5p.jpg"}/> */}
                    <div>
                        <Link to={"./LoggDetail/" + params.id}> 
                        {/* l'image qu'on envoi dans notre serveur */}
                        <img src={params.roomStateName} alt="ma srcreen" /> 
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
                        <button className = "bouton" type="add" > Modifier</button>
                    </Link>
                        <button className = "bouton" type="delete"   onClick={(e)=>this.handledelete(e,index,params,id)}> Supprimer</button>
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

