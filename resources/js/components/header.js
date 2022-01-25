import React from 'react';
import{
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './about';
import Create from './create';
import Delete from './datos/delete';
import Edit from './datos/edit';
import Usuarios from './usuarios';
import Home from './home'

export default function Header(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/usuario">Usuarios</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/create">Nuevo</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>

                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/usuario' component={Usuarios}/>
                    <Route exact path='/edit/:id' component={Edit}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/create' component={Create}/>
                    <Route exact path='/delete/:id' component={Delete}/>
                </Switch>
        </div>
    )

}