import axios from 'axios';
import React,{useEffect} from 'react';
import { useHistory,Link } from "react-router-dom";
import Swal from 'sweetalert2'
import '../../../css/app.css';


export default function Delete(props){

    const history = useHistory();
    const Swal = require('sweetalert2')

    const manejardelete= () =>{
        const url='http://127.0.0.1:8000/api/delete/'+ props.match.params.id

        axios.delete(url)
        .then(response=>{
            Swal.fire({
                icon: 'success',
                title: 'Registro borrado correctamente',
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
        <div class="text-center midiv" >
            <h2>Desea eliminar el usuario?</h2>
            <button type="button" onClick={manejardelete} className="btn btn-primary btn-block miboton">Confirmar</button>
            <Link to={"/usuario/"} className="btn btn-danger btn-block miboton">Cancelar</Link>
        </div>
    )
}

