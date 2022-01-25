import axios from 'axios';
import React,{useEffect,useState} from 'react';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

export default function Edit(props){

    const [nombre, setnombre]= useState('');
    const [apellido, setapellido]= useState('');
    const [edad, setedad]= useState('');
    const [email, setemail]= useState('');
    const [msj, setmsj]= useState('');
    const history = useHistory();
    const Swal = require('sweetalert2')

    const manejarCambioNombre= (e) =>{
        setnombre(e.target.value)
    }

    const manejarCambioApellido= (e) =>{
        setapellido(e.target.value)
    }

    const manejarCambioEdad= (e) =>{
        setedad(e.target.value)
    }

    const manejarCambioEmail= (e) =>{
        setemail(e.target.value)
    }

    const manejarUpdate= () =>{
        const data={
            nombre:nombre,
            apellido:apellido,
            edad:edad,
            email:email
        }
        console.log(data)
        const url='http://127.0.0.1:8000/api/update/'+ props.match.params.id

        axios.put(url,data)
        .then(response=>{
            Swal.fire({
                icon: 'success',
                title: 'Registro actualizado correctamente',
                showConfirmButton: false,
                timer: 1500
              })
            history.push("/usuario");
        }).catch((err)=>{
            console.log(err)
            Swal.fire({
                icon: 'error',
                title: 'Ocurrio un error',
                showConfirmButton: false,
                timer: 1500
              })
            history.push("/usuario");
        })
    }


    useEffect(()=>{
        let url='http://127.0.0.1:8000/api/show/'+ props.match.params.id
        console.log(url)
        axios.get(url)
        .then(response=>{
            setnombre(response.data.nombre)
            setapellido(response.data.apellido)
            setedad(response.data.edad)
            setemail(response.data.email)
        })
    },[]);

    return(
        <div>
            <h1>Modificar Usuario</h1>
            <hr/>

            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        value={nombre}
                        onChange={manejarCambioNombre}
                        placeholder="Ingresar nombre"
                    
                    />

                    <label className="form-label">Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        id="apellido"
                        value={apellido}
                        onChange={manejarCambioApellido}
                        placeholder="Ingresar apellido"
                    
                    />

                    <label className="form-label">Edad</label>
                    <input
                        type="int"
                        className="form-control"
                        id="edad"
                        value={edad}
                        onChange={manejarCambioEdad}
                        placeholder="Ingresar edad"
                    
                    />

                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={manejarCambioEmail}
                        placeholder="Ingresar email"
                    
                    />

                </div>
                <button type="button" onClick={manejarUpdate} className="btn btn-primary">Actualizar</button>
            </form>
        </div>
    )
}

