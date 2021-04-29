//import { render } from "@testing-library/react";
import AddLogement from './AddLogement';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logg from './Logg';
import Acceuil from './Acceuil';
import LoggDetail from './LoggDetail';
import Signup from './Users/Signup';
import Login from './Users/Login';
import Logement1 from './Logement1';




function Main() {

    return (
        <div className="Main">
            <BrowserRouter>

                <Switch>
                    <Route exact path="/">
                        <Acceuil />
                    </Route>
                    <Route path="/Logg">
                        <Logg />
                    </Route>
                    <Route path="/LoggDetail/:id" component={LoggDetail}/>
                    <Route path="/AddLogement/:id" component={AddLogement}/>

                    <Route path="/AddLogement">
                        <AddLogement />
                    </Route>

                    <Route path="/Signup">
                        <Signup />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>

                    <Route path="/Logement1">
                        <Logement1 />
                    </Route>

                </Switch>

            </BrowserRouter>
        </div>

    );


}

export default Main;
