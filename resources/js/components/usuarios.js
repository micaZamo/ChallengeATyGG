import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/app.css";

export default function Usuarios() {
    const [datos, setdatos] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/usuario").then((response) => {
            setdatos(response.data);
        });
    }, []);

    return (
        <div>
            <table class="table table-secondary">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Email</th>
                        <th scope="col">Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map((row) => {
                        return (
                            <tr key={row.id}>
                                <th scope="row">{row.id}</th>
                                <td>{row.nombre}</td>
                                <td>{row.apellido}</td>
                                <td>{row.edad}</td>
                                <td>{row.email}</td>
                                <td>
                                    <Link
                                        to={"/edit/" + row.id}
                                        class="btn btn-success miboton"
                                    >
                                        Editar
                                    </Link>
                                    <Link
                                        to={"/delete/" + row.id}
                                        class="btn btn-danger miboton"
                                    >
                                        Borrar
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
