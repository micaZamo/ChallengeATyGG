import React ,{useState}  from 'react'
import Swal from 'sweetalert2'
import { useHistory,Link } from "react-router-dom";
import "../../css/app.css";


export default function Create(){
    const [msj, setmsj]= useState('');
    const Swal = require('sweetalert2')
    const history = useHistory();
    const [nombreinput,setnombre]=useState("");
    const [apellidoinput,setapellido]=useState("");
    const [edadinput,setedad]=useState("");
    const [emailinput,setemail]=useState("");
    const [contraseñainput,setcontraseña]=useState("");
    const [contraseña2input,setcontraseña2]=useState("");


    const create= () =>{
        const expresiones = {
            nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
            contraseña: /^.{4,8}$/, // 4 a 8 digitos.
            email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            edad: /^\d{2,3}$/ // digito de 2o 3 cifras.
        }
        const data={
            nombre:nombre.value,
            apellido:apellido.value,
            edad:edad.value,
            email:email.value,
            contraseña:contraseña.value,
            contraseña2:contraseña2.value
        }
        
        if(expresiones.nombre.test(data.nombre)===false){
            setnombre("El nombre no puede estar vacio y solo debe contener letras y/o espacios ")
        }else{
            if(expresiones.nombre.test(data.apellido)===false){
                setapellido("El apellido no puede estar vacio y solo debe contener letras y/o espacios ")
            }else{
                if(expresiones.edad.test(data.edad)==false){
                    setedad("Debe ingresar una edad valida")
                }else{
                    if(expresiones.email.test(data.email)===false){
                        setemail("Ingrese un correo valido")
                    }else{
                        if(expresiones.contraseña.test(data.contraseña)===false){
                            setcontraseña("La contraseña debe contener entre 4 y 8 digitos")
                        } else{
                            if(data.contraseña !== data.contraseña2){
                                setcontraseña2("Las contraseñas no coinciden")
                            }else{
                                const url='http://127.0.0.1:8000/api/registrar/'
                                axios.post(url,data).then(response=>{
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Registro creado correctamente',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    history.push("/");
                                    
                                }).catch(function (error) {
                                    console.log(error);
                                    setmsj("Ocurrio un error intente nuevamente")
                                });
                            }
                        }
                    }
                }
            }
        }
    }
        

    return (
        <div className='divform'>
            <h1>Crear Usuario</h1>
            <hr/>
            <h2>{msj}</h2>
            <div>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            placeholder="Ingresar nombre"
                            required
                        />
                        <p className='msjerror'>{nombreinput}</p>

                        <label className="form-label">Apellido</label>
                        <input
                            type="text"
                            className="form-control"
                            id="apellido"
                            placeholder="Ingresar apellido"
                            required
                        />
                        <p className='msjerror'>{apellidoinput}</p>

                        <label className="form-label">Edad</label>
                        <input
                            type="int"
                            className="form-control"
                            id="edad"
                            placeholder="Ingresar edad"
                            required
                        />
                        <p className='msjerror'>{edadinput}</p>

                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Ingresar email"
                            required
                        />
                        <p className='msjerror'>{emailinput}</p>

                        <label className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="contraseña"
                            placeholder="Ingresar contraseña"
                            required
                        />
                        <p className='msjerror'>{contraseñainput}</p>

                        <label className="form-label">Repetir Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="contraseña2"
                            placeholder="Repetir contraseña"
                            required
                        />
                        <p className='msjerror'>{contraseña2input}</p>

                    </div>
                    <button type="button" onClick={create} className="btn btn-primary miboton">Guardar</button>
                    <Link to={"/"} className="btn btn-danger btn-block miboton">Cancelar</Link>
                </form>
            </div>
        </div>
    )

}