import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../../css/app.css";

function Home() {
    const refusuario = useRef(null);
    const refcontraseña = useRef(null);
    const [msjerror, setmsj] = useState("");
    const history = useHistory();

    const handlelogin = () => {
        const data = {
            usuario: refusuario.current.value,
            contraseña: refcontraseña.current.value,
        };
        console.log(data);
        let contraseña = data.contraseña;
        let usuario = data.usuario;

        const url =
            "http://127.0.0.1:8000/api/login?usuario=" +
            usuario +
            "&contraseña=" +
            contraseña;

        axios
            .get(url)
            .then((response) => {
                console.log(response.data.mensaje);
                if (response.data.mensaje === "Validado") {
                    history.push("/usuario");
                } else {
                    setmsj("Usuario y/o contraseña incorrecta");
                    refusuario.current.value = "";
                    refcontraseña.current.value = "";
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="login">
            <div className="row ">
                <div className="col-sm-4 offset-4 mt-5">
                    <div className="card pt-5">
                        <div className="card-header text-center">
                            <h3>Bienvenidos</h3>
                        </div>
                        <div className="card-body">
                            <div className="input-group  mb-3">
                                <input
                                    id="usu"
                                    type="email"
                                    className="form-control"
                                    placeholder="Ingrese su email"
                                    ref={refusuario}
                                />
                            </div>
                            <div className="input-group  mb-3">
                                <input
                                    id="contra"
                                    type="password"
                                    className="form-control"
                                    placeholder="Ingrese su contraseña"
                                    ref={refcontraseña}
                                />
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    onClick={handlelogin}
                                    className="btn btn-lg btn-primary btn-block"
                                >
                                    {" "}
                                    Ingresar
                                </button>
                            </div>
                            <p class="msjerror">{msjerror}</p>
                            <div className="text-center">
                                <Link to={"/create/"} class="colorregister">
                                    Registrarme
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
