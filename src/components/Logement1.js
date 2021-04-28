import React from "react";
import axios from "axios";
import logement from './Item';
import { Pagination } from "antd";
import "antd/dist/antd.css";
//import logo12 from './public/logo12';
import {connect} from "react-redux";
import Logement from './Logement'
import { Link } from "react-router-dom";

class Logg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            eltPerPage: 4,
            logement: logement,
        };

    }

    handlePageChange = value => {
        this.setState({
            currentPage: value

        });
    };

    handleSelectChange = e => {
        this.setState({
            eltPerPage: e.target.value,
            currentPage: 1
        });
    };

     componentDidMount() {
        axios.get(`https://mamaison.arenaplaza.site/api/Room/GetRoomList`)
            .then(res => {
                const total = res.data.length;
                const ListeLogement=res.data.slice(total-20,total)
                console.log( ListeLogement)
                this.setState({logement: ListeLogement});
              
            });
    } 
           
    render() {

        const {
            currentPage,
            eltPerPage,
            logement
        } = this.state;

        var indexOfLastLogement = currentPage * eltPerPage;
        var indexOfFirstLogement = indexOfLastLogement - eltPerPage;
        console.log(this.props);

        return (


            <div>
                <div>
                {/* <img src={"https://res.cloudinary.com/lepiston/image/fetch/h_110/https://res.cloudinary.com/serpoma/image/upload/v1618565247/image_test.jpg"}/> */}
                </div>

                <div>
                    <h1>Bienvenu sur notre site de location de logements!</h1>

                    {/* { let logements = logement
                    logement.sclice (logements.length-20, logements.length)
                     } */}

                    {logement.slice(indexOfFirstLogement, indexOfLastLogement).map((params, index) =>
                        <Logement house={params} key={index} isFavoritelog ={this.props.favoritesLog.findIndex(item=>item.id===params.id)!==-1}/>
                        )

                    }

                </div>

                <div>
                    <Pagination
                        defaultCurrent={this.state.currentPage}
                        defaultPageSize={this.state.eltPerPage} //default size of page
                        pageSize={this.state.eltPerPage}
                        onChange={this.handlePageChange}
                        total={/*loadingOk && */logement.length > 0 && logement.length} //total number of card data available

                    />

                </div>
                <div>
                    <select value={this.state.eltPerPage} onChange={this.handleSelectChange} >
                        <option> 4</option>
                        <option> 5</option>
                        <option> 6</option>

                    </select>
                </div>
            </div>

        );


    }
}

        const mapStateToProps = state => {
            return {
            favoritesLog:state.favoritesLog
            };
        };


  export default connect(mapStateToProps)(Logg);

