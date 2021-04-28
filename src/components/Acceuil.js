
import React from "react";
import { Link } from "react-router-dom";



function Acceuil() {
return(
    <div>
        
        <Link to = "./AddLogement" >
            <button className = "bouton3" type="add" > Ajouter</button>
        </Link>
        
    </div>
  
    );

}
export default Acceuil;